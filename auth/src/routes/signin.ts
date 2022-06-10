import  express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { BadRequestError } from '../errors/bad-request-error';
import { validateRequest } from '../middlewares/validate-request';
import { Password } from '../services/password';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';
const router = express.Router();

router.post('/api/users/signin', [
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').trim().notEmpty().withMessage('You must provide a password')
],
validateRequest,
async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw new BadRequestError('Invalid credentials');
  }

  const passwordMatch = Password.comparePassword(user.password, password);
  if (!passwordMatch){
    throw new BadRequestError('Invalid credentials');
  }

  const userJwt = await jwt.sign({ id: user.id, email: user.email }, process.env.JWT_KEY!);
  req.session = { jwt: userJwt };

  res.status(200).send(user);
});

export { router as signinRouter}


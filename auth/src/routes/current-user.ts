import  express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
const router = express.Router();

router.get('/api/users/currentuser', (req: Request, res: Response) => {
  if (!req.session?.jwt) {
    return res.send({ currentUser: null }); 
  }

  try {
    const payload = jwt.verify(req.session?.jwt, process.env.JWT_KEY!);
    res.send({ currrentUser: payload });
  } catch (err) {
    res.send({currentUser: null });
  }
});

export { router as currentUserRouter}
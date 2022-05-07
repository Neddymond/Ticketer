import  express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator'
const router = express.Router();

router.get('/api/users/currentuser', (req: Request, res: Response) => {
  res.send({});
});

export { router as currentUserRouter}
import  express, { Router } from 'express';
const router = express.Router();

router.post('api/users/signin', (req, res) => {
  res.send('Signed in successfully.')
});

export { router as signinRouter}


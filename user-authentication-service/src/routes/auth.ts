import {Router} from 'express';
import loginUser from '../controllers/loginUser.ts';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;

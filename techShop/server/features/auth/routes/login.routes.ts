import { Router } from 'express';
import { loginController } from '../controller/login.controller';

const LoginRouter = Router();

// Маршрут для логина: POST /api/login
LoginRouter.post('/login', loginController);

export default LoginRouter;
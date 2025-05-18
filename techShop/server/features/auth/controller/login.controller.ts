import { Response } from 'express';
import { login as loginService } from '../service/login.service';
import { TypedRequestBody } from '../../../shared/types/express';

// Тип запроса для логина
interface LoginBody {
  email: string;
  password: string;
}

/**
 * Контроллер для обработки POST /api/login
 */
export async function loginController(
  req: TypedRequestBody<LoginBody>,
  res: Response
): Promise<void> {
  try {
    const { email, password } = req.body;

    const token = await loginService(email, password);

    if (!token) {
        res.status(401).json({ message: 'Invalid email or password' });
    }   

    res.json({
      message: 'Login successful',
      token: token,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
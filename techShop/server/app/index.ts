import express from 'express';
import cors from 'cors';

import reviewRoutes from '../entities/review/routes/review.routes';
import { errorHandler } from '../shared/middleware/errorHandler';
import registrationRoutes from '../features/auth/routes/registration.routes';
import LoginRouter from '../features/auth/routes/login.routes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Роуты
app.use('/api/reviews', reviewRoutes);

// Middleware - глобальная обработка ошибок 
app.use(errorHandler);

// Роуты
app.use('/api/reviews', reviewRoutes);
app.use('api/registation', registrationRoutes)

// Подключаем маршруты авторизации под префиксом /api
app.use('/api', LoginRouter);

export default app;

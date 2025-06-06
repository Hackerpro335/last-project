import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@shared/ui/Input';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './LoginForm.css';

//схема валидации
const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setLoading(true);
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const resData = await res.json();

      if (!res.ok) {
        alert(resData.message || 'Login failed');
        return;
      }

      // Хранит токен при необходимости (resData.token)
      alert(resData.message);
      navigate('/');
    } catch (err) {
      console.error('Login failed:', err);
      alert('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      <div className='input-span'>
        <label>Email</label>
        <Input
          type="email"
          {...register('email')}
          className="input-span"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div className='input-span'>
        <label>Password</label>
        <Input
          type="password"
          {...register('password')}
          className="input-span"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button className='submit' type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Log in'}
      </button>
    </form>
  );
};
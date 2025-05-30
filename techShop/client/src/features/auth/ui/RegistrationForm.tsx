import { useForm } from 'react-hook-form';
import { Input } from '@shared/ui/Input';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './RegistrationForm.css';

interface SignupFormValues {
  Username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormValues>();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: SignupFormValues) => {
    //Проверка на совпадение паролей
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.message || 'Registration failed');
        return;
      }

      const resData = await res.json();
      alert(resData.message);
      navigate('/');
    } catch (err) {
      console.error('Registration failed', err);
      alert('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h1 className="text-2xl font-bold mb-4 text-center">Registration</h1>
      <div className='input-span'>
        <label>Username</label>
        <Input
        type = "Username"
          {...register('Username', { required: 'Username is required' })}
          className="input-span"
        />
        {errors.Username && <p>{errors.Username.message}</p>}
      </div>

      <div className='input-span'>
        <label>Email</label>
        <Input
          type="email"
          {...register('email', { required: 'Email is required' })}
          className="input-span"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div className='input-span'>
        <label>Password</label>
        <Input
          type="password"
          {...register('password', { required: 'Password is required' })}
          className="input-span"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div className='input-span'>
        <label>Confirm Password</label>
        <Input
          type="password"
          {...register('confirmPassword', { required: 'Confirm Password is required' })}
          className="input-span"
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit" className="submit" disabled={loading}>
        {loading ? 'Registering...' : 'Sign up'}
      </button>
    </form>
  );
};
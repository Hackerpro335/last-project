import { useSelector } from 'react-redux';
import { RootState } from '@shared/store';

export const HomePage = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div>
      <h1>Главная страница</h1>
      {user ? (
        <p>Привет, {user.name}!</p>
      ) : (
        <p>Вы не вошли в систему</p>
      )}
    </div>
  );
};
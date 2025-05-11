import { useDispatch } from 'react-redux';
import { setUser } from '@shared/store/userSlice';

const dispatch = useDispatch();

const onSubmit = async (data: LoginFormValues) => {
  ...
  const resData = await res.json();
  if (res.ok) {
    dispatch(setUser(resData.user)); //сохраняем пользователя в store
    navigate('/');
  }
}
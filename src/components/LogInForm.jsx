import { useState } from 'react';
import { Btn, Form, LoginBtn } from './LogInForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/operations';
import { Notify } from 'notiflix';

const LogInForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleLoginChange = e => {
    setLogin(e.target.value);
    setError('');
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
    setError('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await dispatch(logIn({ email: login, password })).unwrap();
      Notify.success('Welcome!!!');
    } catch (error) {
      Notify.failure('Something went wrong!');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor="login">Email</label>
      <input
        name="login"
        required
        type="text"
        value={login}
        onChange={handleLoginChange}
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        required
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      {error && <div>{error}</div>}
      <LoginBtn type="submit">Login</LoginBtn>
        <Btn to={'/register'}>Register</Btn>
    </Form>
  );
};

export default LogInForm;

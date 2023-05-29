import { useState } from 'react';
import { Form, RegisterBtn } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import { Notify } from 'notiflix';
import { Btn } from './LogInForm.styled';

const RegisterForm = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleEmailChange = e => {
    setEmail(e.target.value);
    setError('');
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
    setError('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await dispatch(register({ email, password })).unwrap();
      Notify.success('Welcome!!!');
    } catch (error) {
      Notify.failure('Something went wrong!');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <label htmlFor="email"> Email</label>
      <input
        name="email"
        required
        type="text"
        value={email}
        onChange={handleEmailChange}
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
      <RegisterBtn type="submit">Register</RegisterBtn>
      <Btn to={'/login'}>LogIn</Btn>
    </Form>
  );
};

export default RegisterForm;

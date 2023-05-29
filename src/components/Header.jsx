import {
  Address,
  BtnLogOut,
  Container,
  Logo,
  Tel,
  Wrapper,
} from './Header.styled';
import logo from '../assets/logo.svg';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/auth/operations';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} alt="logo" />
        <div>
          <Tel href="tel:692827473">692 82 74 73</Tel>
          <Address>c/ Reino, 18-2- (local) &#183; 50003 ZARAGOZA </Address>
        </div>
      </Wrapper>
      <BtnLogOut type='button' onClick={()=> dispatch(logOut())}>LogOut</BtnLogOut>
    </Container>
  );
};

export default Header;

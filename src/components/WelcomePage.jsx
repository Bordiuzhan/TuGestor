import { Outlet } from 'react-router-dom';
import { Text, Title, WelcomWrapper } from './WelcomePage.styled';

export default function WelcomePage() {
  return (
    <WelcomWrapper>
      <Title>Welcome to the app!</Title>
      <Text>
        Welcome to TuGestor - your ultimate business invoice and documentation
        management tool! TuGestor is a powerful application designed to simplify
        and streamline your invoicing processes, empowering business owners like
        you to effortlessly create invoices, manage inventory, and handle all
        related tasks. With TuGestor, you can focus on what you do best -
        growing your business - while we take care of the paperwork.
      </Text>
      <div>
        <Outlet />
      </div>
    </WelcomWrapper>
  );
}

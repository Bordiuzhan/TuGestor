import AppBar from './AppBar';
import Header from './Header';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container, Main, Wrapper } from './Layout.styled';
import { CenteredRotatingLines } from './Loader';

const Layout = () => {
  return (
    <Container>
      <ToastContainer autoClose={3000} pauseOnHover={false} />
      <Header />
      <Wrapper>
        <AppBar />
        <Main>
          <Suspense fallback={<CenteredRotatingLines />}>
            <Outlet />
          </Suspense>
        </Main>
      </Wrapper>
    </Container>
  );
};

export default Layout;

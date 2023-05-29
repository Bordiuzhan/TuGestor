import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import LogInForm from './LogInForm';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRout';
import RegisterForm from './RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import WelcomePage from './WelcomePage';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { CenteredRotatingLines } from './Loader';

const Layout = lazy(() => import('./Layout'));
const Albaran = lazy(() => import('./Albaran'));
const Factura = lazy(() => import('./Factura'));
const Oficina = lazy(() => import('./Oficina'));
const Renta = lazy(() => import('./Renta'));
const Statistic = lazy(() => import('./Statistic'));
const Ajustes = lazy(() => import('./Ajustes'));

function App() {
  const dispatch = useDispatch();

  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <CenteredRotatingLines />
  ) : (
    <Routes>
      <Route
        path="/"
        element={
          <RestrictedRoute redirectTo='"/factura' component={<WelcomePage />} />
        }
      >
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/factura" component={<LogInForm />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/factura"
              component={<RegisterForm />}
            />
          }
        />
      </Route>
      <Route
        path="/"
        element={<PrivateRoute redirectTo="/login" component={<Layout />} />}
      >
        <Route
          index
          element={<PrivateRoute redirectTo="/login" component={<Oficina />} />}
        />
        {/* <Route
          path="/oficina"
          element={<PrivateRoute redirectTo="/login" component={<Oficina />} />}
        /> */}
        <Route
          path="/factura"
          element={<PrivateRoute redirectTo="/login" component={<Factura />} />}
        />

        <Route
          path="/albaran"
          element={<PrivateRoute redirectTo="/login" component={<Albaran />} />}
        />
        <Route
          path="/renta"
          element={<PrivateRoute redirectTo="/login" component={<Renta />} />}
        />
        <Route
          path="/statistic"
          element={
            <PrivateRoute redirectTo="/login" component={<Statistic />} />
          }
        />
        <Route
          path="/ajustes"
          element={<PrivateRoute redirectTo="/login" component={<Ajustes />} />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;

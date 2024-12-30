import "./app.styles.ts";
import "react-loading-skeleton/dist/skeleton.css";
import { Route, Routes as AppRoutes, Navigate } from "react-router-dom";
import { useAuth } from "src/features/auth/auth.context";
import PrivateRoute from "src/features/auth/private-route";
import Releases from "src/features/releases/releases";
import Login from "src/features/login/login";
import Finances from "src/features/finances/finances";
import GasStations from "src/features/gas-stations/gas-stations";
import Fuels from "src/features/fuels/fuels";
import Users from "src/features/users/users";

const routes = [
  { path: "/login", component: Login },
  { path: "/releases", component: Releases, private: true },
  { path: "/finances", component: Finances, private: true },
  { path: "/gasStations", component: GasStations, private: true },
  { path: "/fuels", component: Fuels, private: true },
  { path: "/users", component: Users, private: true },
];

const Routes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <AppRoutes>
      {routes.map(({ path, component: Component, private: isPrivate }) => (
        <Route
          key={path}
          path={path}
          element={
            isPrivate ? (
              <PrivateRoute>
                <Component />
              </PrivateRoute>
            ) : (
              <Component />
            )
          }
        />
      ))}
      <Route
        path="*"
        element={
          isAuthenticated ? (
            <Navigate to="/releases" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </AppRoutes>
  );
};

export default Routes;

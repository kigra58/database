import React, { useContext } from "react";
import {
  Outlet,
  Navigate,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AuthContext } from "../App";
import { ROUTES } from "../constant";
import UserDashboard from "./UserDashboard";
import Login from "./Login";
import Tables from "../views/Tables";

const PublicRoutes: React.FC = () => {
  const authData = useContext(AuthContext);
  console.log("authUserauthUser", authData);

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route
          path={ROUTES.LOGIN}
          element={
            authData?.isLogin ? <Navigate to={ROUTES.HOME} /> : <Login />
          }
        ></Route>

        <Route path={ROUTES.TABLES} element={<Tables />}></Route>

        <Route element={<ProtectedRoute isLogin={authData.isLogin} />}>
          <Route path={ROUTES.HOME} element={<UserDashboard />}></Route>
          {/* ADMIN ROUTE            */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

interface IProps {
  isLogin: boolean;
}

const ProtectedRoute: React.FC<IProps> = ({ isLogin }) =>
  isLogin ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;

export default PublicRoutes;

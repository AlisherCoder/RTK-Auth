import React, { lazy } from "react";
import { Link, useRoutes } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const OTP = lazy(() => import("./pages/OTP"));
const Register = lazy(() => import("./pages/Register"));
const Profil = lazy(() => import("./pages/Profil"));

const App = () => {
   return (
      <>
         <Link to={"/"}>Home</Link>
         <Link to={"/otp"}>Register</Link>
         {useRoutes([
            { path: "/", element: <Home /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            { path: "/otp", element: <OTP /> },
            { path: "/profil", element: <Profil /> },
         ])}
      </>
   );
};

export default React.memo(App);

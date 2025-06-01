import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import ResponsiveAppBar from "./components/header/Header";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const OTP = lazy(() => import("./pages/OTP"));
const Register = lazy(() => import("./pages/Register"));
const Profil = lazy(() => import("./pages/Profil"));
const About = lazy(() => import("./pages/About"));
const Chart = lazy(() => import("./pages/Chart"));

const App = () => {
   return (
      <>
         {/* <Link to={"/"}>Home</Link>
         <Link to={"/otp"}>Register</Link>
         <Link to={"/about"}>About</Link> */}
         <ResponsiveAppBar />
         {useRoutes([
            { path: "/", element: <Home /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            { path: "/otp", element: <OTP /> },
            { path: "/profile", element: <Profil /> },
            { path: "/about", element: <About /> },
            { path: "/chart", element: <Chart /> },
         ])}
      </>
   );
};

export default React.memo(App);

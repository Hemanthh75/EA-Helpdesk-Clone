import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyCases from "./pages/MyCases/MyCases";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import SigInPassword from "./pages/SignIn/SignInPassword/SignInPassword";
import EligibleSignup from "./pages/SignUp/EligibleSignUp/EligibleSignup";
import IneligibleSignup from "./pages/SignUp/IneligibleSignUp/IneligibleSignUp";

{
  /*Client side routing using react router dom */
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    exact: true,
  },

  {
    path: "my-cases",
    element: <MyCases />,
    exact: true,
  },

  {
    path: "sign-in",
    element: <SignIn />,
    exact: true,
  },

  {
    path: "sign-in-password",
    element: <SigInPassword />,
    exact: true,
  },

  {
    path: "sign-up",
    element: <SignUp />,
    exact: true,
  },

  {
    path: "eligible-sign-up",
    element: <EligibleSignup />,
    exact: true,
  },

  {
    path: "ineligible-sign-up",
    element: <IneligibleSignup />,
    exact: true,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

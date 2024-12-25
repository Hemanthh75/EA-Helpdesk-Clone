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
import TermsConditions from "./pages/SignUp/EligibleSignUp/TermsConditions/TermsConditions";
import BanHistory from "./pages/BanHistory/BanHistory";
import TopIssues from "./pages/Topissues/TopIssues";
import CustomerPortal from "./pages/CustomerPortal/CustomerPortal";

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
  {
    path: "t&c",
    element: <TermsConditions />,
    exact: true,
  },
  {
    path: "my-ban-history",
    element: <BanHistory />,
    exact: true,
  },
  {
    path: "help-top-issues",
    element: <TopIssues />,
    exact: true,
  },
  {
    path: "cp-ui",
    element: <CustomerPortal />,
    exact: true,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

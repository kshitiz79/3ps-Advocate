import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import AboutUs from "../pages/About/AboutUs";
import { ContactUs } from "../pages/ContactUs/ContactUs";
import PrivateLimited from "../pages/BuisnessSetup/ComponyRegistration/PrivateLimited";
import PublicLimited from "../pages/BuisnessSetup/ComponyRegistration/PublicLimited";
import OnePerson from "../pages/BuisnessSetup/ComponyRegistration/OnePerson";
import Ngo from "../pages/BuisnessSetup/ComponyRegistration/Ngo";
import LLPRegistration from "../pages/BuisnessSetup/ComponyRegistration/LLPRegistration";
import PartnershipFirm from "../pages/BuisnessSetup/ComponyRegistration/PartnershipFirm";
import SignInSignUp from "../components/SignupSignin/SignupForm";
import CartPage from "../pages/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Parent component
    children: [
      {
        path: "/", // Default route
        element: <Home />,
      },
      {
        path: "/about-us", // About Us page
        element: <AboutUs />,
      },
      {
        path: "/contact-us", // About Us page
        element: <ContactUs />,
      },
     {
      path: "//business-setup/company-registration/private-limited-company", // About Us page
      element: <PrivateLimited />,

     },
     {
      path: "/business-setup/company-registration/public-limited-company", // About Us page
      element: <PublicLimited />,

     },
     {
      path: "//business-setup/company-registration/one-person-company", // About Us page
      element: <OnePerson />,

     },
     {
      path: "//business-setup/company-registration/ngo-section-8", // About Us page
      element: <Ngo />,

     },
     {
      path: "//business-setup/company-registration/llp-registration", // About Us page
      element: <LLPRegistration />,

     },
     {
      path: "//business-setup/company-registration/partnership-firm", // About Us page
      element: <PartnershipFirm />,

     },

     {
      path: "/auth", // About Us page
      element: <SignInSignUp />,
     },
     {
      path: "/cart", // About Us page
      element: <CartPage />,
     }
    ],
  },
]);

export default router;

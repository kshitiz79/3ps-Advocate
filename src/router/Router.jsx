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
import AddRemoveDesignationPartner from "../pages/BuisnessSetup/Compilance/AddRemoveDesignationPartner";
import AddRemoveDirector from "../pages/BuisnessSetup/Compilance/AddRemoveDirector";
import OfficeAddressChanges from "../pages/BuisnessSetup/Compilance/OfficeAddressChange";
import AnnualCompliance from "../pages/BuisnessSetup/Compilance/AnnualCompliance";
import IncreasedAuthorized from "../pages/BuisnessSetup/Compilance/IncreasedAuthorized";
import BookKeepingAndAccounting from "../pages/BuisnessSetup/Compilance/BookKeepingAndAccounting";
import CloserOfCompany from "../pages/BuisnessSetup/Compilance/CloserOfCompony";
import ITRFilling from "../pages/BuisnessSetup/Compilance/ITRFilling";
import ConversionToOPC from "../pages/BuisnessSetup/Compilance/ConversionToOPC";
import GSTFiling from "../pages/BuisnessSetup/Compilance/GstFilling";
import MSME from "../pages/BuisnessSetup/Msme";
import StartUp from "../pages/BuisnessSetup/StartUp";
import ImportExportCode from "../pages/BuisnessSetup/ImportExportCode";
import ISOCertification from "../pages/BuisnessSetup/ISOCertification";
import TradeLicense from "../pages/BuisnessSetup/TradeLicense";
import FSSAIRegistration from "../pages/BuisnessSetup/FSSAIRegistration";
import DigitalSignature from "../pages/BuisnessSetup/DigitalSignature";
import GSTRegistration from "../pages/BuisnessSetup/GSTRegistration";
import FilingOpposition from "../pages/IntellectualProperty/TradeMark/Opposition/FilingOpposition";
import CounterStatement from "../pages/IntellectualProperty/TradeMark/Opposition/CounterStatement";
import EvidenceUr45 from "../pages/IntellectualProperty/TradeMark/Opposition/EvidenceUr45";
import OppositionHearing from "../pages/IntellectualProperty/TradeMark/Opposition/OppositionHearing";
import TrademarkLicense from "../pages/IntellectualProperty/TradeMark/TrademarkLicense";
import TradeMarkRenewal from "../pages/IntellectualProperty/TradeMark/TradeMarkRenewal";
import TMChangeinTrademarkApplication from "../pages/IntellectualProperty/TradeMark/TMChangeinTrademarkApplication";
import TradeMarkFilling from "../pages/IntellectualProperty/TradeMark/TradeMarkFilling";
import SellTrademark from "../pages/IntellectualProperty/TradeMark/SellTrademark";
import SearchandDueDiligence from "../pages/IntellectualProperty/TradeMark/SearchandDueDiligence";
import FilingApplication from "../pages/IntellectualProperty/TradeMark/FilingApplication";
import Examination from "../pages/IntellectualProperty/TradeMark/Examination";
import ShowCauseHearing from "../pages/IntellectualProperty/TradeMark/ShowCauseHearing";
import PatentSearch from "../pages/IntellectualProperty/PatentRegistration/PatentSearch";
import FilingPatentApplication from "../pages/IntellectualProperty/PatentRegistration/FilingPatentApplication";
import RequestforExamination from "../pages/IntellectualProperty/PatentRegistration/RequestforExamination";

import DashboardLayout from "../Dashboard/DashboardLayout";
import User from "../Dashboard/admin/Users/Users";
import AddProduct from "../Dashboard/admin/AddProducts/AddProduct";
import AllServises from "../Dashboard/admin/ManageProducts/AllServises";
import UpdateService from "../Dashboard/admin/ManageProducts/EditServises";
import AllForms from "../Dashboard/admin/FormData/AllFormdata";
import OverViewHome from "../Dashboard/admin/Dashboard/Layout";
import Reviews from "../Dashboard/admin/AllReviews/Reviews";
import ManageOrder from "../Dashboard/admin/ManageOrder/ManageOrder";

import ProtectedRoute from "./ProtectedRoute";

import UserDashboardMain from "../Dashboard/user/UserDashboardMain";
import UserProfile from "../Dashboard/user/UserProfile";


import SignInSignUp from "../components/SignupSignin/SignupForm";
import CartPage from "../pages/Cart/Cart";
import { FER } from "../pages/IntellectualProperty/PatentRegistration/FER.JSX";
import Renewal from "../pages/IntellectualProperty/PatentRegistration/Renewal.JSX";
import LLPAgreement from "../pages/BuisnessSetup/Compilance/LLPAgreement";
import GeographicalTrade from "../pages/IntellectualProperty/GeographicalTrade";





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
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/business-setup/company-registration/private-limited-company",
        element: 
  
            <PrivateLimited />
   
        ,
      },
      {
        path: "/business-setup/company-registration/public-limited-company",
        element: 
    
            <PublicLimited />
          
       
      },
      {
        path: "/business-setup/company-registration/one-person-company",
        element:
            <OnePerson />

      },
      {
        path: "/business-setup/company-registration/ngo-section-8",
        element: 
            <Ngo />

      },
      {
        path: "/business-setup/company-registration/llp-registration",
        element: 

            <LLPRegistration />
  
     
      },
      {
        path: "/business-setup/company-registration/partnership-firm",
        element: 

            <PartnershipFirm />

      
      },

     
     
          {
  
            path: "/business-setup/compliance/annual-compliance",
            element : <AnnualCompliance/>
          },
          {
           
            path: "/business-setup/compliance/add-remove-director",
            element: <AddRemoveDirector/>
          },
          {
        
            path: "/business-setup/compliance/gst-filing",
            element: <GSTFiling/>
          },
          {
   
            path: "/business-setup/compliance/add-remove-designation-partner",
            element: <AddRemoveDesignationPartner/>
          },
          {
            name: "LLP Agreement",
            path: "/business-setup/compliance/llp-agreement",
            element: <LLPAgreement/>
          },
          {
        
            path: "/business-setup/compliance/conversion-to-opc-to-llp-pvt-ltd",
            element: <ConversionToOPC/>
          },
          {

            path: "/business-setup/compliance/itr-filing-individual",
            element: <ITRFilling/>
          },
          {
 
            path: "/business-setup/compliance/closure-of-company",
            element: <CloserOfCompany/>
          },
          {

            path: "/business-setup/compliance/bookkeeping-and-accounting",
            element: <BookKeepingAndAccounting/>
          },
          {
      
            path: "/business-setup/compliance/office-address-change",
            element:  <OfficeAddressChanges/>
          },
          {

            path: "/business-setup/compliance/increased-authorised-capital",
            element: <IncreasedAuthorized/>
          },
      

          {
   
            path: "/business-setup/gst-registration",
     element:<GSTRegistration/>
          },
          {
    
            path: "/business-setup/digital-signature",
     element:<DigitalSignature/>
          },
          {

            path: "/business-setup/fssai-registration",
       element:<FSSAIRegistration/>
          },
          {

            path: "/business-setup/trade-license",
                  element:<TradeLicense/>    
          },
          {
        
            path: "/business-setup/iso-certification",
            element: <ISOCertification/>
          },
          {

            path: "/business-setup/import-export-code",
            element: <ImportExportCode/>
          },
          {
      
            path: "/business-setup/startup",
            element: <StartUp/>
       
          },
          {
    
            path: "/business-setup/msme",
            element: <MSME/>
          },



          {
          
            path: "/intellectual-property/trademark/opposition-rectification/filing-opposition",
            element: <FilingOpposition/>
          },
          {
          
            path: "/intellectual-property/trademark/opposition-rectification/counter-statement",
            element: <CounterStatement/>
          },
          {

            path: "/intellectual-property/trademark/opposition-rectification/evidence-ur-45-46",
            element: <EvidenceUr45/>
          },
          {
    
            path: "/intellectual-property/trademark/opposition-rectification/opposition-hearing",
            element: <OppositionHearing/>
          },



          {
            
            path: "/intellectual-property/trademark/trademark-filing",
            element: <TradeMarkFilling/>
          },
          {
            
            path: "/intellectual-property/trademark/trademark-renewal",
            element: <TradeMarkRenewal/>
          },

 {
  path: "/intellectual-property/trademark/tm-m-tm-p",
            element: <TMChangeinTrademarkApplication/>
          },



          {
            path: "/intellectual-property/trademark/trademark-license",
            element: <TrademarkLicense/>



          },
          {
            path: "/intellectual-property/trademark/sell-trademark",
            element: <SellTrademark/>
          },
          {
            path: "/intellectual-property/trademark/search-and-due-diligence",
            element: <SearchandDueDiligence/>
          },
          {
            path: "/intellectual-property/trademark/filing-application",
            element: <FilingApplication/>
          },
          {
            path: "/intellectual-property/trademark/examination",
            element: <Examination/>
          },
          {
            path: "/intellectual-property/trademark/show-cause-hearing",
            element: <ShowCauseHearing/>
          },

          {
  
            path: "/intellectual-property/patent-registration/patent-search",
            element: <PatentSearch/>
          },


          {
      
            path: "/intellectual-property/patent-registration/filing-patent-application",
            element: <FilingPatentApplication/>
          },
          {
        
            path: "/intellectual-property/patent-registration/request-for-examination",
            element: <RequestforExamination/>

          },
          {
            name: "FER",
            path: "/intellectual-property/patent-registration/fer",
            element: <FER/>
          },
          {
            
            path: "/intellectual-property/patent-registration/renewal",
            element: <Renewal/>
          },





          {
            
            path: "/intellectual-property/geographical-trade-secret",
            element: <GeographicalTrade/>
          },




























      {
        path: "/cart",
        element: 

            <CartPage />
     
          
      },

      {
        path: "/admin-dashboard",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <DashboardLayout />
          </ProtectedRoute>
        ),
        children: [
          { path: "", element: <OverViewHome /> },
          { path: "users", element: <User /> },
          { path: "add-services", element: <AddProduct /> },
          { path: "all-services", element: <AllServises /> },
          { path: "update-services/:id", element: <UpdateService /> },
          { path: "all-form-data", element: <AllForms /> },
          { path: "all-reviews", element: <Reviews /> },
          { path: "orders", element: <ManageOrder /> },

        ],
      },
      {
        path: "/user-dashboard",
        element: (
          <ProtectedRoute allowedRoles={["user"]}>
            <DashboardLayout />
          </ProtectedRoute>
        ),
        children: [
          { path: "", element: <UserDashboardMain /> },
          { path: "users-profile", element: <UserProfile /> },
  
   
        ],
      },
      








    ],
  },
  {
    path: "/auth",
    element: <SignInSignUp />,
  },





]);

export default router;

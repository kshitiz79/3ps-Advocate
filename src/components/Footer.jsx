

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faXTwitter, faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';


const LINKS = {
    individualServices: [
      { name: "Income Tax Returns Filing", url: "/income-tax-returns" },
      { name: "TDS Returns Filing", url: "/tds-returns" },
      { name: "Tax Planning & Saving", url: "/tax-planning" },

      { name: "PAN Card Services", url: "/pan-card-services" },
    ],
    businessServices: [
      { name: "GST Registration", url: "/gst-registration" },

      { name: "GST Returns Filing", url: "/gst-returns" },
      { name: "TDS Returns Filing", url: "/business-tds-returns" },
      { name: "Tax Planning & Saving", url: "/business-tax-planning" },
    ],
    incomeTaxGuides: [
      { name: "Income Tax Return", url: "/income-tax-return-guide" },
      { name: "Deductions", url: "/tax-deductions" },
          
      { name: "Rent Receipt", url: "/rent-receipt" },
      { name: "House Property Tax", url: "/house-property-tax" },
    ],
    gstGuides: [
      { name: "Digital Signature", url: "/gst-guide" },


      { name: "GST Registration", url: "/gst-registration-guide" },
      { name: "Input Tax Credit", url: "/input-tax-credit" },
      { name: "GST Procedure", url: "/gst-procedure" },
    ],
  };
  
  const Footer = () => {
    return (

<>
<div className="bg-[#032845] text-white py-4">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6">
    {/* Left Side */}
    <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start items-center gap-y-2 gap-x-4 text-center md:text-left">
  {/* Support Text */}
  <p className="text-sm sm:text-lg font-semibold">Need support?</p>

  {/* Phone */}
  <div className="flex flex-row items-center space-y-2 md:space-y-0 space-x-1">
    <FontAwesomeIcon icon={faPhoneAlt} />
    <div className="flex items-center space-x-1">
      <a href="tel:+919654143245" className="text-sm hover:underline">
        +91 9654143245
      </a>
      <span>,</span>
      <a href="tel:+918826373680" className="text-sm hover:underline">
        +91 8826373680
      </a>
    </div>
  </div>

  {/* Email */}
  <div className="flex  flex-row items-center space-y-2 md:space-y-0 space-x-2">
    <FontAwesomeIcon icon={faEnvelope} />
    <a
      href="mailto:info@3psadvocates.com"
      className="text-sm hover:underline"
    >
      info@3psadvocates.com
    </a>
  </div>
</div>


    {/* Right Side - Social Media */}
    <div className="flex space-x-4 mt-4 md:mt-0 justify-center md:justify-end">
      <a href="https://facebook.com" target="_blank" className="hover:opacity-75">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="https://twitter.com" target="_blank" className="hover:opacity-75">
        <FontAwesomeIcon icon={faXTwitter} />
      </a>
      <a href="https://linkedin.com" target="_blank" className="hover:opacity-75">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="https://youtube.com" target="_blank" className="hover:opacity-75">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a href="https://instagram.com" target="_blank" className="hover:opacity-75">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  </div>
</div>









<footer className=" text-[#032845] py-8">
  <div className="container mx-auto px-4">
    {/* Top Section with Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center md:text-left">
      {/* Logo */}
      <div className="flex justify-center md:justify-start">
        <img src="/logo2.png" alt="Logo" className="w-32 sm:w-44" />
      </div>

      {/* Services for Individuals */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Services for Individuals</h3>
        <ul className="space-y-2">
          {LINKS.individualServices.map((item) => (
            <li key={item.name}>
              <a href={item.url} className="hover:underline">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Services for Businesses */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Services for Businesses</h3>
        <ul className="space-y-2">
          {LINKS.businessServices.map((item) => (
            <li key={item.name}>
              <a href={item.url} className="hover:underline">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Income Tax Guides */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Income Tax Guides</h3>
        <ul className="space-y-2">
          {LINKS.incomeTaxGuides.map((item) => (
            <li key={item.name}>
              <a href={item.url} className="hover:underline">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* GST Guides */}
      <div>
        <h3 className="text-lg font-semibold mb-4">GST Guides</h3>
        <ul className="space-y-2">
          {LINKS.gstGuides.map((item) => (
            <li key={item.name}>
              <a href={item.url} className="hover:underline">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Divider */}
    <hr className="my-8 border-gray-300" />

    {/* Bottom Section */}
    <div className="text-sm flex flex-col md:flex-row justify-center md:justify-between items-center gap-y-4">
      <p>© {new Date().getFullYear()} The 3P's Advocates & IP Attorneys. All rights reserved.</p>
      <p>
        Powered By{" "}
        <a href="https://www.rbshstudio.com" target="_blank" className="hover:underline font-semibold">
          RBSH Studio
        </a>
      </p>
    </div>
  </div>
</footer>

      </>
    );
  };
  
  export default Footer;
  
  
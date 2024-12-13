import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb as regularLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb as solidLightbulb } from "@fortawesome/free-solid-svg-icons";
import logo from "/logo.png";
import LinkButton from  "./SignupSignin/SignupSignin"

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header2 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle the body class for dark mode
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <>
      <header
        className={`${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        {/* Bottom Section */}
        <div
          className={`${
            isDarkMode ? "bg-gray-900 shadow-lg" : "bg-white shadow-lg"
          }`}
        >
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
            {/* Mobile View */}
            <div className="flex flex-col items-center w-full md:hidden space-y-4 py-4">
              {/* Top Icons */}
              <div className="flex space-x-6">
                <button
                  onClick={handleClick}
                  style={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  <FontAwesomeIcon
                    icon={isDarkMode ? solidLightbulb : regularLightbulb}
                    size="2x"
                    color={isDarkMode ? "yellow" : "black"}
                  />
                </button>
                <select
                  className={`${
                    isDarkMode
                      ? "bg-gray-800 text-white border border-gray-600 rounded px-2 py-1"
                      : "bg-[#032845] text-white border border-white rounded px-2 py-1"
                  }`}
                >
                  <option>English</option>
                  <option>Hindi</option>
                </select>
                <a
                  href="#"
                  className={`${
                    isDarkMode
                      ? "text-gray-300 hover:underline"
                      : "text-sky-950 hover:underline"
                  }`}
                >
                  Sign In/Sign Up
                </a>
              </div>

              {/* Logo */}
              <div className="flex justify-center items-center">
                <img
                  src={logo}
                  alt="Logo"
                  className={`w-auto h-24 ${
                    isDarkMode ? "filter invert" : ""
                  }`}
                />
              </div>

              {/* Search Bar */}
              <div
                className={`flex rounded-full w-full ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-200"
                } px-4 py-2`}
              >
                <input
                  type="text"
                  placeholder="Search"
                  className={`w-full text-sm ${
                    isDarkMode
                      ? "text-white bg-transparent focus:outline-none"
                      : "text-gray-800 bg-transparent focus:outline-none"
                  }`}
                />
                <button>
                  <span
                    className={`material-icons ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Search
                  </span>
                </button>
              </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:flex justify-between items-center w-full">
              {/* Logo */}
              <div className="flex items-center py-4 mr-3">
                <img
                  src="./logo.png"
                  alt="Logo"
                  className={`w-auto h-36 ${
                    isDarkMode ? "filter invert" : ""
                  }`}
                />
              </div>

              <div className="flex-col">
                <div className="flex space-x-16 mb-16 ml-4">
                  <button
                    onClick={handleClick}
                    style={{
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={isDarkMode ? solidLightbulb : regularLightbulb}
                      size="2x"
                      color={isDarkMode ? "yellow" : "black"}
                    />
                  </button>
                  <div className=" flex items-center ">
      <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '1.5em' }} />
      </div>
                 <LinkButton/>
             
                  </div>
               
               
               <div>
                <div
                  className={
                    isDarkMode
                      ? "flex bg-gray-800 rounded-full px-4 py-2 w-full"
                      : "flex bg-gray-200 rounded-full px-4 py-2 w-full"
                  }
                >
                  <input
                    type="text"
                    placeholder="Search"
                    className={
                      isDarkMode
                        ? "w-full text-sm text-white bg-transparent focus:outline-none"
                        : "w-full text-sm text-gray-800 bg-transparent focus:outline-none"
                    }
                  />



                  <button>
                    <span
                      className={
                        isDarkMode
                          ? "material-icons text-white"
                          : "material-icons text-gray-800"
                      }
                    >
                      Search
                    </span>
                  </button>
                 
    
                </div>
              
    </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header2;

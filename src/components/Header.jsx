import React, { useState } from "react";
import Header2 from "./Header2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import menuItems from "./../data/MenuData";
const Header = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState(null);
  const [hoveredNestedSubMenu, setHoveredNestedSubMenu] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let hoverTimeout;

  const navigate = useNavigate();

  const handleMouseEnterMenu = (menu) => {
    clearTimeout(hoverTimeout);
    setHoveredMenu(menu);
    setHoveredSubMenu(null);
    setHoveredNestedSubMenu(null);
  };

  const handleMouseLeaveMenu = () => {
    hoverTimeout = setTimeout(() => {
      setHoveredMenu(null);
      setHoveredSubMenu(null);
      setHoveredNestedSubMenu(null);
    }, 200);
  };

  const handleMouseEnterSubMenu = (subMenu) => {
    clearTimeout(hoverTimeout);
    setHoveredSubMenu(subMenu);
    setHoveredNestedSubMenu(null);
  };

  const handleMouseLeaveSubMenu = () => {
    hoverTimeout = setTimeout(() => {
      setHoveredSubMenu(null);
      setHoveredNestedSubMenu(null);
    }, 200);
  };

  const handleMouseEnterNestedSubMenu = (nestedSubMenu) => {
    clearTimeout(hoverTimeout);
    setHoveredNestedSubMenu(nestedSubMenu);
  };

  const handleMouseLeaveNestedSubMenu = () => {
    hoverTimeout = setTimeout(() => {
      setHoveredNestedSubMenu(null);
    }, 200);
  };

  const handleMenuClick = (menuItem, e) => {
    e.preventDefault(); // Prevent page reload
    if (menuItem.subMenu.length > 0) {
      setHoveredMenu(menuItem.name === hoveredMenu ? null : menuItem.name);
    } else {
      navigate(menuItem.path);
      setTimeout(() => setHoveredMenu(null), 300); // Close menu after slight delay
    }
  };
  
  const handleSubMenuClick = (subItem, e) => {
    e.preventDefault();
    if (subItem.subMenu.length > 0) {
      setHoveredSubMenu(subItem.name === hoveredSubMenu ? null : subItem.name);
    } else {
      navigate(subItem.path);
      setTimeout(() => setHoveredSubMenu(null), 300); // Close submenu after delay
    }
  };
  
  const handleNestedMenuClick = (nestedItem, e) => {
    e.preventDefault();
    navigate(nestedItem.path);
    setTimeout(() => {
      setHoveredNestedSubMenu(null);
      setHoveredSubMenu(null);
      setHoveredMenu(null);
    }, 30); // Close all menus after delay
  };



  return (
    <>
      <Header2 />
      <header className="bg-[#032845] shadow-lg font-semibold relative z-10">
        <div className="container mx-auto px-4 flex justify-center">
          {/* Mobile Menu */}
          <button
          className="text-white md:hidden focus:outline-none py-5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((menuItem, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnterMenu(menuItem.name)}
                onMouseLeave={handleMouseLeaveMenu}
              >
              <button
  onClick={(e) => handleMenuClick(menuItem, e)}
  className={`text-white focus:outline-none ${
    hoveredMenu === menuItem.name ? "text-[#c7a55e]" : "hover:text-[#c7a55e]"
  } py-5`}
>
  {menuItem.name}
</button>

                {/* Dropdown Menu */}
                {hoveredMenu === menuItem.name && menuItem.subMenu.length > 0 && (
                  <div className="absolute right-0 top-full mt-1 w-64 bg-[#032845] shadow-md rounded-md">
                    <ul className="py-2">
                      {menuItem.subMenu.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="relative"
                          onMouseEnter={() => handleMouseEnterSubMenu(subItem.name)}
                          onMouseLeave={handleMouseLeaveSubMenu}
                        >
                          <button
                              onClick={(e) => handleSubMenuClick(subItem, e)}
                            className="block w-full text-left px-4 py-2 text-white hover:bg-gray-100 hover:text-[#032845]"
                        
                          >
                            {subItem.name}
                            {subItem.subMenu.length > 0 && (
                              <IoIosArrowForward className="absolute right-4 top-1/2 transform -translate-y-1/2" />
                            )}
                          </button>

                          {/* Nested Submenu */}
                          {hoveredSubMenu === subItem.name && subItem.subMenu.length > 0 && (
                            <div className="absolute left-full ml-1 top-0 w-64 bg-[#032845] shadow-md rounded-md">
                              <ul className="py-2">
                                {subItem.subMenu.map((nestedItem, nestedIndex) => (
                                  <li
                                    key={nestedIndex}
                                    onMouseEnter={() => handleMouseEnterNestedSubMenu(nestedItem.name)}
                                    onMouseLeave={handleMouseLeaveNestedSubMenu}
                                  >
                                   <button
  onClick={(e) => handleNestedMenuClick(nestedItem, e)}
  className="block w-full text-left px-4 py-2 text-white hover:bg-gray-100 hover:text-[#032845]"
>
                                      {nestedItem.name}
                                      {nestedItem.subMenu && nestedItem.subMenu.length > 0 }
                                    </button>

                                    {/* Second-Level Nested Submenu */}



                                    {hoveredNestedSubMenu === nestedItem.name &&
                                      nestedItem.subMenu &&
                                      nestedItem.subMenu.length > 0 && (
                                        <div className="absolute left-full ml-1 top-0 w-64 bg-[#032845] shadow-md rounded-md">
                                        <ul className="py-2">
                                          {nestedItem.subMenu.map((secondNestedItem, secondNestedIndex) => (
                                            <li key={secondNestedIndex}>
                                              <button
                                                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-100 hover:text-[#032845] relative"
                                                onClick={() => navigate(secondNestedItem.path)}
                                              >
                                                {secondNestedItem.name}
                                    
                                                {/* Add Arrow Icon if Submenu Exists */}
                                                {secondNestedItem.subMenu?.length > 0 && (
                                                  <IoIosArrowForward className="absolute right-4 top-1/2 transform -translate-y-1/2" />
                                                )}
                                              </button>

                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="block md:hidden bg-[#032845]">
            <ul className="space-y-2 py-4 px-4">
              {menuItems.map((menuItem, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      setActiveMenu(menuItem.name);
                      navigate(menuItem.path);
                    }}
                    className={`text-white block w-full text-left py-2 ${
                      activeMenu === menuItem.name ? "font-bold" : ""
                    }`}
                  >
                    {menuItem.name}
                  </button>
                  {activeMenu === menuItem.name && menuItem.subMenu.length > 0 && (
                    <ul className="pl-4 space-y-2">
                      {menuItem.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <button
                            className="text-white block w-full text-left py-2"
                            onClick={() => navigate(subItem.path)}
                          >
                            {subItem.name}
                          </button>
                          {subItem.subMenu.length > 0 && (
                            <ul className="pl-4 space-y-2">
                              {subItem.subMenu.map((nestedItem, nestedIndex) => (
                                <li key={nestedIndex}>
                                  <button
                                    className="text-white block w-full text-left py-2"
                                    onClick={() => navigate(nestedItem.path)}
                                  >
                                    {nestedItem.name}
                                  </button>
                                  {nestedItem.subMenu && nestedItem.subMenu.length > 0 && (
                                    <ul className="pl-4 space-y-2">
                                      {nestedItem.subMenu.map(
                                        (secondNestedItem, secondNestedIndex) => (
                                          <li key={secondNestedIndex}>
                                            <button
                                              className="text-white block w-full text-left py-2"
                                              onClick={() => navigate(secondNestedItem.path)}
                                            >
                                              {secondNestedItem.name}
                                            </button>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;

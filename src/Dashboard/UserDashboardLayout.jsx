import  { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, Kanban,   Users2Icon,  } from "lucide-react";

const UserDashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("");

  // Sidebar Items
  const SIDEBAR_ITEMS = [
    { name: "Overview", icon: <Kanban color="#03C9D7" />, href: "/user-dashboard" },
  ,
    { name: "Profile", icon: <Users2Icon color="#03C9D7" />, href: "/user-dashboard/users-profile" },
  ];

  return (
    <div
      className={`bg-[#282C34] border-r border-gray-500 transition-all duration-500 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "lg:w-72" : "lg:w-20"
      } md:w-20 w-20`}
    >
      {/* Sidebar Header */}
      <div className="flex p-4 text-xl font-bold items-center justify-between">
        {isSidebarOpen && (
          <span className="text-[#C9CACC] hidden lg:block"> User Dashboard </span>
        )}
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <MenuIcon size={30} className="text-[#00CEC3]" />
        </button>
      </div>

      {/* Sidebar Links */}
      <div className="mt-8">
        {SIDEBAR_ITEMS.map((item) => (
          <Link key={item.href} to={item.href}>
            <div
              className={`flex p-5 gap-6 mx-2 my-3 rounded-2xl cursor-pointer ${
                activeItem === item.href ? "bg-[#98a3a4]" : "hover:bg-[#00CEC3]"
              }`}
              onClick={() => setActiveItem(item.href)}
            >
              <span>{item.icon}</span>
              {isSidebarOpen && (
                <h2 className="text-[#E6E5E8] font-medium hidden lg:block">
                  {item.name}
                </h2>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Logout Button */}
      <div className="mt-auto p-4">
        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.href = "/auth"; 
          }}
          className="text-white bg-red-500 font-medium px-5 py-2  mt-60 rounded-sm w-full hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDashboardLayout;

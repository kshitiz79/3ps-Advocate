import React from "react";
import { Outlet } from "react-router-dom";
import AdminDashboardLayout from "./AdminDashboardLayout";
import UserDashboardLayout from "./UserDashboardLayout";
import { useSelector } from "react-redux";

const DashboardLayout = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    console.log("User not defined, rendering fallback...");
    return <div>Loading...</div>;
  }

  console.log("Rendering layout for user role:", user.role);

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="flex bg-[#20232A] h-screen overflow-hidden">
        {user.role === "admin" ? <AdminDashboardLayout /> : <UserDashboardLayout />}
      </aside>
      <main className="flex flex-col flex-grow bg-black overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

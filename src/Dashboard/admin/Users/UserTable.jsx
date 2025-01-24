import React from "react";
import { useGetAllUsersQuery } from "../../../redux/features/auth/authapi";

const UserTable = () => {
  const { data, error, isLoading } = useGetAllUsersQuery();

  if (isLoading) return <div className="p-6 px-2 text-white">Loading...</div>;
  if (error) return <div className="p-6 px-2 text-white">Error loading users</div>;

  const users = data?.data || [];

  return (
    <div className="p-6 px-2">
      <h1 className="font-semibold text-[#e1e6ed] text-2xl px-6">User Table</h1>
      <table className="table-auto w-full text-left mt-4 text-white">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="px-4 py-2">Name/Username</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border-b border-gray-700">
              <td className="px-4 py-2 flex items-center">
                {user.profileImage && (
                  <img
                    src={user.profileImage}
                    alt="profile"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                )}
                {user.username || user.name || "N/A"}
              </td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.role || "user"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

import React from "react";
import StatsCard from "./../../components/StatsCard";
import { UserCheck, UsersIcon, UserPlus, UserX } from "lucide-react";
import UserTable from "./UserTable";
import UserGrowthLineCh from "./UserGrowthLineChart";
import UserCOLpieCh from "./UserColorPieCart";
import { useGetAllUsersQuery } from "./../../../redux/features/auth/authapi";

const User = () => {
  const { data, error, isLoading } = useGetAllUsersQuery();

  // Extract total users and user data
  const totalUsers = data ? data.total : "...";

  return (
    <div className="h-full mx-5 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-4 md:h-[25%] gap-5 ">
      <StatsCard
          name="Total Users"
          icon={<UsersIcon />}
          iconbgcolor="bg-[#FFF4E5]"
          icontxcolor="text-[#ffb74d]"
          classNam="bg-[#33373E] pb-8 md:pb-0"
          fontsizz="text-[2rem]"
          amount={isLoading ? "Loading..." : totalUsers}
        />
   
        <StatsCard
          name="Today's Sign-ups"
          icon={<UserPlus />}
          iconbgcolor="bg-[#EBFAF2]"
          icontxcolor="text-[#4caf50]"
          classNam="bg-[#33373E] pb-8 md:pb-0"
          fontsizz="text-[2rem]"
          amount="326"
        />
       
      </div>

      <div className="bg-[#33373E] pb-6 my-12 text-white rounded-3xl">
        {/* UserTable now fetches and displays live data */}
        <UserTable />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[60%] mt-6">
        <div className="bg-[#33373E] rounded-3xl">
          <UserGrowthLineCh/>
        </div>
        <div className="bg-[#33373E] rounded-3xl">
          <UserCOLpieCh/>
        </div>
      </div>
    </div>
  );
};

export default User;

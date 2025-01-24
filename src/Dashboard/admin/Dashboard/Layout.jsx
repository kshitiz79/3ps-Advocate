import React from "react";
import StatsCard from "./../../components/StatsCard";
import SalesOverview from "./../Dashboard/SalesOverView";
import UserAreaView from "./../../components/UserOverView";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import {  FaPaperPlane,  FaUserGroup } from "react-icons/fa6";
import { useGetAllUsersQuery } from "./../../../redux/features/auth/authapi";;
import { GiNetworkBars } from "react-icons/gi";
import SalesChannelLine from "./../Dashboard/SalesChannelLine";
import { useGetAllFormsQuery } from "./../../../redux/features/form/formapi";
import { useGetReviewsQuery } from "./../../../redux/features/review/reviewApi";
import { useGetAllOrdersQuery } from "./../../../redux/features/order/orderApi";


const OverViewHome = () => {
  const { data: formsData, isLoading: formsLoading } = useGetAllFormsQuery();
  const totalForms = formsData?.data?.length || 0;

  const { data, error, isLoading } = useGetAllUsersQuery();

  // Extract total users and user data
  const totalUsers = data ? data.total : "...";


  const { data: reviewsData, isLoading: reviewsLoading, error: reviewsError } = useGetReviewsQuery();
  const totalReviews = reviewsData?.length || 0;

  const {
    data: ordersData = [],
    isLoading: ordersLoading,
    isError: ordersError,
  } = useGetAllOrdersQuery();
const totalOrders = ordersData?.length || 0;
  return (

         <div className="  text-white shadow-lg rounded-lg p-6 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 text-white  gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatsCard
            name="Form Submitted"
  
            iconbgcolor="bg-[#ECF0F2]"
            icontxcolor="text-[#1F1F1F]"
            classNam="bg-[#13727A] pb-8 md:pb-0"
            fontsizz="text-[2rem]"
            subpart="Form Submitted"
            amount={formsLoading ? "Loading..." : totalForms}
          />
  <StatsCard
          name="New Users"
          userArea={<UserAreaView />}
          icon={<FaUserGroup />}
          iconbgcolor="bg-[#02B3A9]"
          icontxcolor="text-[#ECF0F2]"
          classNam="bg-[#32363E]"
          fontsizz="text-4xl"
          amount={isLoading ? "Loading..." : totalUsers}
        />

<StatsCard
          name="Total Reviews"
          icon={<AiTwotoneThunderbolt />}
          iconbgcolor="bg-[#02B3A9]"
          icontxcolor="text-[#ECF0F2]"
          classNam="bg-[#32363E] pb-8 md:pb-0 mx-auto"
          fontsizz="text-xl"
          amount={reviewsLoading ? "Loading..." : reviewsError ? "Error" : totalReviews}
        />
             <StatsCard
        name="Total Orders"
        icon={<GiNetworkBars />}
        iconbgcolor="bg-[#02B3A9]"
        icontxcolor="text-[#ECF0F2]"
        classNam="bg-[#32363E] pb-8 md:pb-0"
        fontsizz="text-xl"
        amount={ordersLoading ? "Loading..." : ordersError ? "Error" : `${totalOrders}`}
      />
          </div>
          <SalesOverview />

        </div>
        <SalesChannelLine/>
      </div>
 
  );
};

export default OverViewHome;

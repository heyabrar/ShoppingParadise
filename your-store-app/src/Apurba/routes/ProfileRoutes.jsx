import React from "react";
import { Route, Routes } from "react-router-dom";
import MyProfile from "../components/myProfile/MyProfile";
import MyWallet from "../components/myWallet/MyWallet";
import MyOrders from "../components/myOrders/MyOrders";

const ProfileRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MyProfile />} />
      <Route path='/MyProfile' element={<MyProfile />} />
      <Route path='/wallet' element={<MyWallet />} />
      <Route path='/orders' element={<MyOrders />} />
    </Routes>
  );
};

export default ProfileRoutes;

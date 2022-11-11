import React from "react";
import { Route, Routes } from "react-router-dom";
import Order from "../components/Order";
import MyProfile from "../components/myProfile/MyProfile";
import MyWallet from "../components/myWallet/MyWallet";

const ProfileRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MyProfile />} />
      <Route path='/MyProfile' element={<MyProfile />} />
      <Route path='/wallet' element={<MyWallet />} />
      <Route path='/order' element={<Order />} />
    </Routes>
  );
};

export default ProfileRoutes;

import React from "react";
import { Route, Routes } from "react-router-dom";
import MyProfile from "../components/MyProfile";
import Order from "../Pages/Order";
import Profile from "../Pages/Profile";

const ProfileRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MyProfile />} />
      <Route path='/MyProfile' element={<MyProfile />} />
      <Route path='/wallet' element={<h1>Wallet</h1>} />
      <Route path='/order' element={<Order />} />
    </Routes>
  );
};

export default ProfileRoutes;

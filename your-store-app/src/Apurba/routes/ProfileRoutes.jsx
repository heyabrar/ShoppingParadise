import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../Pages/Profile";

const ProfileRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Profile />} />
    </Routes>
  );
};

export default ProfileRoutes;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import MyAddresses from "./MyAddresses";
import ProfileAlert from "./ProfileAlert";
import ProfileCard from "./ProfileCard";

const MyProfile = () => {
  const {isAdmin} = useContext(AuthContext);
  console.log(isAdmin)
  return (
    <>
    <Link to={isAdmin ? '/adminside' : '/'}>{isAdmin ? 'Admin' : 'Home'}</Link>
      <ProfileAlert />
      <ProfileCard />
      <MyAddresses />;
    </>
  );
};

export default MyProfile;

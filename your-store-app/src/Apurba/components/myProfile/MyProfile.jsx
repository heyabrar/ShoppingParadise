import React from "react";
import MyAddresses from "./MyAddresses";
import ProfileAlert from "./ProfileAlert";
import ProfileCard from "./ProfileCard";

const MyProfile = () => {
  return (
    <>
      <ProfileAlert />
      <ProfileCard />
      <MyAddresses />;
    </>
  );
};

export default MyProfile;

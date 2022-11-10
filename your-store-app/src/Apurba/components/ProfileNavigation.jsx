import React from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoWalletOutline } from "react-icons/io5";
import { FiTruck } from "react-icons/fi";
import { AiFillCreditCard, AiFillHeart } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { Box, Button, VStack } from "@chakra-ui/react";

const ProfileNavigation = () => {
  return (
    <Box bg={"white"} p={4}>
      <VStack alignItems={"flex-start"}>
        <NavLink>
          <Button leftIcon={<CgProfile />} variant={"ghost"}>
            My Profile
          </Button>
        </NavLink>
        <NavLink>
          <Button leftIcon={<IoWalletOutline />} variant={"ghost"}>
            My Wallet
          </Button>
        </NavLink>
        <NavLink>
          <Button leftIcon={<FiTruck />} variant={"ghost"}>
            My Orders
          </Button>
        </NavLink>
        <NavLink>
          <Button leftIcon={<AiFillHeart />} variant={"ghost"}>
            My Wishlist
          </Button>
        </NavLink>
        <NavLink>
          <Button leftIcon={<AiFillCreditCard />} variant={"ghost"}>
            My Saved Payment
          </Button>
        </NavLink>
        <NavLink>
          <Button leftIcon={<CiLogout />} variant={"ghost"}>
            Log Out
          </Button>
        </NavLink>
      </VStack>
    </Box>
  );
};

export default ProfileNavigation;

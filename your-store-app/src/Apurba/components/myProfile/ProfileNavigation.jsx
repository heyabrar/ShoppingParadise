import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoWalletOutline } from "react-icons/io5";
import { FiTruck } from "react-icons/fi";
import { AiFillCreditCard, AiFillHeart } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { Box, Button, Flex, Icon, Link, VStack } from "@chakra-ui/react";
import { AuthContext } from "../../context/AuthContext";

const ProfileNavigation = () => {
  const { logout } = useContext(AuthContext);
  return (
    <Box bg={"white"} p={4}>
      <VStack alignItems={"flex-start"} gap={4} w={"200px"}>
        <Link
          as={NavLink}
          to={"/profile/myprofile"}
          _activeLink={{
            color: "#fc2779",
            fontWeight: "bold",
          }}
          _hover={{
            color: "#fc2779",
          }}
        >
          <Flex alignItems={"center"} gap={2}>
            <Icon as={CgProfile} />
            My Profile
          </Flex>
        </Link>
        <Link
          as={NavLink}
          to={"/profile/wallet"}
          _activeLink={{
            color: "#fc2779",
            fontWeight: "bold",
          }}
          _hover={{
            color: "#fc2779",
          }}
        >
          <Flex alignItems={"center"} gap={2}>
            <Icon as={IoWalletOutline} />
            My Wallet
          </Flex>
        </Link>
        <Link
          as={NavLink}
          to={"/profile/orders"}
          _activeLink={{
            color: "#fc2779",
            fontWeight: "bold",
          }}
          _hover={{
            color: "#fc2779",
          }}
        >
          <Flex alignItems={"center"} gap={2}>
            <Icon as={FiTruck} />
            My Orders
          </Flex>
        </Link>
        <Link
          as={NavLink}
          to={"/profile/wishlist"}
          _activeLink={{
            color: "#fc2779",
            fontWeight: "bold",
          }}
          _hover={{
            color: "#fc2779",
          }}
        >
          <Flex alignItems={"center"} gap={2}>
            <Icon as={AiFillHeart} />
            My Wishlist
          </Flex>
        </Link>
        <Link
          as={NavLink}
          to={"/profile/payments"}
          _activeLink={{
            color: "#fc2779",
            fontWeight: "bold",
          }}
          _hover={{
            color: "#fc2779",
          }}
        >
          <Flex alignItems={"center"} gap={2}>
            <Icon as={AiFillCreditCard} />
            My Saved Payment
          </Flex>
        </Link>
        <Link
          onClick={() => logout()}
          _activeLink={{
            color: "#fc2779",
            fontWeight: "bold",
          }}
          _hover={{
            color: "#fc2779",
          }}
        >
          <Flex alignItems={"center"} gap={2}>
            <Icon as={CiLogout} />
            Log Out
          </Flex>
        </Link>
      </VStack>
    </Box>
  );
};

export default ProfileNavigation;

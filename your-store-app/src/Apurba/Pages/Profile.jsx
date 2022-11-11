import { Box, Container, Flex, Heading, HStack, Icon } from "@chakra-ui/react";
import React from "react";
import ProfileNavigation from "../components/ProfileNavigation";
import { IoMdArrowBack } from "react-icons/io";
import ProfileCard from "../components/ProfileCard";
import ProfileAlert from "../components/ProfileAlert";
import MyAddresses from "../components/MyAddresses";

const Profile = () => {
  return (
    <Flex bg='gray.100' align='center' justify='center' py={10} minH={"100vh"}>
      <Container maxW={"container.lg"} mx={"20"}>
        <Flex gap={"8"}>
          <Box bg={"white"} p={4} h={"min-content"}>
            <ProfileNavigation />
          </Box>
          <Box w={"100%"}>
            <ProfileAlert />
            <ProfileCard />
            <MyAddresses />
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Profile;

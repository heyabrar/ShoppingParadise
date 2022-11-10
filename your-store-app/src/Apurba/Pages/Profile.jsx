import { Box, Container, Flex, Heading, HStack, Icon } from "@chakra-ui/react";
import React from "react";
import ProfileNavigation from "../components/ProfileNavigation";
import { IoMdArrowBack } from "react-icons/io";

const Profile = () => {
  return (
    <Flex bg='gray.100' align='center' justify='center' h='100vh'>
      <Container maxW={"container.lg"} mt={"10"}>
        <Flex gap={"8"}>
          <Box bg={"white"} p={4}>
            <ProfileNavigation />
          </Box>
          <Box></Box>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Profile;

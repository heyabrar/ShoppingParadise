import { Box, Container, Flex } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";

import ProfileRoutes from "../routes/ProfileRoutes";
import { useLocation, useNavigate } from "react-router-dom";
import ProfileNavigation from "../components/myProfile/ProfileNavigation";
import Navbar from "../../Abrar/Components/Navbar";
import Footer from "../../Abrar/Components/Footer";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    location.pathname == "/profile" && navigate("/profile/myprofile");
  });
  return (
    <>
      <Navbar />
      <Flex bg='gray.100' align='center' justify='center' py={10}>
        <Container maxW={"container.lg"} mx={"20"}>
          <Flex gap={"8"} direction={["column", "column", "column", "row"]}>
            <Box bg={"white"} p={4} h={"min-content"}>
              <ProfileNavigation />
            </Box>
            <Box w={"100%"}>
              <ProfileRoutes />
            </Box>
          </Flex>
        </Container>
      </Flex>

      <Footer />
    </>
  );
};

export default Profile;

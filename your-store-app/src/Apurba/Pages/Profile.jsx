import { Box, Container, Flex } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";

import ProfileRoutes from "../routes/ProfileRoutes";
import { useLocation, useNavigate } from "react-router-dom";
import ProfileNavigation from "../components/myProfile/ProfileNavigation";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    location.pathname == "/profile" && navigate("/profile/myprofile");
  });
  return (
    <>
      <Flex
        bg='gray.100'
        align='center'
        justify='center'
        py={10}
        minH={"100vh"}
      >
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
    </>
  );
};

export default Profile;

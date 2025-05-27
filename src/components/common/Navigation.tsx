import { NavLink, useNavigate } from "react-router-dom";
import { Box, Button, Flex, HStack, Image } from "@chakra-ui/react";
import logo from "@/assets/logo-dark.png";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <Box borderBottom="1px solid #80808033" w="full" background="transparent">
      <HStack justify="space-between" px={6} py={4} mt="2rem" w="full" h="87px">
        <Image
          src={logo}
          alt="Logo"
          onClick={() => navigate("/")}
          cursor="pointer"
        />

        <Flex
          justify="space-between"
          w="361px"
          color="dark.900"
          fontSize="18px"
          fontWeight="medium"
        >
          <NavLink className="nav-link" to="/about">
            About Us
          </NavLink>
          <NavLink className="nav-link" to="/news">
            News
          </NavLink>
          <NavLink className="nav-link" to="/careers">
            Careers
          </NavLink>
          <NavLink className="nav-link" to="/catering">
            Catering
          </NavLink>
        </Flex>

        <Button
          onClick={() => navigate("/contact")}
          bg="brand.900"
          className="text-white text-[18px] font-medium p-6 rounded-lg"
        >
          Contact Us
        </Button>
      </HStack>
    </Box>
  );
};

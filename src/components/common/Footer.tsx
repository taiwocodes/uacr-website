import { NavLink, useNavigate } from "react-router-dom";
import { Box, Flex, Heading, HStack, Image, Stack } from "@chakra-ui/react";
import dayjs from "dayjs";
import logo from "@/assets/logo/logoLight.png";

export const Footer = () => {
  const navigate = useNavigate();
  const currentYear = dayjs().year();

  return (
    <Box  bg="dark.900" w="full">
      <footer className="p-[3rem] w-screen">
        <Flex justify="space-between" align="start" wrap={{base: 'wrap', lg: 'revert'}}>
          <Image
            src={logo}
            alt="Logo"
            onClick={() => navigate("/")}
            cursor="pointer"
          />

          <HStack gap="5rem" align="start" wrap={{base: 'wrap', lg: 'revert'}}>
            {footerLinks.map((section) => (
              <Stack key={section.heading} gap={3}>
                <Heading fontSize="18px" color="white" fontWeight="bold" mb={2}>
                  {section.heading}
                </Heading>
                {section.links.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.to}
                    style={{ color: "#A6AEAE" }}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </Stack>
            ))}
          </HStack>
        </Flex>

        <Flex color="gray.70" justify="end" fontSize="sm" mt="7rem">
          Copyright UACR ©{currentYear}
        </Flex>
      </footer>
    </Box>
  );
};

const footerLinks = [
  {
    heading: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Our Restaurants", to: "/catering" },
      { label: "News & Media", to: "/news" },
      { label: "Careers", to: "/careers" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Center", to: "/help" },
      { label: "Terms of Service", to: "/terms" },
    ],
  },
  {
    heading: "Contact Us",
    links: [
      { label: "Twitter", to: "/twitter" },
      { label: "Facebook", to: "/facebook" },
      { label: "Instagram", to: "/ig" },
    ],
  },
];

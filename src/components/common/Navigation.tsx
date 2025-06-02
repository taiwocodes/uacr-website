import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Box, Button, HStack, IconButton, Image, useBreakpointValue, Stack, Drawer, Portal } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CloseButton } from "../ui/close-button";
import logo from "@/assets/logo/logoDark.png";

export const Navigation = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const NavLinks = (
    <>
      <NavLink className="nav-link border-b border-gray-300 pb-6 md:p-0 md:border-none" to="/about" onClick={()=>setOpen(false)}>
        About Us
      </NavLink>
      <NavLink className="nav-link border-b border-gray-300 py-6 md:p-0 md:border-none" to="/news" onClick={()=>setOpen(false)}>
        News
      </NavLink>
      <NavLink className="nav-link border-b border-gray-300 py-6 md:p-0 md:border-none" to="/careers" onClick={()=>setOpen(false)}>
        Careers
      </NavLink>
      <NavLink className="nav-link py-6 md:p-0" to="/catering" onClick={()=>setOpen(false)}>
        Catering
      </NavLink>
    </>
  );
  
  return (
    <Box borderBottom="1px solid #80808033" w="full" background="transparent">
      <HStack justifyContent="space-between" px={6} py={4} mt="2rem" w="full" h={{ lg: "87px" }}>
        <Image src={logo} alt="Logo" onClick={() => navigate("/")} cursor="pointer"/>
        {isMobile ? (
          <Drawer.Root size="full" open={open} onOpenChange={(e) => setOpen(e.open)}>
            <Drawer.Backdrop />
            <Drawer.Trigger>
              <IconButton variant="ghost" aria-label="Toggle Navigation">
                <RxHamburgerMenu />
              </IconButton>
            </Drawer.Trigger>

            <Portal>
            <Drawer.Positioner>
              <Drawer.Content pt={10}>
                <HStack justify="space-between">
                  <Image src={logo} alt="Logo" onClick={() =>{ navigate("/"); setOpen(false)}} cursor="pointer" pt={8} pl={3} />
                  <Drawer.CloseTrigger>
                    <CloseButton size='2xl'/>
                  </Drawer.CloseTrigger>
                </HStack>

                <Drawer.Body>
                  <Stack mt={10} p={5} fontWeight="medium" fontSize="18px">
                    {NavLinks}
                    <Button
                      onClick={() => { navigate("/contact"); setOpen(false) }}
                      bg="brand.900"
                      className="text-white text-[20px] font-medium p-6 rounded-lg"
                    >
                      Contact Us
                    </Button>
                  </Stack>
                </Drawer.Body>
              </Drawer.Content>
            </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        ) : (
          <>
            <HStack gap={8}>{NavLinks}</HStack>
            <Button
              onClick={() =>{ navigate("/contact"); setOpen(false)}}
              bg="brand.900"
              className="text-white text-[18px] font-medium p-6 rounded-lg"
            >
              Contact Us
            </Button>
          </>
        )}
      </HStack>
    </Box>
  );
};
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Box, Button, HStack, IconButton, Image, useBreakpointValue, Stack, Drawer, Portal, Popover, Flex, Text, Icon, Center } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CloseButton } from "../ui/close-button";
import logo from "@/assets/logo/logoDark.png";
import { navLinks } from "../../utils/data";
import { GoArrowUpRight } from "react-icons/go"
import { SubLink } from "../../utils/model";
import { useRef } from "react"


export const Navigation: React.FC<({ color: string })> = () => {

  const ref = useRef<HTMLButtonElement | null>(null)
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [activeLink, setActiveLink] = useState<SubLink[]>([]);


  const NavLinks = (
    <>
      {navLinks.map((link) => (
        <NavLink className="nav-link border-b text-[#222222] border-gray-300 pb-6 md:p-0 md:border-none" to={link.path ? link.path : "#"} key={link.path} onClick={() => { setOpen(link.subLinks ? true : false); setActiveLink(link.subLinks ?? []) }}>
          {link.title}
        </NavLink>))}

    </>
  );

  type Props = { links: SubLink[] };

  const NavBox = ({ links }: Props) => {
    return (<HStack> {links.map((link) => (
      <Flex
        key={link.path}
        bgImage={`url(${link.image})`}
        className="relative justify-center rounded-lg"
        bgRepeat="no-repeat"
        backgroundPosition="center"
        bgSize="cover"
        w='295px'
        h={'237px'}
      >
        <Flex
          w="96%"
          h="52px"
          color={'#FFFFFF'}
          className="absolute bg-[#ffffff54] shadow-sm rounded-md items-center justify-between px-4 bottom-3 backdrop:blur-[12px]"
        >
          <Flex justify={'center'} align={'center'}>
            <Image src={link.logo} className="rounded-full size-[29px]" />
            <Text ml={4}>{link.title}</Text>
          </Flex>
          <Center
            bg={'white'}
            onClick={() => navigate(link.path)}
            className="size-[22px] rounded-full cursor-pointer"
          >
            <Icon as={GoArrowUpRight} color="black" />
          </Center>
        </Flex>
      </Flex>
    ))}</HStack>);
  }

  return (
    <Box borderBottom="1px solid #80808033" w="100%" className="absolute px-4 border border-green-800-700  z-40" background="transparent">
      <HStack justifyContent="space-between" className="shadow-sm rounded-xl" bg={'white'} px={4} py={4} mt="2rem" w="full" h={{ lg: "87px" }}>
        <Image src={logo} alt="Logo" onClick={() => navigate("/")} cursor="pointer" />
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
                    <Image src={logo} alt="Logo" onClick={() => { navigate("/"); setOpen(false) }} cursor="pointer" pt={8} pl={3} />
                    <Drawer.CloseTrigger>
                      <CloseButton size='2xl' />
                    </Drawer.CloseTrigger>
                  </HStack>

                  <Drawer.Body>
                    <Stack mt={10} p={5} fontWeight="medium" fontSize="18px">
                      {NavLinks}
                      <Button
                        onClick={() => { navigate("/contact"); setOpen(false) }}
                        bg="brand.900"
                        className="text-white text-[20px] font-medium p-6 rounded-lg mt-10"
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
            <Popover.Root
              initialFocusEl={() => ref.current}
              positioning={{ offset: { crossAxis: 0, mainAxis: 0 } }} onInteractOutside={() => setOpen(false)} open={open}>
              <Popover.Trigger><HStack gap={8}>{NavLinks}</HStack></Popover.Trigger>
              <Portal>
                <Popover.Positioner>
                  <Popover.Content w={'full'} p={3}>
                    <Box className=" w-full  h-full"><NavBox links={activeLink} /></Box>
                  </Popover.Content>
                  <Popover.Arrow />
                </Popover.Positioner>
              </Portal>
            </Popover.Root>
            <Button
              onClick={() => { navigate("/contact"); setOpen(false) }}
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


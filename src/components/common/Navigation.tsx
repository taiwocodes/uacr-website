import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Box, Button, HStack, IconButton, Image, useBreakpointValue, Stack, Drawer, Portal, Popover, Flex, Text, Icon, Center, Collapsible } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CloseButton } from "../ui/close-button";
import logo from "@/assets/logo/logoDark.png";
import { navLinks } from "../../utils/data";
import { GoArrowUpRight } from "react-icons/go"
import { SubLink } from "../../utils/model";
import { useRef } from "react"
import aboutUs from "@/assets/images/about-nav-image.png"
import { TbCirclePercentageFilled } from "react-icons/tb"
import { BsChevronDown } from "react-icons/bs";


export const Navigation: React.FC<({ color: string })> = () => {

  const ref = useRef<HTMLButtonElement | null>(null)
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isAbout, setIsAbout] = useState(false)
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [activeLink, setActiveLink] = useState<SubLink[]>([]);


  const NavLinks = (
    <>
      {navLinks.map((link) => (

        <NavLink end={false} className="nav-link font-medium border-b text-[#222222] border-gray-300 pb-6 md:p-0 md:border-none" to={link.path ? link.path : "#"} key={link.path} onClick={(e) => { link.subLinks ? e.preventDefault() : null; setOpen(link.subLinks ? true : false); setActiveLink(link.subLinks ?? []); if (link.title === "About Us") setIsAbout(true); else setIsAbout(false) }}>
          {isMobile && link.subLinks ?
            <Collapsible.Root>
              <Collapsible.Trigger>{link.title}</Collapsible.Trigger>
              <Collapsible.Content>
                <Flex ml={2} color={'gray.90'} direction={'column'}>
                  {link.subLinks.map((link) => (
                    <Link to={link.path} onClick={() => { setOpen(false); setActiveLink([]) }} className="my-2" color="gray.90">{link.title}</Link>
                  ))}
                </Flex>
              </Collapsible.Content>
            </Collapsible.Root> : <HStack>{link.title} {link.subLinks && <BsChevronDown />}</HStack>}
        </NavLink>

      ))}

    </>
  );

  type Props = { links: SubLink[] };

  const NavBox = ({ links }: Props) => {
    if (isAbout)
      return (
        <HStack color={'black'}>
          <Box px={3}>
            {links.map((link) => (
              <Link to={link.path} onClick={() => setOpen(false)} className="flex bg-[#F3F5FB] w-[343px] items-center my-3 p-2 rounded-lg">
                <Center className="p-2 rounded-md bg-[#C80104] mr-2"><TbCirclePercentageFilled size={'15px'} color="white" /></Center>
                <Text>{link.title}</Text>
              </Link>
            ))}</Box>
          <Center className="p-3 w-full h-full bg-[#F3F5FB]">
            <Image src={aboutUs} className="relative justify-center rounded-lg" w='295px' h={'237px'} />
          </Center> </HStack>
      )

    else
      return (
        <HStack p={4}> {links.map((link) => (
          <Flex
            key={link.path}
            bgImage={`url(${link.image})`}
            className="relative justify-center rounded-lg"
            bgRepeat="no-repeat"
            backgroundPosition="center"
            bgSize="cover"
            w='295px'
            h={'237px'}
            onClick={() => { setOpen(false); setActiveLink([]); navigate(link.path) }}
            _hover={{ cursor: 'pointer' }}
          >
            {link.title === 'Ice Cream' && <Center bg={'#C80104'} className="p-3 absolute right-2 top-2 rounded-lg w-[112px] h-[50px] text-white">Coming Soon</Center>}
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
        )
        )}</HStack>);
  }

  return (
    <Box w="100%" className="absolute px-6 z-40" background="transparent">
      <HStack justifyContent={{ base: 'space-between', lg: "start" }} className="shadow-sm rounded-xl" bg={{ base: 'transparent', lg: 'white' }} px={4} py={4} mt="24px" w="full" h={{ lg: "87px" }}>
        <Image src={logo} alt="Logo" mr={20} onClick={() => navigate("/")} cursor="pointer" />
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
                <Drawer.Content bg={'white'} pt={10}>
                  <HStack justify="space-between">
                    <Image src={logo} alt="Logo" onClick={() => { navigate("/"); setOpen(false) }} cursor="pointer" pt={8} pl={3} />
                    <Drawer.CloseTrigger color={'black'}>
                      <CloseButton size='2xl' />
                    </Drawer.CloseTrigger>
                  </HStack>

                  <Drawer.Body>
                    <Stack mt={10} p={5} fontWeight="medium" fontSize="18px">
                      {NavLinks}
                      <Button
                        onClick={() => { navigate("/contact"); setOpen(false) }}
                        bg="brand.100"
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
          <Flex w={'100%'} justifyContent={'space-between'}>
            <Popover.Root
              initialFocusEl={() => ref.current}
              positioning={{ offset: { crossAxis: 5, mainAxis: 5 } }} onInteractOutside={() => setOpen(false)} open={open}>
              <Popover.Trigger><HStack gap={8}>{NavLinks}</HStack></Popover.Trigger>
              <Portal>
                <Popover.Positioner>
                  <Popover.Content bg={'white'} w={'full'} roundedBottom={'2xl'} roundedTop={'none'}>
                    <Box className=" w-full h-full"><NavBox links={activeLink} /></Box>
                  </Popover.Content>
                  <Popover.Arrow />
                </Popover.Positioner>
              </Portal>
            </Popover.Root>
            <Button
              onClick={() => { navigate("/contact"); setOpen(false) }}
              bg="brand.100"
              className="text-white text-[18px] font-medium p-6 rounded-lg"
            >
              Contact Us
            </Button>

          </Flex>
        )}

      </HStack>

    </Box >
  );
};


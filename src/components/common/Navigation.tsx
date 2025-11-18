import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Box, Button, HStack, IconButton, Image, useBreakpointValue, Stack, Portal, Popover, Flex, Text, Icon, Center, Collapsible, Accordion } from "@chakra-ui/react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import logo from "@/assets/logo/logoDark.png";
import { navLinks } from "../../utils/data";
import { GoArrowUpRight } from "react-icons/go"
import { SubLink } from "../../utils/model";
import { useRef } from "react"
import aboutUs from "@/assets/images/about-nav-image.png"
import { TbCirclePercentageFilled } from "react-icons/tb"
import { BsChevronDown, BsChevronUp } from "react-icons/bs";


export const Navigation: React.FC<({ color: string })> = () => {

  const ref = useRef<HTMLButtonElement | null>(null)
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isAbout, setIsAbout] = useState(false)
  const [isExpanded, setIsExpanded] = useState(['']);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [activeLink, setActiveLink] = useState<SubLink[]>([]);


  const NavLinks = (
    <>
      {isMobile ?
        <Accordion.Root onValueChange={(e) => setIsExpanded(e.value)} className="lg:flex lg:gap-6" collapsible>
          {navLinks.map((link) => (
            <NavLink end={false} className="lg:nav-link font-semibold border-b text-[#222222] border-[#F3F5FB] py-5 lg:py-0 lg:pb-0 md:p-0 md:border-none" to={link.path ? link.path : "#"} key={link.path}
              onClick={(e) => {
                link.subLinks ? e.preventDefault() : null;
                {
                  !isMobile && setOpen(link.subLinks ? true : false);
                  !isMobile && setActiveLink(link.subLinks ?? []);
                }
                if (link.title === "About Us") setIsAbout(true);
                else setIsAbout(false)
              }}>
              {link.subLinks ?
                <Accordion.Item className="border-b text-[#222222] border-[#F3F5FB] py-5 lg:py-0" value={link.title}>
                  <Accordion.ItemTrigger>
                    <HStack w={'full'} justifyContent={'space-between'} color={'brand.100'}><Text>{link.title}</Text>{link.subLinks && !isExpanded.includes(link.title) ? <BsChevronDown /> : <BsChevronUp />}</HStack></Accordion.ItemTrigger>
                  <Accordion.ItemContent>
                    <Flex color={'gray.90'} direction={'column'}>
                      {link.subLinks.map((link) => (
                        <HStack key={link.title} onClick={() => { setOpen(false); setActiveLink([]); navigate(link.path); }} className="my-4 flex items-center " color={'gray.90'}>
                          <IconButton bg={'brand.100'} mr={3} color={'white'}>{link.icon}</IconButton><Text>{link.title}</Text>
                        </HStack>
                      ))}
                    </Flex>
                  </Accordion.ItemContent>
                </Accordion.Item>
                : <HStack onClick={() => { setOpen(false); setActiveLink([]) }} color={'brand.100'} className=" font-semibold border-b  border-[#F3F5FB] py-5 lg:py-0 md:p-0 md:border-none" >{link.title}</HStack>}
            </NavLink>
          ))}
        </Accordion.Root> :
        navLinks.map((link) => (
          <NavLink end={false} className="nav-link font-semibold border-b text-[#222222] border-[#F3F5FB] py-5 lg:py-0 lg:pb-0 md:p-0 md:border-none" to={link.path ? link.path : "#"} key={link.path}
            onClick={(e) => {
              link.subLinks ? e.preventDefault() : null;
              setOpen(link.subLinks ? true : false);
              setActiveLink(link.subLinks ?? []);
              if (link.title === "About Us") setIsAbout(true);
              else setIsAbout(false)
            }}><HStack>{link.title} {link.subLinks && <BsChevronDown />}</HStack>
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
    <Box w="100%" px={{ lg: 6 }} className={`absolute ${isMobile ? open ? 'px-0 transition-[padding] delay-1000 ease-in-out' : 'px-6 transition-[padding] delay-1000 ease-in-out' : 'px-6'} z-40`} background="transparent">
      <Stack
        className={`nav ${isMobile ? open ? 'open' : '' : ''} shadow-sm`}
        direction={{ base: 'column', lg: 'row' }}
        justifyContent={"start"}
        rounded={{ lg: 'xl' }}
        bg={'white'}
        px={{ lg: 6 }}
        py={{ lg: 4 }}
        mt={{ lg: "24px" }}
        w={{ lg: "full" }}
        h={{ lg: "87px" }}
      >
        <HStack className={`${isMobile ? open ? 'p-0 ' : 'p-4 transition-[padding] delay-1000 ease-in-out' : 'p-4'}`} p={{ base: open ? 4 : 0, lg: 4 }} justifyContent={'space-between'}>
          <Image src={logo} alt="Logo" mr={20} onClick={() => navigate("/")} cursor="pointer" />
          <IconButton display={{ base: 'inline', lg: 'none' }} onClick={() => setOpen(!open)} variant="ghost" w={'fit'} aria-label="Toggle Navigation">
            {open ? <RxCross1 /> : <RxHamburgerMenu color="gray" />}
          </IconButton>
        </HStack>
        {isMobile ? (
          <Box w={'full'} visibility={open ? 'initial' : 'hidden'} className={` ${open ? '' : 'absolute -z-20'}`} px={open ? 4 : 0} bg={open ? 'white' : 'none'} rounded={open ? 'none' : 'xl'} >
            <Box w={'full'} h={'full'} bg={'white'} pt={2}>
              <Stack mt={0} px={5} fontWeight="medium" fontSize="18px">
                {NavLinks}
                <Button
                  onClick={() => { navigate("/contact"); setOpen(false) }}
                  bg="brand.100"
                  className="text-white text-[20px] font-medium p-6 rounded-lg mt-10"
                >
                  Contact Us
                </Button>
              </Stack>
            </Box>
          </Box>
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

      </Stack>

    </Box >
  );
};


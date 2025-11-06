import { Link, NavLink, useNavigate } from "react-router-dom";
import { Box, Flex, Grid, Image, Span, Stack, Text, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import logo from "@/assets/logo/logoLight.png";
import footerBg from '@/assets/images/footer-bg.jpg'
import { BsArrowUpRight } from "react-icons/bs";

export const Footer = () => {
  const navigate = useNavigate();
  const currentYear = dayjs().year();

  return (
    <Box bg="dark.900" w="full">
      <footer className="p-[1.2rem] md:p-[3rem] w-screen">
        <Flex justify="space-between" align="start" wrap={{ base: 'wrap', lg: 'revert' }}>
          <Box>
            <Image
              src={logo}
              alt="Logo"
              onClick={() => navigate("/")}
              cursor="pointer"
            />
            <Grid templateColumns={{ lg: 'repeat(2,1fr)' }} className="mt-10" key={footerLinks[0].heading} gapY={1} gapX={3}>
              {footerLinks[0].links.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  style={{ color: "white", fontWeight: '500' }}
                  className={'text-xl'}
                >
                  {link.label}  <Text color={'gray.90'} className="inline mx-1">/</Text>
                </NavLink>
              ))}
            </Grid>

            <Text color={'gray.90'} className="mt-5 text-sm ">{footerLinks[1].heading}</Text>
            <Grid templateColumns={{ lg: 'repeat(2,1fr)' }} className="mt-0" key={footerLinks[1].heading} gapY={0} gapX={3}>
              {footerLinks[1].links.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  style={{ color: "#A6AEAE" }}
                >
                  {link.label} /
                </NavLink>
              ))}
            </Grid>
          </Box>
          <Box>
            <Text color={'gray.90'} className="mt-5 text-sm ">{footerLinks[2].heading}</Text>
            <Text fontWeight={'bold'} fontSize={'22px'}>+234 815 8991 518</Text>
            <VStack className="mt-4" align="start" key={footerLinks[2].heading} gapY={1} gapX={0}>
              {footerLinks[2].links.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  style={{ color: "#A6AEAE" }}
                  className={'flex justify-start items-center'}
                >
                  <Text color={'#3C403C'} mx={2}>{link.label}</Text> <Text>{link.title}</Text>
                </NavLink>
              ))}
            </VStack>
            <Stack direction={{ base: 'column', lg: 'row' }} mt={{ base: 5, lg: 12 }} gap={10}>
              <Span w={'224px'}>
                <Text color={'gray.90'} className="mt-5 text-sm" >Location</Text>
                <Text color={'#ADB3AB'}>Km 16 Ikorodu Rd, Ojota, Lagos 101233, Lagos</Text>
              </Span>
              <Span w={'224px'}>
                <Text color={'gray.90'} className="mt-0 lg:mt-5 text-sm ">Email</Text>
                <Text color={'#ADB3AB'}>info@uacrestaurants.com</Text>
              </Span>
            </Stack>

            <Span w={'224px'}>
              <Text color={'gray.90'} className="mt-5 text-sm ">Mo—Fr</Text>
              <Text color={'#ADB3AB'} fontSize={'22px'}>9am—6pm</Text>
            </Span>

            <Flex color="gray.70" justify={"start"} fontSize="sm" mt="7rem">
              Copyright UACR ©{currentYear}
            </Flex>
          </Box>
        </Flex>

        <Flex p={'55px'} mt={8} rounded={'2xl'} justify={'space-between'} align={'center'} bgImage={`url(${footerBg})`} bgSize="cover" bgRepeat="no-repeat" >
          <Text w={'132px'} fontWeight={'bold'} fontSize={'22px'}>Explore Restaurants</Text>
          <Link to={'/'}>
            <BsArrowUpRight size={'21px'} />
          </Link>
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
      { label: "TW", title: '/uacrestaurants', to: "/twitter" },
      { label: "FB", title: '/uacrestaurants', to: "/facebook" },
      { label: "IG", title: '/uacrestaurants', to: "/ig" },
    ],
  },
];
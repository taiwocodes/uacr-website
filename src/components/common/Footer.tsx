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
            <Text color={'gray.90'} className="mt-5 text-sm ">Contact Us</Text>
            <Text fontWeight={'bold'} color={'white'} fontSize={'22px'}>07007774992</Text>
            <Stack direction={{ base: 'column', lg: 'row' }} mt={{ base: 5, lg: 12 }} gap={10}>
              <Span w={'224px'}>
                <Text color={'gray.90'} className="mt-5 text-sm" >Location</Text>
                <Text color={'#ADB3AB'}>139 Ogudu Road, Ogudu, Lagos</Text>
              </Span>
              <Span w={'224px'}>
                <Text color={'gray.90'} className="mt-0 lg:mt-5 text-sm ">Email</Text>
                <Text color={'#ADB3AB'}>customercare@uacrestaurants.com</Text>
              </Span>
            </Stack>

            <Span w={'224px'}>
              <Text color={'gray.90'} className="mt-5 text-sm ">Hours: Mo - Fr</Text>
              <Text color={'#ADB3AB'} fontSize={'22px'}>9am - 6pm</Text>
            </Span>

            <Flex color="gray.70" justify={"start"} fontSize="sm" mt={{ base: '3rem', lg: "7rem" }}>
              Copyright UACR ©{currentYear}
            </Flex>
          </Box>
        </Flex>
        <Flex p={'55px'} color={'white'} mt={8} rounded={'2xl'} justify={'space-between'} align={'center'} bgImage={`url(${footerBg})`} bgSize="cover" bgRepeat="no-repeat" >
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
    heading: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  },
];
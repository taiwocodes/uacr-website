import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  HStack,
  Center
} from "@chakra-ui/react";

import mrBiggsLogo from "@/assets/images/mrbiggs-logo.png";
import debonairsLogo from "@/assets/images/debonairs-logo.png";
import iceCreamLogo from "@/assets/images/ice-cream-logo.png";
import bgMrBiggs1 from "@/assets/images/nav-images/mrbiggs-nav-image.png"
import bgDebonairs from "@/assets/images/nav-images/debonairs-nav-image.png"

import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <Box className=" relative mt-12 py-10 h-[50rem]">
      <Flex direction={'column'} className=" justify-center lg:items-center place-self-center mt-10 absolute w-[100%] px-3 top-0 z-10 py-10 ">
        <HStack className="pl-5 ">
          <Center w={'36px'} marginLeft={'-20px'}>
            <Image src={mrBiggsLogo} className="rounded-full border-l-2 border-yellow-400" />
          </Center>
          <Center w={'36px'} marginLeft={'-20px'}>
            <Image src={debonairsLogo} className="rounded-full border-l-2 border-yellow-400" />
          </Center>
          <Center w={'60px'} marginLeft={'-20px'}>
            <Image src={iceCreamLogo} />
          </Center>
        </HStack>

        <Heading fontWeight="bold" className=" text-[2rem] mt-3">UAC Restaurants</Heading>

        <Box w="100%" overflowX={{ lg: "auto" }} overflowY={{ lg: "hidden" }} className="lg:mx-6" whiteSpace="nowrap" py={6} px={{ base: 0, lg: 4 }}>
          <Flex direction={{ base: "column", lg: "row" }} gap={7} color="white" justifyContent="space-between" className=" mt-4 lg:mt-10 mx-2 lg:mx-10">
            <Flex flex={{ lg: "0 0 auto" }} direction="column" w={{ base: 'full', lg: '900px' }} h={{ base: '328px', lg: '498px' }} className=" p-2 lg:p-4  relative items-center  justify-end rounded-lg">
              <Image className="absolute inset-0 -z-10 size-full rounded-lg" src={bgMrBiggs1} />
              <HStack gap={{ base: '10rem', lg: "2rem" }} className="bg-[#FFFFFF4D]  w-full rounded-2xl p-2 lg:p-3">
                <Box className="flex items-center">
                  <Image className="border-l-2 border-yellow-300 size-12 lg:size-16 rounded-full" src={mrBiggsLogo} />
                  <Text className="text-2xl lg:text-3xl font-bold ml-1 lg:ml-2">Mr Biggs</Text>
                </Box>
                <Box className="flex max-w-[597px] justify-between items-center">
                  <Text display={{ base: 'none', lg: 'block' }} lineClamp={{ base: 'none', lg: 2 }} >Mr Bigg’s is Nigeria’s pioneer QSR brand, renowned for its delicious meals and freshly baked pastries. We have grown over the years, constantly re-inventing our services, to match the ever-evolving needs of our customers.
                  </Text>
                  <Center className="rounded-full bg-white size-6 lg:size-9 lg:ml-4 text-black text-[6px] lg:text-[1rem] "><Link to="/mrbiggs"><GoArrowUpRight className="size-[10px] lg:size-5 " /></Link></Center>
                </Box>
              </HStack>
            </Flex>
            <Flex direction="column" flex={{ lg: "0 0 auto" }} w={{ base: 'full', lg: '900px' }} h={{ base: '328px', lg: '498px' }} className="p-2 lg:p-4   mr-10 relative justify-end items-center rounded-lg">
              <Image className="absolute inset-0 -z-10 size-full rounded-lg" src={bgDebonairs} />
              <HStack gap={"4rem"} className="bg-[#FFFFFF4D] w-full rounded-2xl p-3">
                <Box className="flex items-center">
                  <Image className="border-l-2 border-yellow-300 size-12 lg:size-16 rounded-full" src={debonairsLogo} />
                  <Text className="text-2xl lg:text-3xl font-semibold lg:font-bold ml-1 lg:ml-2">Debonairs Pizza</Text>
                </Box>
                <Box className="flex max-w-[597px] justify-between items-center">
                  <Text display={{ base: 'none', lg: 'block' }} lineClamp={{ base: 'none', lg: 2 }} textOverflow={'ellipsis'}>Debonairs Pizza is one of the leading restaurants in Africa, well known for its amazing pizza. We have become a local favorite with our wide range of delicious pizzas, abundant toppings and incredible pizza deals. </Text>
                  <Center className="lg:ml-4 rounded-full size-6 lg:size-[34px] bg-white text-black "><Link to="/debonairs"><GoArrowUpRight className="size-[10px] lg:size-5" /></Link></Center>
                </Box></HStack>
            </Flex>
            <Flex h={'238px'} w={10} className="" />
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
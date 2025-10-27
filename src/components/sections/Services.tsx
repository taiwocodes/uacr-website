import {
  Box,
  Button,
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
import bgMrBiggs1 from "@/assets/images/bg-mrbiggs.jpg"
import bgDebonairs from "@/assets/images/bg-debonairs.jpg"

import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <Box className="relative mt-12 py-10 h-[40rem]">
      <Flex direction={'column'} className=" justify-center items-center place-self-center mt-10 absolute w-[100%] top-0 z-10 px-16 py-10 ">
        <HStack>
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

        <Heading fontWeight="bold" className="text-[2rem] mt-3">UAC Restaurants</Heading>
        <HStack gap="1.9rem" color="white" justifyContent="space-between" className="mt-10">
          <Flex direction="column" w="47%" h="23rem" className="p-4 relative items-end justify-between rounded-lg bg-black bg-opacity-50 ">
            <Image className="absolute inset-0 -z-10 size-[100%] rounded-lg" src={bgMrBiggs1} />
            <HStack gap="1.9rem">
              <Box className="flex items-center">
                <Image className="border-l-2 border-yellow-300 rounded-full" src={mrBiggsLogo} />
                <Text className="text-xl font-bold ml-2">Mr Biggs</Text>
              </Box>
              <Box className="flex justify-between items-center">
                <Text w="30rem">Mr Bigg’s is Nigeria’s pioneer QSR brand, renowned for its delicious meals and freshly baked pastries. We have grown over the years, constantly re-inventing our services, to match the ever-evolving needs of our customers.
                </Text>
                <Button className="rounded-full bg-white text-black "><Link to="/mrbiggs"><GoArrowUpRight /></Link></Button>
              </Box>
            </HStack>
          </Flex>
          <Flex direction="column" w="47%" h="23rem" className="p-4 relative justify-between rounded-lg bg-black bg-opacity-50  ">
            <Image className="absolute inset-0 -z-10 size-full rounded-lg" src={bgDebonairs} />
            <Box className="flex items-center">
              <Image className="border-l-2 border-yellow-300 rounded-full" src={debonairsLogo} />
              <Text className="text-xl font-bold ml-2">Debonairs Pizza</Text>
            </Box>
            <Box className="flex justify-between items-center">
              <Text w="30rem">Debonairs Pizza is one of the leading restaurants in Africa, well known for its amazing pizza. We have become a local favorite with our wide range of delicious pizzas, abundant toppings and incredible pizza deals. </Text>
              <Button className="rounded-full bg-white text-black "><Link to="/debonairs"><GoArrowUpRight /></Link></Button>
            </Box>
          </Flex>
        </HStack>
      </Flex>
    </Box>
  )
}
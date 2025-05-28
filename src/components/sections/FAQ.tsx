import {
  Box,
  Flex,
  Image,
  VStack,
  Text,
  Span,
  HStack,
  Collapsible
} from "@chakra-ui/react";

import bgStar3 from "@/assets/images/bg-design-images/bg-star3.png"
import bgLine2 from "@/assets/images/bg-design-images/bg-line2.png";
import restaurantBg from "@/assets/images/restaurant-image.png"

import { GoChevronDown } from "react-icons/go";

export const FAQ = () =>{
    return(<>
    <Flex w="full" h="20rem" justifyContent="space-between" alignItems="center" className="px-16" >
            <Box w="25rem" >
              <Text className="text-[2.5rem] font-bold ">We are Growing</Text>
              <Text color="gray.70" className="font-medium text-[20px]">Our Goal is to build and grow a portfolio of distinct and highly valued restaurants.</Text>
            </Box>
            <HStack gap={5}>
              <Span className="bg-[#F3F5FBB2] py-5 px-7 rounded-lg flex flex-col justify-center items-center">
                <Text color="brand.100" fontSize="3xl" fontWeight="semibold">61+</Text>
                <Text color="gray.70">Restaurants</Text>
              </Span>
              <Span className="bg-[#F3F5FBB2] py-5 px-7 rounded-lg flex flex-col justify-center items-center">
                <Text color="brand.100" fontSize="3xl" fontWeight="semibold">40+</Text>
                <Text color="gray.70">Franchaise Stores</Text>
              </Span>
              <Span className="bg-[#F3F5FBB2] py-5 px-7 rounded-lg flex flex-col justify-center items-center">
                <Text color="brand.100" fontSize="3xl" fontWeight="semibold">14</Text>
                <Text color="gray.70">States</Text>
              </Span>
              <Span className="bg-[#F3F5FBB2] py-5 px-7 rounded-lg flex flex-col justify-center items-center">
                <Text color="brand.100" fontSize="3xl" fontWeight="semibold">900+</Text>
                <Text color="gray.70">Team Members</Text>
              </Span>
              </HStack>
          </Flex>
          <Box className="relative mt-10 mb-32">
            <Image src={bgLine2} />
            <Image src={bgStar3} className="absolute right-0 -z-10" />
            <Flex w="full" justifyContent="space-around" alignItems="end" className="absolute p-10 px-0 top-0">
              <Box>
                <Text color="#6F7777">Do you have any questions?</Text>
                <Text fontSize="2.5rem" fontWeight="bold" mb="1rem">Frequently Asked Questions</Text>
                <Image src={restaurantBg} className="rounded-lg" w="35rem" h='25rem' />
              </Box>
              <VStack>
              {FAQs.map((FAQ) => (
              <Collapsible.Root bg="#F3F5FB" w="40rem" className="items-end p-5 rounded-lg">
                <Collapsible.Trigger className="flex w-full justify-between items-center" color="dark.900" fontSize="18px">{FAQ.question} <GoChevronDown size="1.5rem" /></Collapsible.Trigger>
                <Collapsible.Content color="gray.70" fontSize="16px" className="mt-2">{FAQ.answer}</Collapsible.Content>
              </Collapsible.Root>))}
              </VStack>
            </Flex>
          </Box></>)
}

const FAQs = ([
  {question:"Do you accommodate food allergies?", answer:"Yes! Notify your server, and we’ll customize your meal. (Severe allergies? Let us know for extra precautions."},
  {question:"What are your operating hours?", answer:"Yes! Notify your server, and we’ll customize your meal. (Severe allergies? Let us know for extra precautions."},
  {question:"Do you take walk-ins, or is reservation required?", answer:"Yes! Notify your server, and we’ll customize your meal. (Severe allergies? Let us know for extra precautions."},
  {question:"Where are you located? Is there parking available?", answer:"Yes! Notify your server, and we’ll customize your meal. (Severe allergies? Let us know for extra precautions."},
  {question:"Do you accommodate food allergies?", answer:"Yes! Notify your server, and we’ll customize your meal. (Severe allergies? Let us know for extra precautions."},
])
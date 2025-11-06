import {
  Box,
  Flex,
  Image,
  Text,
  Span,
  Button,
  Grid
} from "@chakra-ui/react";

import bgExplore from '@/assets/images/bg-explore/61-restaurants.png';
import bgExplore2 from '@/assets/images/bg-explore/40-franchaise.png';
import bgExplore3 from '@/assets/images/bg-explore/14-states.png';
import bgExplore4 from '@/assets/images/bg-explore/900-team.png';
import exploreBg from '@/assets/images/bg-explore/explore-bg.png';


export const FAQ = () => {
  return (<>
    <Box w="full" h={{ base: '55rem', lg: "60rem" }} justifyContent="space-between" alignItems="center" className=" px-3 lg:px-16 py-10" >
      <Flex direction={{ base: 'column', lg: 'row' }} justifyContent='space-between' mb={5} alignItems={{ base: 'start', lg: "center" }}>
        <Box w={{ base: "full", lg: "25rem" }} >
          <Text className="text-[2.5rem] font-bold mb-3 ">We Are Growing</Text>
          <Text color="gray.70" className="font-medium text-[20px]">Our Goal is to build and grow a portfolio of distinct and highly valued restaurants.</Text>
        </Box>
        <Button bg="brand.100" className=" my-4 lg:my-0 text-white py-5 px-7 rounded-lg">Explore Restaurants</Button>
      </Flex>
      <Image className="w-full h-[249px] rounded-2xl lg:h-[504px]" src={exploreBg} />
      <Grid templateColumns={{ base: 'repeat(2,1fr)', lg: 'repeat(4,1fr)' }} className="mt-5" gap={5}>
        <Span bg={`url(${bgExplore})`} className="py-5 px-7  rounded-lg flex flex-col justify-center w-[100%]">
          <Text color="white" fontSize={{
            base: '32px', lg: "46px"
          }} fontWeight="semibold">61+</Text>
          < Text fontSize={{ base: '16px', lg: '20px' }} color="white" > Restaurants</Text>
        </Span>
        <Span bg={`url(${bgExplore2})`} className=" py-5 px-7 rounded-lg flex flex-col justify-center w-[100%]">
          <Text color="brand.100" fontSize={{
            base: '32px', lg: "46px"
          }} fontWeight="semibold">40+</Text>
          < Text fontSize={{ base: '16px', lg: '20px' }} color="brand.100" > Franchaise Stores</Text>
        </Span>
        <Span bg={`url(${bgExplore3})`} className=" py-5 px-7 rounded-lg flex flex-col justify-center w-[100%]">
          <Text color="white" fontSize={{
            base: '32px', lg: "46px"
          }} fontWeight="semibold">14</Text>
          < Text fontSize={{ base: '16px', lg: '20px' }} color="white" > States</Text>
        </Span >
        <Span bg={`url(${bgExplore4})`} className=" py-5 px-7 rounded-lg flex flex-col justify-center w-[100%]">
          <Text color="black" fontSize={{
            base: '32px', lg: "46px"
          }} fontWeight="semibold">900+</Text>
          < Text fontSize={{ base: '16px', lg: '20px' }} color="black" > Team Members</Text>
        </Span >
      </Grid >
    </Box >
    {/*<Box className="relative mt-10 mb-32">
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
    </Box>*/}
  </>)
}


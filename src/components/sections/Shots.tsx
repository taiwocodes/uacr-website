import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Span,
  Stack,
} from "@chakra-ui/react";

import bgLine5 from "@/assets/images/bg-line.png";
import eatingImage2 from "@/assets/images/eating-image2.png"
import Shots2 from "@/assets/images/shots-2.png";
import Shots4 from "@/assets/images/shots-4.png";
import restaurantImage from "@/assets/images/shots-1.png";
import Shots3 from "@/assets/images/shots-3.png"


export const Shots = () => {
  return (
    <>
      <Box h={{ base: "110rem", lg: "50rem" }} className="relative  py-1">
        <Flex direction="column" justify='center' className="absolute top-0 py-20 px-3 lg:px-16 items-center">
          <Flex direction={{ base: 'column', lg: 'row' }} className="mb-5">
            <Flex direction="column" justifyContent="space-between" w={{ base: 'full', lg: "20rem" }} className=" h-[240px] mb-4 lg:mb-0 lg:h-auto shadow-lg rounded-lg p-4 " bg="white">
              <Span><Text color="gray.90">See us from our lens</Text>
                <Text fontSize="2rem" fontWeight="bold">Shots of us</Text></Span>
              <Text color="gray.90" >Step into our world through the moments we’ve captured.</Text>
            </Flex>
            <Image w={{ base: 'full', lg: "62rem" }} h="20rem" className="rounded-lg lg:ml-5" src={restaurantImage} />
          </Flex>
          <Stack direction={{ base: 'column', lg: 'row' }} gap={5}>
            <Image w={{ base: 'full', lg: "27rem" }} h="20rem" className="rounded-lg" src={Shots2} />
            <Image w={{ base: 'full', lg: "27rem" }} h="20rem" className="rounded-lg" src={Shots3} />
            <Image w={{ base: 'full', lg: "27rem" }} h="20rem" className="rounded-lg" src={Shots4} />
          </Stack>
        </Flex>
      </Box>
      <Flex className="relative justify-center px-3 lg:px-16 py-16">
        <Flex direction={{ base: 'column', lg: 'row' }} bg="dark.900" w="full" h={{ base: "40rem", lg: "25rem" }} alignItems="center" justifyContent="space-between" className="rounded-2xl overflow-hidden p-6 pb-0 lg:p-0">
          <Box color="white" className="lg:ml-16">
            <Text fontSize="2rem" fontWeight="bold">Become a Partner in Success</Text>
            <Text w={{ base: 'full', lg: "25rem" }} className="mb-5">Grow your business while elevating ours – let’s create excellence together.</Text>
            <Button bg={'brand.100'} className=" p-4 rounded-md">Register</Button>
          </Box>
          <Box className="relative w-[545px]" h="100%">
            <Image w={'full'} src={bgLine5} />
            <Image src={eatingImage2} className="absolute rounded-r-lg lg:right-0 bottom-0" />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}
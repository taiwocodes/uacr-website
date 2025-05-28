import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Span,
  HStack,
} from "@chakra-ui/react";

import bgStar5 from "@/assets/images/bg-design-images/bg-star5.png"
import bgLine4 from "@/assets/images/bg-design-images/bg-line4.png";
import bgLine5 from "@/assets/images/bg-design-images/bg-line5.png";
import eatingImage2 from "@/assets/images/eating-image2.png"
import riceImage from "@/assets/images/rice-image.jpg";
import pizzaImage from "@/assets/images/pizza-image.jpg";
import restaurantImage from "@/assets/images/restaurant-image2.jpg";
import meatpieImage from "@/assets/images/meatpie-image.jpg"


export const Shots = () => {
  return (
    <>
      <Box h="55rem" className="relative pt-10">
        <Image src={bgStar5} className="absolute top-10 left-5" />
        <Image src={bgLine4} className="absolute bottom-0 right-0" />
        <Flex direction="column" justify='center' className="absolute top-0 py-20 px-16 items-center">
          <Flex className="mb-5">
            <Flex direction="column" justifyContent="space-between" w="20rem" className=" shadow-lg rounded-lg p-4 " bg="white">
              <Span><Text color="gray.90">See us from our lens</Text>
                <Text fontSize="2rem" fontWeight="bold">Shots of us</Text></Span>
              <Text color="gray.90" >Step into our world through the moments we’ve captured.</Text>
            </Flex>
            <Image w="62rem" h="20rem" className="rounded-lg ml-5" src={restaurantImage} />
          </Flex>
          <HStack gap={5}>
            <Image w="27rem" h="20rem" className="rounded-lg" src={riceImage} />
            <Image w="27rem" h="20rem" className="rounded-lg" src={meatpieImage} />
            <Image w="27rem" h="20rem" className="rounded-lg" src={pizzaImage} />
          </HStack>
        </Flex>
      </Box>
      <Flex className="relative justify-center px-16 py-16">
        <Flex bg="dark.900" w="full" h={"20rem"} alignItems="center" justifyContent="space-between" className="rounded-2xl p-0">
          <Box color="white" className="ml-16">
            <Text fontSize="2rem" fontWeight="bold">Become a Partner in Success</Text>
            <Text w="25rem" className="mb-5">Grow your business while elevating ours – let’s create excellence together.</Text>
            <Button border={"white", "solid"} className=" p-4 rounded-md">Book Us Now</Button>
          </Box>
          <Box className="relative " h="100%">
            <Image src={bgLine5} />
            <Image src={eatingImage2} className="absolute rounded-r-lg bottom-0" />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}
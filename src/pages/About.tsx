import { Box, Flex, Grid, GridItem, Heading, HStack, Image, Span, Stack, Text } from "@chakra-ui/react"

import bgLine6 from "@/assets/images/bg-design-images/bg-line11.png"
import bgLine7 from "@/assets/images/bg-design-images/bg-line10.png"
import bgLine8 from "@/assets/images/bg-design-images/bg-line13.png"
import bgLine9 from "@/assets/images/bg-design-images/bg-line9.png"
import bgStar6 from "@/assets/images/bg-design-images/bg-star6.png"
import bgStar7 from "@/assets/images/bg-design-images/bg-star7.png"
import bgStar8 from "@/assets/images/bg-design-images/bg-star8.png"
import bgStar9 from "@/assets/images/bg-design-images/bg-star9.png"
import bgStar10 from "@/assets/images/bg-design-images/bg-star10.png"
import bgHeart from "@/assets/images/bg-design-images/bg-heart.png"
import foodShots1 from "@/assets/images/nav-images/mrbiggs-nav-image.png"
import foodShots2 from "@/assets/images/nav-images/debonairs-nav-image.png"
import foodShots3 from "@/assets/images/stay-updated-image.png"
import foodShots4 from "@/assets/images/when-you-see-the-chop.png"
import restaurantShots from "@/assets/images/restaurant-images/restaurant-shots2.jpg"
import restaurantShots2 from "@/assets/images/restaurant-image.png"
import folasopeAiyesimoju from "@/assets/images/directors/folasope-aiyesimoju.png"
import debolaBadejo from "@/assets/images/directors/debola-badejo.png"
import darrenHele from "@/assets/images/directors/darren-hele.png"
import { useState } from "react"

export const About = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Flex className="w-screen" alignItems={"center"} direction={"column"} color="dark.900">
      <Flex
        h={{ base: '900px', lg: '1000px' }}
        direction={"column"}
        className="justify-center items-center w-full bg-[linear-gradient(180deg,#E5F2F2_46.21%,#FFFFFF_105.1%)]"
      >
        <Flex
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          direction="column"
          className=" py-10 px-3 lg:px-16"
        >
          <Heading
            fontSize={{ base: '32px', lg: "2.5rem" }}
            fontWeight="bold"
            lineHeight="normal"
            w={{ base: 'full', lg: "24.5rem" }}
          >
            Exclusive Flavors for Discerning Taste
          </Heading>
          <Text color="gray.90" fontSize={{ base: '16px', lg: "1.2rem" }}>
            Exclusive doesn’t mean exclusionary—it means elevated care.
          </Text>
          <Text color="gray.90" fontSize={{ base: '16px', lg: "1.2rem" }} w={{ base: 'full', lg: "54rem" }} className="mb-10">
            From our kitchens to your table, every element is chosen to spark
            joy for true flavor enthusiasts.
          </Text>
          <HStack maxW={'full'} overflowX={'scroll'}>
            <Image
              w="20rem"
              h="23rem"
              className="rounded-2xl border-8 border-white"
              src={foodShots1}
            />
            <Image
              w="20rem"
              h="23rem"
              className="rounded-2xl border-8 border-white"
              src={foodShots2}
            />
            <Image
              w="20rem"
              h="23rem"
              className="rounded-2xl border-8 border-white"
              src={foodShots3}
            />
            <Image
              w="20rem"
              h="23rem"
              className="rounded-2xl border-8 border-white"
              src={foodShots4}
            />
          </HStack>
        </Flex>
      </Flex>
      <Box className="w-full relative py-10 ">
        <Flex direction="column" justifyContent={"center"} alignItems={"center"} className=" px-3 z-10">
          <Flex direction={{ base: 'column', lg: 'row' }} w={"full"} justifyContent="center" alignItems={{ base: 'start', lg: "end" }}>
            <Box>
              <Heading fontSize="2rem" fontWeight="bold">Our Company</Heading>
              <Text w={{ base: 'full', lg: "29rem" }} color="gray.90" className="my-3">
                Great food, greater stories. At UAC Restaurants, every meal
                celebrates the art of bringing people together.
              </Text>
              <Image w={'554px'} src={foodShots4} />
            </Box>
            <Box className="mt-4 lg:mt-0 lg:ml-20" fontSize="1.08rem" color="gray.90" w={{ base: 'full', lg: "37rem" }}>
              <Text>
                UAC Restaurants (UACR) pioneered QSR in Nigeria with the launch
                of Mr Bigg’s in 1986. Mr Biggs quickly became a household name
                and was particularly loved for its meals, delectable pastries,
                and confectionaries. In 2013, with the formation of a joint
                venture between UAC of Nigeria PLC (“UAC”) and Famous Brands
                Management Company (PTY) Limited (South Africa) (“Famous
                Brands”), UACR added another popular brand to its portfolio.
                “Debonairs Pizza”. UACR brands enjoy increased presence in urban
                and sub-urban areas and Strong brand equity as with 605,000
                transactions monthly.
              </Text>
              <Text className="mt-5">
                A growing network of suppliers and franchisees, UACR maintains
                warehouses and operations in 14 states across four geo-political
                zones in Nigeria.We are extremely proud of ~650 direct and
                indirect employees and franchise associates in our network and
                the distinct culture we’ve built grounded on customer
                experience, innovation, and service delivery. Our leadership
                team is committed to leading with values that engage everyone,
                foster innovation, and support top-line growth.
              </Text>
            </Box>
          </Flex>
          <Stack direction={{ base: 'column', lg: 'row' }} className=" mt-10" gap={5}>
            <Flex bgColor="#FFD7000D" direction="column" w={{ base: 'full', lg: '40rem' }} h="14rem" justifyContent="start" className="relative  p-10 rounded-2xl">
              <Text fontSize="1.5rem" fontWeight="bold">Our Mission</Text>
              <Text color="gray.90" fontSize="1.1rem">To serve quality affordable and great-tasting meals by operating Africa’s most trusted QSR brands in an innovative and sustainable way.</Text>
            </Flex>
            <Flex bgColor="#F812120D" direction="column" w={{ base: 'full', lg: '40rem' }} h="14rem" className="relative  p-10 rounded-2xl">
              <Text fontSize="1.5rem" fontWeight="bold">Our Vision</Text>
              <Text color="gray.90" fontSize="1.1rem">To be the leading Quick Service Restaurant and Food Services business in Nigeria.</Text>
            </Flex>
          </Stack>
        </Flex>
      </Box>
      <Box h={{ base: "1972px", lg: '47rem' }} bgColor="blue.100" className="w-full py-16 relative px-4 lg:pl-16">
        <Flex w="full" direction="column" justifyContent="center" >
          <Text fontSize="2.3rem" fontWeight="bold">Core Values</Text>
          <Text color="gray.90" fontSize="1.2rem" className="mb-14">These principles guide every decision, from kitchen to dining room</Text>
          <Grid className="lg:h-[28rem] h-[1672px] overflow-hidden" templateColumns={{ base: 'repeat(1,1fr)', md: "repeat(3,1fr)" }} gapX={{ base: 1, lg: 6 }} >
            {coreValues.map((coreValue) => (
              <GridItem w={{ base: 'full', lg: "24rem" }}>
                <Text fontSize="1.5rem" h="1.8rem" borderColor="brand.900" fontWeight="bold" className="flex items-center border-l-2 pl-6 pt-0">{coreValue.value}</Text>
                <Text color="gray.90" fontSize="1.2rem" borderColor="gray.50" h="5.5rem" className="pl-6 pt-4 pb-32 border-l-2 border-dashed">{coreValue.meaning}</Text>
              </GridItem>
            ))}</Grid>
        </Flex>
      </Box>

    </Flex >
  )
}

const coreValues = ([
  { value: "Integrity", meaning: "We will do the right thing always; operate with an ethical, honest, and open approach" },
  { value: "Customer-Centric", meaning: "We exist to delight our customers." },
  { value: "Respect", meaning: "Treat everyone with respect, dignity, and understanding in service delivery." },
  { value: "Innovation", meaning: "Constantly improve, exploring new ways and processes to deliver to our customers" },
  { value: "Ownership", meaning: "Taking ownership of providing services to our customers" },
  { value: "Responsiveness", meaning: "Provide services in a timely manner, prioritizing requests as the need arises." },
  { value: "Collaboration", meaning: "We deliver results together and reward accordingly" },
  { value: "Community", meaning: "We give back to our community in a sustainable way" },
  { value: "Flexiblity", meaning: "We can blend our personal and professional responsibilities." }
])

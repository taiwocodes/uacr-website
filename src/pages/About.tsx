import { Box, Flex, Grid, GridItem, Heading, HStack, Image, Span, Text } from "@chakra-ui/react"

import bgLine6 from "@/assets/images/bg-design-images/bg-line11.png"
import bgLine7 from "@/assets/images/bg-design-images/bg-line10.png"
import bgLine8 from "@/assets/images/bg-design-images/bg-line8.png"
import bgLine9 from "@/assets/images/bg-design-images/bg-line9.png"
import bgStar6 from "@/assets/images/bg-design-images/bg-star6.png"
import bgStar7 from "@/assets/images/bg-design-images/bg-star7.png"
import bgStar8 from "@/assets/images/bg-design-images/bg-star8.png"
import bgStar9 from "@/assets/images/bg-design-images/bg-star9.png"
import bgStar10 from "@/assets/images/bg-design-images/bg-star10.png"
import bgHeart from "@/assets/images/bg-design-images/bg-heart.png"
import foodShots1 from "@/assets/images/restaurant-images/food-shots1.jpg"
import foodShots2 from "@/assets/images/restaurant-images/food-shots2.jpg"
import foodShots3 from "@/assets/images/restaurant-images/food-shots3.jpg"
import restaurantShots from "@/assets/images/restaurant-images/restaurant-shots2.jpg"
import restaurantShots2 from "@/assets/images/restaurant-image.png"
import folasopeAiyesimoju from "@/assets/images/directors/folasope-aiyesimoju.png"
import debolaBadejo from "@/assets/images/directors/debola-badejo.png"
import darrenHele from "@/assets/images/directors/darren-hele.png"

export const About = () => {
  return (
    <Flex className="w-screen" alignItems={"center"} direction={"column"} color="dark.900">
      <Flex
        h="45rem"
        direction={"column"}
        className="items-center w-full bg-linear-to-b from-[#E5F2F2] from-80% to-white"
      >
        <Image src={bgStar6} className="absolute top-[110px] left-1/3 " />
        <Image src={bgLine6} className="absolute top-0 right-0" />
        <Flex
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          direction="column"
          className="absolute top-36 z-10 py-10 px-16"
        >
          <Heading
            fontSize="2.5rem"
            fontWeight="bold"
            lineHeight="normal"
            w="24.5rem"
          >
            Exclusive Flavors for Discerning Taste
          </Heading>
          <Text color="gray.90" fontSize="1.2rem">
            Exclusive doesn’t mean exclusionary—it means elevated care.
          </Text>
          <Text color="gray.90" fontSize="1.2rem" w="54rem" className="mb-10">
            From our kitchens to your table, every element is chosen to spark
            joy for true flavor enthusiasts.
          </Text>
          <HStack>
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
              src={restaurantShots}
            />
            <Image
              w="20rem"
              h="23rem"
              className="rounded-2xl border-8 border-white"
              src={foodShots3}
            />
          </HStack>
        </Flex>
      </Flex>
      <Box  className="w-full relative py-16 ">
        <Image src={bgLine7}  className="absolute top-10 left-0 " />
        <Image src={bgStar7} className=" absolute right-0 bottom-[373px]" />
        <Flex direction="column" justifyContent={"center"} alignItems={"center"} className=" z-10">
           <Flex w={"full"} justifyContent="center" alignItems="end"> 
              <Box>
                <Heading fontSize="2rem" fontWeight="bold">Our Company</Heading>
                <Text w="29rem" color="gray.90" className="my-3">
                  Great food, greater stories. At UAC Restaurants, every meal
                  celebrates the art of bringing people together.
                </Text>
                <Image  src={restaurantShots2} />
              </Box>
              <Box className="ml-20" fontSize="1.08rem" color="gray.90" w="37rem">
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
            <HStack className=" mt-10" gap={5}>
              <Flex bgColor="#FFD7000D" direction="column" w="40rem" h="14rem" justifyContent="start" className="relative p-10 rounded-2xl">
                <Image src={bgLine8} className="absolute rounded-2xl top-0 left-0" />
                <Image src={bgStar8} className="absolute rounded-2xl bottom-0 right-0" />
                <Text fontSize="1.5rem" fontWeight="bold">Our Mission</Text>
                <Text color="gray.90" fontSize="1.1rem">To serve quality affordable and great-tasting meals by operating Africa’s most trusted QSR brands in an innovative and sustainable way.</Text>
              </Flex>
              <Flex bgColor="#F812120D" direction="column" w="40rem" h="14rem" className="relative p-10 rounded-2xl">
                <Image src={bgStar9} className="absolute rounded-2xl top-0 left-0" />
                <Image src={bgLine9} className="absolute rounded-2xl bottom-0 right-0" />
                <Text fontSize="1.5rem" fontWeight="bold">Our Vision</Text>
                <Text color="gray.90" fontSize="1.1rem">To be the leading Quick Service Restaurant and Food Services business in Nigeria.</Text>
              </Flex>
            </HStack>
        </Flex>
      </Box>
      <Box h="47rem" bgColor="blue.100" className="w-full py-16 relative pl-16">
        <Image src={bgHeart} h="10rem" className="absolute top-0 left-20" />
        <Image src={bgStar10}  className="absolute bottom-3 right-0" />
        <Flex w="full" direction="column" justifyContent="center" >
          <Text fontSize="2.3rem" fontWeight="bold">Core Values</Text>
          <Text color="gray.90" fontSize="1.2rem" className="mb-14">These principles guide every decision, from kitchen to dining room</Text>
          <Grid className="h-[28rem] overflow-hidden" templateColumns="repeat(3,1fr)" gapX={6} >{coreValues.map((coreValue) =>(
            <GridItem w="24rem">
              <Text fontSize="1.5rem" h="1.8rem" borderColor="brand.900" fontWeight="bold" className="flex items-center border-l-2 pl-6 pt-0">{coreValue.value}</Text>
              <Text color="gray.90" fontSize="1.2rem" borderColor="gray.50" h="5.5rem" className="pl-6 pt-4 pb-32 border-l-2 border-dashed">{coreValue.meaning}</Text>
            </GridItem>
        ))}</Grid>
        </Flex>
      </Box>
      <Box className="py-16 px-16">
        <Span w="10rem">
          <Heading w="30rem" fontSize="2rem" lineHeight="normal" fontWeight="bold" className="mb-2">
            Seasoned Non-Executive Board of Directors
          </Heading>
          <Text w="37rem" color="gray.90" className="mb-14">
            Our board believes good governance is a journey, not a destination. We are committed to strong governance principles geared towards continuous improvement. For us, our stakeholders and customers remain our top priority.
          </Text>
      </Span>
        <Grid gapY={10}>
          {Array.from({length:2}).map((_) => (<HStack gap={4}>
            {boardOfDirectors.map((director) => (
              <GridItem bgColor="blue.100" w='26.5rem' h="15rem" borderColor="gray.50" className="relative border rounded-lg">
                <Flex alignItems="end" h="full" className=" p-4">
                  <Span>
                    <Text bgColor="brand.900" color="white" className="py-1 mb-2 px-4 w-fit text-center items-center rounded-full">{director.role}</Text>
                    <Text w="13rem" fontWeight="medium" fontSize="1.3rem">{director.name}</Text>
                    <Text w="15rem" color="gray.90">{director.description}</Text>
                  </Span>
                  <Flex h="15rem" className=" absolute bottom-0 right-0 rounded-lg self-end place-self-end  overflow-hidden"><Image w="10rem" className="rounded-lg " src={director.img}/></Flex>
                </Flex>
            </GridItem>))}
          </HStack>))}
        </Grid>
      </Box>
    </Flex>
  )
}

const coreValues =([
  {value:"Integrity", meaning:"We will do the right thing always; operate with an ethical, honest, and open approach"},
  {value:"Customer-Centric", meaning:"We exist to delight our customers."},
  {value:"Respect",meaning:"Treat everyone with respect, dignity, and understanding in service delivery."},
  {value:"Innovation", meaning:"Constantly improve, exploring new ways and processes to deliver to our customers"},
  {value:"Ownership", meaning:"Taking ownership of providing services to our customers"},
  {value:"Responsiveness",meaning:"Provide services in a timely manner, prioritizing requests as the need arises."},
  {value:"Collaboration",meaning:"We deliver results together and reward accordingly"},
  {value:"Community", meaning:"We give back to our community in a sustainable way"},
  {value:"Flexiblity",meaning:"We can blend our personal and professional responsibilities."}
])

const boardOfDirectors =([
  {name:"Folasope Aiyesimoju",role:"Chairman",description:"Fola is a finance professional with experience spanning corporate finance, princi....",img:folasopeAiyesimoju},
  {name:"Debola Badejo",role:"Vice Chairman",description:"Mr. Badejo qualified as an Engineer at the University of Virginia and holds Masters...",img:debolaBadejo},
  {name:"Darren Hele",role:"Non-Exe Director",description:"Mr. Hele is the Managing Director of Famous Brands Limited, South Africa...",img:darrenHele},
])
import { Box, Flex, Grid, GridItem, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react"

const foodShots1 = "/images/about-refresh/exclusive-1.jpg"
const foodShots2 = "/images/about-refresh/exclusive-2.jpeg"
const foodShots3 = "/images/about-refresh/exclusive-3.jpg"
const foodShots4 = "/images/about-refresh/exclusive-4.jpg"
const foodShots5 = "/images/about-refresh/exclusive-5.jpg"

export const About = () => {
  return (
    <Flex className="w-screen" alignItems={"center"} direction={"column"} color="dark.900">
      <Flex
        h={{ base: '900px', lg: '850px' }}
        direction={"column"}
        className="justify-end items-center w-full pb-5 bg-[linear-gradient(180deg,#E5F2F2_46.21%,#FFFFFF_105.1%)]"
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
            {foodShots.map((image, index) =>
              <Image
                key={index}
                w="20rem"
                h="23rem"
                className="rounded-2xl border-8 border-white"
                src={image}
              />)}
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
                UAC Restaurants (UACR) is a leading quick service restaurant company in Nigeria, committed to delivering quality, value, and memorable dining experiences across the country. We are passionate about creating moments that bring people together through great food, excellent service, and consistent brand experiences.
              </Text>
              <Text className="mt-5">
                We proudly manage a portfolio of trusted brands including Mr Bigg’s, Debonairs Pizza, and CreamyCove. Each brand offers a unique experience—from everyday local favourites to bold, innovative flavours and indulgent treats—while all reflecting our shared commitment to quality, consistency, and customer satisfaction.
              </Text>
              <Text className="mt-5">
                At UACR, we are driven by innovation and operational excellence. We continuously evolve our offerings, processes, and customer touchpoints to meet changing consumer needs and deliver better value at every interaction.
              </Text>
              <Text className="mt-5">
                People are at the heart of our business. We invest in building a strong, capable, and customer-focused team by providing opportunities for learning, growth, and career advancement across all levels of the organisation.
              </Text>
              <Text className="mt-5">
                Guided by integrity, quality, and a relentless pursuit of excellence, UAC Restaurants continues to shape the future of quick service dining in Nigeria while creating lasting value for customers, employees, and stakeholders.
              </Text>
            </Box>
          </Flex>
          <Stack direction={{ base: 'column', lg: 'row' }} className=" mt-10" gap={5}>
            <Flex bgColor="#FFD7000D" direction="column" w={{ base: 'full', lg: '40rem' }} h="14rem" justifyContent="start" className="relative  p-10 rounded-2xl">
              <Text fontSize="1.5rem" fontWeight="bold">Our Mission</Text>
              <Text color="gray.90" fontSize="1.1rem">To provide a delightful experience to customers while serving great-tasting meals with the highest quality standards.</Text>
            </Flex>
            <Flex bgColor="#F812120D" direction="column" w={{ base: 'full', lg: '40rem' }} h="14rem" className="relative  p-10 rounded-2xl">
              <Text fontSize="1.5rem" fontWeight="bold">Our Vision</Text>
              <Text color="gray.90" fontSize="1.1rem">To be the leading provider of quality and excellent meals through delightful QSR brands.</Text>
            </Flex>
          </Stack>
        </Flex>
      </Box>
      <Flex h={{ base: "1972px", lg: '47rem' }} bgColor="blue.100" justify={'center'} className="w-full py-16 relative px-4 lg:pl-16">
        <Flex w="full" maxW={'1440px'} direction="column" justifyContent="center" >
          <Text fontSize="2.3rem" fontWeight="bold">Core Values</Text>
          <Text color="gray.90" fontSize="1.2rem" className="mb-2">I-CRAFTED — the principles that guide every decision, from kitchen to dining room.</Text>
          <Text color="gray.90" fontSize="1rem" className="mb-14">Innovation · Customer-Centric · Responsiveness · Accountability · Flexibility · Teamwork · Ethics · Dedication</Text>
          <Grid className="lg:h-[28rem] h-[1672px] overflow-hidden" templateColumns={{ base: 'repeat(1,1fr)', md: "repeat(3,1fr)" }} gapX={{ base: 1, lg: 6 }} >
            {coreValues.map((coreValue) => (
              <GridItem w={{ base: 'full', lg: "100%" }}>
                <Text fontSize="1.5rem" h="1.8rem" borderColor="brand.900" fontWeight="bold" className="flex items-center border-l-2 pl-6 pt-0">{coreValue.value}</Text>
                <Text color="gray.90" fontSize="1.2rem" borderColor="gray.50" h="5.5rem" className="pl-6 pt-4 pb-32 border-l-2 border-dashed">{coreValue.meaning}</Text>
              </GridItem>
            ))}</Grid>
        </Flex>
      </Flex>

    </Flex >
  )
}

const coreValues = ([
  { value: "Innovation", meaning: "We constantly improve, exploring new ways and processes to deliver to our customers." },
  { value: "Customer-Centric", meaning: "We exist to delight our customers." },
  { value: "Responsiveness", meaning: "We provide services in a timely manner, prioritising requests as the need arises." },
  { value: "Accountability", meaning: "We take ownership of our actions, decisions, and outcomes." },
  { value: "Flexibility", meaning: "We blend our personal and professional responsibilities to adapt and thrive." },
  { value: "Teamwork", meaning: "We deliver results together and reward accordingly." },
  { value: "Ethics", meaning: "We operate with integrity, honesty, and an open approach." },
  { value: "Dedication", meaning: "We are committed to excellence in everything we do." }
])

const foodShots = [
  foodShots1, foodShots2, foodShots3, foodShots4, foodShots5
]
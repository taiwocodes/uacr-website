import { Box, Flex, Grid, Heading, Span, Text, VStack } from "@chakra-ui/react"
import bgMrBiggs from "@/assets/images/mrbiggs-hero-img.png"
import bgDebonairs from "@/assets/images/debonairs-hero-img.png"
import bgNavMrBiggs from "@/assets/images/nav-images/mrbiggs-nav-image.png"
import bgNavDebonairs from "@/assets/images/nav-images/debonairs-nav-image.png"
import bgNavIceCream from "@/assets/images/nav-images/icecream-nav-image.png"
import bgStay from "@/assets/images/stay-updated-image.png"

const locationData = [
    {
        name: "Mr Biggs Ikoyi",
        address: "93 Awolowo Road, Ikoyi, Lagos",
        bg: bgMrBiggs,
    },
    {
        name: "Debonairs Pizza V.I.",
        address: "Plot 12, Adeola Odeku St, Victoria Island, Lagos",
        bg: bgDebonairs,
    },
    {
        name: "Mr Biggs Ikeja",
        address: "14 Obafemi Awolowo Way, Ikeja, Lagos",
        bg: bgNavMrBiggs,
    },
    {
        name: "Debonairs Pizza Lekki",
        address: "Lekki Phase 1, Lagos",
        bg: bgNavDebonairs,
    },
    {
        name: "Creamy Cove Abuja",
        address: "Jabi Lake Mall, Jabi, Abuja",
        bg: bgNavIceCream,
    },
    {
        name: "Mr Biggs Port Harcourt",
        address: "25 Olu Obasanjo Road, Port Harcourt",
        bg: bgStay,
    },
]

export const Locations = () => {
    return (
        <Flex bg={'white'} justifyContent={"center"} alignItems={"center"} color={"dark.900"} w={'100%'} h={'fit-content'} className="relative py-10 px-3 lg:px-16" >
            <Box w={'full'} maxW={"1440px"}>
                <Heading ml={{ base: 0, lg: 4 }} fontSize={"2.1rem"} fontWeight={"bold"} className="mb-10 lg:mb-20 ">Our Locations</Heading>
                <Grid templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(3,1fr)' }} justifyItems={"center"} className="w-full" alignContent={"center"}>
                    {locationData.map((loc) => (
                        <VStack key={loc.name} minW={{ base: '100%', md: '400px' }} w={'90%'} gap={5} className="m-5 group cursor-pointer">
                            <Box
                                bgImage={`url(${loc.bg})`}
                                bgSize={"cover"}
                                backgroundPosition={"center"}
                                bgRepeat={"no-repeat"}
                                w={"full"} h={"254px"} 
                                className="rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl"
                            >
                                <Flex 
                                    justifyContent={"center"} 
                                    alignItems={"center"} 
                                    h={"full"} 
                                    color={"white"} 
                                    direction={"column"} 
                                    className="bg-black/40 group-hover:bg-black/10 transition-all duration-500 rounded-2xl backdrop-blur-[1px] group-hover:backdrop-blur-0"
                                >
                                    <Text fontWeight={"bold"} fontSize={"1.6rem"} className="transform transition-transform duration-500 group-hover:scale-105">{loc.name}</Text>
                                    <Text className="opacity-90 group-hover:opacity-100 transition-opacity duration-500">{loc.address}</Text>
                                </Flex>
                            </Box>
                            <Box w={"full"} textAlign={"center"}>
                                <Text className="mb-5" fontWeight={"bold"}>Opening Hours </Text>
                                <Span color={"gray.90"}>
                                    <Text>Monday – Saturday: 8:00AM – 10:00PM</Text>
                                    <Text>Sunday: 8:00AM – 10:00PM</Text>
                                </Span>
                            </Box>
                        </VStack>
                    ))}
                </Grid>
            </Box>
        </Flex>
    )
}
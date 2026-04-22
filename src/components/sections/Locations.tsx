import { Box, Flex, Grid, Heading, Span, Text, VStack } from "@chakra-ui/react"
import bgMrBiggs from "@/assets/images/mrbiggs-hero-img.png"
import bgDebonairs from "@/assets/images/debonairs-hero-img.png"
import bgNavMrBiggs from "@/assets/images/nav-images/mrbiggs-nav-image.png"
import bgNavDebonairs from "@/assets/images/nav-images/debonairs-nav-image.png"
import bgCreamyCoveLocation from "@/assets/images/creamy-cove-location.jpeg"
import bgStay from "@/assets/images/stay-updated-image.png"

const locationData = [
    {
        name: "Mr Biggs Abule Egba",
        address: "Mobil Filling station KM23, Abeokuta Express way, Abule Egba",
        hours: "7:00am - 10:00pm",
        bg: bgMrBiggs,
    },
    {
        name: "Mr Biggs Ajao",
        address: "8B Osolo way, 7&8 Bus stop International Airport Road, Ajao",
        hours: "7:00am - 10:00pm",
        bg: bgNavMrBiggs,
    },
    {
        name: "Mr Biggs Agidingbi",
        address: "Mobil Filling Station Lateef Jakande Road, Agidingbi, Ikeja",
        hours: "7:00am - 10:00pm",
        bg: bgStay,
    },
    {
        name: "Mr Bigg's Magodo",
        address: "2, CMB Road, Magodo (Inside Mobil Filling Station), Lagos",
        hours: "7:00am - 10:00pm",
        bg: bgMrBiggs,
    },
    {
        name: "Mr Bigg's Ikoyi",
        address: "93, Awolowo Road, Ikoyi",
        hours: "7:00am - 10:00pm",
        bg: bgNavMrBiggs,
    },
    {
        name: "Mr Bigg's Lakowe",
        address: "Oando Filling station Lakowe, Ajah",
        hours: "8:00am - 9:00pm",
        bg: bgStay,
    },
    {
        name: "Mr Bigg's Abijo",
        address: "Rainoil Filling Station, Abijo, Ajah",
        hours: "8:00am - 9:00pm",
        bg: bgMrBiggs,
    },
    {
        name: "Mr Bigg's LEKKI",
        address: "Mobil Filling Station, Jakande Bus Stop, Lekki",
        hours: "7:00am - 10:00pm",
        bg: bgNavMrBiggs,
    },
    {
        name: "Debonairs Pizza Ajao",
        address: "8b, Osolo Way, 7 & 8 Bus Stop, Ajao Estate",
        hours: "8:00am - 10:00pm",
        bg: bgDebonairs,
    },
    {
        name: "Debonairs Pizza Abuja",
        address: "Total Filling Station, Sultan Abubakar Way, Wuse Zone 3, Abuja",
        hours: "8:00am - 10:00pm",
        bg: bgNavDebonairs,
    },
    {
        name: "Debonairs Pizza Surulere",
        address: "Yesufu Sanusi Street, Off Adeniran Ogunsanya, Surulere, Lagos",
        hours: "8:00am - 10:00pm",
        bg: bgDebonairs,
    },
    {
        name: "Debonairs Pizza Ikoyi",
        address: "93, Awolowo Road, Ikoyi",
        hours: "8:00am - 10:00pm",
        bg: bgNavDebonairs,
    },
    {
        name: "Debonairs Pizza Magodo",
        address: "2, CMB Road, Magodo (Inside Mobil Filling Station), Lagos",
        hours: "8:00am - 10:00pm",
        bg: bgDebonairs,
    },
    {
        name: "Deboniars Pizza Ogudu",
        address: "139 ogudu road, ogudu, Lagos",
        hours: "8:00am - 10:00pm",
        bg: bgNavDebonairs,
    },
    {
        name: "Debonairs Pizza Agidingbi",
        address: "Mobil Filling Station Lateef Jakande Road, Agidingbi, Ikeja",
        hours: "8:00am - 10:00pm",
        bg: bgDebonairs,
    },
    {
        name: "Debonairs Pizza Lekki Phase 1",
        address: "Admiralty Way, off Victoria Arobieke Street, Lekki Phase 1, Lagos",
        hours: "8:00am - 10:00pm",
        bg: bgDebonairs,
    },
    {
        name: "Debonairs Pizza Lekki-Jakande",
        address: "Mobil Filling Station, Jakande Bus Stop, Lekki-Epe Expressway",
        hours: "8:00am - 10:00pm",
        bg: bgNavDebonairs,
    },
    {
        name: "Creamy Cove Ogudu",
        address: "139 Ogudu Road, Ogudu, Lagos",
        hours: "8:00am - 10:00pm",
        bg: bgCreamyCoveLocation,
    },
]

export const Locations = () => {
    return (
        <Flex bg={'white'} justifyContent={"center"} alignItems={"center"} color={"dark.900"} w={'100%'} h={'fit-content'} className="relative py-10 px-3 lg:px-16" >
            <Box w={'full'} maxW={"1440px"}>
                <Heading ml={{ base: 0, lg: 4 }} fontSize={"2.1rem"} fontWeight={"bold"} className="mb-10 lg:mb-20 ">Our Locations</Heading>
                <Grid templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }} justifyItems={"center"} className="w-full" alignContent={"center"} gapY={10}>
                    {locationData.map((loc) => (
                        <VStack key={loc.name} minW={{ base: '100%', md: '40% ', lg: '400px' }} w={'90%'} gap={5} className="m-5 group cursor-pointer">
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
                                    p={6}
                                    textAlign="center"
                                    className="bg-black/50 group-hover:bg-black/30 transition-all duration-500 rounded-2xl backdrop-blur-[1px] group-hover:backdrop-blur-0"
                                >
                                    <Text fontWeight={"bold"} fontSize={"1.6rem"} className="transform transition-transform duration-500 group-hover:scale-105 mb-2">{loc.name}</Text>
                                    <Text className="opacity-90 group-hover:opacity-100 transition-opacity duration-500 text-sm">{loc.address}</Text>
                                </Flex>
                            </Box>
                            <Box w={"full"} textAlign={"center"}>
                                <Text className="mb-3" fontWeight={"bold"}>Opening Hours </Text>
                                <Span color={"gray.90"}>
                                    <Text>Monday – Sunday: {loc.hours}</Text>
                                </Span>
                            </Box>
                        </VStack>
                    ))}
                </Grid>
            </Box>
        </Flex>
    )
}
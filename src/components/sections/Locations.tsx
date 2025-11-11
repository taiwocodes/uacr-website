import { Box, Flex, Grid, Heading, Span, Text, VStack } from "@chakra-ui/react"
import bgImage from '@/assets/images/stay-updated-image.png'

export const Locations = () => {
    return (
        <Flex bg={'white'} justifyContent={"center"} alignItems={"center"} color={"dark.900"} w={'100%'} h={'fit-content'} className="relative py-10 px-3 lg:px-16" >
            <Box w={'full'} maxW={"1440px"}>
                <Heading ml={{ base: 0, lg: 4 }} fontSize={"2.1rem"} fontWeight={"bold"} className="mb-10 lg:mb-20 ">Our Locations</Heading>
                <Grid templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(3,1fr)' }} justifyItems={"center"} className="w-full" alignContent={"center"}>
                    {Array.from({ length: 6 }).map((_) => (
                        <VStack minW={{ base: '100%', md: '400px' }} w={'90%'} gap={5} className="m-5 ">
                            <Box bgSize={"cover"} backgroundPosition={"center"} bgRepeat={"no-repeat"}
                                w={"full"} h={"254px"} className="rounded-2xl" bgImage={`url(${bgImage})`}>
                                <Flex justifyContent={"center"} alignItems={"center"} h={"full"} color={"white"} direction={"column"} className="bg-black bg-opacity-50 rounded-2xl">
                                    <Text fontWeight={"medium"} fontSize={"1.5rem"}>Mr Biggs Ikoyi</Text>
                                    <Text>93 Awolowo Road Ikoyi, Lagos</Text>
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
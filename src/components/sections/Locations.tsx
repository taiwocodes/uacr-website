import { Box, Flex, Grid, Heading, Span, Text, VStack } from "@chakra-ui/react"
import bgImage from '@/assets/images/stay-updated-image.png'

export const Locations = () => {
    return (
        <Flex direction={"column"} bg={'white'} justifyContent={"center"} alignItems={"center"} color={"dark.900"} w={'100%'} h={'fit-content'} className="relative py-10 px-16" >
            <Box w={"full"}>
                <Heading fontSize={"2.1rem"} fontWeight={"bold"} className="mb-20 ">Our Locations</Heading>
                <Grid templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(3,1fr)' }} justifyContent={"center"} className="" alignItems={"center"}>
                    {Array.from({ length: 6 }).map((_) => (
                        <VStack gap={5} className="m-5  ">
                            <Box bgSize={"cover"} backgroundPosition={"center"} bgRepeat={"no-repeat"}
                                w={"22rem"} h={"30vh"} className="rounded-2xl" bgImage={`url(${bgImage})`}>
                                <Flex justifyContent={"center"} alignItems={"center"} h={"full"} color={"white"} direction={"column"} className="bg-black bg-opacity-50 rounded-2xl">
                                    <Text fontWeight={"medium"} fontSize={"1.5rem"}>Mr Biggs Ikoyi</Text>
                                    <Text>93 Awolowo Road Ikoyi, Lagos</Text>
                                </Flex>
                            </Box>
                            <Box textAlign={"center"}>
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
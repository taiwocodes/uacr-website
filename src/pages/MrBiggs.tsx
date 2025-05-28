import { Flex, Box, Heading, Text, Button, Span, Image, HStack } from "@chakra-ui/react"
import heroImg from "@/assets/images/mrbiggs-hero-img.png"
import restaurantImage from "@/assets/images/restaurant-image.png"
import restaurantImage2 from "@/assets/images/restaurant-image3.png"
import BgLine12 from "@/assets/images/bg-design-images/bg-line12.svg"
import BgStar11 from "@/assets/images/bg-design-images/bg-star11.png"
import { Navigation } from "@/components/common/Navigation"
import { Footer } from "@/components/common/Footer"

export const MrBiggs = () =>{
    return(
    <Box h={"180rem"} w={"full"} className="bg-white absolute top-0 ">
        <Flex direction="column" justifyContent={"center"} textAlign={"center"} alignItems={"center"} h="70vh" w="100%" 
        bgImage={`url(${heroImg})`} 
        bgSize="cover" backgroundPosition="center" 
        bgRepeat="no-repeat" color={"white"} className="relative">
            <Span w={"full"} className="absolute top-0">
                <Navigation color="white" />
            </Span>
            <Span alignItems="center" className="place-self-center self-center justify-self-center" justifySelf={"center"} alignSelf={"center"}>
                <Heading w={"50rem"} fontSize={"3rem"} lineHeight={"normal"} fontWeight={"bold"}>Nigeria’s Favorite Comfort Food, Served Fresh & Fast Since 1986</Heading>
                <Text fontSize="1.2rem" w={"45rem"}  className="mb-5">From our legendary chicken to golden meat pies—every bite delivers the taste you’ve loved for generations. Dine in, grab & go, or order for delivery!</Text>
                <Button w={"10rem"} bg="brand.900" className="text-white text-[18px] font-medium p-6 rounded-lg">Learn More</Button>
            </Span>
        </Flex>
        <Flex justifyContent={"center"} w={"full"} color="dark.900" bgColor="white" className="relative py-16 px-16 ">
            <Image src={BgStar11} className="absolute bottom-32 right-0" />
            <Flex className="" justifyContent={"center"} alignItems={"end"} w={"full"} >
                <Span w={"50rem"}>
                    <Text fontSize={"2.1rem"} w={"20rem"} fontWeight={"bold"}>About Mr Biggs</Text>
                    <Text w={"30rem"} fontSize={"1.1rem"} color="gray.90" className="mb-5">Through decades of change, one thing stays the same: our commitment to hot, fresh, affordable joy.</Text>
                    <Image w={"35rem"} h={"20rem"} className="rounded-2xl" src={restaurantImage} />
                </Span>
                <Span fontSize={"1.1rem"} w={"45rem"} color={"gray.90"}>
                    <Text>
                        Mr Bigg’s is Nigeria’s pioneer QSR brand, renowned for its delicious meals and freshly baked pastries. We have grown over the years, constantly re-inventing our products and services, to match the ever-evolving needs of our customers. 
                    </Text>
                    <Text>
                        To better serve our customers, we have expanded our service style with the introduction of (insert Express Logo). This modular store avails us the opportunity to better match up with the fast-paced lifestyles of our customers.
                    </Text>
                    <Text>Our standard stores remain the choice location for family outings, hanging out with loved ones and enjoying a home cooked meal, away from home, as we will always be BIGG ON FOOD, BIGG ON YOU!
                        </Text> 
                </Span>
            </Flex>
        </Flex>
        <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} color={"dark.900"} w={'100%'} h={"55rem"} className="relative py-10 px-16" >
            <Image src={BgLine12} className="absolute left-0 bottom-0" />
            <Box w={"full"}>
                <Heading fontSize={"2.1rem"} fontWeight={"bold"} className="mb-20 ">Our Locations</Heading>
                <Flex direction={"column"} justifyContent={"center"} className="" alignItems={"center"}>
                    <HStack gap={20} className="m-5  ">
                         <Box bgSize={"cover"} backgroundPosition={"center"} bgRepeat={"no-repeat"}
                          w={"22rem"} h={"30vh"} className="rounded-2xl" bgImage={`url(${restaurantImage2})`}>
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
                    </HStack>
                    <HStack gap={20} className="m-5  mt-20">
                        <Box textAlign={"center"}>
                            <Text className="mb-5" fontWeight={"bold"}>Opening Hours </Text>
                            <Span color={"gray.90"}>
                                <Text>Monday – Saturday: 8:00AM – 10:00PM</Text>
                                <Text>Sunday: 8:00AM – 10:00PM</Text>
                            </Span>
                        </Box>
                        <Box bgSize={"cover"} backgroundPosition={"center"} bgRepeat={"no-repeat"}
                          w={"22rem"} h={"30vh"} className="rounded-2xl" bgImage={`url(${restaurantImage2})`}>
                            <Flex justifyContent={"center"} alignItems={"center"} h={"full"} color={"white"} direction={"column"} className="bg-black bg-opacity-50 rounded-2xl">
                                <Text fontWeight={"medium"} fontSize={"1.5rem"}>Mr Biggs Ikoyi</Text>
                                <Text>93 Awolowo Road Ikoyi, Lagos</Text>
                            </Flex>
                        </Box>
                    </HStack>
                
                </Flex>
            </Box>
        </Flex>
        <Footer />
    </Box>)
}
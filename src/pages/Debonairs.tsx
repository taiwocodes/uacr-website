import { Flex, Box, Heading, Text, Button, Span, Image, HStack } from "@chakra-ui/react"
import heroImg from "@/assets/images/debonairs-hero-img.png"
import restaurantImage from "@/assets/images/restaurant-image.png"
import restaurantImage2 from "@/assets/images/restaurant-image3.png"
import BgLine12 from "@/assets/images/bg-design-images/bg-line12.svg"
import BgStar11 from "@/assets/images/bg-design-images/bg-star11.png"
import { Navigation } from "@/components/common/Navigation"
import { Footer } from "@/components/common/Footer"

export const Debonairs = () =>{
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
                <Heading w={"42rem"} fontSize={"3rem"} lineHeight={"normal"} fontWeight={"bold"}>Mouthwatering Pizza, Loaded Your Way Since 1991</Heading>
                <Text fontSize="1.2rem" w={"43rem"}  className="mb-5">From our famous Triple-Decker® to custom creations—every pizza is packed with flavor, topped with love, and delivered piping hot</Text>
                <Button w={"10rem"} bg="brand.900" className="text-white text-[18px] font-medium p-6 rounded-lg">Learn More</Button>
            </Span>
        </Flex>
        <Flex justifyContent={"center"} w={"full"} color="dark.900" bgColor="white" className="relative py-16 px-16 ">
            <Image src={BgStar11} className="absolute bottom-32 right-0" />
            <Flex className="" justifyContent={"center"} alignItems={"end"} w={"full"} >
                <Span w={"50rem"}>
                    <Text fontSize={"2.1rem"} w={"23rem"} fontWeight={"bold"}>About Debonairs Pizza</Text>
                    <Text w={"30rem"} fontSize={"1.1rem"} color="gray.90" className="mb-5">Why settle for ordinary when you can have legendary?</Text>
                    <Image w={"35rem"} h={"20rem"} className="rounded-2xl" src={restaurantImage} />
                </Span>
                <Span fontSize={"1.1rem"} w={"43rem"} color={"gray.90"}>
                    <Text>
                   Debonairs Pizza is one of the leading restaurants in Africa, well known for its amazing pizza. We have become a local favourite with our wide range of delicious pizzas, abundant toppings, and incredible pizza deals. We constantly strive to be innovative and creative in what we offer our customers.</Text>
                    <Text>We are committed to giving customers amazing pizza. We offer an exceptional experience that starts with great customer service and continues with the best quality pizza. Whether you’re having dinner with the family, watching a football game with friends, or having a picnic, when you choose Debonairs Pizza, you choose an amazing experience. We pride ourselves in delivering hot, fresh pizza no matter where you’re enjoying it. So, go ahead and try something amazing. Try Debonairs Pizza! </Text> 
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
                                <Text fontWeight={"medium"} fontSize={"1.5rem"}>Debonairs Ikoyi</Text>
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
                                <Text fontWeight={"medium"} fontSize={"1.5rem"}>Debonairs Ikoyi</Text>
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
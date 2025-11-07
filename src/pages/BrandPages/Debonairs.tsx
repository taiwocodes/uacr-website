import { Flex, Box, Heading, Text, Button, Span, Image } from "@chakra-ui/react"
import heroImg from "@/assets/images/debonairs-hero-img.png"
import restaurantImage from "@/assets/images/debonairs-restaurant-image.png"
import { Footer } from "@/components/common/Footer"
import { OurSpecials } from "@/components/sections/OurSpecials"
import { Locations } from "@/components/sections/Locations"

export const Debonairs = () => {
    return (
        <Box w={"full"} className="bg-white absolute top-0 ">
            <Flex direction="column" justifyContent={"center"} textAlign={"center"} alignItems={"center"} h="824px" w="100%"
                bgImage={`url(${heroImg})`}
                bgSize="cover" backgroundPosition="center"
                bgRepeat="no-repeat" color={"white"} className="relative">
                <Span alignItems="center" className="place-self-center self-center justify-self-center" justifySelf={"center"} alignSelf={"center"}>
                    <Heading w={{ base: "full", lg: "42rem" }} fontSize={{ base: "32px", lg: "3rem" }} lineHeight={"normal"} fontWeight={"bold"}>Mouthwatering Pizza, Loaded Your Way Since 1991</Heading>
                    <Text fontSize={{ base: "16px", lg: "1.2rem" }} w={{ base: "full", lg: "43rem" }} className="mb-5">From our famous Triple-Decker® to custom creations—every pizza is packed with flavor, topped with love, and delivered piping hot</Text>
                    <Button w={"10rem"} bg="brand.900" className="text-white text-[18px] font-medium p-6 rounded-lg">Learn More</Button>
                </Span>
            </Flex>
            <Flex justifyContent={"center"} w={"full"} color="dark.900" bgColor="white" className="relative py-16 px-3 md:px-16 ">
                <Flex className="flex-col lg:flex-row" justifyContent={"center"} alignItems={"end"} w={"full"} >
                    <Span className="mr-10" w={{ base: "full", lg: "fit" }}>
                        <Text fontSize={{ base: "1.5rem", lg: "2.1rem" }} w={{ base: "full", lg: "23rem" }} fontWeight={"bold"}>About Debonairs Pizza</Text>
                        <Text w={{ base: "full", lg: "30rem" }} fontSize={{ base: '16px', md: "1.1rem" }} color="gray.90" className="mb-5">Why settle for ordinary when you can have legendary?</Text>
                        <Image w={"40rem"} h={"22rem"} className="rounded-2xl" src={restaurantImage} />
                    </Span>
                    <Span className="mt-4 lg:mt-0" fontSize={{ base: '16px', md: "1.1rem" }} w={{ base: "full", lg: "43rem" }} color={"gray.90"}>
                        <Text>
                            Debonairs Pizza is one of the leading restaurants in Africa, well known for its amazing pizza. We have become a local favourite with our wide range of delicious pizzas, abundant toppings, and incredible pizza deals. We constantly strive to be innovative and creative in what we offer our customers.</Text>
                        <Text>We are committed to giving customers amazing pizza. We offer an exceptional experience that starts with great customer service and continues with the best quality pizza. Whether you’re having dinner with the family, watching a football game with friends, or having a picnic, when you choose Debonairs Pizza, you choose an amazing experience. We pride ourselves in delivering hot, fresh pizza no matter where you’re enjoying it. So, go ahead and try something amazing. Try Debonairs Pizza! </Text>
                    </Span>
                </Flex>
            </Flex>
            <OurSpecials OurSpecial={OurSpecial} ScrollImages={ScrollImages} />
            <Locations />
            <Footer />
        </Box>)
}

const OurSpecial = [
    "/images/pizza-debonairs-our-specials.png",
    "/images/pizza-debonairs2-our-specials.png",
    "/images/taste-the-best-our-specials.png",
    "/images/delicious-pizza-our-specials.png"
]

const ScrollImages = [
    "/images/pizza-our-specials.png",
    "/images/pizza2-our-specials.png",
    "/images/pizza3-our-specials.png",
    "/images/pizza4-our-specials.png",
    "/images/pizza5-our-specials.png",
    "/images/pizza6-our-specials.png",
    "/images/pizza7-our-specials.png",
]
import { Flex, Box, Heading, Text, Span, Image } from "@chakra-ui/react"
import heroImg from "@/assets/images/debonairs-hero-img.png"
import restaurantImage from "@/assets/images/debonairs-restaurant-image.png"
import { OurSpecials } from "@/components/sections/OurSpecials"
import { Locations } from "@/components/sections/Locations"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export const Debonairs = () => {
    const aboutRef = useScrollReveal<HTMLDivElement>();
    return (
        <Box w={"full"} className="bg-white relative ">
            <Flex direction="column" justifyContent={"center"} textAlign={"center"} alignItems={"center"} h="824px" w="100%"
                bgImage={`url(${heroImg})`}
                bgSize="cover" backgroundPosition="center"
                bgRepeat="no-repeat" color={"white"} className="relative">
                <Span alignItems="center" className="place-self-center self-center justify-self-center" justifySelf={"center"} alignSelf={"center"}>
                    <Heading w={{ base: "full", lg: "42rem" }} fontSize={{ base: "32px", lg: "3rem" }} lineHeight={"normal"} fontWeight={"bold"}>Mouthwatering Pizza, Loaded Your Way Since 1991</Heading>
                    <Text fontSize={{ base: "16px", lg: "1.2rem" }} w={{ base: "full", lg: "43rem" }} className="mb-5">From our famous Triple-Decker® to custom creations every pizza is packed with flavor, topped with love, and delivered piping hot</Text>
                </Span>
            </Flex>
            <Flex ref={aboutRef} justifyContent={"center"} w={"full"} color="dark.900" bgColor="white" className="relative py-16 px-3 md:px-16 ">
                <Flex className="flex-col lg:flex-row" justifyContent={"center"} alignItems={"end"} w={"full"} >
                    <Span className="lg:mr-10" w={{ base: "full", lg: "fit" }}>
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
        </Box>
    )
}

const OurSpecial = [
    "/images/our-special-images/pizza-debonairs-our-specials.png",
    "/images/our-special-images/pizza-debonairs2-our-specials.png",
    "/images/our-special-images/taste-the-best-our-specials.png",
    "/images/our-special-images/delicious-pizza-our-specials.png"
]

const ScrollImages = [
    "/images/debonairs-updated images/3-Cheese_Blk Plate.jpg",
    "/images/debonairs-updated images/Big Pizzas on Black Plate_Creamy Chicken_CA.png",
    "/images/debonairs-updated images/Chicken Tikka_CMYK_BM.jpg",
    "/images/debonairs-updated images/Club Pizza on Black Plate_CA.jpg",
    "/images/debonairs-updated images/Four Seasons_Blk Plate.jpg",
    "/images/debonairs-updated images/Garlic Bacon & Jalapeno Pizza_2_Etched.jpg",
    "/images/debonairs-updated images/Something Meaty on Black Plate_ES copy.jpg",
    "/images/debonairs-updated images/Sweet & Sour Pizza - Hero (Stacked)_VS.jpg",
    "/images/debonairs-updated images/Sweet Chilli Chicken Triple-Decker_ES copy.jpg",
    "/images/debonairs-updated images/Sweet Chilli Pizza on Black Plate_CA copy.jpg",
]
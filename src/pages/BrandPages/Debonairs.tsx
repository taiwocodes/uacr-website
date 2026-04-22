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
                    <Heading w={{ base: "full", lg: "42rem" }} fontSize={{ base: "32px", lg: "3rem" }} lineHeight={"normal"} fontWeight={"bold"}>Mouthwatering Pizza, Made to Amaze</Heading>
                    <Text fontSize={{ base: "16px", lg: "1.2rem" }} w={{ base: "full", lg: "43rem" }} className="mb-5">From our iconic Triple-Decker®—stacked with three amazing layers of flavour—every pizza is generously loaded, crafted with care, and delivered hot and fresh for an unforgettable bite.</Text>
                </Span>
            </Flex>
            <Flex ref={aboutRef} justifyContent={"center"} w={"full"} color="dark.900" bgColor="white" className="relative py-16 px-3 md:px-16 ">
                <Flex className="flex-col lg:flex-row" justifyContent={"center"} alignItems={"end"} w={"full"} >
                    <Span className="lg:mr-10" w={{ base: "full", lg: "fit" }}>
                        <Text fontSize={{ base: "1.5rem", lg: "2.1rem" }} w={{ base: "full", lg: "23rem" }} fontWeight={"bold"} className="mb-5">About Debonairs Pizza</Text>
                        <Image w={"40rem"} h={"22rem"} className="rounded-2xl" src={restaurantImage} />
                    </Span>
                    <Span className="mt-4 lg:mt-0" fontSize={{ base: '16px', md: "1.1rem" }} w={{ base: "full", lg: "43rem" }} color={"gray.90"}>
                        <Text fontWeight="medium" color="dark.900" className="mb-4">
                            Try Something Amazing.
                        </Text>
                        <Text>
                            At Debonairs Pizza Nigeria, we create bold, flavour-packed pizzas for people who love something different.
                        </Text>
                        <Text className="mt-4">
                            Part of the global Famous Brands family, we combine international quality with local taste—delivering fresh, satisfying pizzas every time. From our iconic Triple-Decker® to our range of classic favourites, every bite is made with carefully selected ingredients and baked to perfection.
                        </Text>
                        <Text className="mt-4">
                            With a focus on convenience, value, and great service, we make it easy to enjoy your favourite pizza anytime.
                        </Text>
                        <Text className="mt-4" fontWeight="bold">
                            Try Something Amazing.
                        </Text>
                    </Span>
                </Flex>
            </Flex>
            <OurSpecials OurSpecial={OurSpecial} ScrollImages={ScrollImages} />
            <Locations />
        </Box>
    )
}

const OurSpecial = [
    "/images/specials-refresh/dp-1.jpeg",
    "/images/specials-refresh/dp-2.jpeg",
    "/images/specials-refresh/dp-3.jpeg",
    "/images/specials-refresh/dp-4.jpg"
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
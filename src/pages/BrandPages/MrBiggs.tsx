import { Flex, Box, Heading, Text, Span, Image } from "@chakra-ui/react"
import heroImg from "@/assets/images/mrbiggs-hero-img.png"
import restaurantImage from "@/assets/images/mrbiggs-restaurant-image.png"
import { OurSpecials } from "@/components/sections/OurSpecials"
import { Locations } from "@/components/sections/Locations"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export const MrBiggs = () => {
    const aboutRef = useScrollReveal<HTMLDivElement>();
    return (
        <Box w={"full"} className="bg-white relative ">
            <Flex direction="column" justifyContent={"center"} textAlign={"center"} alignItems={"center"} h="824px" w="100%"
                bgImage={`url(${heroImg})`}
                bgSize="cover" backgroundPosition="center"
                bgRepeat="no-repeat" color={"white"} className="relative">
                <Span alignItems="center" className="place-self-center self-center justify-self-center" justifySelf={"center"} alignSelf={"center"}>
                    <Heading w={{ base: 'full', lg: "50rem" }} fontSize={{ base: '32px', lg: "3rem" }} lineHeight={"normal"} fontWeight={"bold"}>Nigeria’s Favorite Comfort Food, Served Fresh & Fast Since 1986</Heading>
                    <Text fontSize={{ base: '16px', lg: "1.2rem" }} w={{ base: 'full', lg: "45rem" }} className="mb-5">From our legendary chicken to golden meat pies every bite delivers the taste you’ve loved for generations. Dine in, grab & go, or order for delivery!</Text>
                </Span>
            </Flex>
            <Flex ref={aboutRef} justifyContent={"center"} w={"full"} color="dark.900" bgColor="white" className="relative py-16 px-3 md:px-16 ">
                <Flex className="flex-col lg:flex-row" justifyContent={"center"} alignItems={"end"} w={"full"} >
                    <Span className="lg:mr-10" w={{ base: "full", lg: "fit" }}>
                        <Text fontSize={{ base: '32px', lg: "2.1rem" }} w={"20rem"} fontWeight={"bold"}>About Mr Bigg’s</Text>
                        <Text w={{ base: "full", lg: "30rem" }} fontSize={{ base: '16px', lg: "1.1rem" }} color="gray.90" className="mb-5">Through decades of change, one thing has remained constant: our commitment to delivering hot, fresh, and affordable joy to every customer.</Text>
                        <Image w={"38rem"} h={"20rem"} className="rounded-2xl" src={restaurantImage} />
                    </Span>
                    <Span className="mt-4 lg:mt-0" fontSize={{ base: '16px', lg: "1.1rem" }} w={{ base: "full", lg: "43rem" }} color={"gray.90"}>
                        <Text>
                            Mr Bigg’s is Nigeria’s pioneer QSR brand, renowned for its delicious meals and freshly baked pastries. Over the years, we have continued to evolve, constantly reinventing our offerings to meet the ever-changing needs and lifestyles of our customers.
                        </Text>
                        <Text className="mt-4">
                            To serve our customers even better, we have expanded our service formats with the introduction of our Express Stores. This modular concept allows us to seamlessly fit into fast-paced environments, bringing convenience and quality closer to you.
                        </Text>
                        <Text className="mt-4">Our Standard Stores remain the perfect destination for family outings, casual hangouts, and enjoying comforting, home-style meals away from home.</Text>
                        <Text className="mt-4">Because at Mr Bigg’s, we are always BIGG ON FOOD, BIGG ON YOU.</Text>
                    </Span>
                </Flex>
            </Flex>
            <OurSpecials OurSpecial={OurSpecial} ScrollImages={ScrollImages} />
            <Locations />
        </Box>
    )
}

const OurSpecial = [
    "/images/specials-refresh/rich-jollof-rice.jpeg",
    "/images/specials-refresh/special-fried-rice.jpeg",
    "/images/specials-refresh/bigg-wizz.jpeg",
    "/images/specials-refresh/rich-jollof-rice.jpeg"
]

const ScrollImages = [
    "/images/Mr-biggs-updated images/NB4526.jpg",
    "/images/Mr-biggs-updated images/NB4527.jpg",
    "/images/Mr-biggs-updated images/NB4529.jpg",
    "/images/Mr-biggs-updated images/NB4530.jpg",
    "/images/Mr-biggs-updated images/NB4531.jpg",
    "/images/Mr-biggs-updated images/NB4538.jpg",
    "/images/Mr-biggs-updated images/NB4539.jpg",
    "/images/Mr-biggs-updated images/NB4543.jpg",
    "/images/Mr-biggs-updated images/NB4544.jpg",
    "/images/Mr-biggs-updated images/NB4546.jpg",
    "/images/Mr-biggs-updated images/NB4609.jpg",
    "/images/Mr-biggs-updated images/NB4617.jpg",
    "/images/Mr-biggs-updated images/NB4622.jpg",
    "/images/Mr-biggs-updated images/NB4628.jpg",
    "/images/Mr-biggs-updated images/NB46541.jpg",
    "/images/Mr-biggs-updated images/NB4672.jpg",
    "/images/Mr-biggs-updated images/NB4682.jpg",
    "/images/Mr-biggs-updated images/NB4800.jpg",
    "/images/Mr-biggs-updated images/NB4803.jpg",
]
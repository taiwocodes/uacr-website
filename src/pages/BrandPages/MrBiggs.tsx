import { Flex, Box, Heading, Text, Button, Span, Image } from "@chakra-ui/react"
import heroImg from "@/assets/images/mrbiggs-hero-img.png"
import restaurantImage from "@/assets/images/mrbiggs-restaurant-image.png"
import { Footer } from "@/components/common/Footer"
import { OurSpecials } from "@/components/sections/OurSpecials"
import { Locations } from "@/components/sections/Locations"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export const MrBiggs = () => {
    const aboutRef = useScrollReveal<HTMLDivElement>();
    return (
        <Box w={"full"} className="bg-white absolute top-0 ">
            <Flex direction="column" justifyContent={"center"} textAlign={"center"} alignItems={"center"} h="824px" w="100%"
                bgImage={`url(${heroImg})`}
                bgSize="cover" backgroundPosition="center"
                bgRepeat="no-repeat" color={"white"} className="relative">
                <Span alignItems="center" className="place-self-center self-center justify-self-center" justifySelf={"center"} alignSelf={"center"}>
                    <Heading w={{ base: 'full', lg: "50rem" }} fontSize={{ base: '32px', lg: "3rem" }} lineHeight={"normal"} fontWeight={"bold"}>Nigeria’s Favorite Comfort Food, Served Fresh & Fast Since 1986</Heading>
                    <Text fontSize={{ base: '16px', lg: "1.2rem" }} w={{ base: 'full', lg: "45rem" }} className="mb-5">From our legendary chicken to golden meat pies—every bite delivers the taste you’ve loved for generations. Dine in, grab & go, or order for delivery!</Text>
                    <Button w={"10rem"} bg="brand.900" className="text-white text-[18px] font-medium p-6 rounded-lg">Learn More</Button>
                </Span>
            </Flex>
            <Flex ref={aboutRef} justifyContent={"center"} w={"full"} color="dark.900" bgColor="white" className="relative py-16 px-3 md:px-16 ">
                <Flex className="flex-col lg:flex-row" justifyContent={"center"} alignItems={"end"} w={"full"} >
                    <Span className="lg:mr-10" w={{ base: "full", lg: "fit" }}>
                        <Text fontSize={{ base: '32px', lg: "2.1rem" }} w={"20rem"} fontWeight={"bold"}>About Mr Biggs</Text>
                        <Text w={{ base: "full", lg: "30rem" }} fontSize={{ base: '16px', lg: "1.1rem" }} color="gray.90" className="mb-5">Through decades of change, one thing stays the same: our commitment to hot, fresh, affordable joy.</Text>
                        <Image w={"38rem"} h={"20rem"} className="rounded-2xl" src={restaurantImage} />
                    </Span>
                    <Span className="mt-4 lg:mt-0" fontSize={{ base: '16px', lg: "1.1rem" }} w={{ base: "full", lg: "43rem" }} color={"gray.90"}>
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
            <OurSpecials OurSpecial={OurSpecial} ScrollImages={ScrollImages} />
            <Locations />
            <Footer />
        </Box>)
}

const OurSpecial = [
    "/images/our-special-images/jollof-rice2-our-specials.png",
    "/images/our-special-images/jollof-rice-our-specials.png",
    "/images/our-special-images/timeless-flavours-our-specials.png",
    "/images/our-special-images/hmm-delicious-our-specials.png"
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
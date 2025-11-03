import { Flex, Box, Heading, Text, Button, Span, Image, HStack, VStack, Grid } from "@chakra-ui/react"
import heroImg from "@/assets/images/mrbiggs-hero-img.png"
import restaurantImage from "@/assets/images/mrbiggs-restaurant-image.png"
import restaurantImage2 from "@/assets/images/restaurant-image3.png"
import bgImage from '@/assets/images/stay-updated-image.png'
import BgLine12 from "@/assets/images/bg-design-images/bg-line12.svg"
import BgStar11 from "@/assets/images/bg-design-images/bg-star11.png"
import { Navigation } from "@/components/common/Navigation"
import { Footer } from "@/components/common/Footer"
import { OurSpecials } from "@/components/sections/OurSpecials"
import { Locations } from "@/components/sections/Locations"

export const MrBiggs = () => {
    return (
        <Box w={"full"} className="bg-white absolute top-0 ">
            <Flex direction="column" justifyContent={"center"} textAlign={"center"} alignItems={"center"} h="824px" w="100%"
                bgImage={`url(${heroImg})`}
                bgSize="cover" backgroundPosition="center"
                bgRepeat="no-repeat" color={"white"} className="relative">
                <Span w={"full"} className="absolute top-0">
                    <Navigation color="white" />
                </Span>
                <Span alignItems="center" className="place-self-center self-center justify-self-center" justifySelf={"center"} alignSelf={"center"}>
                    <Heading w={"50rem"} fontSize={"3rem"} lineHeight={"normal"} fontWeight={"bold"}>Nigeria’s Favorite Comfort Food, Served Fresh & Fast Since 1986</Heading>
                    <Text fontSize="1.2rem" w={"45rem"} className="mb-5">From our legendary chicken to golden meat pies—every bite delivers the taste you’ve loved for generations. Dine in, grab & go, or order for delivery!</Text>
                    <Button w={"10rem"} bg="brand.900" className="text-white text-[18px] font-medium p-6 rounded-lg">Learn More</Button>
                </Span>
            </Flex>
            <Flex justifyContent={"center"} w={"full"} color="dark.900" bgColor="white" className="relative py-16 px-16 ">
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
            <OurSpecials OurSpecial={OurSpecial} ScrollImages={ScrollImages} />
            <Locations />
            <Footer />
        </Box>)
}

const OurSpecial = [
    "/images/jollof-rice-our-specials.png",
    "/images/jollof-rice2-our-specials.png",
    "/images/timeless-flavours-our-specials.png",
    "/images/hmm-delicious-our-specials.png"
]

const ScrollImages = [
    "/images/food9-our-specials.png",
    "/images/food-our-specials.png",
    "/images/food2-our-specials.png",
    "/images/food3-our-specials.png",
    "/images/food4-our-specials.png",
    "/images/food5-our-specials.png",
    "/images/food7-our-specials.png",
]
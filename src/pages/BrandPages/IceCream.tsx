import { Flex, Box, Heading, Text, Span, Image } from "@chakra-ui/react"
import { OurSpecials } from "@/components/sections/OurSpecials"
import { Locations } from "@/components/sections/Locations"
import { useScrollReveal } from "@/hooks/useScrollReveal"

const heroImg = "/images/Ice-cream-updated images/TUBZ/oreos tubz.jpg"

export const IceCream = () => {
    const aboutRef = useScrollReveal<HTMLDivElement>();
    return (
        <Box w={"full"} className="bg-white relative ">
            {/* Hero */}
            <Flex direction="column" justifyContent={"center"} textAlign={"center"} alignItems={"center"} h="824px" w="100%"
                color={"white"} className="relative overflow-hidden">
                <Image
                    src={heroImg}
                    alt="Ice Cream Hero"
                    pointerEvents="none"
                    objectFit="cover"
                    objectPosition="center"
                    className="absolute inset-0 w-full h-full z-0"
                />
                {/* dark overlay so text stays readable */}
                <Box className="absolute inset-0 z-[1] bg-black/40" />
                <Span alignItems="center" className="place-self-center self-center justify-self-center relative z-[2]" justifySelf={"center"} alignSelf={"center"}>
                    <Heading w={{ base: "full", lg: "42rem" }} fontSize={{ base: "32px", lg: "3rem" }} lineHeight={"normal"} fontWeight={"bold"}>Every Scoop is a Sweet Escape Pure Bliss in Every Bite</Heading>
                    <Text fontSize={{ base: "16px", lg: "1.2rem" }} w={{ base: "full", lg: "43rem" }} className="mb-5">From velvety soft serve cones to indulgent milkshakes and loaded tubs discover happiness, one scoop at a time</Text>
                </Span>
            </Flex>
            <Flex ref={aboutRef} justifyContent={"center"} w={"full"} color="dark.900" bgColor="white" className="relative py-16 px-3 md:px-16 ">
                <Flex className="flex-col lg:flex-row" justifyContent={"center"} alignItems={"end"} w={"full"} >
                    <Span className="lg:mr-10" w={{ base: "full", lg: "fit" }}>
                        <Text fontSize={{ base: "1.5rem", lg: "2.1rem" }} w={{ base: "full", lg: "23rem" }} fontWeight={"bold"}>About Creamy Cove</Text>
                        <Text w={{ base: "full", lg: "30rem" }} fontSize={{ base: '16px', md: "1.1rem" }} color="gray.90" className="mb-5">Why settle for ordinary when you can have legendary?</Text>
                        <Image w={"40rem"} h={"22rem"} objectFit="cover" className="rounded-2xl shadow-sm" src={"/images/Ice-cream-updated images/TUBZ/tubz 2.jpg"} />
                    </Span>
                    <Span className="mt-4 lg:mt-0" fontSize={{ base: '16px', md: "1.1rem" }} w={{ base: "full", lg: "43rem" }} color={"gray.90"}>
                        <Text>
                            Welcome to our Creamy Cove brand, where every scoop is a celebration! As one of the city’s favorite dessert destinations, we’re passionate about crafting unforgettable moments with our irresistible range of flavors and toppings. Whether you crave a classic vanilla cone or want to explore bold, new creations, we have something for everyone.</Text>
                        <Text>Our commitment goes beyond just taste we believe in delivering happiness with every visit. From our friendly staff to our vibrant, welcoming spaces, we make sure your experience is as delightful as our desserts. Enjoy a family outing, a sweet date, or a solo treat in a place where smiles are always on the menu.</Text>
                    </Span>
                </Flex>
            </Flex>
            <Flex justifyContent={"center"} w={"full"} color="dark.900" bgColor="white" className="relative py-16 px-3 md:px-16 ">
                <Flex className="flex-col lg:flex-row" justifyContent={"center"} alignItems={"end"} w={"full"} >

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
    // Round 1 — one from each category
    "/images/Ice-cream-updated images/cones/CREAMY COVE IMAGES-10.jpg",
    "/images/Ice-cream-updated images/MILKSHAKE/CHOCOLATE MILKHAKE.jpg",
    "/images/Ice-cream-updated images/TUBZ/oreos tubz.jpg",
    "/images/Ice-cream-updated images/TOPPINGS/Biscoff.jpg",
    "/images/Ice-cream-updated images/DIPS/DIPS 1.jpg",
    // Round 2
    "/images/Ice-cream-updated images/cones/CREAMY COVE IMAGES-11.jpg",
    "/images/Ice-cream-updated images/MILKSHAKE/STRAWBERRY MILKSHAKE.jpg",
    "/images/Ice-cream-updated images/TUBZ/tubz 2.jpg",
    "/images/Ice-cream-updated images/TOPPINGS/Oreos.jpg",
    "/images/Ice-cream-updated images/DIPS/DIPS 2.jpg",
    // Round 3
    "/images/Ice-cream-updated images/cones/CREAMY COVE IMAGES-12.jpg",
    "/images/Ice-cream-updated images/MILKSHAKE/ORES MILKSHAKE.png",
    "/images/Ice-cream-updated images/TUBZ/tubz 3.jpg",
    "/images/Ice-cream-updated images/TOPPINGS/Gummy Bear.jpg",
    "/images/Ice-cream-updated images/DIPS/DIPS 3.jpg",
    // Round 4
    "/images/Ice-cream-updated images/cones/CREAMY COVE IMAGES-13.jpg",
    "/images/Ice-cream-updated images/MILKSHAKE/VANILA MILKSHAKE.jpg",
    "/images/Ice-cream-updated images/TOPPINGS/Snickers.jpg",
    "/images/Ice-cream-updated images/cones/ice cream image.jpg",
    "/images/Ice-cream-updated images/TOPPINGS/M&M.jpg",
    // Round 5
    "/images/Ice-cream-updated images/cones/CREAMY COVE IMAGES-14.jpg",
    "/images/Ice-cream-updated images/TOPPINGS/Smarties.jpg",
    "/images/Ice-cream-updated images/cones/ice cream rainbow 1.jpg",
    "/images/Ice-cream-updated images/TOPPINGS/Twix.jpg",
    "/images/Ice-cream-updated images/cones/CREAMY COVE IMAGES-15.jpg",
]
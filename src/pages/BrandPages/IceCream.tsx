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
                    <Heading w={{ base: "full", lg: "42rem" }} fontSize={{ base: "32px", lg: "3rem" }} lineHeight={"normal"} fontWeight={"bold"}>Swirl into Happiness.</Heading>
                    <Text fontSize={{ base: "16px", lg: "1.2rem" }} w={{ base: "full", lg: "43rem" }} className="mb-5">Rich. Smooth. Irresistible. Every bite is a Creamy Cove moment.</Text>
                </Span>
            </Flex>
            <Flex ref={aboutRef} justifyContent={"center"} w={"full"} color="dark.900" bgColor="white" className="relative py-16 px-3 md:px-16 ">
                <Flex className="flex-col lg:flex-row" justifyContent={"center"} alignItems={"end"} w={"full"} >
                    <Span className="lg:mr-10" w={{ base: "full", lg: "fit" }}>
                        <Text fontSize={{ base: "1.5rem", lg: "2.1rem" }} w={{ base: "full", lg: "23rem" }} fontWeight={"bold"}>About Creamy Cove</Text>
                        <Text w={{ base: "full", lg: "30rem" }} fontSize={{ base: '16px', md: "1.1rem" }} color="gray.90" className="mb-5">Welcome to Creamy Cove—where every swirl is crafted to delight.</Text>
                        <Image w={"40rem"} h={"22rem"} objectFit="cover" className="rounded-2xl shadow-sm" src={"/images/specials-refresh/cc-5.jpg"} />
                    </Span>
                    <Span className="mt-4 lg:mt-0" fontSize={{ base: '16px', md: "1.1rem" }} w={{ base: "full", lg: "43rem" }} color={"gray.90"}>
                        <Text>
                            At Creamy Cove, we serve irresistibly smooth soft-serve ice cream made for true indulgence. Our focus is simple: rich, creamy textures, exciting flavour combinations, and a fun, feel-good experience in every cup or cone. From classic favourites to playful, trend-inspired creations, every serving is designed to spark joy and keep you coming back for more.
                        </Text>
                        <Text className="mt-4">
                            We’re not just about ice cream—we’re about moments. The quick treat after a long day, shared laughs with friends, and little rewards that make life sweeter. Creamy Cove brings together quality, creativity, and consistency to deliver an experience that feels as good as it tastes.
                        </Text>
                        <Text className="mt-4">
                            Rooted in a deep understanding of the Nigerian consumer, Creamy Cove is built to be accessible, exciting, and memorable—whether you’re grabbing a quick swirl or exploring our signature toppings and combos.
                        </Text>
                        <Text className="mt-4">
                            This is your happy place. This is Creamy Cove.
                        </Text>
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
    "/images/specials-refresh/cc-1.jpeg",
    "/images/specials-refresh/cc-2.png",
    "/images/specials-refresh/cc-3.png",
    "/images/specials-refresh/cc-4.jpg"
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
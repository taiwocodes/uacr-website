import { Box, Center, Flex, Heading, Image } from "@chakra-ui/react"
import { useEffect, useRef } from "react";

interface OurSpecialsProps {
    OurSpecial: string[]
    ScrollImages: string[]
}


export const OurSpecials = ({ OurSpecial, ScrollImages }: OurSpecialsProps) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault()
            const scrollSpeed = 0.3
            el.scrollLeft += e.deltaX * scrollSpeed
        }

        el.addEventListener("wheel", handleWheel, { passive: false })
        return () => el.removeEventListener("wheel", handleWheel)
    }, [])

    return (
        <Box className=" relative bg-[#F3F5FBB2] mt-12 py-16">
            <Heading fontWeight="bold" className="text-[2rem] text-black w-fulll text-center my-6">Our Specials</Heading>
            <Flex overflowX={'scroll'} overflowY={'hidden'} maxW={'100%'} h={'658px'} className="justify-center items-center w-screen max-w-screen-2xl px-3 lg:px-16" gap={'1rem'}>
                <Flex direction={{ base: 'row', lg: 'column' }} className=" w-fit h-full">
                    <Image w='312px' h={'317px'} rounded={'2xl'} src={OurSpecial[0]} />
                    <Image w='312px' h={'317px'} rounded={'2xl'} className="mt-5" src={OurSpecial[1]} />
                </Flex>
                <Image className="rounded-2xl" h={'full'} w={'736px'} src={OurSpecial[2]} />
                <Center rounded={'2xl'} h={'full'} overflow={'hidden'}><Image className=" rounded-2xl" h={'800px'} w={'312px'} src={OurSpecial[3]} /></Center>
            </Flex>
            <Flex ref={ref} h={'312px'} overflowX={'scroll'} overflowY={'hidden'} className=" items-center w-screen max-w-screen-full scroll-smooth no-scrollbar " gap={'1rem'}>
                {ScrollImages.map((image, index) => (
                    <Image className=" rounded-full size-[70%] snap-center" key={index} src={image} />
                ))}
                <Image className=" rounded-[90%] w-[200px] h-[200px]" src="/images/food8-our-specials.png" />
            </Flex>
        </Box>
    )
}


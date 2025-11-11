import { Box, Center, Flex, Heading, Image } from "@chakra-ui/react"
import { useMemo, useRef } from "react";
import { motion } from "framer-motion";

interface OurSpecialsProps {
    OurSpecial: string[]
    ScrollImages: string[]
}

export const OurSpecials = ({ OurSpecial, ScrollImages }: OurSpecialsProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const isMobile = window.innerWidth <= 768

    const loopImgs = useMemo(() => [...ScrollImages, ...ScrollImages], [ScrollImages]);

    return (
        <Box className="relative bg-[#F3F5FBB2] mt-12 py-16">
            <Heading fontWeight="bold" className="text-[2rem] text-black w-fulll text-center my-6">Our Specials</Heading>
            <Flex w={'full'} maxW={'100%'} h={{ base: 'auto', lg: '658px' }} className="lg:justify-center items-center overflow-x-scroll no-scrollbar px-3 lg:px-16" gap={'1rem'}>
                {isMobile ? <>
                    <Image w={{ base: 'full', lg: '312px' }} h={'317px'} rounded={'2xl'} src={OurSpecial[0]} />
                    <Image w={{ base: 'full', lg: '312px' }} h={'317px'} rounded={'2xl'} src={OurSpecial[1]} />
                    <Image className="rounded-2xl" h={'full'} w={{ base: '312px', lg: '736px' }} src={OurSpecial[2]} />
                    <Image className=" rounded-2xl" h={{ base: '357px', lg: '800px' }} w={'412px'} src={OurSpecial[3]} /> </> : <>
                    <Flex direction={{ base: 'row', lg: 'column' }} className="w-[640px] lg:w-fit lg:h-full">
                        <Image w={{ base: 'full', lg: '312px' }} h={'317px'} rounded={'2xl'} src={OurSpecial[0]} />
                        <Image w={{ base: 'full', lg: '312px' }} h={'317px'} rounded={'2xl'} className="mt-5" src={OurSpecial[1]} />
                    </Flex>
                    <Image className="rounded-2xl" h={'full'} w={{ base: '312px', lg: '736px' }} src={OurSpecial[2]} />
                    <Center rounded={'2xl'} h={'full'} overflow={'hidden'}>
                        <Image className=" rounded-2xl" h={{ base: 'full', lg: '800px' }} w={'312px'} src={OurSpecial[3]} />
                    </Center>
                </>}
            </Flex>

            <div className="relative w-full pt-[4rem] overflow-hidden">
                <motion.div
                    ref={ref}
                    className="flex gap-[1rem] h-[312px] scroll-smooth no-scrollbar will-change-transform"
                    initial={{ x: "0%" }}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 50, repeat: Infinity }}
                    style={{ translateZ: 0 }}
                >
                    {loopImgs.map((image, index) => (
                        <Image className="rounded-full w-[200px] h-[200px] shrink-0" key={`scroll-${index}`} src={image} alt='food' loading="lazy" />
                    ))}
                </motion.div>
            </div>
        </Box>
    )
}
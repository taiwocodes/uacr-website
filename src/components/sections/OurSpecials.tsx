import { Box, Flex, Heading, Image } from "@chakra-ui/react"
import { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface OurSpecialsProps {
    OurSpecial: string[]
    ScrollImages: string[]
}

export const OurSpecials = ({ OurSpecial, ScrollImages }: OurSpecialsProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const revealRef = useScrollReveal<HTMLDivElement>();

    const loopImgs = useMemo(() => [...ScrollImages, ...ScrollImages], [ScrollImages]);

    return (
        <Box ref={revealRef} className="relative bg-[#F3F5FBB2] mt-12 py-16 overflow-x-hidden w-full">
            <Heading fontWeight="bold" className="text-[2rem] text-black w-full text-center my-6">Our Specials</Heading>
            <Flex
                w='full'
                maxW='100%'
                h={{ base: 'auto', lg: '658px' }}
                className="items-center overflow-x-scroll lg:overflow-x-hidden no-scrollbar px-3 lg:px-16"
                gap='1rem'
                justifyContent={{ base: 'start', lg: 'center' }}
            >
                {/* Image 1 & 2 - Side by Side on Mobile, Stacked on Desktop */}
                <Flex direction={{ base: 'row', lg: 'column' }} gap='1rem' flexShrink={0} w={{ base: 'full', lg: 'fit-content' }}>
                    <Image w={{ base: '312px', lg: '312px' }} h='317px' rounded='2xl' objectFit="cover" src={OurSpecial[0]} />
                    <Image w={{ base: '312px', lg: '312px' }} h='317px' rounded='2xl' objectFit="cover" src={OurSpecial[1]} />
                </Flex>

                {/* Image 3 - Wide Column */}
                <Image
                    className="rounded-2xl"
                    h='full'
                    w={{ base: '320px', lg: '736px' }}
                    objectFit="cover"
                    src={OurSpecial[2]}
                    flexShrink={0}
                />

                {/* Image 4 - Narrower last column */}
                <Box h='full' w='fit-content' display={{ base: 'block', lg: 'flex' }} alignItems='center' flexShrink={0} overflow='hidden'>
                    <Image
                        className="rounded-2xl"
                        h={{ base: '357px', lg: '800px' }}
                        w={{ base: '320px', lg: '312px' }}
                        objectFit="cover"
                        src={OurSpecial[3]}
                    />
                </Box>
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
                        <Image
                            key={`scroll-${index}`}
                            src={image}
                            alt='food'
                            loading="lazy"
                            objectFit="cover"
                            objectPosition="center"
                            className="rounded-full shrink-0"
                            style={{ width: '200px', height: '200px', minWidth: '200px' }}
                        />
                    ))}
                </motion.div>
            </div>
        </Box>
    )
}
import { Box, Button, Flex, Heading, Image, Span, Stack, Text } from "@chakra-ui/react";
import HeroImage from '@/assets/images/career-1.jpeg'
import { Link } from "react-router-dom";
import { ManagementTraineePrograms } from "@/utils/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Career() {
    const heroRef = useScrollReveal<HTMLDivElement>();
    const program1Ref = useScrollReveal<HTMLDivElement>();
    const experienceRef = useScrollReveal<HTMLDivElement>();

    return (
        <>
            <Flex ref={heroRef} direction="column" justifyContent={"center"} textAlign={"center"} alignItems={"center"} h={{ base: '600px', lg: "824px" }} w="100%"
                bgImage={`url(${HeroImage})`}
                bgSize="cover" backgroundPosition="center"
                bgRepeat="no-repeat" color={"white"} className="relative">

                <Span alignItems="center" className="place-self-center self-center justify-self-center" justifySelf={"center"} alignSelf={"center"}>
                    <Heading w={{ base: "full", lg: "42rem" }} fontSize={{ base: '32px', lg: "3rem" }} lineHeight={"normal"} fontWeight={"bold"}>Careers at UACR</Heading>
                    <Text fontSize={{ base: '16px', lg: "1.2rem" }} w={{ base: "full", lg: "43rem" }} className="mb-5">At UAC Restaurants, we offer opportunities to build a rewarding career in a dynamic and fast-paced environment. Join a team where growth, learning, and development are at the core of everything we do.</Text>
                    <Link to={'/careers/open-roles'}><Button w={"10rem"} bg="brand.900" className="text-white text-[18px] font-medium p-6 rounded-lg">Apply Now</Button></Link>
                </Span>
            </Flex>
            <Flex ref={program1Ref} color={'black'} w={'full'} className="justify-center items-center px-3 lg:px-20" py={16} direction={'column'}>
                <Heading w={{ base: 'full', lg: "612px" }} fontSize={{ base: '32px', md: "40px" }} textAlign={'center'} lineHeight={"normal"} fontWeight={"bold"}>Management Trainee Programs</Heading>
                <Text w={{ base: 'full', lg: '612px' }} fontSize={{ base: '16px', lg: '20px' }} textAlign={'center'} color={'gray.90'}>From special offers to behind-the-scenes moments—see what’s buzzing right now across our restaurants.</Text>
                <Stack direction={{ base: 'column', lg: 'row' }} justify={'center'} w={'full'} gap={5} mt={'28px'}>
                    {ManagementTraineePrograms.map((item, index) => (
                        <Box key={index} w={{ base: 'full', lg: '436px' }}>
                            <Image roundedTop={'12px'} src={item.image} />
                            <Box roundedBottom={'12px'} p={'19px'} bg={'#F7F8FC'}>
                                <Text truncate color={'black'} fontSize={'20px'} fontWeight={'medium'} mb={'12px'}>{item.title}</Text>
                                <Text lineClamp={2} color={'gray.90'} className=' items-center'>{item.description} </Text>
                                <Text fontWeight={'medium'} color={'gray.90'}>{item.date}</Text>
                            </Box>
                        </Box>
                    ))}
                </Stack>
            </Flex>
            <Flex ref={experienceRef} color={'black'} w={'full'} className="justify-center items-center px-3" py={16} direction={'column'}>
                <Flex direction="column" w={{ base: 'full', lg: '1304px' }} justify='center' className=" py-20  items-center">
                    <Flex direction={{ base: 'column', lg: 'row' }} className="mb-5">
                        <Flex direction="column" justifyContent="space-between" w={{ base: 'full', lg: "366px" }} className="h-[240px] mb-4 lg:mb-0 lg:h-auto shadow-lg rounded-2xl p-4 " bg="white">
                            <Span><Text color="gray.90">See us from our lens</Text>
                                <Text fontSize="2rem" fontWeight="bold">Employee Experience</Text></Span>
                            <Text color="gray.90" >See what it’s like to work at UACR from our employees experience</Text>
                        </Flex>
                        <Image w={{ base: 'full', lg: "914px" }} h="352px" className="rounded-lg lg:ml-5" src={'/images/career-images/career-2.jpeg'} />
                    </Flex>
                    <Stack direction={{ base: 'column', lg: 'row' }} w={{ base: 'full', lg: '1304px' }} justify={'center'} gap={5}>
                        <Image w={{ base: 'full', lg: "419px" }} h="282px" className="rounded-lg" src={'/images/career-images/employee-experience-2.png'} />
                        <Image w={{ base: 'full', lg: "419px" }} h="282px" className="rounded-lg" src={'/images/career-images/employee-experience-3.png'} />
                        <Image w={{ base: 'full', lg: "419px" }} h="282px" className="rounded-lg" src={'/images/career-images/employee-experience-4.png'} />
                    </Stack>
                </Flex>
            </Flex>
        </>
    )
}
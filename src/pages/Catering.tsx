import { Box, Button, Heading, Span, Text, Image, VStack, HStack, Stack, Flex, Dialog } from "@chakra-ui/react";
import { ContactForm } from "@/components/sections/ContactForm";

import UacCatering from '@/assets/images/update-and-promos-image4.png'
import bgImage from '@/assets/images/stay-updated-image.png'
import MenuImage from '@/assets/images/menu-image.png'
import { useScrollReveal } from "@/hooks/useScrollReveal"

export const Catering = () => {
    const heroRef = useScrollReveal<HTMLDivElement>();
    const whyUsRef = useScrollReveal<HTMLDivElement>();
    const bookRef = useScrollReveal<HTMLDivElement>();
    return (
        <Box className=" text-black" pb={{ base: '1.2rem', lg: '9rem' }} position='relative'>
            <VStack ref={heroRef} className="bg-[linear-gradient(180deg,#E5F2F2_46.21%,#FFFFFF_105.1%)] pb-24 " px={{ base: '1.2rem', lg: '8rem' }} pt={'240px'} gap={5}>
                <Heading className="text-5xl font-semibold text-center" lineHeight={1.3}>
                    Deliciously
                    <Span>{' '}Crafted with Passion,</Span><br />
                    Perfectly Served with
                    <Span color='brand.900'>{' '}Precision.</Span>
                </Heading>
                <Text color='gray.500' className="text-center text-xl md:text-2xl" maxW={{ base: 'full', lg: '846px' }}>
                    Whether you're planning a corporate event, private party, or a special celebration, UAC Restaurants brings flavor, quality, and impeccable service to every occasion.
                </Text>
                <HStack>
                    <Button
                        className="text-white text-[18px] font-medium p-6 rounded-lg"
                        bg="brand.900"
                        onClick={() => {
                            const contactForm = document.getElementById('contact-form');
                            if (contactForm) {
                                contactForm.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Book Now
                    </Button>
                    <Dialog.Root placement={'center'}>
                        <Dialog.Trigger>
                            <Button
                                className="border border-[#EF0909] text-[#EF0909] text-[18px] font-medium p-6 rounded-lg"
                                bg="#EF09091A"
                                onClick={() => {
                                }}
                            >
                                Menu
                            </Button>
                        </Dialog.Trigger>
                        <Dialog.Backdrop />
                        <Dialog.Positioner>
                            <Dialog.Content m={2} w={'full'}>
                                <Image src={MenuImage} w={{ base: '900%', lg: '1304px' }} h={'580px'} alt='buffet' mt={8} className="rounded-xl w-full" />
                            </Dialog.Content>
                        </Dialog.Positioner>
                    </Dialog.Root>
                </HStack>
                <Image src={bgImage} w={'1304px'} h={'580px'} alt='buffet' mt={8} className="rounded-xl w-full" />
            </VStack>

            <Flex ref={whyUsRef} className="justify-center items-center" py={{ base: '2rem', lg: '6rem' }} px={{ base: '1.2rem', lg: '8rem' }} bg={'#F3F5FBB2'} position='relative'>
                <section style={{ maxWidth: '1440px' }} title="Why Choose Us?">
                    <Heading className="text-3xl w-full md:text-5xl font-bold mb-3">Why Choose UAC Catering</Heading>
                    <Text w={'full'} className="font-medium text-gray-500">
                        From boardroom lunches to grand celebrations, we bring UAC Restaurant's signature quality and service excellence to every event—because your guests deserve nothing less.
                    </Text>
                    <HStack justify='center' gap='3rem' maxW={{ base: 'full', lg: 'full' }} margin='2rem auto' wrap={{ base: "wrap", lg: "revert" }}>
                        <Image src={UacCatering} rounded={'2xl'} w={'554px'} h={'348px'} alt='restaurant' />
                        <Text color='gray.500' fontSize='lg'>
                            Trusted Culinary Excellence: With decades of experience in the food industry, our chefs know how to deliver both taste and consistency across all meals.<br /><br />
                            Customizable Menus: Choose from a wide selection of local and continental dishes, tailored to meet your event's needs and your guests' preferences.<br /><br />
                            End-to-End Service: From setup to clean-up, we handle.<br /><br />
                            Corporate & Private Events: Whether it's a boardroom lunch, product launch, wedding reception, or birthday party, we've got you covered.
                        </Text>
                    </HStack>
                </section>
            </Flex>

            <section ref={bookRef} title='Book Catering' className="bg-white px-[1.3rem] py-20 lg:px-16" id='contact-form'>
                <Box maxW={{ base: 'full', lg: '85rem' }} margin='auto' pt='1.2rem'>
                    <HStack align='start' wrap={{ base: 'wrap', lg: 'nowrap' }} justify='space-between'>
                        <Stack mr={'120px'} maxW={{ base: 'full', lg: '40rem' }}>
                            <Heading className="text-5xl font-bold">Book Us For Your<br />Events</Heading>
                            <Text className="text-xl text-gray-500">
                                Let us handle every detail—from custom menus to flawless execution—so you can enjoy your own event stress-free
                            </Text>
                        </Stack>
                        <ContactForm />
                    </HStack>
                </Box>
            </section>

        </Box>
    )
};
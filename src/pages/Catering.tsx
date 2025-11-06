import { Box, Button, Heading, Span, Text, Image, VStack, HStack, Stack } from "@chakra-ui/react";
import { ContactForm } from "@/components/sections/ContactForm";
import heroImg from "../assets/images/cateringHero.png";

import UacCatering from '@/assets/images/update-and-promos-image4.png'
import bgImage from '@/assets/images/stay-updated-image.png'
import restaurantBg from "@/assets/images/restaurant-image.png";
import bgStar from "@/assets/images/bg-design-images/bg-star1.png";
import bgStar4 from "@/assets/images/bg-design-images/bg-star4.png";
import bgLine7 from "@/assets/images/bg-design-images/bg-line7.png";

export const Catering = () => {
    return (
        <Box className=" text-black" pb={{ base: '1.2rem', lg: '9rem' }} position='relative'>
            <VStack className="bg-[linear-gradient(180deg,#E5F2F2_46.21%,#FFFFFF_105.1%)] pb-24 " px={{ base: '1.2rem', lg: '8rem' }} pt={'240px'} gap={5}>
                <Heading className="text-5xl font-semibold text-center" lineHeight={1.3}>
                    Deliciously
                    <Span>{' '}Crafted with Passion,</Span><br />
                    Perfectly Served with
                    <Span color='brand.900'>{' '}Precision.</Span>
                </Heading>
                <Text color='gray.500' className="text-center text-xl md:text-2xl" maxW={{ base: 'full', lg: '846px' }}>
                    Whether you're planning a corporate event, private party, or a special celebration, UAC Restaurants brings flavor, quality, and impeccable service to every occasion.
                </Text>
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
                <Image src={bgImage} w={'1304px'} h={'580px'} alt='buffet' mt={8} className="rounded-xl w-full" />
            </VStack>

            <Box py={{ base: '2rem', lg: '6rem' }} px={{ base: '1.2rem', lg: '8rem' }} bg={'#F3F5FBB2'} position='relative'>
                <section title="Why Choose Us?">
                    <Heading className="text-3xl md:text-5xl font-bold mb-3">Why Choose UAC Catering</Heading>
                    <Text className="font-medium text-gray-500">
                        From boardroom lunches to grand celebrations, we bring UAC Restaurant's signature quality and service excellence to every event—because your guests deserve nothing less.
                    </Text>
                    <HStack justify='center' gap='3rem' maxW={{ base: 'full', lg: '82rem' }} margin='2rem auto' wrap={{ base: "wrap", lg: "revert" }}>
                        <Image src={UacCatering} rounded={'2xl'} w={'554px'} h={'348px'} alt='restaurant' />
                        <Text color='gray.500' fontSize='lg'>
                            Trusted Culinary Excellence: With decades of experience in the food industry, our chefs know how to deliver both taste and consistency across all meals.<br /><br />
                            Customizable Menus: Choose from a wide selection of local and continental dishes, tailored to meet your event's needs and your guests' preferences.<br /><br />
                            End-to-End Service: From setup to clean-up, we handle.<br /><br />
                            Corporate & Private Events: Whether it's a boardroom lunch, product launch, wedding reception, or birthday party, we've got you covered.
                        </Text>
                    </HStack>
                </section>
            </Box>

            <section title='Book Catering' className="bg-white px-[1.3rem] py-20 lg:px-[8rem]" id='contact-form'>
                <Box maxW={{ base: 'full', lg: '82rem' }} margin='auto' pt='1.2rem'>
                    <HStack align='start' wrap={{ base: 'wrap', lg: 'reverse' }} justify='space-between'>
                        <Stack maxW={{ base: 'full', lg: '35rem' }}>
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
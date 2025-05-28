import { Box, Button, Heading, Span, Text, Image, VStack, HStack, Stack } from "@chakra-ui/react";
import { ContactForm } from "@/components/sections/ContactForm";
import heroImg from "../assets/images/cateringHero.png";
import restaurantBg from "@/assets/images/restaurant-image.png";
import bgStar from "@/assets/images/bg-design-images/bg-star1.png";
import bgStar4 from "@/assets/images/bg-design-images/bg-star4.png";
import bgLine7 from "@/assets/images/bg-design-images/bg-line7.png";

export const Catering = () => {
    return (
        <Box px={{ base: '1.2rem', lg: '8rem' }} py={{ base: '1.2rem', lg: '9rem' }} position='relative'>
            <VStack gap={5}>
                <Heading className="text-5xl font-semibold" lineHeight={1.3}>
                    Deliciously
                    <Span color='gray.500'>{' '}Crafted with Passion,</Span><br />
                    Perfectly Served with
                    <Span color='brand.900'>{' '}Precision.</Span>
                </Heading>
                <Text color='gray.500' className="text-center text-2xl" maxW={{ base: 'full', lg: '846px' }}>
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
                <Image src={heroImg} alt='buffet' w='full' mt={8} />
            </VStack>

            <Box py='6rem' position='relative'>
                <section title="Why Choose Us?">
                    <Heading className="text-5xl font-bold mb-3">Why Choose UAC Catering</Heading>
                    <Text className="font-medium text-gray-500">
                        From boardroom lunches to grand celebrations, we bring UAC Restaurant's signature quality and service excellence to every event—because your guests deserve nothing less.
                    </Text>
                    <HStack justify='center' gap='3rem' maxW={{ base: 'full', lg: '82rem' }} margin='2rem auto'>
                        <Image src={restaurantBg} alt='restaurant' />
                        <Text color='gray.500' fontSize='lg'>
                            Trusted Culinary Excellence: With decades of experience in the food industry, our chefs know how to deliver both taste and consistency across all meals.<br /><br />
                            Customizable Menus: Choose from a wide selection of local and continental dishes, tailored to meet your event's needs and your guests' preferences.<br /><br />
                            End-to-End Service: From setup to clean-up, we handle.<br /><br />
                            Corporate & Private Events: Whether it's a boardroom lunch, product launch, wedding reception, or birthday party, we've got you covered.
                        </Text>
                        <Image src={bgStar4} position='absolute' right={0} bottom='17%' />
                    </HStack>
                </section>
            </Box>

            <section title='Book Catering' id='contact-form'>
                <Box maxW={{ base: 'full', lg: '82rem' }} margin='auto' pt='1.2rem'>
                    <HStack align='start' wrap={{ base: 'wrap', lg: 'reverse' }} justify='space-between'>
                        <Stack maxW={{ base: 'full', lg: '35rem' }}>
                            <Image src={bgStar} position='absolute' left='10%' bottom='22%' />
                            <Image src={bgLine7} position='absolute' right={0} bottom='4%' />
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
}
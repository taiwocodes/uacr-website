import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { ContactForm } from "@/components/sections/ContactForm";
import bgStar from "@/assets/images/bg-design-images/bg-star1.png";
import bgLine from "@/assets/images/bg-design-images/bg-line6.png";

export const Contact = () => {
    const navigate = useNavigate();

    return (
        <Box position='relative' p={{ base: '1.2rem', lg: '5rem' }}>
            <Flex wrap={{ base: 'wrap', lg: 'revert' }} justify='center' align='start' gap='3rem' maxW='82rem' margin='auto'>
                <Box>
                    <Box mb='2rem' >
                        <Image src={bgStar} position='absolute' left='15%' top={5} />
                        <Image src={bgLine} position='absolute' right={0} top='8rem' />
                        <Heading className="text-6xl font-extrabold" lineHeight={1.3}>
                            Got Any
                            <span className="text-[#E7A300]">{' '}Issues?</span>
                            <br />
                            We're Here To Help
                        </Heading>
                        <Text className="text-gray-500 text-2xl">
                            Reach out to us anytime—we're here to listen and help.
                        </Text>
                    </Box>

                    <Button
                        onClick={() => navigate("/faqs")}
                        bg="brand.900"
                        className="text-white text-[18px] font-medium p-6 rounded-lg"
                    >
                        Read FAQs
                    </Button>

                    <section title='Contact Information'>
                        <ContactInfo />
                    </section>
                </Box>

                <section title='Contact Us'>
                    <ContactForm />
                </section>
            </Flex>
        </Box>
    )
}
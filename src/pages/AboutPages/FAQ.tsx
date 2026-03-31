import { Accordion, Flex, Text, VStack } from "@chakra-ui/react"
import { GoChevronDown } from "react-icons/go"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export const FAQ = () => {
    const heroRef = useScrollReveal<HTMLDivElement>();
    const faqRef = useScrollReveal<HTMLDivElement>();
    return (
        <Flex direction="column" color={'black'} h={{ base: 'fit-content', md: 'fit-content' }} pb={20} className="">
            <Flex direction="column" align={'center'} w="full" className="">
                <Flex ref={heroRef} direction="column" align={'center'} justify={'end'} textAlign={'center'} h={'487px'} w={'full'} className="bg-[linear-gradient(180deg,#E5F2F2_46.21%,#FFFFFF_105.1%)] pb-[69px] ">
                    <Text fontSize={{ base: "32px", md: "48px" }} fontWeight="bold" mb="1rem">Frequently Asked Questions</Text>
                    <Text fontSize={{ base: "16px", md: '20px' }} w={{ base: '90%', md: '891px' }} color="#6F7777">Our board believes good governance is a journey, not a destination. We are committed to strong governance principles geared towards continuous improvement. For us, our stakeholders and customers remain our top priority.</Text>

                </Flex>
                <VStack ref={faqRef} mt={{ base: '35px', lg: '55px' }} w={'full'}>
                    <Accordion.Root justifyItems={'center'} collapsible >
                        {FAQs.map((FAQ, i) => (
                            <Accordion.Item key={i} value={FAQ.question} bg="#F3F5FB" w={{ base: "90%", md: "80%" }} className="items-end p-5 my-4 rounded-lg">
                                <Accordion.ItemTrigger className="flex w-full justify-between items-center" color="dark.900" fontSize="18px">{FAQ.question} <GoChevronDown size="1.5rem" /></Accordion.ItemTrigger>
                                <Accordion.ItemContent color="gray.70" fontSize="16px" className="mt-2">{FAQ.answer}</Accordion.ItemContent>
                            </Accordion.Item>
                        ))}
                    </Accordion.Root>
                </VStack>
            </Flex>

        </Flex>
    )
}

const FAQs = ([
    { question: "Do you accommodate food allergies?", answer: "Yes! Notify your server, and we’ll customize your meal. (Severe allergies? Let us know for extra precautions." },
    { question: "What are your operating hours?", answer: "Yes! Notify your server, and we’ll customize your meal. (Severe allergies? Let us know for extra precautions." },
    { question: "Do you take walk-ins, or is reservation required?", answer: "Yes! Notify your server, and we’ll customize your meal. (Severe allergies? Let us know for extra precautions." },
    { question: "Where are you located? Is there parking available?", answer: "Yes! Notify your server, and we’ll customize your meal. (Severe allergies? Let us know for extra precautions." },
    { question: "Do you accommodate food allergies for people?", answer: "Yes! Notify your server, and we’ll customize your meal. (Severe allergies? Let us know for extra precautions." },
])
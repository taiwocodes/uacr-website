import { Collapsible, Flex, Text, VStack } from "@chakra-ui/react"
import { GoChevronDown } from "react-icons/go"

export const FAQ = () => {
    return (
        <Flex direction="column" color={'black'} h={'1000px'} className="">
            <Flex direction="column" align={'center'} w="full" className="">
                <Flex direction="column" align={'center'} justify={'end'} textAlign={'center'} h={'487px'} w={'full'} className="bg-[linear-gradient(180deg,#E5F2F2_46.21%,#FFFFFF_105.1%)] pb-[69px] ">
                    <Text fontSize="48px" fontWeight="bold" mb="1rem">Frequently Asked Questions</Text>
                    <Text fontSize={'20px'} w={'891px'} color="#6F7777">Our board believes good governance is a journey, not a destination. We are committed to strong governance principles geared towards continuous improvement. For us, our stakeholders and customers remain our top priority.</Text>

                </Flex>
                <VStack mt={'55px'} w={'full'}>
                    {FAQs.map((FAQ) => (
                        <Collapsible.Root bg="#F3F5FB" w="80%" className="items-end p-5 rounded-lg">
                            <Collapsible.Trigger className="flex w-full justify-between items-center" color="dark.900" fontSize="18px">{FAQ.question} <GoChevronDown size="1.5rem" /></Collapsible.Trigger>
                            <Collapsible.Content color="gray.70" fontSize="16px" className="mt-2">{FAQ.answer}</Collapsible.Content>
                        </Collapsible.Root>))}
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
    { question: "Do you accommodate food allergies?", answer: "Yes! Notify your server, and we’ll customize your meal. (Severe allergies? Let us know for extra precautions." },
])
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const PrivacyPolicy = () => {
    const heroRef = useScrollReveal<HTMLDivElement>();

    return (
        <Flex direction="column" color="black" pb={20}>
            <Flex direction="column" align="center" w="full">
                <Flex
                    ref={heroRef}
                    direction="column"
                    align="center"
                    justify="end"
                    textAlign="center"
                    h={{ base: "320px", md: "487px" }}
                    w="full"
                    className="bg-[linear-gradient(180deg,#E5F2F2_46.21%,#FFFFFF_105.1%)] pb-[69px]"
                >
                    <Text fontSize={{ base: "32px", md: "48px" }} fontWeight="bold" mb="1rem">
                        Website Privacy Notice
                    </Text>
                    <Text fontSize={{ base: "16px", md: "20px" }} w={{ base: "90%", md: "891px" }} color="#6F7777">
                        How UAC Restaurants Limited collects, processes and protects your
                        personal data when you visit our website and related platforms.
                    </Text>
                </Flex>

                <VStack
                    align="start"
                    gap={10}
                    mt={{ base: "35px", lg: "55px" }}
                    w={{ base: "90%", md: "80%" }}
                    maxW="960px"
                >
                    {sections.map((section) => (
                        <Box key={section.heading}>
                            <Text fontSize={{ base: "20px", md: "24px" }} fontWeight="bold" color="dark.900" mb={3}>
                                {section.heading}
                            </Text>
                            {section.paragraphs?.map((paragraph, i) => (
                                <Text key={i} color="#6F7777" fontSize="16px" lineHeight="1.8" mb={3}>
                                    {paragraph}
                                </Text>
                            ))}
                            {section.list && (
                                <Box as="ul" pl={6} color="#6F7777" fontSize="16px" lineHeight="1.8" className="list-disc">
                                    {section.list.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </Box>
                            )}
                            {section.paragraphsAfter?.map((paragraph, i) => (
                                <Text key={i} color="#6F7777" fontSize="16px" lineHeight="1.8" mt={3}>
                                    {paragraph}
                                </Text>
                            ))}
                        </Box>
                    ))}

                    <Box>
                        <Text fontSize={{ base: "20px", md: "24px" }} fontWeight="bold" color="dark.900" mb={3}>
                            13. Contact Details of our Data Protection Officer (DPO)
                        </Text>
                        <Text color="#6F7777" fontSize="16px" lineHeight="1.8">
                            In the event that you have any questions or inquiries relating to
                            the collection and processing of your personal data on our Site
                            or the exercise of your rights as a data subject under the NDP
                            Act/GAID, please send an email to our DPO via email at{" "}
                            <a href="mailto:dpo@uacrestaurants.com" className="text-[#ef0909] underline">
                                dpo@uacrestaurants.com
                            </a>
                            .
                        </Text>
                    </Box>
                </VStack>
            </Flex>
        </Flex>
    );
};

type PolicySection = {
    heading: string;
    paragraphs?: string[];
    list?: string[];
    paragraphsAfter?: string[];
};

const sections: PolicySection[] = [
    {
        heading: "1. Overview",
        paragraphs: [
            "This Privacy Notice provides information on how UAC Restaurants Limited collects and processes your personal data when you visit our website and other related platforms (“Site”). It sets out what we do with your personal data and how we keep it secure and explains the rights that you have in relation to your personal data.",
        ],
    },
    {
        heading: "2. Who We Are",
        paragraphs: [
            "UAC Restaurants Limited (“UAC Restaurants” or “the Company”) is a quick service restaurant arm of the UAC Group, operating and managing restaurant brands across Nigeria. We are committed to delivering quality food service experiences to our customers while maintaining the highest standards of regulatory compliance, and customer data protection.",
        ],
    },
    {
        heading: "3. Nature of Personal Data We Collect and Process",
        paragraphs: [
            "UAC Restaurants Limited collects the following personal data and non-personal data directly from you when you register your personal details on our Site:",
        ],
        list: [
            "contact details such as your full name, postal addresses, phone numbers and email addresses;",
            "demographic information such as your date of birth and gender;",
            "online registration information such as your password and other authentication information;",
            "payment details such as your credit card information and billing address;",
            "in certain cases, your marketing preferences.",
        ],
        paragraphsAfter: [
            "We automatically collect and store certain types of information regarding your use of our Site including information about your searches, views, downloads and purchases.",
        ],
    },
    {
        heading: "4. Cookies",
        paragraphs: [
            "Cookies enable us to distinguish you from other users of our website, which helps us to provide you with an improved browsing experience. For more information about cookies and how we use them, please read our Cookie Policy.",
        ],
    },
    {
        heading: "5. Use of Your Personal Data",
        paragraphs: ["We may use your personal data collected on our Site:"],
        list: [
            "to register and onboard you as a new user.",
            "to process and respond to your needs on our platform.",
            "to manage your relationship with us.",
            "to improve our website functionalities, products and services.",
            "to comply with our legal and regulatory obligations, including verifying your identity where necessary.",
            "to prevent, detect and manage risk against fraud and illegal activities.",
            "any other purpose that we disclose to you in the course of providing products and services to you.",
        ],
    },
    {
        heading: "6. Legal Basis for the Processing of Your Personal Data",
        paragraphs: [
            "We are committed to ensuring that we legally process your personal data in our custody.",
            "UAC Restaurants Limited shall only process your personal data if at least one of the following conditions apply:",
        ],
        list: [
            "you have given your consent to the processing of his/her personal data for one or more specific purposes;",
            "the processing is necessary for the performance of a contract to which you are a party or in order to take steps at your request prior to entering into a contract;",
            "processing is necessary for compliance with a legal obligation to which UAC Restaurants is subject;",
            "processing is necessary in order to protect your vital interests or that of another natural person;",
            "processing is necessary for the purpose of the legitimate interest pursued by UAC Restaurants, or by a third party to whom the data is disclosed subject to certain conditions; and",
            "processing is necessary for the performance of a task carried out in the public interest or in exercise of official public mandate vested in UAC Restaurants.",
        ],
    },
    {
        heading: "7. Sharing of Your Personal Data with Third-Parties",
        paragraphs: [
            "We may need to share your personal data with third-parties under the following circumstances:",
        ],
        list: [
            "to enable provide our services to you, end to end.",
            "to analyze data, provide marketing assistance, process payments, transmit content, and provide customer service.",
            "to comply with applicable laws and regulations or to respond to valid legal process, including from law enforcement or other government agencies.",
            "to protect the rights of our customers, operate and maintain the security of our systems and network to ensure the preservation of life and property and prevention of fraud and cyberattack.",
            "to protect the rights or property of UAC Restaurants or others, including enforcing our agreements, terms, and policies.",
        ],
    },
    {
        heading: "8. Transfer of Personal Data Abroad",
        paragraphs: [
            "UAC Restaurants Limited shall implement appropriate safeguards to ensure the security of personal data to be transferred to a foreign country in compliance with the provision of the Nigeria Data Protection Act 2023 (“NDPA”) and the General Application and Implementation Directive, 2025 (“GAID”) or any other applicable data protection legislation. In particular, we shall, among other things, enter into Data Processing Agreements with the recipients of such personal data in the foreign country to ensure protection of your personal data.",
            "Where personal data is to be transferred to a recipient in a foreign country deemed to have inadequate data protection laws, UAC Restaurants will take all necessary steps to ensure that informed consent is obtained from you, and you are aware of the risks inherent including ensuring that personal data is transmitted in a safe and secure manner.",
        ],
    },
    {
        heading: "9. Data Security and Retention",
        paragraphs: [
            "We take the security of your personal data in our possession seriously. In line with our commitment to protect your personal data in our possession, we have developed appropriate organizational, technical and physical measures to protect the personal data you provide, or we collect against unauthorized access, loss or theft, as well as against any risk of loss, disclosure, copying, misuse or modification. Such measures include but are not limited to the use of secure servers, firewall, multiple factor authentication security, data anonymization and pseudonymization (as may be necessary), data encryption and granting access on a need-to-know basis only to employees in order to perform their job responsibilities.",
            "UAC Restaurants will only retain your personal data under the following circumstances:",
        ],
        list: [
            "as long as reasonably necessary for the purpose of providing our services to you; and",
            "for the period needed to comply with our legal and statutory obligations under applicable law.",
        ],
    },
    {
        heading: "10. What are Your Rights in relation to our Collection and Processing of your Personal Data",
        paragraphs: [
            "Users of our Site are entitled to exercise the following rights in relation to their personal data collected and processed by UAC Restaurants:",
        ],
        list: [
            "right to withdraw consent in relation to the processing of their personal data;",
            "right to be informed regarding their personal data;",
            "right to request for and access any personal data collected and stored by UAC Restaurants;",
            "right to request the deletion of their data;",
            "right to be informed about appropriate safeguards in place where data is transferred abroad;",
            "right to request rectification of personal data which is stored by UAC Restaurants;",
            "right to request the transmission of data from UAC Restaurants to a third party (right to the portability of data);",
            "right to object to automated decision making and processing;",
            "right to object to direct marketing;",
            "right to request the processing of their information; and",
            "right to lodge a complaint with the NDPC.",
        ],
    },
    {
        heading: "11. Review of our Privacy Notice",
        paragraphs: [
            "We may need to review and make necessary updates, modifications or amendments to our Privacy Notice to ensure compliance with applicable data protection legislations including the NDP Act/GAID or as a result of changes in our systems and processes arising from the use of technology. We will notify you of any material changes in the way we collect and process your personal data on our Site by placing a notice online or via email. Your continuous use of our services after such notice, will be construed as your consent to carry on with the processing of your personal data.",
        ],
    },
    {
        heading: "12. Dispute Resolution and Complaint Handling Mechanism",
        paragraphs: [
            "In line with our objective of creating a rewarding customer experience on our website and mobile application, UAC Restaurants has developed a dispute resolution and complaint handling process to ensure the effective management and timely resolution of all complaints relating to this Privacy Notice. In the event that you have any complaint regarding this Privacy Notice, please send us an email via dpo@uacrestaurants.com. We will investigate and work towards ensuring the prompt resolution of all disputes and complaints relating to the use and disclosure of personal data in line with the provisions of the NDP Act/GAID.",
            "In the event that the outcome of the resolution of your complaint is unsatisfactory, you are at liberty to lodge a complaint to the Nigeria Data Protection Commission (NDPC).",
        ],
    },
];
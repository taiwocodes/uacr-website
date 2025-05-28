import { Stack, Heading, HStack, Text, Box, Icon, Link } from "@chakra-ui/react"
import { IconType } from "react-icons";
import { LuPhoneCall } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { PiTiktokLogoLight } from "react-icons/pi";
import { SlSocialYoutube } from "react-icons/sl";
import { FaEnvelope } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

type ContactItem = {
    title: string;
    description: string;
    icons?: { icon: IconType, url?: string }[];
    link?: string;
    linkText?: string;
};

type ContactInfoProps = {
    items: ContactItem[];
};

const ContactInfoItem = ({ items }: ContactInfoProps) => {
    return (
        <Stack mt='3rem' gap='2.5rem'>
            {items.map((item, index) => (
                <Box key={index}>
                    <Stack>
                        <Heading className="font-medium text-xl">{item.title}</Heading>
                        <Text className="text-sm text-gray-500">{item.description}</Text>

                        <HStack gap={3}>
                            {item.icons && (
                                <HStack gap={3}>
                                    {item.icons.map(({ icon: IconComponent, url }, iconIndex) => (
                                        url ? (
                                            <Link
                                                href={url}
                                                key={iconIndex}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Icon
                                                    as={IconComponent}
                                                    color='yellow.500'
                                                    boxSize='20px'
                                                    _hover={{ boxSize: "25px", transform: "translateY(-3px)" }}
                                                    transition="all 0.2s ease-in-out"
                                                />
                                            </Link>
                                        ) : (
                                            <Icon as={IconComponent} key={iconIndex} color='yellow.500' boxSize='20px' />
                                        )
                                    ))}
                                </HStack>
                            )}

                            {item.link && (
                                <Link
                                    href={item.link}
                                    display="inline-flex"
                                    alignItems="center"
                                    color="yellow.500"
                                    textDecoration='underline'
                                >
                                    {item.linkText || item.link}
                                </Link>
                            )}
                        </HStack>
                    </Stack>
                </Box>
            ))}
        </Stack>
    )
};

export const ContactInfo = () => {
    return (
        <ContactInfoItem
            items={[
                {
                    title: "Chat with us",
                    description: "Live Assistance: Connect with us for real-time support",
                    icons: [{ icon: FaEnvelope }],
                    link: "mailto:team@uacresturant.com",
                    linkText: "team@uacresturant.com"
                },
                {
                    title: "Call Us",
                    description: "Call our customer support from Mon-Fri 9am to 5pm",
                    icons: [{ icon: LuPhoneCall }],
                    link: "tel:+2349090738401",
                    linkText: "+234 909 073 8401"
                },
                {
                    title: "Follow Us",
                    description: "Connect with us on social media",
                    icons: [
                        { icon: BsTwitterX, url: "https://twitter.com/uacrestaurant" },
                        { icon: SlSocialLinkedin, url: "https://linkedin.com/company/uacrestaurant" },
                        { icon: PiTiktokLogoLight, url: "https://tiktok.com/@uacrestaurant" },
                        { icon: SlSocialYoutube, url: "https://youtube.com/uacrestaurant" },
                        { icon: AiOutlineInstagram, url: "https://instagram.com/uacrestaurant" }
                    ]
                }
            ]}
        />
    )
};
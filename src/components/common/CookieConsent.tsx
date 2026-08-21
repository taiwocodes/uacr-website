import { useEffect, useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const CONSENT_KEY = "uacr-cookie-consent";
const DATA_PRIVACY_POLICY_URL =
    "https://eur05.safelinks.protection.outlook.com/?url=https%3A%2F%2Ftinyurl.com%2FData-Privacy-and-Protection&data=05%7C02%7Cmogunkalu%40uacnplc.com%7C8669716c5a434dfc8b0c08deff785764%7C38a75fe8a5004cc0bcc5cbfd5322cee0%7C0%7C0%7C639229089522668174%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=pIXe9c3%2BG%2FOl2Xz8dlkmC3t9Wdpd8scwlBfs94WhPt4%3D&reserved=0";

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem(CONSENT_KEY)) setIsVisible(true);
    }, []);

    const handleChoice = (choice: "accepted" | "declined") => {
        localStorage.setItem(CONSENT_KEY, choice);
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <Box
            position="fixed"
            bottom={{ base: "16px", md: "24px" }}
            left="50%"
            transform="translateX(-50%)"
            w={{ base: "calc(100% - 32px)", md: "600px" }}
            bg="dark.900"
            color="white"
            rounded="2xl"
            shadow="dark-lg"
            p={{ base: 5, md: 6 }}
            zIndex={1100}
            className="animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
            <Text fontWeight="bold" fontSize="lg" mb={2}>
                We use cookies
            </Text>
            <Text fontSize="sm" color="#ADB3AB" mb={4}>
                We use cookies to improve your browsing experience and analyse our
                traffic. By clicking &quot;Accept&quot;, you consent to our use of
                cookies in line with our{" "}
                <a
                    href={DATA_PRIVACY_POLICY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "underline", color: "white" }}
                >
                    Data Privacy Policy
                </a>
                .
            </Text>
            <Flex gap={3} justify="end">
                <Button
                    variant="outline"
                    color="white"
                    borderColor="#6F7777"
                    px={6}
                    h="44px"
                    rounded="lg"
                    fontSize="md"
                    _hover={{ bg: "whiteAlpha.200" }}
                    onClick={() => handleChoice("declined")}
                >
                    Decline
                </Button>
                <Button
                    bg="brand.900"
                    color="white"
                    px={6}
                    h="44px"
                    rounded="lg"
                    fontSize="md"
                    onClick={() => handleChoice("accepted")}
                >
                    Accept
                </Button>
            </Flex>
        </Box>
    );
};
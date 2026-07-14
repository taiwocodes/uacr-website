import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const CONSENT_KEY = "uacr-cookie-consent";

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
                <Link
                    to="/privacy-policy"
                    style={{ textDecoration: "underline", color: "white" }}
                >
                    Data Privacy Policy
                </Link>
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
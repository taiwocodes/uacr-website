import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "@/components/common/Footer"
import { Navigation } from "@/components/common/Navigation"
import { Box, Center } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

export const Layout = () => {
    const { pathname } = useLocation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) setIsVisible(true);
            else setIsVisible(false);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Box className="relative overflow-x-hidden">
            <Navigation color="dark.900" />
            <Outlet />
            <Footer />
            {isVisible && (
                <Center
                    onClick={scrollToTop}
                    position="fixed"
                    bottom={{ base: "20px", md: "40px" }}
                    right={{ base: "20px", md: "40px" }}
                    bg="brand.100"
                    color="white"
                    w={{ base: "40px", md: "50px" }}
                    h={{ base: "40px", md: "50px" }}
                    rounded="full"
                    cursor="pointer"
                    zIndex={1000}
                    shadow="2xl"
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{ transform: "translateY(-5px)", bg: "red.600", shadow: "dark-lg" }}
                    className="animate-in fade-in zoom-in duration-300"
                >
                    <FaArrowUp size={20} />
                </Center>
            )}
        </Box>
    )
};
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "@/components/common/Footer"
import { Navigation } from "@/components/common/Navigation"
import { Box } from "@chakra-ui/react";

export const Layout = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return (
        <Box>
            <Navigation />
            <Outlet />
            <Footer />
        </Box>
    )
};
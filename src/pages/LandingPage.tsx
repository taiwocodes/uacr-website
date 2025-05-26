import { Box } from "@chakra-ui/react";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import { Shots } from "@/components/sections/Shots";

export const LandingPage = () => {
  return (
    <Box color="dark.900" className="relative overflow-x-hidden">
      <Hero />
      <Services />
      <FAQ />
      <Testimonials />
      <Shots />
    </Box>
  );
};





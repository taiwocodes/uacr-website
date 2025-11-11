import { Box } from "@chakra-ui/react";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WeAreGrowing } from "@/components/sections/WeAreGrowing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Shots } from "@/components/sections/Shots";
import { OurSpecials } from "@/components/sections/OurSpecials";
import { StayUpdated } from "@/components/sections/StayUpdated";
import { UpdatesPromos } from "@/components/sections/UpdatesPromos";

export const LandingPage = () => {
  return (
    <Box color="dark.900" className="relative overflow-x-hidden">
      <Hero />
      <Services />
      <OurSpecials OurSpecial={OurSpecial} ScrollImages={ScrollImages} />
      <WeAreGrowing />
      <StayUpdated />
      <UpdatesPromos />
      <Testimonials />
      <Shots />
    </Box>
  );
};


const OurSpecial = [
  "/images/our-special-images/pizza-debonairs-our-specials.png",
  "/images/our-special-images/pizza-debonairs2-our-specials.png",
  "/images/our-special-images/timeless-flavours-our-specials.png",
  "/images/our-special-images/hmm-delicious-our-specials.png"
]

const ScrollImages = [
  "/images/our-special-images/food9-our-specials.png",
  "/images/our-special-images/food-our-specials.png",
  "/images/our-special-images/food2-our-specials.png",
  "/images/our-special-images/food3-our-specials.png",
  "/images/our-special-images/food4-our-specials.png",
  "/images/our-special-images/food5-our-specials.png",
  "/images/our-special-images/food6-our-specials.png",
  "/images/our-special-images/food7-our-specials.png",
  "/images/our-special-images/food8-our-specials.png"
]
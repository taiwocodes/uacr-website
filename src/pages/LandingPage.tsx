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
  // Mixed selection from all brands
  "/images/debonairs-updated images/Club Pizza on Black Plate_CA.jpg",
  "/images/Mr-biggs-updated images/NB4526.jpg",
  "/images/Ice-cream-updated images/cones/CREAMY COVE IMAGES-10.jpg",
  "/images/debonairs-updated images/3-Cheese_Blk Plate.jpg",
  "/images/Mr-biggs-updated images/NB4527.jpg",
  "/images/Ice-cream-updated images/MILKSHAKE/CHOCOLATE MILKHAKE.jpg",
  "/images/debonairs-updated images/Four Seasons_Blk Plate.jpg",
  "/images/Mr-biggs-updated images/NB4529.jpg",
  "/images/Ice-cream-updated images/TUBZ/oreos tubz.jpg",
  "/images/debonairs-updated images/Garlic Bacon & Jalapeno Pizza_2_Etched.jpg",
  "/images/Mr-biggs-updated images/NB4530.jpg",
  "/images/Ice-cream-updated images/cones/CREAMY COVE IMAGES-11.jpg",
  "/images/debonairs-updated images/Sweet & Sour Pizza - Hero (Stacked)_VS.jpg",
  "/images/Mr-biggs-updated images/NB4538.jpg",
  "/images/Ice-cream-updated images/MILKSHAKE/STRAWBERRY MILKSHAKE.jpg",
  "/images/Mr-biggs-updated images/NB4617.jpg",
  "/images/Ice-cream-updated images/cones/CREAMY COVE IMAGES-12.jpg",
  "/images/Ice-cream-updated images/TUBZ/tubz 2.jpg",
]
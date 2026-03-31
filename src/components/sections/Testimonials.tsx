import {
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useMemo } from "react";

import quotes from "@/assets/images/quote-up.png";
import testimonial from "@/assets/images/testimonial-image.png"
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Testimonials = () => {
  const revealRef = useScrollReveal<HTMLElement>();
  const loopCards = useMemo(() => [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials], []);

  return (
    <Box ref={revealRef} as="section" bg="#222222" className="relative py-[70px] overflow-hidden">
      <Text color="gray.90" className="pl-4 lg:pl-16">What do people think?</Text>
      <Text fontSize="2rem" fontWeight="bold" className="pl-4 lg:pl-16 text-white mb-8">Testimonials</Text>

      {/* Scrolling marquee */}
      <Box className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 will-change-transform"
          initial={{ x: "0%" }}
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          style={{ translateZ: 0 }}
        >
          {loopCards.map((t, i) => (
            <Flex
              key={`t-${i}`}
              direction="column"
              justifyContent="space-between"
              bg="white"
              borderWidth="thin"
              borderColor="gray.50"
              minW={{ base: '85vw', lg: '24rem' }}
              w={{ base: '85vw', lg: '24rem' }}
              h="17rem"
              className="rounded-lg p-4 shrink-0"
            >
              <Flex justifyContent="space-between">
                <Image src={quotes} />
                <Image src={t.img} className="rounded-full size-10 object-cover" />
              </Flex>
              <Text color="gray.90" className="border-y my-2 py-4 p-2 border-dashed text-sm">{t.testimonial}</Text>
              <Text fontWeight="medium" alignSelf="end" justifySelf="end">~{t.name}</Text>
            </Flex>
          ))}
        </motion.div>
      </Box>
    </Box>
  )
}

const testimonials = [
  { img: testimonial, name: "Sarah M.", testimonial: "The truffle pasta was life-changing! Every bite felt like a masterpiece. We've told everyone we know to visit." },
  { img: testimonial, name: "Adaeze K.", testimonial: "Mr Biggs always feels like home. The meat pie is still as legendary as I remember from childhood!" },
  { img: testimonial, name: "Tunde F.", testimonial: "Debonairs never disappoints. The Triple-Decker pizza is simply the best in Lagos, period." },
  { img: testimonial, name: "Chisom N.", testimonial: "The ice cream flavors are absolutely divine. My kids dragged me back three weekends in a row!" },
  { img: testimonial, name: "Emeka O.", testimonial: "Fast service, great food, warm atmosphere. UAC Restaurants is genuinely a cut above the rest." },
]
import {
  Box,
  Flex,
  Image,
  Text,
  HStack,
  Stack,
} from "@chakra-ui/react";

import bgStar4 from "@/assets/images/bg-design-images/bg-star4.png"
import bgLine3 from "@/assets/images/bg-design-images/bg-line3.png";
import quotes from "@/assets/images/quote-up.png";
import testimonial from "@/assets/images/testimonial-image.png"

export const Testimonials = () => {
  return (
    <Box bg="#222222" h={{ base: '110rem', lg: "34rem" }} className="relative">
      <Box className="absolute w-screen top-0 py-[70px] z-10 overflow-x-hidden">
        <Text color="gray.90" className="pl-4 lg:pl-16">What do people think?</Text>
        <Text fontSize="2rem" fontWeight="bold" className="pl-4 lg:pl-16 text-white">Testimonials</Text>
        <Stack direction={{ base: 'column', lg: 'row' }} w="100%" gap={8} wrap="nowrap" className="pl-4 lg:pl-16 pr-4 py-4 lg:overflow-x-auto">
          {Array.from({ length: 5 }).map((_) => (
            testimonials.map((testiment) => (
              <Flex direction="column" justifyContent="space-between" bg="white" borderWidth="thin" borderColor="gray.50" minW={{ base: 'full', lg: "24rem" }} h="17rem" className=" rounded-lg p-4 ">
                <Flex justifyContent="space-between">
                  <Image src={quotes} />
                  <Image src={testiment.img} />
                </Flex>
                <Text color="gray.90" className="border-y my-2 py-6 p-2 border-dashed">{testiment.testimonial}</Text>
                <Text fontWeight="medium" alignSelf="end" justifySelf="end">~{testiment.name}</Text>
              </Flex>))
          ))}
        </Stack>
      </Box>
    </Box>
  )
}

const testimonials = ([
  { img: testimonial, name: "Sarah M.", testimonial: "The truffle pasta was life-changing! Every bite felt like a masterpiece. We’ve told everyone we know to visit" }
])
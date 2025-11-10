import {
  Box,
  Button,
  Flex,
  Image,
  VStack,
  Text,
  Heading,
  Span,
  HStack,
} from "@chakra-ui/react";
import heroImage1 from '@/assets/images/hero-image-1.png'
import heroImage2 from '@/assets/images/hero-image-2.png'
import heroImage3 from '@/assets/images/hero-image-3.png'
import mrBiggsLogo from "@/assets/images/mrbiggs-logo.png";
import debonairsLogo from "@/assets/images/debonairs-logo.png";
import iceCreamLogo from "@/assets/images/ice-cream-logo.png";
import rating from "@/assets/images/star.png";
import { useEffect, useState } from "react";

export const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, [fade]);
  return (
    <Box as="section" className="relative h-[1050px] overflow-hidden m-2 md:h-[900px] p-3  md:px-16 md:py-10 ">
      {SLIDES.map((slide, index) => {
        const isActive = currentIndex === index;
        return (
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            key={slide.index}
            pointerEvents={isActive ? "auto" : "none"}
            backgroundImage={{ base: 'none', lg: `url(${SLIDES[currentIndex].img})` }}
            bgRepeat="no-repeat"
            backgroundSize={'cover'}
            className={` absolute justify-end lg:justify-center transition-opacity duration-1000 
              ${currentIndex === index ? 'opacity-100' : 'opacity-0'} rounded-2xl items-center text-start px-3 inset-0 h-full`}
            wrap={{ base: 'wrap', lg: 'revert' }}>

            <VStack
              justifyContent="start"
              alignItems="start"
              className=" w-full lg:w-fit h-fit lg:ml-5  px-2 lg:px-0  lg:mb-10  mt-[2rem]"
            >
              <Text fontWeight="medium" className="text-start" color="gray.70">
                Welcome to UAC Restaurants
              </Text>
              <Heading
                className=" text-[40px] lg:text-[3rem] text-black lg:text-white leading-[120%]  font-bold w-full md:w-[34rem]"
              >
                Flavors Crafted to Last Where Every Bite Becomes a Memory
              </Heading>
              <Text color={{ base: 'gray.90', lg: "#FFFFFF" }} fontWeight="medium" className=" w-full lg:w-[29rem]">
                Designed to stay with you; the unforgettable flavors we craft, the
                timeless moments we create together.
              </Text>
              <Button
                bg="brand.100"
                className="text-white text-[18px] font-medium p-6 rounded-lg"
              >
                Explore Restaurants
              </Button>
            </VStack>
            <Flex
              key={currentIndex}
              bgRepeat="no-repeat"
              backgroundSize={'cover'}
              backgroundPosition={'right'}
              backgroundImage={{ base: `url(${SLIDES[currentIndex].img})`, lg: 'none' }} className={`relative mt-7 ${isMobile ? currentIndex === index ? 'opacity-100' : 'opacity-0' : ''}  rounded-2xl  h-[436px] lg:h-full items-center justify-center w-full md:w-[45rem]`}>
              {ratingcardinfo.map((card) => (
                <Flex
                  bg="white"
                  className={`rounded-md p-2 shadow-lg drop-shadow-lg w-fit m-2 absolute ${card.position} `}
                >
                  <Image src={card.logo} className="size-[56px] rounded-full p-1" />
                  <Span>
                    <Text color="dark.900">{card.name}</Text>
                    <Span color="gray.70">{Array.from({ length: 5 }).map((_) => (<Image src={rating} className="inline" />))} (246)</Span>
                  </Span>
                </Flex>))}
            </Flex>
          </Flex>)
      })}

      <HStack position="absolute" bottom="40px" right="20px" gap={3}>
        {SLIDES.map((_, index) => (
          <Box
            key={index}
            borderRadius="4px"
            className={`w-3 h-3 cursor-pointer transition-colors ${currentIndex === index ? "bg-white" : "bg-gray-500"
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </HStack>

      {/*<Box bg="white" className="shadow-lg drop-shadow-lg w-[86%] rounded-lg p-5 absolute -bottom-20 z-10">
        <Text color="dark.900" className="mb-5 text-lg">Find a UAC restaurant close to you </Text>
        <HStack gap="10" className=" flex items-end justify-end">
          <Field.Root className="" w="40rem">
            <Field.Label className="text-base font-thin">Your Current Location</Field.Label>
            <Input border="gray.50" placeholder="Your Current Location" className="p-1 border" />
          </Field.Root>
          <Field.Root className="" w="40rem">
            <Field.Label className="text-base font-thin">Country of Search</Field.Label>
            <Input border="gray.50" placeholder="Nigeria" className="border p-1" />
          </Field.Root>
          <Select.Root className="" w="40rem" collection={states}>
            <Select.Label className="text-base font-thin">State of Search</Select.Label>
            <Select.Control>
              <Select.Trigger className=" p-2 border w-[20rem]">
                <Select.ValueText placeholder="Ikeja" />
              </Select.Trigger>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content bg="white" color="dark.900" className="w-[20rem]">
                  {states.items.map((state) => (
                    <Select.Item item={state} key={state.value} className=" hover:bg-slate-50 p-3">
                      {state.label}<Select.ItemIndicator />
                    </Select.Item>))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
          <Button bg="brand.900"
            className="text-white text-[18px] self-end font-medium p-6 rounded-lg">Find Restaurant</Button>
        </HStack>
      </Box>*/}
    </Box>
  )
}

/*const states = createListCollection({
  items: [
    { label: "Lagos", value: "Lagos" },
    { label: "Abuja", value: "Abuja" },
    { label: "Port-Harcourt", value: "port-harcourt" },
    { label: "Ogun", value: "ogun" }]
}) */

const SLIDES = [{ index: 0, img: heroImage1 }, { index: 1, img: heroImage2 }, { index: 2, img: heroImage3 }]

const ratingcardinfo = [
  { logo: mrBiggsLogo, name: "Mr Biggs", position: 'left-3 lg:left-10 bottom-64 lg:bottom-64' },
  { logo: debonairsLogo, name: "Debonairs", position: 'right-3 lg:right-20 top-3 lg:top-60' },
  { logo: iceCreamLogo, name: "Ice Cream", position: 'right-3 lg:right-40 bottom-3 lg:bottom-20' }
]
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
  Input,
  Field,
  Select,
  createListCollection,
  Portal,
} from "@chakra-ui/react";
import heroImage1 from '@/assets/images/hero-image-1.png'
import heroImage2 from '@/assets/images/hero-image-2.png'
import heroImage3 from '@/assets/images/hero-image-3.png'
import mrBiggsLogo from "@/assets/images/mrbiggs-logo.png";
import debonairsLogo from "@/assets/images/debonairs-logo.png";
import iceCreamLogo from "@/assets/images/ice-cream-logo.png";
import rating from "@/assets/images/star.png";
import smiley from "@/assets/images/smiley.png";
import { useEffect, useState } from "react";

export const Hero = () => {

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveSlide((slide) => (slide + 1) % SLIDES.length),
      3_000
    );

    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <Box as="section" className="border relative h-[900px] p-[1.2rem] md:px-16 md:py-10 ">
      <Flex
        key={activeSlide}
        style={{ backgroundImage: `url(${SLIDES[activeSlide]})` }}
        bgRepeat="no-repeat"
        backgroundSize={'cover'}
        className=" absolute justify-center items-center text-start inset-0 h-full"
        wrap={{ base: 'wrap', lg: 'revert' }}>

        <VStack
          justifyContent="start"
          alignItems="start"
          className=" w-fit h-fit  mb-10 mt-[2rem]"
        >
          <Text fontWeight="medium" className="text-start" color="gray.70">
            Welcome to UAC Restaurants
          </Text>
          <Heading
            className=" text-[3rem] text-white leading-none font-bold w-full md:w-[34rem]"
          >
            Flavors Crafted to Last Where Every Bite Becomes a Memory
          </Heading>
          <Text color="#FFFFFF" fontWeight="medium" className=" w-[29rem]">
            Designed to stay with you; the unforgettable flavors we craft, the
            timeless moments we create together.
          </Text>
          <Button
            bg="brand.900"
            className="text-white text-[18px] font-medium p-6 rounded-lg"
          >
            Explore Restaurants
          </Button>
        </VStack>
        <Flex className="relative items-center justify-center h-full w-full md:w-[45rem]">
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
      </Flex>

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

const states = createListCollection({
  items: [
    { label: "Lagos", value: "Lagos" },
    { label: "Abuja", value: "Abuja" },
    { label: "Port-Harcourt", value: "port-harcourt" },
    { label: "Ogun", value: "ogun" }]
})

const SLIDES = [heroImage1, heroImage2, heroImage3]

const ratingcardinfo = [
  { logo: mrBiggsLogo, name: "Mr Biggs", position: 'left-10 bottom-40' },
  { logo: debonairsLogo, name: "Debonairs", position: 'right-20 top-60' },
  { logo: iceCreamLogo, name: "Ice Cream", position: 'right-40 bottom-20' }
]
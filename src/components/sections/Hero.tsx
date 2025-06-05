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

import bgStar1 from "@/assets/images/bg-design-images/bg-star1.png";
import eatingImage from "@/assets/images/eating-image.jpg";
import mrBiggsLogo from "@/assets/images/mrbiggs-logo.png";
import debonairsLogo from "@/assets/images/debonairs-logo.png";
import rating from "@/assets/images/star.png";
import smiley from "@/assets/images/smiley.png";

export const Hero = () => {
    return (
           <Box as="section" className="relative p-[1.2rem] md:px-16 md:py-10 ">
                <Image src={bgStar1} className="rounded-lg absolute left-5" />
                <Flex className=" justify-center text-start inset-0 h-fit" wrap={{base: 'wrap', lg: 'revert'}}>
                  <VStack
                    justifyContent="start"
                    alignItems="start"
                    className=" w-fit h-fit ml-3 mt-[3rem]"
                  >
                    <Text fontWeight="medium" className="text-start" color="gray.70">
                      Welcome to UAC Restaurants
                    </Text>
                    <Heading
                      color="dark.900"
                      className=" text-[4rem] leading-none font-bold w-full md:w-[47rem]"
                    >
                      Flavors Crafted to Last Where Every Bite Becomes a Memory
                    </Heading>
                    <Text color="gray.70" fontWeight="medium" className=" w-[29rem]">
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
                  <Flex className="relative items-center justify-center w-full md:w-[52rem]">
                    <Image src={eatingImage} className="w-[28rem]" />
                    <Flex
                      bg="white"
                      className="rounded-md p-2 shadow-lg drop-shadow-lg w-fit m-2 absolute left-0 top-40 "
                    >
                      <Image src={mrBiggsLogo} />
                      <Span>
                        <Text color="dark.900">Mr Biggs</Text>
                        <Span color="gray.70">{Array.from({length : 5}).map((_) => (<Image src={rating} className="inline" />))} (246)</Span>
                      </Span>
                    </Flex>
                    <Flex
                      bg="white"
                      className="rounded-md p-2 shadow-lg drop-shadow-lg w-fit m-2 absolute right-5 bottom-24 "
                    >
                      <Image src={debonairsLogo} />
                      <Span>
                        <Text color="dark.900">Debonairs Pizza</Text>
                        <Span color="gray.70">{Array.from({length : 5}).map((_) => (<Image src={rating} className="inline" />))} (246)</Span>
                      </Span>
                    </Flex>
                    <Image src={smiley} className="absolute top-20 right-4" />
                  </Flex>
                </Flex>
                
                <Box bg="white" className="shadow-lg drop-shadow-lg w-[86%] rounded-lg p-5 absolute -bottom-20 z-10">
                  <Text color="dark.900" className="mb-5 text-lg">Find a UAC restaurant close to you </Text>
                  <HStack gap="10" className=" flex items-end justify-end">
                    <Field.Root className="" w="40rem">
                      <Field.Label className="text-base font-thin">Your Current Location</Field.Label>
                      <Input border="gray.50" placeholder="Your Current Location" className="p-1 border"/>
                    </Field.Root>
                    <Field.Root className="" w="40rem">
                      <Field.Label className="text-base font-thin">Country of Search</Field.Label>
                      <Input border="gray.50" placeholder="Nigeria" className="border p-1"/>
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
                            {states.items.map((state) =>(
                              <Select.Item item={state} key={state.value} className=" hover:bg-slate-50 p-3">
                                {state.label}<Select.ItemIndicator/>
                              </Select.Item> ))}
                          </Select.Content>
                        </Select.Positioner>
                      </Portal>
                    </Select.Root>
                    <Button bg="brand.900"
                      className="text-white text-[18px] self-end font-medium p-6 rounded-lg">Find Restaurant</Button>
                  </HStack>
                </Box>
              </Box>
    )
}

const states = createListCollection({
  items: [
    {label:"Lagos", value:"Lagos"},
    {label:"Abuja", value:"Abuja"},
    {label:"Port-Harcourt", value:"port-harcourt"},
    {label:"Ogun", value:"ogun"}]
})
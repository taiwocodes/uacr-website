import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  HStack,
  Center,
} from "@chakra-ui/react"

import mrBiggsLogo from "@/assets/images/mrbiggs-logo.png"
import debonairsLogo from "@/assets/images/debonairs-logo.png"
import iceCreamLogo from "@/assets/images/creamy-cove-logo.jpg"
import bgMrBiggs1 from "@/assets/images/standard-store.jpg"
import bgDebonairs from "@/assets/images/nav-images/debonairs-nav-image.png"
import bgIceCream from "@/assets/images/creamy-cove-parlour.png"

import { GoArrowUpRight } from "react-icons/go"
import { Link } from "react-router-dom"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export const Services = () => {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <Box id="uac-restaurants" ref={revealRef} as="section" className=" relative mt-12 py-10 h-fit">
      <Flex
        direction={"column"}
        className=" justify-center lg:items-center px-4 lg:px-0 place-self-center mt-10 relative w-[100%] z-10 py-10 "
      >
        <HStack className="pl-5 ">
          <Center w={"36px"} marginLeft={"-20px"}>
            <Image
              src={mrBiggsLogo}
              className="rounded-full border-l-2 border-yellow-400"
            />
          </Center>
          <Center w={"36px"} marginLeft={"-20px"}>
            <Image
              src={debonairsLogo}
              className="rounded-full border-l-2 border-yellow-400"
            />
          </Center>
          <Center w={"60px"} marginLeft={"-20px"}>
            <Image src={iceCreamLogo} />
          </Center>
        </HStack>

        <Heading fontWeight="bold" className=" text-[2rem] mt-3">
          UAC Restaurants
        </Heading>

        <Box
          w="100%"
          maxW={'100%'}
          margin={'0 auto'}
          py={6}
          px={{ base: 0, lg: "3rem" }}
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={'1rem'}
            color="white"
            className="mt-4 lg:my-7"
          >
            {Restaurants.map((item, i) => (
              <Flex
                key={i}
                flex={{ lg: "1 1 0" }}
                direction="column"
                w={{ base: "full" }}
                h={{ base: "328px", lg: "440px" }}
                className="p-2 lg:p-4 relative items-center justify-end rounded-lg"
              >
                <Image
                  className="absolute inset-0 -z-10 size-full rounded-lg object-cover"
                  src={item.image}
                />
                <Flex
                  justify={'space-between'}
                  align={'center'}
                  gap={0}
                  className="bg-[#FFFFFF4D] w-full rounded-2xl p-2 lg:p-3"
                >
                  <Box className="flex items-center">
                    <Image
                      className={`${i !== 2 && "border-l-2 border-yellow-300"} size-12 lg:size-12 rounded-full`}
                      src={item.logo}
                    />
                    <Text w={{ base: "full", lg: "40%" }} className="text-2xl lg:text-[1.6rem] font-bold ml-1 lg:ml-2">
                      {item.title}
                    </Text>
                    <Text
                      display={{ base: "none", lg: "block" }}
                      lineClamp={{ base: "none", lg: 2 }}
                    >
                      {item.description}
                    </Text>
                  </Box>

                  <Center className="rounded-full bg-white size-6 p-2 lg:size-9 lg:ml-4 text-black text-[6px] lg:text-[1rem]">
                    <Link to={item.link}>
                      <GoArrowUpRight className="size-[10px] lg:size-5 " />
                    </Link>
                  </Center>

                </Flex>
              </Flex>))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}


const Restaurants: { logo: string, image: string, title: string, description: string, link: string }[] = [
  {
    logo: mrBiggsLogo,
    image: bgMrBiggs1,
    title: "Mr Biggs",
    description: "Mr Bigg’s is Nigeria’s pioneer QSR brand, renowned for its delicious meals and freshly baked pastries. We have grown over the years, constantly re-inventing our services, to match the ever-evolving needs of our customers.",
    link: "/brands/mrbiggs"
  },
  {
    logo: debonairsLogo,
    image: bgDebonairs,
    title: "Debonairs Pizza",
    description: "Debonairs Pizza is a leading restaurant in Africa, known for amazing pizza and great deals.",
    link: "/brands/debonairs"
  },
  {
    logo: iceCreamLogo,
    image: bgIceCream,
    title: "Creamy Cove",
    description: "Creamy Cove is a delightful dessert brand offering rich, creamy ice creams and irresistible flavors made to satisfy every sweet craving.",
    link: "/brands/creamy-cove"
  }
]
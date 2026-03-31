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
import iceCreamLogo from "@/assets/images/ice-cream-logo.png"
import bgMrBiggs1 from "@/assets/images/nav-images/mrbiggs-nav-image.png"
import bgDebonairs from "@/assets/images/nav-images/debonairs-nav-image.png"
import bgIceCream from "@/assets/images/nav-images/icecream-nav-image.png"

import { GoArrowUpRight } from "react-icons/go"
import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export const Services = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const revealRef = useScrollReveal<HTMLDivElement>();

  useEffect(() => {
    const container = containerRef.current
    const slides = slideRefs.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = entries[0]
        entries.forEach((entry) => {
          if (entry.intersectionRatio > mostVisible.intersectionRatio) {
            mostVisible = entry
          }
        })
        const idx = Number((mostVisible.target as HTMLDivElement).dataset.index)
        setActiveIndex(idx)
      },
      {
        root: container,
        threshold: 0.98,
      }
    )

    slides.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (i: number) => {
    const el = slideRefs.current[i]
    if (!el) return
    el.scrollIntoView({ behavior: "smooth", inline: "center" })
  }

  return (
    <Box ref={revealRef} as="section" className=" relative mt-12 py-10 h-fit">
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
        >
          <Flex
            ref={containerRef}
            direction={{ base: "column", lg: "row" }}
            gap={'1rem'}
            color="white"
            className=" mt-4 lg:my-7 overflow-x-scroll snap-x snap-mandatory scroll-smooth overscroll-x-contain"
          >
            {Restaurants.map((item, i) => (
              <Flex
                flex={{ lg: "0 0 auto" }}
                key={i}
                data-index={i}
                ref={(el) => {
                  if (el) slideRefs.current[i] = el
                }}
                direction="column"
                w={{ base: "full", lg: "900px" }}
                h={{ base: "328px", lg: "498px" }}
                ml={{ base: 'none', lg: i === 0 ? "3rem" : "0" }}
                mr={{ base: 'none', lg: i === 2 ? '3rem' : '0' }}
                className=" p-2 lg:p-4  relative items-center  justify-end rounded-lg"
              >
                <Image
                  className="absolute inset-0 -z-10 size-full rounded-lg"
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

          <Flex
            display={{ base: 'none', lg: 'flex' }}
            justifyContent={"center"}
            marginTop={"3rem"}
            placeSelf={"center"}
            gap={".5rem"}
            className=" w-fit rounded-[100px] bg-[#F3F5FB] p-5 "
          >
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`rounded-[100px] border-none cursor-pointer transition-[background_.3s] h-[8px] ${i === activeIndex
                  ? "bg-[#C80104] w-[40px] "
                  : "bg-[#80808033] w-[14px]"
                  }`}
              />
            ))}
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
    link: "#"
  }
]
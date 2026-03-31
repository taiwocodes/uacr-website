import { Box, Flex, Stack, Image, HStack, Avatar, Text, Heading, Button } from "@chakra-ui/react";
import { NewsCard } from "@/components/sections/NewsCard";
import editorImg from "@/assets/images/news-editor.png";
import newsImage from "@/assets/images/blogs-hero.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const News = () => {
    const heroRef = useScrollReveal<HTMLDivElement>();
    const feedRef = useScrollReveal<HTMLDivElement>();
  return (
    <Flex justify="center" align="center" direction={'column'} maxW={{ base: "full", lg: "full" }} color={'black'} >
      <Flex
        ref={heroRef}
        justify="center"
        gap="2rem"
        w="full"
        wrap={{ base: "wrap", lg: "revert" }}
        py={{ base: "1.2rem", lg: "5rem" }}
        pt={{ base: 40, lg: 40 }}
        px={{ base: 3, lg: 20 }}
        className="bg-[#e5f2f2ae]"
      >
        <Flex justify="space-between"
          gap="2rem"
          maxW={'1440px'}
          wrap={{ base: "wrap", lg: "revert" }}>
          <Stack mr={{ lg: '113px' }} maxW={{ base: "full", lg: "559px" }}>
            <HStack>
              <Avatar.Root>
                <Avatar.Fallback name="JW" />
                <Avatar.Image src={editorImg} />
              </Avatar.Root>
              <Stack gap={0}>
                <HStack gap={4}>
                  <Text className=" text-xl font-semibold">Joe Walker</Text>
                  <Box rounded="lg" bg="gray.600" w="4px" h="4px" />
                  <Box className="rounded-lg bg-[#0080801A] text-xs font-medium" px={2} py={1}>
                    <Text color="success.500">12 mins read</Text>
                  </Box>
                </HStack>
                <Text className="text-gray-500 text-sm">Head Editor</Text>
              </Stack>
            </HStack>
            <Heading className="text-3xl font-semibold mt-6">
              Meet the Makers: The Faces Behind Your Favorite Dishes
            </Heading>
            <Text lineClamp={2} color="gray.600" fontSize="md">
              At UAC Restaurant, we believe extraordinary dining experiences begin with extraordinary people. While our
              dishes might steal the spotlight, it's our talented team that brings them to life. Today, we're proud to
              introduce you to the passionate culinary artists and hospitality experts who make every visit to UAC
              Restaurant memorable.
            </Text>
            <Button bg="brand.900" className="text-white text-[18px] font-medium p-6 rounded-lg w-[149px] mt-8">
              Read More
            </Button>
          </Stack>
          <Image src={newsImage} className="w-[632px] h-[317px]" alt="chef" rounded="xl" />
        </Flex>
      </Flex>

      <Box ref={feedRef} bg='white' pt={20} px={{ base: 3, lg: 20 }} pb={{ base: "1.2rem", lg: "5rem" }}>
        <NewsCard />
      </Box>
    </Flex>
  );
};
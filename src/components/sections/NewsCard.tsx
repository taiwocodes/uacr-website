import { Box, Flex, Heading, HStack, Image, Text, Stack } from "@chakra-ui/react";
import dateNight from "@/assets/images/news/date-night.png";
import eggs from "@/assets/images/news/eggs.png";
import pie from "@/assets/images/news/pie.png";

type NewsItem = {
  image: string;
  title: string;
  author: string;
  length: string;
};

type NewsItemProps = {
  items: NewsItem[];
};

const NewsComponent = ({ items }: NewsItemProps) => {
  return (
    <Flex gap='2rem' wrap={{ base: 'wrap', lg: 'revert' }} margin='auto' justify='center'>
      {items.map((item, index) => (
        <Box key={index}>
          <Stack>
          <Image src={item.image}/>
          <Heading className='font-bold text-xl'>{item.title}</Heading>
          <HStack color="gray.500" fontSize="xs">
            <Text>{item.author}</Text>
            <Box rounded="lg" bg="gray.600" w="4px" h="4px" />
            <Text>{item.length}</Text>
          </HStack>
          </Stack>
        </Box>
      ))}
    </Flex>
  );
};

export const NewsCard = () => {
  return (
    <NewsComponent
      items={[
        {
          image: dateNight,
          title: 'From First Dates to Anniversaries: How UAC Became Your Spot',
          author: 'Frank Leonard',
          length: '8 minutes'
        },
        {
          image: eggs,
          title: 'From First Dates to Anniversaries: How UAC Became Your Spot',
          author: 'Tamara Marcel',
          length: '13 minutes'
        },
        {
          image: pie,
          title: 'From First Dates to Anniversaries: How UAC Became Your Spot',
          author: 'Teni Moshood',
          length: '5 minutes'
        },
      ]}
    />
  )
};
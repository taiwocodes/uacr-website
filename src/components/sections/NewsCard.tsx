import { Box, Heading, HStack, Image, Text, Stack, Grid, Flex } from "@chakra-ui/react";

import Shots2 from "@/assets/images/shots-2.png";
import Shots3 from "@/assets/images/shots-3.png"
import UpdatePromoImage from '@/assets/images/update-and-promos-image.png'

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
    <Grid maxW={'1440px'} templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(3,1fr)' }} gap='2rem' margin='auto' alignContent='center'>
      {items.map((item, index) => (
        <Flex justify={'center'} align={'center'} w={'100%'} key={index}>
          <Stack w={'413px'} >
            <Image w={'413px'} h={'254px'} rounded={'lg'} src={item.image} />
            <Heading className='font-bold text-xl'>{item.title}</Heading>
            <HStack color="gray.500" fontSize="xs">
              <Text>{item.author}</Text>
              <Box rounded="lg" bg="gray.600" w="4px" h="4px" />
              <Text>{item.length}</Text>
            </HStack>
          </Stack>
        </Flex>
      ))}
    </Grid>
  );
};

export const NewsCard = () => {
  return (
    <NewsComponent
      items={[
        {
          image: Shots3,
          title: 'From First Dates to Anniversaries: How UAC Became Your Spot',
          author: 'Frank Leonard',
          length: '8 minutes'
        },
        {
          image: UpdatePromoImage,
          title: 'From First Dates to Anniversaries: How UAC Became Your Spot',
          author: 'Tamara Marcel',
          length: '13 minutes'
        },
        {
          image: Shots2,
          title: 'From First Dates to Anniversaries: How UAC Became Your Spot',
          author: 'Teni Moshood',
          length: '5 minutes'
        },
        {
          image: Shots2,
          title: 'From First Dates to Anniversaries: How UAC Became Your Spot',
          author: 'Frank Leonard',
          length: '8 minutes'
        },
        {
          image: UpdatePromoImage,
          title: 'From First Dates to Anniversaries: How UAC Became Your Spot',
          author: 'Tamara Marcel',
          length: '13 minutes'
        },
        {
          image: Shots3,
          title: 'From First Dates to Anniversaries: How UAC Became Your Spot',
          author: 'Teni Moshood',
          length: '5 minutes'
        },
        {
          image: Shots3,
          title: 'From First Dates to Anniversaries: How UAC Became Your Spot',
          author: 'Frank Leonard',
          length: '8 minutes'
        },
        {
          image: Shots2,
          title: 'From First Dates to Anniversaries: How UAC Became Your Spot',
          author: 'Tamara Marcel',
          length: '13 minutes'
        },
        {
          image: UpdatePromoImage,
          title: 'From First Dates to Anniversaries: How UAC Became Your Spot',
          author: 'Teni Moshood',
          length: '5 minutes'
        },
      ]}
    />
  )
};
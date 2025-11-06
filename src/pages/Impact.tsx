import { Box, Circle, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"
import heroImage from '@/assets/images/impact-hero-image.png'

export const Impact = () => {
    return (
        <Box>
            <Flex w={'full'} h={{ base: '600px', lg: '824px' }} align={'end'} pb={'102px'} bgRepeat={'none'} backgroundPosition={'center'} bgSize={'cover'} bgImage={`url('${heroImage}')`}>
                <Box w={{ base: 'full', lg: '720px' }} ml={{ base: '16px', lg: '104px' }}>
                    <Flex bg={''} className=' w-full lg:w-[381px] border-l-2 border-white backdrop-filter backdrop-blur-sm  p-2 items-center'>
                        <Text color={'white'} className='uppercase' fontWeight={'semibold'}>CORPORATE ANNOUNCEMENTS </Text>
                        <Circle bg={'white'} mx={2} size={'10px'} />
                        <Text color={'white'}>5 min read</Text>
                    </Flex>
                    <Heading mt={'24px'} fontSize={{ base: '32px', lg: '48px' }} lineHeight={'120%'} fontWeight={'bold'}>UAC Restaurants Launches New Signature Menu</Heading>
                    <Text mt={'12px'} fontSize={{ base: '16px', lg: '20px' }}>Catch up on major announcements, milestones, and everything shaping our journey across Nigeria and beyond.</Text>
                </Box>
            </Flex>
            <Grid templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(3,1fr)' }} gapY={'24px'} gapX={'12px'} className='px-3 lg:px-16 py-16'>
                {impactNews.map((item, index) => (
                    <GridItem key={index} className='bg-white p-6 border border-[#80808033] rounded-lg'>
                        <Image w={'100%'} src={item.img} />
                        <Flex className='mt-[14px] items-center'>
                            <Text color={'brand.100'} className='uppercase' fontWeight={'semibold'}>{item.category}</Text>
                            <Circle bg={'brand.100'} mx={2} size={'10px'} />
                            <Text color={'gray.90'}>5 min read</Text>
                        </Flex>
                        <Text color={'black'} mt={'12px'} fontSize={'20px'} fontWeight={'bold'}>{item.title}</Text>

                    </GridItem>
                ))}

            </Grid>
        </Box>
    )
}


const impactNews = [
    {
        category: 'Sustainability & CSR',
        title: 'Sustainability Milestone: 50% of Packaging Now Recyclable',
        img: '/impact-images/impact-images6.png'
    },
    {
        category: 'Press Releases',
        title: 'UAC Celebrates Five Years of Community Giving',
        img: '/impact-images/impact-images1.png'
    },
    {
        category: 'Press Releases',
        title: 'UAC Restaurants Launches New Signature Menu',
        img: '/impact-images/impact-images2.png'
    },
    {
        category: 'Sustainability & CSR',
        title: 'Sustainability Milestone: 50% of Packaging Now Recyclable',
        img: '/impact-images/impact-images3.png'
    },
    {
        category: 'Press Releases',
        title: 'UAC Celebrates Five Years of Community Giving',
        img: '/impact-images/impact-images4.png'
    },
    {
        category: 'Press Releases',
        title: 'UAC Restaurants Launches New Signature Menu',
        img: '/impact-images/impact-images5.png'
    },
]
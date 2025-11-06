import bgImage from '@/assets/images/stay-updated-image.png'
import avatar from '@/assets/images/testimonial-image.png'
import { Box, Circle, Flex, Image, Text } from '@chakra-ui/react'

export const StayUpdated = () => {
    return (
        <Flex bg={'#F3F5FBB2'} direction={{ base: 'column', lg: 'row' }} className='px-3 lg:px-16 py-10 lg:py-16' >
            <Flex direction={{ base: 'column', lg: 'row' }} className='lg:mr-10 h-[663px] relative items-center lg:items-start justify-center'>
                <Box display={{ base: 'block', lg: 'none' }} mb={4}>
                    <Text fontSize={{ base: '32px', lg: '40px' }} fontWeight={'bold'}>Stay updated on UAC Restaurants.</Text>
                    <Text fontSize={{ base: '16px', lg: '20px' }} color={'gray.90'}>Catch up on major announcements, milestones, and everything shaping our journey across Nigeria and beyond.</Text>
                </Box>
                <Image src={bgImage} h={{ base: '276px', lg: '90%' }} className='lg:mt-4 rounded-2xl' alt="bgImage" />
                <Box bg={'white'} className='absolute rounded-lg border border-[#80808033] inset-x-auto bottom-0 w-[314px] lg:w-[638px] py-5 px-6'>
                    <Flex w={'full'} className='items-center'>
                        <Text color={'brand.100'} fontSize={{ base: '12px', lg: '16px' }} fontWeight={'semibold'}>CORPORATE ANNOUNCEMENTS </Text>
                        <Circle bg={'brand.100'} mx={2} size={{ base: '5px', lg: '10px' }} />
                        <Text color={'gray.90'} fontSize={{ base: '12px', lg: '16px' }} >5 min read</Text>
                    </Flex>
                    <Text w={{ base: 'full', lg: '478px' }} fontSize={{ base: '18px', lg: '26px' }} fontWeight={'bold'}>UAC Restaurants Launches New Signature Menu</Text>
                    <Flex borderTop={'1px dashed #80808033'} mt={'15px'} pt={'15px'}>
                        <Image src={avatar} />
                        <Box ml={3}>
                            <Text>Jerry Uke</Text>
                            <Text color={'gray.90'}>1 day ago</Text>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            <Box w={{ base: 'full', lg: '50%' }} h={'663px'}>
                <Box display={{ base: 'none', lg: 'block' }}>
                    <Text fontSize={'40px'} fontWeight={'bold'}>Stay updated on UAC Restaurants.</Text>
                    <Text fontSize={'20px'} color={'gray.90'}>Catch up on major announcements, milestones, and everything shaping our journey across Nigeria and beyond.</Text>
                </Box>
                <Box>
                    {news.map((item, index) => (
                        <Box key={index} className='bg-white border border-[#80808033]  rounded-lg my-5 py-5 px-2 lg:px-6'>
                            <Flex className=' items-center'>
                                <Text color={'brand.100'} className='uppercase' fontWeight={'semibold'}>{item.category}</Text>
                                <Circle bg={'brand.100'} mx={2} size={'10px'} />
                                <Text color={'gray.90'}>5 min read</Text>
                            </Flex>
                            <Box>
                                <Text w={{ base: 'full', lg: '478px' }} fontSize={{ base: '18px', lg: '26px' }} fontWeight={'bold'}>{item.title}</Text>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Flex>
    )
}

const news = [
    {
        title: 'Sustainability Milestone: 50% of Packaging Now Recyclable',
        category: 'Sustainability & CSR',
    },
    {
        title: 'UAC Celebrates Five Years of Community Giving',
        category: 'Press Releases',
    },
    {
        title: 'UAC Restaurants Launches New Signature Menu',
        category: 'Press Releases',
    }
]
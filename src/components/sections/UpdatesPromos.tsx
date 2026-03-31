import { Box, Circle, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react"
import bgImage from '@/assets/images/stay-updated-image.png'
import avatar from '@/assets/images/testimonial-image.png'
import UpdatePromoImage from '@/assets/images/update-and-promos-image.png'
import UpdatePromoImage2 from '@/assets/images/update-and-promos-image2.png'
import UpdatePromoImage3 from '@/assets/images/update-and-promos-image3.png'
import UpdatePromoImage4 from '@/assets/images/update-and-promos-image4.png'
import { useScrollReveal } from "@/hooks/useScrollReveal"

export const UpdatesPromos = () => {
    const revealRef = useScrollReveal<HTMLDivElement>();
    return (
        <Flex ref={revealRef} direction={'column'} className=" justify-center items-center py-16 px-3 lg:px-24 relative">
            <Heading fontSize={{ base: '32px', lg: '40px' }} fontWeight={'bold'} mb={'16px'} textAlign={'center'}>Stories, Updates & Promos You’ll Love</Heading>
            <Text w={{ base: 'full', lg: '704px' }} color={'gray.90'} fontSize={{ base: '16px', lg: '20px' }} mb={'32px'} textAlign={'center'}>From special offers to behind-the-scenes moments—see what’s buzzing right now across our restaurants.</Text>
            <Flex direction={{ base: 'column', lg: 'row' }} w={{ base: 'full', lg: '1342px' }}>
                <Flex direction={{ base: 'column', lg: 'row' }} h={{ base: 'fit', lg: '333px' }} rounded={'12px'}>
                    <Image w={'479px'} src={bgImage} className="rounded-t-[12px] lg:rounded-t-none lg:rounded-l-[12px] " />
                    <Box w={{ base: 'full', lg: '413px' }} bg={'#F7F8FC'} className="rounded-b-[12px] lg:rounded-b-none lg:rounded-r-[12px]" p={'24px'}>
                        <Text fontSize={{ base: '18px', lg: '26px' }} fontWeight={'bold'}>UAC Restaurants Launches New Signature Menu</Text>
                        <Text fontSize={{ base: '16px', lg: '20px' }} color={'gray.90'}>Catch up on major announcements, milestones, and everything shaping our journey across Nigeria and beyond.</Text>
                        <Flex borderTop={'1px dashed #80808033'} mt={'26px'} pt={'26px'}>
                            <Image rounded={'lg'} src={avatar} />
                            <Box ml={3}>
                                <Text>Jerry Uke</Text>
                                <Text color={'gray.90'}>1 day ago</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <Box ml={{ base: '0px', lg: '20px' }} className="mt-5 lg:mt-0" w={{ base: 'full', lg: '436px' }}>
                    <Image roundedTop={'12px'} src={UpdatePromoImage} />
                    <Box roundedBottom={'12px'} p={'19px'} bg={'#F7F8FC'}>
                        <Text fontSize={{ base: '18px', lg: '20px' }} fontWeight={'medium'} mb={'12px'}>New Location Opening Soon in Abuja</Text>
                        <Flex color={'gray.90'} className=' items-center'>
                            <Text>Jerry Uke </Text>
                            <Circle bg={'brand.100'} mx={2} size={'10px'} />
                            <Text color={'gray.90'}>21 Jan, 2024</Text>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
            <Stack direction={{ base: 'column', lg: 'row' }} w={{ base: 'full', lg: '1342px' }} gap={5} mt={'28px'}>
                {UpdatePromoImages.map((item, index) => (
                    <Box key={index} w={{ base: 'full', lg: '436px' }}>
                        <Image roundedTop={'12px'} src={item.image} />
                        <Box roundedBottom={'12px'} p={'19px'} bg={'#F7F8FC'}>
                            <Text truncate fontSize={{ base: '18px', lg: '20px' }} fontWeight={'medium'} mb={'12px'}>{item.title}</Text>
                            <Flex color={'gray.90'} className=' items-center'>
                                <Text>Jerry Uke </Text>
                                <Circle bg={'brand.100'} mx={2} size={'10px'} />
                                <Text color={'gray.90'}>21,Jan 2024</Text>
                            </Flex>
                        </Box>
                    </Box>
                ))}
            </Stack>

        </Flex>
    )
}

const UpdatePromoImages = [
    {
        image: UpdatePromoImage2,
        title: 'Limited-Time Deal: 2-for-1 Lunch Combos'
    },
    {
        image: UpdatePromoImage3,
        title: 'Customer Spotlight: Family Feast Feedback'
    },
    {
        image: UpdatePromoImage4,
        title: 'Behind the Scenes: Chef Ali’s Kitchen Tour'
    }
]
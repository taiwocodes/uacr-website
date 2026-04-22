import { Box, CloseButton, Dialog, Flex, Grid, GridItem, Heading, Image, Span, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"

import folasopeAiyesimoju from "@/assets/images/directors/folasope-aiyesimoju.png"
import debolaBadejo from "@/assets/images/directors/debola-badejo.png"
import darrenHele from "@/assets/images/directors/darren-hele.png"
import phillipSmith from "@/assets/images/directors/phillip-smith.png"
import nneomaObikili from "@/assets/images/directors/nneoma-obikili.png"
import davidDogeni from "@/assets/images/directors/ifeaoma.png"
import dorcasOgunleye from "@/assets/images/directors/dorcas2.png"
import valentineEzeanochikwa from "@/assets/images/directors/valentine.png"
import samsonObisesan from "@/assets/images/directors/samson.png"
import muibatAjibade from "@/assets/images/directors/muibat.png"
import ifeomaProfile from "@/assets/images/directors/ifeoma.jpeg"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export const TeamPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState({
        name: "",
        role: "",
        description: "",
        img: ""
    })
    const headerRef = useScrollReveal<HTMLDivElement>();
    const boardRef = useScrollReveal<HTMLDivElement>();
    const managementRef = useScrollReveal<HTMLDivElement>();
    
    return (
        <Box>
            <Flex ref={headerRef} h={{ base: '650px', lg: '550px' }} direction={'column'} className="justify-end items-center bg-[linear-gradient(180deg,#E5F2F2_46.21%,#FFFFFF_105.1%)] py-16 pb-10 px-3 lg:px-24">
                <Heading w={{ base: 'full', lg: "595px" }} fontSize={{ base: '32px', lg: "48px" }} lineHeight="normal" fontWeight="bold" className="mb-2 text-center text-black">
                    Seasoned Non-Executive Board of Directors
                </Heading>
                <Text w={{ base: 'full', lg: "891px" }} fontSize={{ base: '16px', lg: '20px' }} color="gray.90" className="text-center mb-14">
                    Our board believes good governance is a journey, not a destination. We are committed to strong governance principles geared towards continuous improvement. For us, our stakeholders and customers remain our top priority.
                </Text>
            </Flex>
            <Flex ref={boardRef} h={'fit'} direction={'column'} className="px-3 lg:px-16 my-0" >
                <Stack direction={{ base: 'column', md: 'row' }} className="justify-center" w={'full'} gap={0}>
                    {boardOfDirectors.map((director) => (
                        <GridItem onClick={() => { setSelected(director); setIsOpen(true) }} w={{ base: 'full', md: '302.23px' }} h="fit" borderColor="gray.50" className="relative rounded-lg">
                            <Flex onClick={() => { setSelected(director); setIsOpen(true) }} w={'full'} direction={'column'} h="full" className="cursor-pointer p-4">
                                <Image w="full" bg={'#F3F5FBB2'} h={'389px'} className="rounded-lg border-[0.5px] border-[#80808033]" src={director.img} />
                                <Span w={'full'} className="">
                                    <Text color="brand.900" className=" my-2 w-fit text-start items-center">{director.role}</Text>
                                    <Text w="full" color={'dark.900'} fontWeight="semibold" fontSize="22px">{director.name}</Text>
                                    <Text w="full" lineClamp={2} color="gray.90">{director.description}</Text>
                                </Span>
                            </Flex>
                        </GridItem>))}
                </Stack>
            </Flex>
            <Flex ref={managementRef} direction={'column'} align={'center'} color={'dark.900'} bg={'#F3F5FBB2'} className="px-3 lg:px-24 py-10 my-10">
                <Box maxW={'1440px'}>
                    <Flex direction={{ base: 'column', md: 'row' }} justify={'space-between'} align={'center'}>
                        <Heading fontSize={{ base: '32px', md: '48px' }} lineHeight={'normal'} fontWeight={'bold'}>Strong and Experienced Management Team</Heading>
                        <Text className="mt-4 lg:mt-0" fontSize={{ base: '16px', md: '20px' }} color={'gray.90'}>Behind scenes is our crew of young and vibrant professionals with a wealth of experience constantly ensuring that the UAC Restaurants promise is fulfilled.</Text>
                    </Flex>
                    <Grid justifyItems={'center'} alignContent={'center'} templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }} className="justify-center mt-10" w={'full'} gap={0}>
                        {management.map((director) => (
                            <GridItem key={director.name} onClick={() => { setSelected(director); setIsOpen(true); }} w={{ base: 'full', md: '413.67px' }} h="fit" borderColor="gray.50" className="relative rounded-lg">
                                <Flex onClick={() => setIsOpen(true)} w={'full'} direction={'column'} h="full" className="cursor-pointer p-4">
                                    <Image w="full" h={'389px'} objectFit="cover" objectPosition={director.name === 'David Dogeni' || director.name === 'Valentine Ezeanochikwa' ? 'center 0%' : 'center top'} className="rounded-lg border-[0.5px] border-[#80808033]" src={director.img} />
                                    <Span w={'full'} className="">
                                        <Text color="brand.900" className=" my-2 w-fit text-start items-center">{director.role}</Text>
                                        <Text w="full" color={'dark.900'} fontWeight="semibold" fontSize="22px">{director.name}</Text>
                                        <Text w="full" lineClamp={2} color="gray.90">{director.description}</Text>
                                    </Span>
                                </Flex>
                            </GridItem>))}
                    </Grid>
                </Box>
            </Flex>

            <Dialog.Root
                size="cover" placement="center"
                open={isOpen}
                onOpenChange={(open) => !open && setSelected({ name: "", role: "", description: "", img: "" })}
                onInteractOutside={() => { setIsOpen(false); setSelected({ name: "", role: "", description: "", img: "" }) }}>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content w={'90%'} h={'90%'} my={10} bg={'white'}>
                        <Dialog.CloseTrigger
                            onClick={() => {
                                setIsOpen(false);
                                setSelected({ name: "", role: "", description: "", img: "" })
                            }}>
                            <CloseButton size={'xl'} className="border-none outline-none" color={'brand.100'} />
                        </Dialog.CloseTrigger>
                        <Flex h={'full'} w={'full'}>
                            <Box p={14} color={'black'}>
                                <Text color="brand.900">{selected.role}</Text>
                                <Text w="full" color={'dark.900'} my={2} fontWeight="semibold" fontSize="26px">{selected.name}</Text>
                                <Text lineHeight={'120%'} maxH={'98%'} scrollbar={'hidden'} overflowY={'scroll'} textAlign={'justify'} fontSize={'18px'} color={'gray.90'} className="whitespace-pre-line">
                                    {selected.description}
                                </Text>
                            </Box>
                            <Image bg={'#F3F5FBB2'} w="50%" objectPosition={'center'} className="" src={selected.img} />
                        </Flex>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Dialog.Root>


        </Box >
    )
}

const boardOfDirectors = ([
    {
        name: "Folasope Aiyesimoju",
        role: "Chairman",
        description: `Over the course of his career he has lived and worked in Sub-Saharan Africa’s most important economies gaining experience of the operating landscape in the region.\n\nFola is the founder of Themis Capital Management, an investment firm focused on concentrating capital and talent on high-potential opportunities in Sub-Saharan Africa.\n\nPrior to founding Themis, he worked with Kohlberg Kravis Roberts, a leading global investment firm with $168 billion in assets under management. His experience also includes working with the Standard Bank Group, where he led mergers and acquisitions in Nigeria.\n\nFola spent the early part of his career with Ocean and Oil Holdings Limited, a principal investment firm in Nigeria and ARM Investment Managers, one of Nigeria’s leading investment advisory and wealth management firms.\n\nMr. Aiyesimoju also sits on the Boards of Chemical and Allied Products(CAP) PLC,MDS Logistics Limited, Grand Cereals Limited, UAC Foods Limited and UPDC Plc.\n\nHe holds a B.Sc (Hons) degree in Estate Management from the University of Lagos, where he was awarded a Certificate of Excellence in Real estate development and finance, and earned the right to use the CFA designation in 2006.`,
        img: folasopeAiyesimoju
    },
    {
        name: "Debola Badejo",
        role: "Vice Chairman",
        description: "Mr. Badejo qualified as an Engineer at the University of Virginia and holds Mas...",
        img: debolaBadejo
    },
    {
        name: "Darren Hele",
        role: "Non-Executive Director",
        description: "Mr. Hele is the Managing Director of Famous Brands Limited, South Africa...",
        img: darrenHele
    },
    {
        name: 'Phillip Smith',
        role: 'Non-Executive Director',
        description: 'Mr. Smith is the Famous Brands Managing Executive for Africa and Midd...',
        img: phillipSmith
    }
])

const management = [
    {
        name: 'Nneoma Obikili',
        role: 'General Manager Corporate Services',
        description: 'Mrs. Nneoma Obikili brings a wealth of experience in Strategy Development, Performance Improvement, and Project Execution. Most recently, she served as Business Advisor & Head',
        img: nneomaObikili
    },
    {
        name: 'David Dogeni',
        role: 'Chief Technology Officer',
        description: 'Prior to joining UACR, David was the Head, Information Technology at UAC of Nigeria Plc, He lead the digital transformation journey for the business and it’s subsidiaries',
        img: davidDogeni
    },
    {
        name: 'Dorcas Ogunleye',
        role: 'Brand Manager',
        description: 'Prior to joining UACR, Dorcas held the esteemed position as the Senior Brand Manager at Montaigne AH Limited',
        img: dorcasOgunleye
    },
    {
        name: "Valentine Ezeanochikwa",
        role: "Procurement Manager",
        description: "Valentine is a highly skilled Procurement professional with over 9 years of experience in strategic sourcing, supplier management, contract negotiation, and procurement process optimization spanning across diverse industries including FMCG, Healthcare and Regulatory sectors.\n\nSince taking up the role of Procurement Manager UAC Restaurants in February 2025, he has been pivotal in driving procurement excellence and optimizing supply chain processes.\n\nPrior to joining UAC Restaurants, Valentine served as the Procurement Manager at Vendease Limited where he successfully managed vendor portfolios, supported key negotiations, and led cross-functional procurement projects. His interdisciplinary background provides a strategic advantage in driving business transformation, aligning procurement and chain supply strategies with organizational objectives to deliver measurable impact on efficiency, cost savings, and overall performance.",
        img: valentineEzeanochikwa
    },
    {
        name: "Samson Obisesan",
        role: "Distribution Manager",
        description: "Samson is a seasoned supply chain professional with over 10years experience in Logistics, inventory, planning, sales and procurement.\n\nHe joined UACR in 2016 as a dispatch staff, where he was responsible for managing orders from over 80stores and planning deliveries pan Nigeria.\n\nIn 2021, he became the Demand planner/Logistics supervisor, where he was responsible for demand & supply planning, and sales forecasting for the business.\n\nHe also joined SAP Project refresh in 2021 as a subject matter expert (SME) for two workstreams, Procure to Pay(P2P) and Order to Cash (O2C) till the successful completion in 2022.\n\nIn 2023, he designed a delivery system that reduced the logistics cost by 20%, he was also nominated for internal control champions within the business in same year.\n\nPrior to joining UACR, Samson worked as sales representative with MTN Nigeria in 2012, before joining Shoprite as an inventory supervisor. His experience in inventory, fleet management and planning best prepare him to better support the growth and expansion of the business, He currently serves as Logistics manager, managing the warehouse, inbound and outbound Logistics and a mini production unit within the organization.",
        img: samsonObisesan
    },
    {
        name: "Muibat Ajibade",
        role: "Risk Assurance Manager",
        description: "Muibat Ajibade is the Risk Assurance Manager at UAC Restaurants Limited, with over five years of progressive experience within the organization. She has served in roles such as Restaurant Accountant, Internal Control Supervisor, and Data Protection Officer, and brings expertise in internal audit, finance, inventory management, risk management and regulatory compliance.",
        img: muibatAjibade
    },
    {
        name: "Ifeoma",
        role: "Management Team",
        description: "Profile bio to be provided.",
        img: ifeomaProfile
    }
]
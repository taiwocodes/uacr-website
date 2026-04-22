import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";


import useDataFilter from "@/hooks/useDataFilter";
import { BsArrowUpRight } from "react-icons/bs";
import classNames from "classnames";
import Pagination from "@/components/common/Pagination";
import { Box, Center, CloseButton, Dialog, Flex, Grid, Heading, HStack, Text } from "@chakra-ui/react";
import { Vacancy } from "@/utils/model";
import RolePage from "./RolePage";

//import Pagination from "@/components/common/Pagination";
//import { routes } from "@/utils/constants";

const OpenRoles: React.FC = () => {
    //const navigate = useNavigate();
    /*const handleRolePage = (roleIndex: number) => {
      navigate(`${routes.ROLE}?number=${roleIndex}`);
    }; */
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState<Vacancy>({
        role: "",
        description: "",
        mode: ["", ""],
        tag: ""
    })

    const {
        activeTag,
        currentPage,
        pageSize,
        paginated,
        uniqueTags,
        itemCount,
        onPageChange,
        onTagChange,
    } = useDataFilter(vacancies);

    return (
        <>
            <Flex className=" text-black bg-[#e5f2f2d3] h-[30rem] w-screen flex-col justify-center items-center pt-[5.5rem] px-[1.5rem] lg:px-[5.56rem]">
                <Heading className="text-dark text-3xl lg:text-[2.5rem] font-bold">Open Roles</Heading>
                <Text color={'gray.90'} w={{ base: 'full', lg: '891px' }} className=" lg:text-xl text-center mt-[1.5rem]">Explore opportunities to join UAC Restaurants and grow your career in a dynamic, fast-paced environment where talent is developed and excellence is valued.</Text>
                <Text color={'gray.90'} w={{ base: 'full', lg: '891px' }} className=" text-sm lg:text-base text-center mt-[1rem]">Available Roles: Operations, Marketing, Finance, Risk &amp; Audit, Procurement (only Operations roles are currently open).</Text>
            </Flex>

            <Box className="py-[2.5rem] text-black lg:py-16 lg:pb-[7.375rem] px-[1.5rem] lg:px-[4rem] bg-white font-satoshi">
                <div className="mt-[1.5rem] lg:mt-[2rem]">
                    <div className="w-full overflow-x-auto scrollbar-hide flex justify-start items-center gap-x-[1rem] lg:gap-x-[1.5rem]">
                        <button
                            onClick={() => onTagChange("")}
                            className={classNames({
                                "text-sm whitespace-nowrap lg:text-lg px-[1rem] capitalize min-w-[4.75rem] py-[0.5rem] lg:py-[0.75rem] rounded-full":
                                    true,
                                "text-[#6F7777] bg-[#F6F8FA]": activeTag !== "",
                                "text-white font-medium bg-[#EF0909]": activeTag === "",
                            })}
                        >
                            All
                        </button>

                        {uniqueTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => onTagChange(tag)}
                                className={classNames({
                                    "text-sm whitespace-nowrap lg:text-lg px-[1rem] capitalize lg:min-w-[4.75rem] py-[0.5rem] lg:py-[0.75rem] rounded-full":
                                        true,
                                    "text-[#6F7777] bg-[#F6F8FA]": tag !== activeTag,
                                    "text-white font-medium bg-[#EF0909]": tag === activeTag,
                                })}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    <Grid templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(3,1fr)' }} gap={'1.5rem'} className="mt-[3rem] justify-items-center content-center items-center lg:mt-[4.5rem]">
                        {paginated.map((vacancy, index) => {
                            if (paginated.length === 0)
                                return <p className="text-[#EF0909] text-xl my-40">No vacancies available.</p>

                            return (
                                <Flex
                                    onClick={() => { setIsOpen(true); setSelected(vacancy) }}
                                    key={vacancy.role}
                                    bg={'#F3F5FBB2'}
                                    h={'284px'}
                                    rounded={'lg'}
                                    className={classNames({
                                        "lg:py-[2.5rem] px-[1.5rem] cursor-pointer lg:border-b border-b-[#B4B4B4]/20 lg:flex items-center justify-start":
                                            true,
                                        "lg:mx-2": index !== 0,
                                    })}
                                >
                                    <div className="flex-1">
                                        <Text className="text-lg lg:text-2xl font-bold text-black">
                                            {vacancy.role}
                                        </Text>
                                        <Text color={'gray.90'} lineClamp={4} className="text-base lg:text-base mt-[1rem] mb-[1.5rem] text-ash">
                                            {vacancy.description}
                                        </Text>

                                        <Flex className="justify-between items-center gap-x-[1rem]">
                                            <HStack>
                                                {vacancy.mode.map((mode) => (
                                                    <div
                                                        key={mode}
                                                        className="capitalize border border-primary rounded-full px-[1rem] py-[0.7rem] text-primary text-base"
                                                    >
                                                        {mode}
                                                    </div>
                                                ))}
                                            </HStack>
                                            <Center
                                                bg={'brand.900'}
                                                onClick={() => { setIsOpen(true); setSelected(vacancy) }}
                                                className="w-[2rem] cursor-pointer lg:w-[3rem] h-[2rem] lg:h-[3rem] bg-dark rounded-full flex items-center justify-center text-white">
                                                <BsArrowUpRight />
                                            </Center>
                                        </Flex>
                                    </div>

                                </Flex>
                            )
                        })}
                    </Grid>
                </div >

                <div className="mt-[2.5rem] lg:mt-[5rem] mb-[2.375rem] lg:mb-[4.375rem]">
                    {<Pagination
                        onPageChange={onPageChange}
                        currentPage={currentPage}
                        itemCount={itemCount}
                        pageSize={pageSize}
                    />}
                </div>

                <Box className="mt-[2rem] lg:mt-[3rem] p-[1.5rem] lg:p-[2.5rem] rounded-lg bg-[#F3F5FBB2]">
                    <Heading className="text-dark text-2xl lg:text-[1.75rem] font-bold mb-[1rem]">How to Apply</Heading>
                    <Text color={'gray.90'} className="lg:text-lg mb-[1rem]">
                        Interested candidates should send their updated CV to:{" "}
                        <a href="mailto:humanresource@uacrestaurants.com" className="text-[#EF0909] underline">humanresource@uacrestaurants.com</a>
                    </Text>
                    <Text color={'gray.90'} className="lg:text-lg">
                        Join us and be part of a team that delivers great food, great service, and great experiences every day.
                    </Text>
                </Box>
            </Box>

            <Dialog.Root
                size="full" placement="center"
                open={isOpen}
                onOpenChange={(open) => !open && setSelected({ role: '', description: '', mode: [], tag: '' })}
                onInteractOutside={() => setSelected({ role: '', description: '', mode: [], tag: '' })}>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content w={'100%'} h={'100%'} maxH={'100%'} overflowY={'scroll'} rounded={'2xl'} p={4} mt={10} bg={'white'}>
                        <Dialog.CloseTrigger
                            onClick={() => {
                                setIsOpen(false);
                                setSelected({ role: '', description: '', mode: [], tag: '' })
                            }}>
                            <CloseButton size={'xl'} className="border-none outline-none" color={'brand.100'} />
                        </Dialog.CloseTrigger>
                        <RolePage vacancy={selected} />
                    </Dialog.Content>
                </Dialog.Positioner>
            </Dialog.Root>
        </>
    );
};

export const vacancies: Vacancy[] = [
    {
        role: "Service Assistant",
        description:
            "If you are energetic, customer-focused, and ready to grow your career in the quick service restaurant industry, we would love to hear from you. Send your updated CV to humanresource@uacrestaurants.com to apply.",
        mode: ["on-site", "full-time"],
        tag: "Operations",
    },
    {
        role: "Restaurant Supervisor",
        description:
            "If you are energetic, customer-focused, and ready to grow your career in the quick service restaurant industry, we would love to hear from you. Send your updated CV to humanresource@uacrestaurants.com to apply.",
        mode: ["on-site", "full-time"],
        tag: "Operations",
    },
    {
        role: "Restaurant Manager",
        description:
            "If you are energetic, customer-focused, and ready to grow your career in the quick service restaurant industry, we would love to hear from you. Send your updated CV to humanresource@uacrestaurants.com to apply.",
        mode: ["on-site", "full-time"],
        tag: "Operations",
    },
];

export default OpenRoles;


import { FaLocationDot } from "react-icons/fa6"


import { BsEnvelope, BsPencil } from "react-icons/bs"
import logo from "@/assets/logo/logoLight.png"

import { Vacancy } from "@/utils/model"
import { Box, Button, Center, HStack, Text } from "@chakra-ui/react"

interface VacancyProps {
    vacancy: Vacancy;
}

const RolePage = (vacancy: VacancyProps) => {

    return (
        <>

            <Box className="capitalize mt-7 text-base lg:text-lg text-black  gap-x-[0.5rem]">
                <h2 className="text-xl lg:text-[2rem] mt-[1rem] lg:mt-0 font-semibold text-black">
                    {vacancy.vacancy.role}
                </h2>
                <HStack mt={5}>
                    <Center bg='#F6F8FA' color={'gray.90'} className="w-[98px] h-[48px] rounded-3xl">{vacancy.vacancy.mode[0]}</Center>
                    <Center bg='#F6F8FA' color={'gray.90'} className="w-[98px] h-[48px] rounded-3xl">{vacancy.vacancy.mode[1]}</Center>
                </HStack>
            </Box>

            <div className="bg-transparent pt-[1rem] pb-[4.5rem] lg:pb-[12.5rem] px-[1.5rem] gap-x-[3.81rem] grid lg:grid-cols-[1fr_36.1rem] relative">
                <div className="mt-[2.5rem] row-start-2 lg:row-start-2 lg:mt-0">
                    <Text color={'gray.90'} className="text-base lg:text-lg italic">
                        Full job details will be shared shortly.
                    </Text>
                </div>

                <div className="row-start-1 lg:row-start-2 lg:h-full lg:sticky lg:top-[13.75rem]">
                    <div className="border-2 border-[#B4B4B4]/20 rounded-lg px-[1rem] py-[1.5rem] lg:p-[2rem]">
                        <div className="flex items-center justify-start gap-x-[1rem] lg:gap-x-[1.5rem]">
                            <Center color={'brand.900'} >
                                <FaLocationDot color="#F81212" className="w-[1rem] lg:w-[1.5rem] h-[1rem] lg:h-[1.5rem]" />
                            </Center>

                            <div className="font-medium text-dark text-lg lg:text-xl">
                                Lagos, Nigeria
                            </div>
                        </div>

                        <Text color={'gray.90'} className="mt-[1rem] text-ash text-base lg:text-lg">
                            Send your updated CV to the address below to apply.
                        </Text>

                        <div className="mt-[2rem] lg:mt-[1.5rem]">
                            <div className="flex items-center justify-start gap-x-[1.5rem]">
                                <Center bg={'#F812120D'} color={'brand.900'} className=" w-[2rem] lg:w-[3rem] h-[2rem] lg:h-[3rem] rounded-full">
                                    <BsEnvelope className="w-[1rem] lg:w-[1.5rem] h-[1rem] lg:h-[1.5rem]" />
                                </Center>

                                <div className="flex-1">
                                    <a href="mailto:humanresource@uacrestaurants.com" className="text-base lg:text-lg text-dark font-medium underline">
                                        humanresource@uacrestaurants.com
                                    </a>
                                    <Text color="gray.90" className="text-sm lg:text-base text-ash font-medium mt-[0.5rem]">
                                        Contact email
                                    </Text>
                                </div>
                            </div>

                            <div className="mt-[1.5rem] flex items-center justify-start gap-x-[1.5rem]">
                                <Center bg={'#F812120D'} color={'brand.900'} className=" w-[2rem] lg:w-[3rem] h-[2rem] lg:h-[3rem] rounded-full">
                                    <BsPencil className="w-[1rem] lg:w-[1.5rem] h-[1rem] lg:h-[1.5rem]" />
                                </Center>

                                <div className="flex-1">
                                    <div className="text-base lg:text-lg capitalize text-dark font-medium">
                                        {vacancy.vacancy.tag}
                                    </div>
                                    <Text color="gray.90" className="text-sm lg:text-base text-ash font-medium mt-[0.5rem]">
                                        Job category
                                    </Text>
                                </div>
                            </div>
                        </div>

                        <Button asChild bg={'brand.900'} className="mt-[2rem] lg:mt-[3rem] text-base lg:text-xl text-white rounded-2xl bg-primary w-full text-center py-[1.7rem] font-medium">
                            <a href="mailto:humanresource@uacrestaurants.com">Apply for this job</a>
                        </Button>
                    </div>

                    <Box color={'gray.90'} className="border-2 border-[#B4B4B4]/20 rounded-lg mt-[2.5rem] px-[1rem] py-[1.5rem] lg:p-[2rem]">
                        <img
                            src={logo}
                            alt="UACR"
                            className="h-[3.75rem] w-[7.06rem] object-contain"
                        />

                        <p className="my-[1.5rem] lg:my-[1rem] text-ash text-base lg:text-lg">
                            We are committed to creating the best work environment and culture for all our employees.
                        </p>
                    </Box>
                </div>
            </div>
        </>
    )
}

export default RolePage

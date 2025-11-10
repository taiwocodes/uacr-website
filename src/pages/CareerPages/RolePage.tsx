
import { FaLocationDot } from "react-icons/fa6"
import { formatDate } from "@/utils/lib"


import { BsCalendar, BsClock, BsEnvelope, BsPencil } from "react-icons/bs"
import logo from "@/assets/logo/logoLight.png"

import { Vacancy } from "@/utils/model"
import { Box, Button, Center, HStack, List, Text } from "@chakra-ui/react"

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
                    <div className="text-left mt-[2rem]">
                        <Text className="text-lg lg:text-[22px] font-medium text-dark">
                            Responsibilities
                        </Text>
                        <Text color={'gray.90'} className="mt-[1rem] text-base lg:text-lg"> Daily Operations Leadership:</Text>
                        <List.Root className="mt-[0.5rem] p-0 mb-0 ml-[2rem] text-ash text-base lg:text-lg list-disc">
                            <List.Item color={'gray'}>Supervise all restaurant operations, including opening/closing procedures, staffing, and workflow optimization.</List.Item>
                            <List.Item color={'gray'}>Ensure compliance with health, safety, and sanitation regulations (OSHA, local codes).</List.Item>
                            <List.Item color={'gray'}>Troubleshoot operational issues (e.g., equipment malfunctions, vendor delays) with urgency.</List.Item>
                        </List.Root>
                        <Text color={'gray.90'} className="mt-[1rem] text-base lg:text-lg"> Financial Stewardship:</Text>
                        <List.Root className="mt-[0.5rem] p-0 mb-0 ml-[2rem] text-ash text-base lg:text-lg list-disc">
                            <List.Item color={'gray'}>Manage inventory, food/labor costs, and budgets to meet profitability targets.</List.Item>
                            <List.Item color={'gray'}>Analyze P&L reports, identify waste reduction opportunities, and implement cost-saving measures.</List.Item>
                            <List.Item color={'gray'}>Oversee vendor relationships and negotiate supply contracts.</List.Item>
                        </List.Root>
                        <Text color={'gray.90'} className="mt-[1rem] text-base lg:text-lg">Team Development</Text>
                        <List.Root className="mt-[0.5rem] p-0 mb-0 ml-[2rem] text-ash text-base lg:text-lg list-disc">
                            <List.Item color={'gray'} >Train, schedule, and motivate FOH/BOH staff to uphold service standards.</List.Item>
                            <List.Item color={'gray'} >Conduct performance reviews and foster a culture of accountability and growth.</List.Item>
                            <List.Item color={'gray'} >Resolve conflicts and maintain high employee morale.</List.Item>
                        </List.Root>
                        <Text color={'gray.90'} className="mt-[1rem] text-base lg:text-lg">Strategic Improvement</Text>
                        <List.Root className="mt-[0.5rem] p-0 mb-0 ml-[2rem] text-ash text-base lg:text-lg list-disc">
                            <List.Item color={'gray'} >Develop and enforce SOPs to elevate efficiency and guest satisfaction.</List.Item>
                            <List.Item color={'gray'} >Research and integrate technology (POS, inventory software) to modernize operations.</List.Item>
                            <List.Item color={'gray'} >Support marketing initiatives (events, promotions) to drive revenue.</List.Item>
                        </List.Root>

                    </div>

                    <div className="text-left mt-[2rem]">
                        <Text className="text-lg lg:text-[22px] font-medium text-dark">
                            Qualifications
                        </Text>
                        <List.Root className="mt-[1.5rem] mb-0 ml-[2rem] text-ash text-base lg:text-lg list-disc">
                            <List.Item color={'gray'}>
                                Experience: 3+ years in restaurant operations management (upscale/high-volume preferred).
                            </List.Item>
                            <List.Item color={'gray'}>
                                3+ years of experience in product design, preferably in the
                                food, FMCG, or agro-processing industry.
                            </List.Item>
                            <List.Item color={'gray'}>
                                Skills:
                                <List.Root ps={5}>
                                    <List.Item>Financial acumen (food cost analysis, budgeting).</List.Item>
                                    <List.Item>Leadership with emotional intelligence.</List.Item>
                                    <List.Item>Problem-solving under pressure.</List.Item>
                                </List.Root>
                            </List.Item>
                            <List.Item color={'gray'}>
                                Certifications: Food Handler’s Card, ServSafe (or willingness to obtain).
                            </List.Item>
                            <List.Item color={'gray'}>
                                Traits: Organized, proactive, and passionate about hospitality.
                            </List.Item>
                            <List.Item color={'gray'}>
                                Knowledge of sustainable design practices and materials is an
                                advantage.
                            </List.Item>
                        </List.Root>
                    </div>

                    <div className="text-left mt-[2rem]">
                        <Text className="text-lg lg:text-[22px] font-medium text-dark">
                            Why Join Us?
                        </Text>
                        <List.Root className="mt-[1.5rem] mb-0 ml-[2rem] text-ash text-base lg:text-lg list-disc">

                            <List.Item color={'gray'}>Work in a collaborative and supportive environment.</List.Item>
                            <List.Item color={'gray'}>Competitive salary and benefits package.</List.Item>
                            <List.Item color={'gray'}>
                                Be part of a company that values innovation, sustainability,
                                and community impact.
                            </List.Item>
                        </List.Root>
                    </div>

                    <div className="text-left mt-[2rem]">
                        <Text className="text-lg lg:text-[22px] font-medium text-dark">
                            To Apply
                        </Text>
                        <List.Root className="mt-[1.5rem] mb-0 ml-[2rem] text-ash text-base lg:text-lg list-disc">
                            <List.Item color={'gray'}>Submit your resume and cover letter to [email].</List.Item>
                        </List.Root>
                    </div>

                    <div className="text-left mt-[2rem]">
                        <Text className="text-lg lg:text-[22px] font-medium text-dark">
                            Tailoring Tips:
                        </Text>
                        <List.Root className="mt-[1.5rem] mb-0 ml-[2rem] text-ash text-base lg:text-lg list-disc">
                            <List.Item color={'gray.90'}>For UAC Restaurant, emphasize member experience (e.g., "Curate seamless private events for our club community").</List.Item>
                            <List.Item color={'gray.90'}>Add specifics (e.g., "Manage team of 25+ across dinner service and weekend brunch").</List.Item>
                            <List.Item color={'gray.90'}>Include cultural values (e.g., "Champion our farm-to-table ethos in supply chain decisions").</List.Item>
                        </List.Root>
                    </div>

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
                            Please upload your resume to apply for this job
                        </Text>

                        <div className="mt-[2rem] lg:mt-[1.5rem]">
                            <div className="text-lg lg:text-2xl text-dark font-bold">
                                ₦1,000,000
                            </div>
                            <p className="mt-[0.5rem] text-ash text-base lg:text-xl">
                                Per month
                            </p>
                        </div>

                        <div className="mt-[2rem] lg:mt-[1.5rem]">
                            <div className="flex items-center justify-start gap-x-[1.5rem]">
                                <Center bg={'#F812120D'} color={'brand.900'} className=" w-[2rem] lg:w-[3rem] h-[2rem] lg:h-[3rem] rounded-full">
                                    <BsEnvelope className="w-[1rem] lg:w-[1.5rem] h-[1rem] lg:h-[1.5rem]" />
                                </Center>

                                <div className="flex-1">
                                    <div className="text-base lg:text-lg text-dark font-medium">
                                        career@uacr.com
                                    </div>
                                    <Text color="gray.90" className="text-sm lg:text-base  text-ash font-medium mt-[0.5rem]">
                                        Contact email
                                    </Text>
                                </div>
                            </div>

                            <div className="mt-[1.5rem] flex items-center justify-start gap-x-[1.5rem]">
                                <Center bg={'#F812120D'} color={'brand.900'} className="w-[2rem] lg:w-[3rem] h-[2rem] lg:h-[3rem] rounded-full">
                                    <BsClock className="w-[1rem] lg:w-[1.5rem] h-[1rem] lg:h-[1.5rem]" />
                                </Center>

                                <div className="flex-1">
                                    <div className="text-base lg:text-lg text-dark font-medium">
                                        Full-Time
                                    </div>
                                    <Text color="gray.90" className="text-sm lg:text-base text-ash font-medium mt-[0.5rem]">
                                        Job type
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

                            <div className="mt-[1.5rem] flex items-center justify-start gap-x-[1.5rem]">
                                <Center bg={'#F812120D'} color={'brand.900'} className=" w-[2rem] lg:w-[3rem] h-[2rem] lg:h-[3rem] rounded-full">
                                    <BsCalendar className="w-[1rem] lg:w-[1.5rem] h-[1rem] lg:h-[1.5rem]" />
                                </Center>

                                <div className="flex-1">
                                    <div className="text-base lg:text-lg text-dark font-medium">
                                        {formatDate("2025-01-08")}
                                    </div>
                                    <Text color="gray.90" className="text-sm lg:text-base text-ash font-medium mt-[0.5rem]">
                                        Date posted
                                    </Text>
                                </div>
                            </div>
                        </div>

                        <Button bg={'brand.900'} className="mt-[2rem] lg:mt-[3rem] text-base lg:text-xl text-white rounded-2xl bg-primary w-full text-center py-[1.7rem] font-medium">
                            Apply for this job
                        </Button>
                    </div>

                    <Box color={'gray.90'} className="border-2 border-[#B4B4B4]/20 rounded-lg mt-[2.5rem] px-[1rem] py-[1.5rem] lg:p-[2rem]">
                        <img
                            src={logo}
                            alt="GCL"
                            className="h-[3.75rem] w-[7.06rem] object-contain"
                        />

                        <div className="flex-1 mt-[1.5rem]">
                            <div className="text-base lg:text-lg text-ash mt-[0.5rem] lg:mt-[1rem]">
                                Please upload your resume to apply for this job
                            </div>
                        </div>


                        <p className="my-[1.5rem] lg:my-[1rem] text-ash text-base lg:text-lg">
                            We are committed to creating the best work environment and
                            culture for all our employees
                        </p>

                        <button className="text-center bg-[#F6F8FA] py-[0.75rem] w-full text-base text-dark lg:text-lg rounded-full font-medium border border-[#B4B4B4]/20">
                            Learn more about us
                        </button>
                    </Box>
                </div>
            </div>
        </>
    )
}

export default RolePage

import { Controller, useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import PhoneInput, { CountryData } from 'react-phone-input-2';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, HStack, Input, Stack, RadioCard, RadioGroup, Textarea, Button, Flex } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Radio } from "../ui/radio";
import { useState } from "react";
import { BsCheck } from "react-icons/bs";

const contactFormSchema = z
    .object({
        firstName: z.string().min(1, "First name is required"),
        lastName: z.string().min(1, "Last name is required"),
        email: z.string().min(1, "Email is required"),
        countryCode: z.string().min(1, "Country code is required"),
        phoneNumber: z.string().min(1, "Phone number is required"),
        purpose: z.string().min(1, "Purpose is required"),
        source: z.string().min(1, "Please select an option"),
        message: z.string().min(1, "Message is required"),
    })

type FormValues = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
    const { register, trigger, setValue, control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(contactFormSchema), mode: 'onTouched'
    });

    const location = useLocation();
    const isContactPage = location.pathname.includes("/contact");
    const [isChecked, setIsChecked] = useState(false);


    return (
        <Box
            bg={isContactPage ? 'blue.50' : 'white'}
            borderRadius='lg'
            maxW={{ base: 'full', lg: '748px' }}
            p={isContactPage ? 6 : 0}
        >
            <form action="">
                <Stack gap={5}>
                    <HStack>
                        <Field
                            color="black"
                            className="text-base font-medium"
                            maxW="20.5rem"
                            label="First Name"
                        >
                            <Input
                                color="gray.600"
                                className="rounded-lg text-base font-medium border border-gray-200"
                                placeholder="Your first name"
                                p={3}
                                bg={isContactPage ? 'white' : 'transparent'}
                            />
                        </Field>
                        <Field
                            color="black"
                            className="text-base font-medium"
                            maxW="20.5rem"
                            label="Last Name"
                        >
                            <Input
                                color="gray.600"
                                className="rounded-lg text-base font-medium border border-gray-200"
                                placeholder="Your last name"
                                p={3}
                                bg={isContactPage ? 'white' : 'transparent'}
                            />
                        </Field>
                    </HStack>

                    <Field
                        color="black"
                        className="text-base font-medium"
                        minW="28.75rem"
                        label="Email Address"
                    >
                        <Input
                            color="gray.600"
                            className="rounded-lg text-base font-medium border border-gray-200"
                            placeholder="e.g username@email.com"
                            p={3}
                            bg={isContactPage ? 'white' : 'transparent'}
                            w='100%'
                        />
                    </Field>

                    <Controller
                        name="phoneNumber"
                        control={control}
                        rules={{
                            required: "Phone number is required",
                            validate: (value) => {
                                const localNumber = value.replace(/\D/g, "").slice(-13);
                                return localNumber.length === 13 || "Phone number must be 10 digits";
                            },
                        }}
                        render={({ field }) => (
                            <PhoneInput
                                specialLabel="Phone Number"
                                containerStyle={{ fontSize: '14px', fontWeight: 'medium' }}
                                country={"ng"}
                                countryCodeEditable={false}
                                enableSearch={true}
                                inputStyle={{
                                    width: "100%",
                                    border: "1px solid #80808033",
                                    borderRadius: '8px',
                                    padding: '8px',
                                    fontSize: '16px',
                                    background: isContactPage ? 'white' : 'transparent'
                                }}
                                value={field.value}
                                onChange={(value, country) => {
                                    const countryInfo = country as CountryData;
                                    field.onChange(value);
                                    setValue("countryCode", `+${countryInfo.dialCode}`, {
                                        shouldValidate: true,
                                    });
                                    trigger("countryCode");
                                }}
                            />
                        )}
                    />
                    <Input type="hidden" {...register('countryCode')} />


                    {isContactPage && (
                        <>
                            <RadioCard.Root
                                align="center"
                                justify="center"
                                maxW="lg"
                                defaultValue="consultancy"
                                unstyled
                            >
                                <RadioCard.Label className="text-sm font-medium">What's on your mind?</RadioCard.Label>
                                <HStack gap={{ base: 8, lg: 3 }} mt='1rem' wrap={{ base: 'wrap', lg: 'revert' }}>
                                    {purposeItems.map((item) => (
                                        <RadioCard.Item key={item.value} value={item.value}>
                                            <RadioCard.ItemHiddenInput />
                                            <RadioCard.ItemControl>
                                                <RadioCard.ItemText
                                                    className="bg-gray-200 p-3 rounded-3xl border border-gray-400 text-center text-gray-600 data-[state=checked]:bg-[#EF0909] data-[state=checked]:text-white
                                    data-[state=checked]:border-none transition-colors duration-250"
                                                >
                                                    {item.label}
                                                </RadioCard.ItemText>
                                            </RadioCard.ItemControl>
                                        </RadioCard.Item>
                                    ))}
                                </HStack>
                            </RadioCard.Root>

                            <Field label='How did you hear about us?' mt={4}>
                                <Controller
                                    name="source"
                                    control={control}
                                    render={({ field }) => (
                                        <RadioGroup.Root
                                            size='lg'
                                            {...field}
                                            value={field.value}
                                            onChange={(value) => field.onChange(value)}
                                            variant='outline'
                                            defaultValue="Instagram"
                                        >
                                            <HStack gap="6" wrap={{ base: 'wrap', lg: 'revert' }}>
                                                {sourceItems.map((source) => (
                                                    <RadioGroup.Item cursor='pointer' key={source.value} value={source.value}>
                                                        <Radio value={source.value} color='gray.500'>{source.label}</Radio>
                                                    </RadioGroup.Item>
                                                ))}

                                            </HStack>
                                        </RadioGroup.Root>
                                    )}
                                />
                            </Field>
                        </>
                    )}

                    <Field label='Message'>
                        <Textarea
                            placeholder="Leave a message for us..."
                            className="p-4 border rounded-lg h-[180px]"
                            bg={isContactPage ? 'white' : 'transparent'}
                        />
                    </Field>

                    <div className="flex justify-start items-start mt-3">
                        <label className="relative text-[#6F7777] block cursor-pointer select-none mt-2 pr-10">
                            <input
                                type="checkbox"
                                checked={isChecked}
                                className="absolute opacity-0 h-0 w-0 peer"
                                required
                            />
                            <div
                                onClick={() => setIsChecked(!isChecked)}
                                className={`absolute top-0 left-0 h-[1.375rem] w-[1.375rem] border border-primary rounded-sm flex items-center justify-center ${isChecked ? 'bg-[#EF09090A]' : 'bg-transparent'} `}>
                                <BsCheck
                                    className={`w-4 h-4 text-[#ef0909] transition-opacity duration-200 ${isChecked ? 'opacity-100' : 'opacity-0'
                                        }`}
                                />
                            </div></label>
                        <label style={{ color: "#6F7777" }}>
                            By Clicking here, I agree to UAC Restaurants Limited processing my personal data in line with our terms and conditions and{" "}
                            <Link to="/privacy-policy" style={{ textDecoration: "underline" }}>
                                Data Privacy Policy
                            </Link>
                        </label>
                    </div>



                    <Flex justify={isContactPage ? 'center' : 'end'}>
                        <Button
                            type="submit"
                            className="text-white text-[18px] font-medium p-6 rounded-lg"
                            bg="brand.900"
                            disabled
                            w={isContactPage ? 'full' : '116px'}
                            display='flex'

                        >
                            Submit
                        </Button>
                    </Flex>
                </Stack>
            </form>
        </Box>
    )
};

const purposeItems = [
    { value: "consultancy", label: "Consultancy" },
    { value: "catering", label: "Catering" },
    { value: "complaints", label: "Complaints" },
    { value: "other", label: "Other" },
];

const sourceItems = [
    { value: "Instagram", label: "Instagram" },
    { value: "Facebook", label: "Facebook" },
    { value: "Twitter", label: "Twitter" },
    { value: "othOtherer", label: "Other" },
]
import { Flex } from "@chakra-ui/react"
import { useState } from "react"

export const Careers = () => {
    const filters=["All","Operations","Management","Security","Nutrition"]

    const [selectedFilters,setSelectedFilters]=useState("All")

    return (
        <Flex>Careers</Flex>
    )
}

const vacancies = [
    {role:"Operations Manager", category:["Operations","Management"] },
    {role:"Security Manager", category:["Security","Management"]},
    {role:"Pastry Chef", category:"Nutrition"}
]
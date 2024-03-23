import { VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import { Box, Link, Avatar, Text, Flex, textDecoration } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"

const SuggestedUsers = ()=>{
    return <VStack px={6} gap={4}>
        <SuggestedHeader/>
        <Flex w={"full"} display={"flex"} flexDirection={"row"} mr={4} justifyContent={"space-between"} alignItems={"center"}>
        
            <Text fontSize={"16px"} color={"#4b4b4be7"}>suggestend for you</Text>
        
        <Link color={"blue.400"} fontSize={"16px"} _hover={{textDecoration:"none",color:"white"}} >see all</Link>
    </Flex>
    <SuggestedUser/>
    <SuggestedUser/>
    <SuggestedUser/>
    <SuggestedUser/>
    <SuggestedUser/>
    </VStack>
}

export default SuggestedUsers;
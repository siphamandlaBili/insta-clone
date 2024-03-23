import { Box, Link, Avatar, Text, Flex, textDecoration } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"

const SuggestedHeader = () => {

    return <Flex w={"full"} display={"flex"} flexDirection={"row"} mr={4} justifyContent={"space-between"} alignItems={"center"}>
        <Flex alignItems={"center"} gap={4}>
            <Avatar
                size='lg'
                name='Prosper Otemuyiwa'
                src='https://bit.ly/prosper-baba'
            />{' '}
            <Text fontSize={"16px"} fontWeight={"500"}>Azile_bili</Text>
        </Flex>
        <Link to={"/auth"} as={RouterLink} color={"blue.400"} fontSize={"16px"} fontWeight={"medium"} _hover={{textDecoration:"none",color:"white"}} >logout</Link>
    </Flex>
}

export default SuggestedHeader;
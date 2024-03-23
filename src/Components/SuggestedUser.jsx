import { Box, Link, Avatar, Text, Flex, textDecoration } from "@chakra-ui/react";

const SuggestedUser =()=>{
    return <Flex w={"full"} display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
    <Flex alignItems={"center"} gap={2}>
        <Avatar
            size='md'
            name='Prosper Otemuyiwa'
            src='https://bit.ly/prosper-baba'
        />{' '}
        <Flex flexDirection={"column"}>
        <Text fontSize={"14px"} fontWeight={"400"} textAlign={"left"}>Azile_bili</Text>
        <Text fontSize={"16px"} color={"#4b4b4be7"}>1.2k followers</Text>
        </Flex>
    </Flex>
    <Link  color={"blue.400"} fontSize={"16px"} fontWeight={"medium"} _hover={{textDecoration:"none",color:"white"}} >unfollow</Link>
</Flex>
}

export default SuggestedUser;
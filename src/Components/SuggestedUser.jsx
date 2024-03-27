import { Box, Link, Avatar, Text, Flex,Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const SuggestedUser =()=>{
    const [isFollowed,setFollowed] = useState(false);

    const followHandle = () =>{
        setFollowed(!isFollowed)
    }

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
    <Button color={"blue.400"} variant='link' fontWeight={300} onClick={followHandle} _hover={{textDecor:"none",color:"white"}}>
    {isFollowed? "unfollow": <FaPlus />}
  </Button>
</Flex>
}

export default SuggestedUser;
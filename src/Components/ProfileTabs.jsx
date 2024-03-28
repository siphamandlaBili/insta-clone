import { Box, Flex, Text } from "@chakra-ui/react";
import { BsGrid3X3, BsBookmarkPlus,BsSuitHeart } from "react-icons/bs";

const ProfileTabs = ()=>{
    return <Flex w={"100%"} justifyContent={"center"} gap={{base:4,sm:10}} textTransform={"uppercase"} fontWeight={"bold"} position={"relative"} top={-10}>
        <Flex borderTop={"1px solid white"} alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
            <Box fontSize={20} display={'flex'} flexDir={"row"} gap={2}>
                <BsGrid3X3/>
                <Text fontSize={12} display={{base:"none",sm:"block"}}>Posts</Text>
            </Box>
        </Flex>
        <Flex  alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
            <Box fontSize={20} flexDir={"row"} display={'flex'} gap={2}>
                <BsBookmarkPlus />
                <Text fontSize={12} display={{base:"none",sm:"block"}}>Saved</Text>
            </Box>
        </Flex>
        <Flex  alignItems={"center"} p={3} gap={1} cursor={"pointer"} justifyContent={"center"}>
            <Box fontSize={20} flexDir={"row"} display={'flex'} gap={2}>
                <BsSuitHeart/>
                <Text fontSize={12} display={{base:"none",sm:"block"}}>Likes</Text>
            </Box>
        </Flex>
    </Flex>
}

export default ProfileTabs;
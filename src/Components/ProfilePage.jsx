import { Container, Flex } from "@chakra-ui/react";
import ProfileHeader from "./ProfileHeader";
import ProfileTabs from "./ProfileTabs";
import ProfilePosts from "./ProfilePosts";

const ProfilePage =()=>{
    return <Container minxW={"100vw"} py={5} display={"flex"} flexDir={"column"} alignItems={"center"} >
    <Flex py={10} px={4} pl={{base:4,md:10}} w={"full"} mx={"auto"} flexDirection={"column"} >
    <ProfileHeader/>
    </Flex>
    <Flex py={10} w={"100%"}   maxW={"full"} borderTop={"1px solid"}borderColor={"whiteAlpha.300"} mx={"auto"} flexDirection={"column"} paddingBottom={0} >
    <ProfileTabs/>
    <ProfilePosts/>
    </Flex>
    </Container>
}

export default ProfilePage;
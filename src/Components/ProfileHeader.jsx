import { Flex, WrapItem, Avatar, VStack, Box, Text, AvatarGroup, Button } from "@chakra-ui/react";

const ProfileHeader = () => {
    return <Flex gap={{ base: 4, sm: 10 }} py={10} flexDir={{ base: "column", sm: "row" }} marginBottom={0}>
        {/* {avatar state} */}
        <AvatarGroup size={{ base: "xl", md: "2xl" }} max={5} justifySelf={"center"} alignSelf={"flex-start"} mx={"auto"}>
            <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
        </AvatarGroup>
        {/* {profile information} */}
        <VStack gap={2} alignItems={"start"} mx={"auto"} flex={1} >
            <Flex direction={{ base: "column", sm: "row" }} justifyContent={{ base: "center", sm: "flex-start" }} alignItems={"center"} w={"full"} gap={3}>
                <Text fontSize={{ base: "sm", md: "lg" }}>Sipha_Bili</Text>
                <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                    <Button bg={"white"} color={"black"} _hover={{ bg: "whiteAlpha.800" }} size={{ base: "xs", md: "sm" }}>Edit Profile</Button>
                </Flex>
            </Flex>

            <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
                <Text>
                    <Text as={"span"} fontWeight={"bold"} mr={1}>4</Text>
                    Post
                </Text>

                <Text>
                    <Text as={"span"} fontWeight={"bold"} mr={1}>144</Text>
                    Followers
                </Text>

                <Text>
                    <Text as={"span"} fontWeight={"bold"} mr={1}>140</Text>
                    Following
                </Text>

            </Flex>
            <Flex>
                <Text as={"span"} fontWeight={"bold"} fontSize={"sm"} mr={1}>Sipha_Bili</Text>
            </Flex>
            <Flex>
                <Text textAlign={"left"}>
                    "education is supposed to make a differnce not make you different"
                </Text>
            </Flex>

        </VStack>
    </Flex>
}

export default ProfileHeader;
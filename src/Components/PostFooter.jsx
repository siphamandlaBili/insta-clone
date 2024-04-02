import { useState } from "react";
import { Box, Flex, Text, Input, InputGroup, Skeleton, SkeletonCircle, InputRightAddon, Stack, Button } from "@chakra-ui/react";
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../assets/constants";


const PostFooter = ({ username, likesC, isloaded,isProfilePage }) => {
    
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(20);

    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        }
        else {
            setLiked(true);
            setLikes(likes + 1);
        }
    }
    return <>
        <Flex flexDir={"column"} gap={4} w={"full"} pt={0} mt={2} marginTop={"auto"}>
            <Flex gap={2}>
                <Skeleton isLoaded={isloaded}>
                    <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
                        {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
                    </Box>
                </Skeleton>
                <Skeleton isLoaded={isloaded}>
                    <Box cursor={"pointer"} fontSize={18}>
                        <CommentLogo />
                    </Box>
                </Skeleton>
            </Flex>
            <Flex flexDir={"column"} alignItems={"flex-start"}>
                <Skeleton isLoaded={isloaded}>
                    <Text as={"span"} fontWeight={600} fontSize={"small"}>
                        {likes} likes
                    </Text>
                </Skeleton>



                <Flex fontSize="sm" fontWeight={700} flexDirection={"column"}>
                    {!isProfilePage && <Skeleton isLoaded={isloaded}>
                    <Skeleton isLoaded={isloaded}>
                        <Text fontWeight={400} textAlign={"left"}>
                            {username}&nbsp;lifes good🚀🚀
                        </Text>
                    </Skeleton>
                        <Text fontSize={"sm"} color={"gray"} textAlign={"left"}>
                            view all 4 comments
                        </Text>
                    </Skeleton>}
                    
                </Flex>
            </Flex>
        </Flex>
        <Stack>
            <Skeleton isLoaded={isloaded}>
                <InputGroup size='sm'>
                    <Input variant='flushed' placeholder='add a comment' fontSize={14} />
                    <InputRightAddon background={"transparent"} border={"transparent"}>
                        <Button colorScheme='blue' variant='link' color={"#836bff"}>post</Button>
                    </InputRightAddon>
                </InputGroup>
            </Skeleton>
        </Stack >
    </>
}

export default PostFooter;
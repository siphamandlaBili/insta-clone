import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { Box, Image } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const Feedpost = ({ img, username, likesC, isloaded }) => {
    console.log(isloaded)
    return <Box mb={10}>
            <PostHeader img={img} username={username} isloaded={isloaded} />
        <Skeleton isLoaded={isloaded}>
            <Box w={"100%"} >
                <Image src={img} borderRadius={10} fallbackSrc='https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg' objectFit='cover' alt='Dan Abramov' w={"full"} />
            </Box>
        </Skeleton>
        <PostFooter username={username} likesC={likesC} isloaded={isloaded} />
    </Box>
}

export default Feedpost
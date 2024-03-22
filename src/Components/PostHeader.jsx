import { Box, Flex, Link,WrapItem,Text,Avatar,SkeletonCircle,Skeleton } from "@chakra-ui/react";
import { SlOptions } from "react-icons/sl";

const PostHeader = ({img,username,isloaded}) => {
       
    return <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} m={"5px"}>
        {/* right of post hearder */}
        <Flex alignItems={"center"} gap={1}>
            <WrapItem mr={"7px"}>
                <SkeletonCircle isLoaded={isloaded}>
                <Avatar size='sm' name={username} src={img} />{' '}
                </SkeletonCircle>
            </WrapItem>

                <Skeleton isLoaded={isloaded}>
            <Text>
                <Link color='#efeff0' href='#'>
                    {username? username : "no username"}
                </Link>
            </Text>
                </Skeleton>
           <Text color={"#515152cf"} >• 20m</Text>
        </Flex>
        {/* left side */}
        <Skeleton isLoaded={isloaded}>
        <Link color='#836bff' href='#' _hover={{color:"white"}}>
                    unfollow
        </Link>
        </Skeleton>

    </Box>
}

export default PostHeader;
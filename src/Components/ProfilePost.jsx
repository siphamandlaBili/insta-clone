import { Flex, GridItem,Text,Image } from "@chakra-ui/react";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaCommentDots } from "react-icons/fa";


const ProfilePost =({img})=>{
    console.log(img)
    return <GridItem
    cursor={"pointer"}
    borderRadius={4}
    overflow={"hidden"}
    border={"1px solid"}
    borderColor={"whiteAlpha.300"}
    position={"relative"}
    aspectRatio={1/1}
    >
        <Flex
        opacity={0}
        _hover={{opacity:1}}
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg={"blackAlpha.700"}
        zIndex={1}
        justifyContent={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={6}>
            <Flex gap={2} alignItems={"center"} justifyContent={"center"}>
            <BsSuitHeartFill size={20} />
            <Text>7</Text>
            </Flex>
            <Flex gap={2} alignItems={"center"} justifyContent={"center"}>
            <FaCommentDots size={20} />
            <Text>9</Text>
            </Flex>
          </Flex>
        </Flex>
     <Image src={img} w={"100%"} h={"100%"} objectFit={"cover"}/>
    </GridItem>
}

export default ProfilePost;
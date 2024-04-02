import { Modal, ModalOverlay, Avatar, Button, Box, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Flex, GridItem, Text, Image, useDisclosure, VStack, Divider } from '@chakra-ui/react'
import { BsSuitHeartFill } from "react-icons/bs";
import { FaCommentDots } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from './Comment';
import PostFooter from "./PostFooter"

const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return <><GridItem
    cursor={"pointer"}
    borderRadius={4}
    overflow={"hidden"}
    border={"1px solid"}
    borderColor={"whiteAlpha.300"}
    position={"relative"}
    aspectRatio={1 / 1}
    onClick={onOpen}
  >
    <Flex
      opacity={0}
      _hover={{ opacity: 1 }}
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
    <Image src={img} w={"100%"} h={"100%"} objectFit={"cover"} />
  </GridItem>

    <Modal isOpen={isOpen} isCentered={true} onClose={onClose}
      size={{ base: "3xl", md: "5xl" }}>
      <ModalOverlay />
      <ModalContent>
        {/* <ModalHeader>Modal Title</ModalHeader> */}
        <ModalCloseButton />
        <ModalBody bg={"black"} border={"1px solid gray"} borderRadius={"10px"} pb={5}>
          <Flex gap={4} w={{ base: "90%", sm: "70%", md: "full" }} mx={"auto"}>
            <Box
              borderRadius={4}
              overflow={"hidden"}
              border={"1px solid"}
              borderColor={"whiteAlpha.300"}
              flex={1.5}
              height={"400px"}
              w={"100px"}
            >
              <Image src={img} alt={img} objectFit={"cover"} w={"100%"} h={"100%"} />
            </Box>
            <Flex flex={1} flexDir={"column"} px={10} display={{ base: "none", md: "flex" }} >
              <Flex alignItems={"center"} justifyContent={"space-between"} borderBottom={"1px solid"} borderColor={"gray"} pb={2} >
                <Flex alignItems={"center"} gap={5}>
                <Avatar name='Kent Dodds' src={img} size="sm" />
                <Text fontWeight={"bold"} fontSize={12}>Sipha_Bili</Text>
                </Flex>
                <Box _hover={{ color: "red"}}>
                  <MdDelete size={20} cursor={"pointer"} />
                </Box>
              </Flex>

              <VStack display={"flex"} alignItems={"flex-start"} maxHeight={"200px"} my={2} overflow={"auto"}>
                <Comment createDate ="1d ago" username="kakarot" profilePic="https://orig00.deviantart.net/273b/f/2016/225/6/3/poster__3__son_goku_super_saiyan_by_dark_crawler-da6juqa.jpg" text="nice one yho "/>
                <Comment createDate ="1d ago" username="vegita" profilePic="https://pbs.twimg.com/media/FeWBSuRX0AAxE8W.jpg:large" text="yhoo yasho lent"/>
                <Comment createDate ="1d ago" username="kakarot" profilePic="https://orig00.deviantart.net/273b/f/2016/225/6/3/poster__3__son_goku_super_saiyan_by_dark_crawler-da6juqa.jpg" text="ekhah  8ugr8heg yhoo yasho lent"/>
                <Comment createDate ="1d ago" username="kakarot" profilePic="https://orig00.deviantart.net/273b/f/2016/225/6/3/poster__3__son_goku_super_saiyan_by_dark_crawler-da6juqa.jpg" text="nice one yho "/>
                <Comment createDate ="1d ago" username="vegita" profilePic="https://pbs.twimg.com/media/FeWBSuRX0AAxE8W.jpg:large" text="yhoo yasho lent"/>
                <Comment createDate ="1d ago" username="kakarot" profilePic="https://orig00.deviantart.net/273b/f/2016/225/6/3/poster__3__son_goku_super_saiyan_by_dark_crawler-da6juqa.jpg" text="ekhah  8ugr8heg yhoo yasho lent"/>
                <Comment createDate ="1d ago" username="kakarot" profilePic="https://orig00.deviantart.net/273b/f/2016/225/6/3/poster__3__son_goku_super_saiyan_by_dark_crawler-da6juqa.jpg" text="nice one yho "/>
                <Comment createDate ="1d ago" username="vegita" profilePic="https://pbs.twimg.com/media/FeWBSuRX0AAxE8W.jpg:large" text="yhoo yasho lent"/>
                <Comment createDate ="1d ago" username="kakarot" profilePic="https://orig00.deviantart.net/273b/f/2016/225/6/3/poster__3__son_goku_super_saiyan_by_dark_crawler-da6juqa.jpg" text="ekhah  8ugr8heg yhoo yasho lent"/>
                <Comment createDate ="1d ago" username="kakarot" profilePic="https://orig00.deviantart.net/273b/f/2016/225/6/3/poster__3__son_goku_super_saiyan_by_dark_crawler-da6juqa.jpg" text="nice one yho "/>
                <Comment createDate ="1d ago" username="vegita" profilePic="https://pbs.twimg.com/media/FeWBSuRX0AAxE8W.jpg:large" text="yhoo yasho lent"/>
                <Comment createDate ="1d ago" username="kakarot" profilePic="https://orig00.deviantart.net/273b/f/2016/225/6/3/poster__3__son_goku_super_saiyan_by_dark_crawler-da6juqa.jpg" text="ekhah  8ugr8heg yhoo yasho lent"/>
                <Comment createDate ="1d ago" username="kakarot" profilePic="https://orig00.deviantart.net/273b/f/2016/225/6/3/poster__3__son_goku_super_saiyan_by_dark_crawler-da6juqa.jpg" text="nice one yho "/>
                <Comment createDate ="1d ago" username="vegita" profilePic="https://pbs.twimg.com/media/FeWBSuRX0AAxE8W.jpg:large" text="yhoo yasho lent"/>
                <Comment createDate ="1d ago" username="kakarot" profilePic="https://orig00.deviantart.net/273b/f/2016/225/6/3/poster__3__son_goku_super_saiyan_by_dark_crawler-da6juqa.jpg" text="ekhah  8ugr8heg yhoo yasho lent"/>
                
              </VStack>
              <Divider bg={"gray"}/>
              <PostFooter isloaded="false" isProfilePage="true"/>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  </>
}

export default ProfilePost;
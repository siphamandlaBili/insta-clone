import { Box, Flex, Link, Tooltip,Avatar } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"
import { InstagramLogo, InstagramMobileLogo,SearchLogo,NotificationsLogo,CreatePostLogo} from "../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";

const Sidebar = () => {
    const sidebarItems = [
        {
            icon: <AiFillHome size={25} />,
            text: "Home",
            links: "/"
        },
        {
            icon: <SearchLogo/>,
            text: "Search"
        },
        {
            icon: <NotificationsLogo/>,
            text: "Notifications"
        },
        {
            icon: <CreatePostLogo/>,
            text: "Create"
        },
        {
            icon: <Avatar name='Dan Abrahmov' size='sm' src='https://bit.ly/dan-abramov' />,
            text: "Profile"
        },
    ]

    return <Box height={"100vh"} position={"sticky"} top={0} left={0} borderRight={"1px solid"} borderColor={"whiteAlpha.300"} py={8} px={{ base: 2, md: 4 }}>
        <Flex flexDirection={"column"} gap={10} w={"full"} height={"full"}>
            <Link to={"/"} as={RouterLink} pl={2} display={{ base: "none", md: "block" }}><InstagramLogo /></Link>
            <Link to={"/"} as={RouterLink} p={2} display={{ base: "block", md: "none" }} cursor={"pointer"} w={{ base: 10 }} borderRadius={6} _hover={{ bg: "whiteAlpha.200" }}><InstagramMobileLogo /></Link>
         <Flex flexDirection={"column"} gap={5} cursor={"pointer"}>
            { sidebarItems.map((element,index)=>{
                return <Tooltip key={index}
                   hasArrow
                   label={element.text}
                   placement="right"
                   ml={1}
                   openDelay={500}
                   display={{base:"block",md:"none"}}
                >
                    <Link display={"flex"} to={element.links || null}as={RouterLink} alignItems={"center"} gap={4} _hover={{bg:"whiteAlpha.300"}} borderRadius={6} p={2} w={"full"}>
                        {element.icon}
                        <Box display={{base:"none",md:"block"}}>
                            {element.text}
                        </Box>
                    </Link>
                </Tooltip>
                    
               
            })}
         </Flex>
         <Flex marginTop={"auto"}>
         <Tooltip 
                   hasArrow
                   label={"logout"}
                   placement="right"
                   ml={1}
                   openDelay={500}
                   display={{base:"block",md:"none"}}
                >
                    <Link display={"flex"} to={"/auth"}as={RouterLink} alignItems={"center"} gap={4} _hover={{bg:"whiteAlpha.300"}} borderRadius={6} p={2} w={"full"}>
                    <IoLogOutOutline fontSize={"2rem"} fontWeight={"700"}/>
                        <Box display={{base:"none",md:"block"}}>
                            Logout
                        </Box>
                    </Link>
                </Tooltip>
         </Flex>
        </Flex>

       
    </Box>
}

export default Sidebar;
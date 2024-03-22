import { Container,Flex,Box } from "@chakra-ui/react";
import FeedPosts from "./FeedPosts";

const HomePage =()=>{
    return <Container maxW={'container.lg'} ml={{base:"0px",md:"0px"}} minW={"350px"} >
        <Flex gap={20}>
            {/* left posts */}
            <Box flex={2} py={10}  maxW={"400px"} >
              <FeedPosts/>
            </Box>
            {/* right suggested people */}
            <Box flex={3} mr={20} display={{base:"none", lg:"block"}} maxW={"250px"} 
            border={"1px solid red"} h={"400px"}
            position={"sticky"}
            top={"30px"}
            left={"0px"}
            >
              <h1>suggested</h1>
            </Box>
        </Flex>
        </Container>
}

export default HomePage;
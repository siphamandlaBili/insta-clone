import { Container, VStack } from '@chakra-ui/react'
import { Flex, Spacer, Box, Image } from '@chakra-ui/react'
import img1 from "/auth.png"
import img2 from "/microsoft.png"
import img3 from "/playstore.png"
import AuthForm from "./AuthForm"

const AuthPage = () => {
    return <Flex minH={"100vh"} padding="0" justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={'container.md'} padding={"0"}>
            <Flex justifyContent={"center"} alignItems={"center"}>

                {/* left hand */}
                <Box display={{ base: "none", md: "block" }}>
                    <Image src={img1} h={550} alt='phone image' />
                </Box>
                {/* right hand */}
                <VStack spacing={"stretch"}>
                  <AuthForm/>
                  <Box textAlign={"center"}>Get the app.</Box>
                  <Flex gap={5} justifyContent={"center"}>
                    <Image src={img2} alt='microsoft image' h={"10"}/>
                    <Image src={img3} alt='playstore image' h={"10"} />
                  </Flex>
                </VStack>
            </Flex>

        </Container>
    </Flex>
}

export default AuthPage
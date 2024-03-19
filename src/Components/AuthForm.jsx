import { Box, VStack, Image, Input, Button, Flex, Text, Link } from "@chakra-ui/react";
import logoAuth from "/logo.png"
import { useState } from "react";

const AuthForm = () => {
    const [isLogin, isSetLogin] = useState(true);

    const register = (e) => {
        e.preventDefault();
        isSetLogin(!isLogin)
    }


    return <>

        {isLogin ? <Box border={"1px solid gray"} borderRadius={4} padding={5}>
            <VStack spacing={4}>
                <Image src={logoAuth} h={24} />
                <Input placeholder='Email' type="email" />
                <Input placeholder='Password' type="password" />
                <Button colorScheme='teal' size='sm' width={"100%"}>
                    Log in
                </Button>
                <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                    <Box flex={2} h={"1px"} bg={"gray.400"} />
                    <Text mx={1} color={"white"}>
                        OR
                    </Text>
                    <Box flex={2} h={"1px"} bg={"gray.400"} />
                </Flex>
                <Flex>
                    <Image src="/google.png" w={5} marginRight={3} />
                    <Text>
                        <Link color='teal.500' href='#'>
                            sign in with google
                        </Link>
                    </Text>
                </Flex>
            </VStack>

        </Box> : <Box border={"1px solid gray"} borderRadius={4} padding={5}>
            <VStack spacing={4}>
                <Image src={logoAuth} h={24} />
                <Input placeholder='Email' type="email" />
                <Input placeholder='Username' />
                <Input placeholder='Full name' />
                <Input placeholder='Password' type="password" />
                <Button colorScheme='teal' size='sm' width={"100%"}>
                    Sign up
                </Button>
                <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                    <Box flex={2} h={"1px"} bg={"gray.400"} />
                    <Text mx={1} color={"white"}>
                        OR
                    </Text>
                    <Box flex={2} h={"1px"} bg={"gray.400"} />
                </Flex>

                <Flex>
                    <Image src="/google.png" w={5} marginRight={3} />
                    <Text>
                        <Link color='teal.500' href='#'>
                            sign up with google
                        </Link>
                    </Text>
                </Flex>
            </VStack>

        </Box>}

        <Box border={"1px solid gray"} borderRadius={4} padding={5} w={"100%"} margin={"10px 0"}>
            {isLogin? <Text>
                Dont have an account ?{' '}
                <Link color='teal.500' href='#' onClick={(e)=> register(e)}>
                    Sign up
                </Link>
            </Text>: <Text>
                Already have an acount ?{' '}
                <Link color='teal.500' href='#' onClick={(e)=> register(e) }>
                    Sign in
                </Link>
            </Text> }
        </Box>
    </>
} 

export default AuthForm;
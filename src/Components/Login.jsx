import { Box, VStack, Image, Input, Button, Flex, Text, InputGroup, InputRightAddon } from "@chakra-ui/react";
import logoAuth from "/logo.png"
import { useState } from "react";
import GoogleAuth from "./GoogleAuth";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'


const Login = ({ isLogin, isSetLogin, user, setNewUser, showPass, setShow }) => {

    return <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
            <Image src={logoAuth} h={24} />
            <Input placeholder='Email' size='sm' type="email" value={user.email} onChange={(e) => { setNewUser({ ...user, email: e.target.value }) }} />

            {/* start */}
            <InputGroup size='sm'>
                <Input placeholder='password' type={showPass ? "password" : "text"} value={user.password} onChange={(e) => { setNewUser({ ...user, password: e.target.value }) }} />
                <InputRightAddon onClick={() => { setShow(!showPass) }}>
                    {showPass ? <ViewIcon color='gray.300' /> : <ViewOffIcon color='gray.300' />}
                </InputRightAddon>
            </InputGroup>
            {/* end */}
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
     //google

            <GoogleAuth isLogin={isLogin} />
        </VStack>
    </Box>

}

export default Login;
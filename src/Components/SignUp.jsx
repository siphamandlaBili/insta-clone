import logoAuth from "/logo.png";
import { Box, VStack, Image, Input, Button, Flex, Text, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import GoogleAuth from "./GoogleAuth";
import { useState } from "react";
import useSignUpWithEmailAndPassword from "./hooks/useSignUpWithEmailAndPassword";
import { Alert,AlertIcon,AlertTitle,AlertDescription,} from '@chakra-ui/react'



const SignUp = ({ userSignUp, setNewUserSignUp, isLogin, showPass, setShow }) => {
    const { createUserWithEmailAndPassword, user, loading, error,signup } = useSignUpWithEmailAndPassword();
   
    return <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
            <Image src={logoAuth} h={24} />
            <Input placeholder='Email' size={"sm"} type="email" value={userSignUp.email} onChange={(e) => { setNewUserSignUp({ ...userSignUp, email: e.target.value }) }} />
            <Input placeholder='Username' size={"sm"} value={userSignUp.username} onChange={(e) => { setNewUserSignUp({ ...userSignUp, username: e.target.value }) }} />
            <Input placeholder='Full name' size={"sm"} value={userSignUp.fullName} onChange={(e) => { setNewUserSignUp({ ...userSignUp, fullName: e.target.value }) }} />
            <InputGroup size='sm'>
                <Input placeholder='Password' type={showPass ? "password" : "text"} value={userSignUp.password} onChange={(e) => { setNewUserSignUp({ ...userSignUp, password: e.target.value }) }} />
                <InputRightAddon onClick={() => { setShow(!showPass) }}>
                    {showPass ? <ViewIcon color='gray.300' /> : <ViewOffIcon color='gray.300' />}
                </InputRightAddon>
            </InputGroup>
            {error && <Alert status='error'>
                <AlertIcon />
                <AlertDescription>{error.message}</AlertDescription>
            </Alert>}
            <Button colorScheme='teal' size='sm' width={"100%"} isLoading={loading} onClick={()=>signup(userSignUp)}>
                Sign up
            </Button>
            <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                <Box flex={2} h={"1px"} bg={"gray.400"} />
                <Text mx={1} color={"white"}>
                    OR
                </Text>
                <Box flex={2} h={"1px"} bg={"gray.400"} />
            </Flex>

        // google
            <GoogleAuth isLogin={isLogin} />
        </VStack>

    </Box>
}

export default SignUp;
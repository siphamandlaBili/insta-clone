import { Box, VStack, Image, Input, Button, Flex, Text, Link } from "@chakra-ui/react";
import logoAuth from "/logo.png"
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthForm = () => {
    const [isLogin, isSetLogin] = useState(true);
    const [user,setNewUser] = useState({
        email:"",
        password:"",
    })
    

    const [userSignUp,setNewUserSignUp] = useState({
        email:"",
        password:"",
        fullName:"",
        username:""

    })
    
    const navigate = useNavigate();
    const register = (e) => {
        e.preventDefault();
        isSetLogin(!isLogin)
    }

    
    const submitRegister =()=>{
        console.log(userSignUp);
    }
    
    const handleAuth = ()=>{
        if(!user.password || !user.email){
            alert("input all details ");
            return
        }
        else{
            alert("welcome " + user.email);
            navigate("/")
            return
        }
        
    }
    const submitLogin =()=>{
     console.log(Boolean(user.password),Boolean(user.email));
     handleAuth()
    }
    return <>

        {isLogin ? <Box border={"1px solid gray"} borderRadius={4} padding={5}>
            <VStack spacing={4}>
                <Image src={logoAuth} h={24} />
                <Input placeholder='Email' type="email" value={user.email} onChange={(e)=>{setNewUser({...user,email:e.target.value}) }}/>
                <Input placeholder='Password' type="password" value={user.password} onChange={(e)=>{setNewUser({...user,password:e.target.value}) }} />
                <Button colorScheme='teal' size='sm' width={"100%"} onClick={submitLogin}>
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
                <Input placeholder='Email' type="email" value={userSignUp.email} onChange={(e)=>{setNewUserSignUp({...userSignUp,email:e.target.value})}}/>
                <Input placeholder='Username' value={userSignUp.username} onChange={(e)=>{setNewUserSignUp({...userSignUp,username:e.target.value})}}/>
                <Input placeholder='Full name' value={userSignUp.fullName} onChange={(e)=>{setNewUserSignUp({...userSignUp,fullName:e.target.value})}} />
                <Input placeholder='Password' type="password" value={userSignUp.password} onChange={(e)=>{setNewUserSignUp({...userSignUp,password:e.target.value})}}/>
                <Button colorScheme='teal' size='sm' width={"100%"} onClick={submitRegister}>
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
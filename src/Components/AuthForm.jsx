import { Box, VStack, Image, Input, Button, Flex, Text, Link } from "@chakra-ui/react";
import logoAuth from "/logo.png"
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

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

    
    const [showPass, setShow] = useState(true);
    
    
    return <>

        {isLogin ? <Login isLogin ={isLogin} showPass = {showPass} setShow={setShow} isSetLogin= {isSetLogin} user={user} setNewUser={setNewUser}/> : <SignUp userSignUp={userSignUp} showPass = {showPass} setShow={setShow} setNewUserSignUp={setNewUserSignUp} isLogin={isLogin}/> }

        <Box border={"1px solid gray"} borderRadius={4} padding={5} w={"100%"} margin={"10px 0"}>
            {isLogin? <Text>
                Dont have an account ?{' '}
                <Link color='teal.500' href='#' onClick={()=>{isSetLogin(false)}}>
                    Sign up
                </Link>
            </Text>: <Text>
                Already have an acount ?{' '}
                <Link color='teal.500' href='#' onClick={()=>{isSetLogin(true)}} >
                    Sign in
                </Link>
            </Text> }
        </Box>
    </>
} 

export default AuthForm;
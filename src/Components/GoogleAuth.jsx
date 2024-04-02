import { Image,Text,Flex,Link } from "@chakra-ui/react";

const GoogleAuth = ({isLogin})=>{
    return <>{isLogin?<Flex>
    <Image src="/google.png" w={5} marginRight={3} />
    <Text>
        <Link color='teal.500' href='#'>
            sign in with google
        </Link>
    </Text>
</Flex> : <Flex>
<Image src="/google.png" w={5} marginRight={3} />
<Text>
    <Link color='teal.500' href='#'>
        sign up with google
    </Link>
</Text>
</Flex>}</>
}

export default GoogleAuth;
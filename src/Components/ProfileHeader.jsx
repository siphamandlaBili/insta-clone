import { Flex, WrapItem, Avatar,VStack, Box,Text } from "@chakra-ui/react";

const ProfileHeader = () => {
    return <Flex>
        {/* {avatar state} */}
            <WrapItem>
                <Avatar size='xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />{' '}
            </WrapItem>
       {/* {profile information} */}
       
    </Flex>
}

export default ProfileHeader;
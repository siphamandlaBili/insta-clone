import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";

const ProfilePosts = () => {
    const [isLoading, setLoading] = useState(true);

    console.log(isLoading)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    console.log(isLoading)


    return <Grid templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(3,1fr)" }} gap={1} columnGap={1}>
        {isLoading && [0, 1, 2, 3, 4].map((_, index) => {
            return <VStack key={index} alignItems={"flex-start"} gap={1}>
                <Skeleton w={"full"}>
                    <Box h={"250px"}></Box>
                </Skeleton>
            </VStack>
        })
        }

        {!isLoading && <>
        <ProfilePost img="https://th.bing.com/th/id/OIP.hLTThhxHPeGqFQVjpD1-hwHaE8?rs=1&pid=ImgDetMain"/>
        <ProfilePost img="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg"/>
        <ProfilePost img="https://i1.rgstatic.net/ii/profile.image/732777481768961-1551719174431_Q512/Emanuel-Traeger.jpg"/>
        <ProfilePost img="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg"/>
        <ProfilePost img="https://i1.rgstatic.net/ii/profile.image/732777481768961-1551719174431_Q512/Emanuel-Traeger.jpg"/>
        
        </>}
    </Grid>
}

export default ProfilePosts;
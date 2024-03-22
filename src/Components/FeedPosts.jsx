import { Container } from "@chakra-ui/react";
import Feedpost from "./Feedpost";
import { useEffect, useState } from "react";


const FeedPosts = ()=>{
    const [isloaded,setLoaded]= useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setLoaded(true);
        },2000)
    },[])
    return <Container maxW={"container.sm"}>
        <Feedpost img = "https://th.bing.com/th/id/OIP.xX_qQy3kf6qEXQKQvnTM0AHaHZ?rs=1&pid=ImgDetMain" username="siphamandla_bi" likesC={20} isloaded={isloaded}/>
        <Feedpost img="https://th.bing.com/th/id/OIP.7R-qPfkNvCTxGa-95_H5DQHaJb?w=1097&h=1397&rs=1&pid=ImgDetMain" username="okuhle mathimba" likesC={120} isloaded={isloaded}/>
        <Feedpost img="https://2.bp.blogspot.com/-urDA6TcYzs0/T_J-oC__t_I/AAAAAAAAFLg/39WWbgKLFaE/s1600/Care+Bears+Welcome+to+Care-A-Lot+Logo.jpg" username="care bears" isloaded={isloaded}/>
        
        
    </Container>
}

export default FeedPosts;
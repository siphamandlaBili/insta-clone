import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../../Components/Sidebar";
import { useLocation } from "react-router-dom";


const PageLayout = ({ children }) => {
    const { pathname } = useLocation();

    return <Flex>
        {/* sidebar left */}
        {pathname !== "/auth" ? <Box w={{ base: "70px", md: "240px" }}>
            <Sidebar />
        </Box> : null}

        {/* page right */}
        <Box flex={1} w={{base:"100%",md:"calc(100% - 240px)"}}  ml={"0px"}>
            {children}
        </Box>
    </Flex>
}

export default PageLayout;
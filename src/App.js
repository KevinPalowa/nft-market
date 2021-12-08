import { Box, VStack, Flex } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
function App() {
  return (
    <Box bg="#1B1E2A" h="100vh" w="100vw" p={0} m={0} color="white">
      <Flex color="white">
        <SideBar />
        <NavBar />
      </Flex>
    </Box>
  );
}

export default App;

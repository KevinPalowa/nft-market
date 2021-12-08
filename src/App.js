import { Box, VStack, Flex, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
function App() {
  return (
    <Box bg="#1B1E2A" h="100vh" w="100vw" p={0} m={0} color="white">
      <Flex color="white">
        <SideBar />
        <VStack w="full">
          <NavBar />
          <HStack w="full" p="3">
            <Banner />
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
}

export default App;

import { Box, VStack, Grid } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Box bg="#1B1E2A" h="100vh" w="100vw" p={0} m={0} color="white">
      <VStack color="white">
        <NavBar />
      </VStack>
    </Box>
  );
}

export default App;

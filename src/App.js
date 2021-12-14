import { Box, VStack, Flex } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
import Category from "./components/Category";
import CardList from "./components/CardList";
import TopArtists from "./components/TopArtists";
import RecentActivity from "./components/RecentActivity";
const App = () => {
  return (
    <Box bg="#1B1E2A" color="white">
      <Flex color="white">
        <SideBar />
        <VStack w="full">
          <NavBar />
          <Flex
            px={{ base: "4", md: "5" }}
            pb={{ base: "4", md: "5" }}
            direction={{ base: "column", md: "row" }}
            w="full"
          >
            <VStack flex="3" w={{ base: "full", md: "75%%" }}>
              <Banner />
              <Category />
              <CardList />
            </VStack>
            <VStack
              h="full"
              ml={{ md: "5" }}
              flex="1"
              w={{ base: "full", md: "25%" }}
            >
              <TopArtists />
              <RecentActivity />
            </VStack>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};

export default App;

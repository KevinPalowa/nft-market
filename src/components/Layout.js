import { Box, VStack, Flex } from "@chakra-ui/react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Category from "./Category";
import CardList from "./CardList";
import TopArtists from "./TopArtists";
import RecentActivity from "./RecentActivity";
export default function Layout({ children }) {
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
            {children}
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
}

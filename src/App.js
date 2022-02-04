import Layout from "./components/Layout";
import { VStack } from "@chakra-ui/react";
import Banner from "./components/Banner";
import Category from "./components/Category";
import CardList from "./components/CardList";
import TopArtists from "./components/TopArtists";
import RecentActivity from "./components/RecentActivity";
const App = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default App;

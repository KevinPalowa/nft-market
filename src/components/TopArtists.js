import { useState, useEffect } from "react";
import {
  Box,
  OrderedList,
  ListItem,
  Avatar,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
export default function TopArtists() {
  const [topArtist, setTopArtist] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://6196ed95af46280017e7e326.mockapi.io/waveast/api/nft-marketplace/top-artist`
      );
      const data = await response.json();
      data.map((data, i) => {
        if (i < 4) setTopArtist((prev) => [...prev, data]);
      });
    };
    getData();
  }, []);
  return (
    <Box bg="#262D3A" p="3" borderRadius="xl" w="full">
      <Text fontSize="20px" fontWeight="600">
        Top Artist
      </Text>
      <OrderedList listStylePosition="outside">
        {topArtist.map((data) => {
          return (
            <ListItem my="3" fontSize="lg" fontWeight="lg">
              <Flex justifyContent="space-between" alignItems="center">
                <Flex>
                  <Avatar boxSize="10" name={data.name} src={data.avatar} />
                  <Flex ml={2} direction="column">
                    <Text fontWeight="500" fontSize="14px">
                      {data.name}
                    </Text>
                    <Text textColor="#878787" fontSize="12px">
                      {data.username}
                    </Text>
                  </Flex>
                </Flex>
                <Button size="sm" bgGradient="linear(to-br, #6763FD, #B350F3)">
                  Follow
                </Button>
              </Flex>
            </ListItem>
          );
        })}
      </OrderedList>
    </Box>
  );
}

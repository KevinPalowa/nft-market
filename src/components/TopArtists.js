import React from "react";
import {
  Box,
  Heading,
  OrderedList,
  ListItem,
  Avatar,
  VStack,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
export default function TopArtists() {
  return (
    <Box bg="#262D3A" p="3" borderRadius="xl" w="full">
      <Text fontSize="20px" fontWeight="600">
        Top Artist
      </Text>
      <OrderedList stylePosition="inside">
        <ListItem d="flex" fontSize="lg" fontWeight="lg">
          <HStack>
            <Avatar
              size="md"
              name="Ryan Florence"
              src="https://bit.ly/ryan-florence"
            />
            <VStack alignItems="left">
              <Text fontSize="14px">ipsum dolor sit amet</Text>
              <Text textColor="#878787" fontSize="12px">
                @lorem
              </Text>
            </VStack>
            <Button size="sm" bgGradient="linear(to-br, #6763FD, #B350F3)">
              Follow
            </Button>
          </HStack>
        </ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </OrderedList>
    </Box>
  );
}

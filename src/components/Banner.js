import React from "react";
import { VStack, Button, Text, Heading, HStack, Box } from "@chakra-ui/react";
export default function Banner() {
  return (
    <Box
      w="full"
      p={{ base: "18px 15px", md: "60px 40px" }}
      borderRadius="xl"
      bgGradient="linear(to-br, #6763FD, #B350F3)"
    >
      <VStack align="left">
        <Box w="75%" mb={{ base: "2", md: "5" }}>
          <Heading
            fontSize={{ base: "md", md: "3xl" }}
            mb={{ base: "2", md: "5" }}
          >
            One Stop NFT Marketplace
          </Heading>
          <Text fontSize={{ base: "xs", md: "md" }}>
            Discover limited-edition digital artwork
            <br /> Create, Sell and Collect yours now!
          </Text>
        </Box>
        <HStack>
          <Button bgColor="white" size="md">
            <Text
              fontSize="xs"
              bgGradient="linear(to-r, #6763FD, #B350F3)"
              bgClip="text"
            >
              Start Create
            </Text>
          </Button>
          <Button bgColor="white" size="md">
            <Text
              fontSize="xs"
              bgGradient="linear(to-r, #6763FD, #B350F3)"
              bgClip="text"
            >
              How It works
            </Text>
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}

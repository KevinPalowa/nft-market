import {
  Box,
  Image,
  Icon,
  Circle,
  Center,
  Text,
  Avatar,
  AvatarGroup,
  Divider,
  HStack,
  Square,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
export default function Card({ src, currentBid }) {
  return (
    <Box borderRadius="lg" bg="#262D3A" p={4}>
      <Box overflow="hidden" pos="relative" h="164px">
        <Image
          height="100%"
          objectFit="cover"
          w="100%"
          src={src}
          borderRadius="xl"
        />
        <Box
          textAlign="center"
          sx={{ "background-color": "rgba(38, 45, 58, 0.8)" }}
          w="100%"
          pos="absolute"
          bottom="0px"
          left="0px"
          fontSize="14px"
          py={1}
        >
          Ends in : 50h : 30m :20s
        </Box>
        <Circle
          sx={{ "background-color": "rgba(196, 196, 196, 0.3)" }}
          pos="absolute"
          top="5px"
          right="5px"
          size="10"
        >
          <Icon boxSize={6} as={AiOutlineHeart}></Icon>
        </Circle>
        <Square
          borderRadius="full"
          w="48px"
          h="32px"
          p="4px 12px"
          bg="#000"
          pos="absolute"
          top="5px"
          left="5px"
          sx={{ "background-color": "rgba(196, 196, 196, 0.3)" }}
        >
          <Text fontSize="16px">Art</Text>
        </Square>
      </Box>
      <HStack my="3" justifyContent="space-between">
        <Text fontSize="sm">Current Bid:</Text>
        <Text fontSize="sm" textColor="#6763FD">
          {currentBid} ETH
        </Text>
      </HStack>
      <Text fontSize="md">Water Bender</Text>
      <Divider my="3" />
      <AvatarGroup size="sm" max={5}>
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
      </AvatarGroup>
    </Box>
  );
}

import Menu from "./Menu";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Circle,
  Avatar,
  Divider,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { FaEthereum } from "react-icons/fa";
import { BsSearch, BsBell } from "react-icons/bs";
import { RiMessage3Line } from "react-icons/ri";
function NavBar() {
  return (
    <>
      <VStack w="full">
        <HStack w="full" p="2">
          <Menu />
          <InputGroup ml="0px" flex="1" h="full">
            <InputLeftElement
              h="full"
              pointerEvents="none"
              children={<Icon boxSize="5" color="#6763FD" as={BsSearch} />}
            />
            <Input
              border="none"
              bgColor="#262D3A"
              width="100%"
              placeholder="Search"
              h={{ base: "40px", md: "full" }}
              borderRadius="xl"
              _placeholder={{ color: "#eee" }}
            />
          </InputGroup>
          <HStack
            ml="10"
            bg="#262d3a"
            d={{ base: "none", md: "flex" }}
            p={4}
            borderRadius="xl"
          >
            <Icon boxSize="6" textColor="#A154F4" as={FaEthereum} />
            <Text>543,694,489 ETH</Text>
          </HStack>
          <HStack px={3}>
            <Circle size="10" bgColor="#262D3A">
              <Icon color="#6763FD" as={RiMessage3Line} />
            </Circle>
            <Circle size="10" bgColor="#262D3A">
              <Icon color="#6763FD" as={BsBell} />
            </Circle>
          </HStack>
          <Avatar
            boxSize="10"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
        </HStack>
        <Divider d={{ base: "block", md: "none" }} />
      </VStack>
    </>
  );
}
export default NavBar;

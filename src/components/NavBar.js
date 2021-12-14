import Menu from "./Menu";
import {
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Circle,
  Avatar,
  Divider,
  Text,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { FaEthereum } from "react-icons/fa";
import { BsSearch, BsBell } from "react-icons/bs";
import { RiMessage3Line } from "react-icons/ri";
import { AiOutlineDown } from "react-icons/ai";
function NavBar() {
  return (
    <Flex w="full" direction="column">
      <Flex alignItems="center" w="full" p={{ base: "4", md: "5" }}>
        <Menu />
        <Flex w={{ base: "auto", md: "75%" }} h="full">
          <InputGroup flex="3" h="full">
            <InputLeftElement
              h="full"
              pointerEvents="none"
              children={<Icon boxSize="5" color="#6763FD" as={BsSearch} />}
            />
            <Input
              border="none"
              bgColor="#262D3A"
              placeholder="Search"
              h={{ base: "40px", md: "full" }}
              borderRadius="xl"
              _placeholder={{ color: "#eee" }}
            />
          </InputGroup>
          <InputGroup mx="5" d={{ base: "none", md: "flex" }} h="full" flex="1">
            <InputLeftElement
              h="full"
              pointerEvents="none"
              children={<Icon boxSize="5" color="#A154F4" as={FaEthereum} />}
            />
            <Input
              border="none"
              bgColor="#262D3A"
              placeholder="Search"
              h={{ base: "40px", md: "56px" }}
              borderRadius="xl"
              _placeholder={{ color: "#eee" }}
              value="543,694,489 ETH"
              readOnly
            />
          </InputGroup>
        </Flex>
        <Flex w={{ base: "auto", md: "25%" }}>
          <Flex mr="4" ml={{ base: 5, md: 0 }}>
            <Circle mr="4" size="10" bgColor="#262D3A">
              <Icon color="#6763FD" as={RiMessage3Line} />
            </Circle>
            <Circle size="10" bgColor="#262D3A">
              <Icon color="#6763FD" as={BsBell} />
            </Circle>
          </Flex>
          <Stack
            direction="row"
            alignItems="center"
            w={{ base: "auto", md: "250px" }}
          >
            <Avatar
              boxSize="10"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Text d={{ base: "none", md: "block" }} fontSize="14px">
              Kevin Palowa
            </Text>
            <Icon
              d={{ base: "none", md: "block" }}
              color="#eee"
              as={AiOutlineDown}
            />
          </Stack>
        </Flex>
      </Flex>
      <Divider d={{ base: "block", md: "none" }} />
    </Flex>
  );
}
export default NavBar;

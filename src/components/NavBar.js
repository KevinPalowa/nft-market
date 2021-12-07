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
} from "@chakra-ui/react";
import { BsSearch, BsBell } from "react-icons/bs";
import { RiMessage3Line } from "react-icons/ri";

function NavBar() {
  return (
    <>
      <VStack>
        <HStack p="8px 8px 4px 8px" width="100vw">
          <Menu />
          <InputGroup flex="1">
            <InputLeftElement
              pointerEvents="none"
              children={<Icon color="#6763FD" as={BsSearch} />}
            />
            <Input
              border="none"
              bgColor="#262D3A"
              width="100%"
              type="tel"
              placeholder="Search"
            />
          </InputGroup>
          <HStack px={3}>
            <Circle size="40px" bgColor="#3D3F49">
              <Icon color="#6763FD" as={RiMessage3Line} />
            </Circle>
            <Circle size="40px" bgColor="#3D3F49">
              <Icon color="#6763FD" as={BsBell} />
            </Circle>
          </HStack>
          <Avatar
            boxSize="40px"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
        </HStack>
        <Divider />
      </VStack>
    </>
  );
}
export default NavBar;

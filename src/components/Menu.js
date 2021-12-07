import * as React from "react";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Box,
  Icon,
  Text,
  HStack,
  Input,
} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineSetting } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} bg="transparent" border="none" onClick={onOpen}>
        <Icon as={AiOutlineMenu}></Icon>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        size="full"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="#1B1E2A">
          <DrawerCloseButton />
          <DrawerHeader textAlign="center">
            <Text>Cuan Makers</Text>
          </DrawerHeader>

          <DrawerBody p={0}>
            <VStack align="stretch" px="30px" py="15px">
              <Box>
                <Text>543,694,489 ETH</Text>
              </Box>
              <HStack py="4" spacing={8}>
                <Icon boxSize="7" as={MdOutlineDashboard} />
                <Text>Dashboard</Text>
              </HStack>
              <HStack py="4" spacing={8}>
                <Icon boxSize="7" as={MdOutlineDashboard} />
                <Text>Dashboard</Text>
              </HStack>
              <HStack py="4" spacing={8}>
                <Icon boxSize="7" as={MdOutlineDashboard} />
                <Text>Dashboard</Text>
              </HStack>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Menu;

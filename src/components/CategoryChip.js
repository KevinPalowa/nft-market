import { Box } from "@chakra-ui/react";
export default function CategoryChip(props) {
  return (
    <Box
      as="button"
      fontSize="14px"
      borderRadius="full"
      size="lg"
      bgColor="#262935"
      p="12px 24px"
    >
      {props.children}
    </Box>
  );
}

import { Heading, Box, HStack } from "@chakra-ui/react";
import "./css/category.css";
import CategoryChip from "./CategoryChip";
export default function Category() {
  const listChips = [
    "Live Auction",
    "Art",
    "Photography",
    "Games",
    "Music",
    "Utillity",
  ];
  return (
    <Box my={7} w="full" align="left">
      <Heading>Explore</Heading>
      <HStack whiteSpace="nowrap" className="category" overflow="scroll">
        {listChips.map((data) => (
          <CategoryChip key={data}>{data}</CategoryChip>
        ))}
      </HStack>
    </Box>
  );
}

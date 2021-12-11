import { Heading, Box, HStack } from "@chakra-ui/react";
import "./css/index.css";
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
    <Box mt="1.75rem !important" w="full">
      <Heading mb="4" fontSize="20px">
        Explore
      </Heading>
      <HStack whiteSpace="nowrap" className="noScrollBar" overflow="scroll">
        {listChips.map((data) => (
          <CategoryChip key={data}>{data}</CategoryChip>
        ))}
      </HStack>
    </Box>
  );
}

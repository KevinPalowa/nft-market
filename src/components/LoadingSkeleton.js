import React from "react";
import { Skeleton, SkeletonCircle, Stack, Box } from "@chakra-ui/react";
export default function LoadingSkeleton({ type }) {
  console.log(type);
  if (type === "list") {
    return (
      <>
        <Box d="flex" justifyContent="space-between" alignItems="center">
          <SkeletonCircle boxSize="40px" />
          <Stack w="80%">
            <Skeleton height="10px" />
            <Skeleton height="10px" />
          </Stack>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      </>
    );
  }
}

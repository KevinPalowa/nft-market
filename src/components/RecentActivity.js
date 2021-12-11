import { useEffect, useState } from "react";
import { Box, Text, HStack, Avatar, VStack, chakra } from "@chakra-ui/react";
import LoadingSkeleton from "./LoadingSkeleton";
export default function RecentActivity() {
  const [recentActivities, setRecentActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://6196ed95af46280017e7e326.mockapi.io/waveast/api/nft-marketplace/recent-activities`
      );
      const data = await response.json();
      setRecentActivities(data);
      setIsLoading(false);
    };
    getData();
  }, []);
  return (
    <Box
      bg="#262D3A"
      p="5"
      borderRadius="xl"
      w="full"
      my={{ base: "1.25rem !important", md: "1.50rem !important" }}
    >
      <Text fontSize="20px" fontWeight="600">
        Recent Activity
      </Text>
      <chakra.ul listStyleType="none">
        {isLoading ? (
          <LoadingSkeleton type="list" />
        ) : (
          recentActivities.map((data) => {
            return (
              <chakra.li
                key={data.id}
                p="3"
                mb="3"
                borderRadius="lg"
                bg="#313744"
              >
                <HStack>
                  <Avatar size="md" name={data.name} src={data.avatar} />
                  <VStack alignItems="left">
                    <Text fontSize="14px">{data.name}</Text>
                    <Text textColor="#878787" fontSize="12px">
                      {data.message}
                    </Text>
                  </VStack>
                </HStack>
              </chakra.li>
            );
          })
        )}
      </chakra.ul>
    </Box>
  );
}

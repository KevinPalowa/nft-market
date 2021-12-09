import Card from "./Card";
import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import LoadingSkeleton from "./LoadingSkeleton";
export default function CardList() {
  const [artWorks, setArtWorks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://6196ed95af46280017e7e326.mockapi.io/waveast/api/nft-marketplace/featured-artworks`
      );
      const data = await response.json();
      setArtWorks(data);
      setIsLoading(false);
    };
    getData();
  }, []);
  return (
    <Grid
      templateColumns={{ md: "repeat(3, 1fr)", base: "repeat(99, 291px)" }}
      overflowX="auto"
      gap={4}
      w="full"
    >
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        artWorks.map((data) => {
          return (
            <Card
              key={data.id}
              currentBid={data.currentBid}
              src={data.artworksUrl}
            />
          );
        })
      )}
    </Grid>
  );
}

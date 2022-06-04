import React from "react";
import { Box, Button, Center } from "@chakra-ui/react";
import MarketplaceSearchBar from "@components/Marketplace/MarketplaceSearchBar";
import BidCard from "@components/Marketplace/BidCard";

function MarketplaceView() {
  return (
    <Box px={{ base: "1rem", lg: "4rem" }}>
      <MarketplaceSearchBar />

      <Box mt="2rem" pb="100px">
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            lg: "1fr 1fr 1fr",
          }}
          gap={8}
        >
          {defaultBids?.map((item: any, index: any) => {
            return (
              <Box key={`${item.name} - ${index}`}>
                <BidCard data={item} />
              </Box>
            );
          })}
        </Box>

        <Center mt="4rem">
          <Button
            color="white"
            fontSize="sm"
            borderRadius="8px"
            fontWeight="semibold"
            bgColor="brand.400"
          >
            Load more
          </Button>
        </Center>
      </Box>
    </Box>
  );
}

export default MarketplaceView;

const defaultBids = [
  {
    image: "/images/stripe_bg.png",
    name: "Project Agerbee",
    owner: "Kelly burton",
    description:
      "Voluptatem et est. Et facere ea ipsum iste sed quibusdam fugit velit eius. Eos excepturi voluptatibus.",
    funding_level: 75,
    final_amount: "950,000",
    days_left: "2",
    payback_date: "23rd november 2023",
  },
  {
    image: "/images/stripe_bg.png",
    name: "Project Agerbee",
    owner: "Kelly burton",
    description:
      "Voluptatem et est. Et facere ea ipsum iste sed quibusdam fugit velit eius. Eos excepturi voluptatibus.",
    funding_level: 75,
    final_amount: "950,000",
    days_left: "2",
    payback_date: "23rd november 2023",
  },
  {
    image: "/images/stripe_bg.png",
    name: "Project Agerbee",
    owner: "Kelly burton",
    description:
      "Voluptatem et est. Et facere ea ipsum iste sed quibusdam fugit velit eius. Eos excepturi voluptatibus.",
    funding_level: 75,
    final_amount: "950,000",
    days_left: "2",
    payback_date: "23rd november 2023",
  },
  {
    image: "/images/stripe_bg.png",
    name: "Project Agerbee",
    owner: "Kelly burton",
    description:
      "Voluptatem et est. Et facere ea ipsum iste sed quibusdam fugit velit eius. Eos excepturi voluptatibus.",
    funding_level: 75,
    final_amount: "950,000",
    days_left: "2",
    payback_date: "23rd november 2023",
  },
  {
    image: "/images/stripe_bg.png",
    name: "Project Agerbee",
    owner: "Kelly burton",
    description:
      "Voluptatem et est. Et facere ea ipsum iste sed quibusdam fugit velit eius. Eos excepturi voluptatibus.",
    funding_level: 75,
    final_amount: "950,000",
    days_left: "2",
    payback_date: "23rd november 2023",
  },
  {
    image: "/images/stripe_bg.png",
    name: "Project Agerbee",
    owner: "Kelly burton",
    description:
      "Voluptatem et est. Et facere ea ipsum iste sed quibusdam fugit velit eius. Eos excepturi voluptatibus.",
    funding_level: 75,
    final_amount: "950,000",
    days_left: "2",
    payback_date: "23rd november 2023",
  },
];

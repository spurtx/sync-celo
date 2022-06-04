import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { MyWallets, Transactions, MyCards } from "@components/Wallet";

function WalletView() {
  return (
    <Box px="3rem" pt="3rem">
      <Text color="#0D0138" fontWeight="medium" fontSize="lg" mb="1.2rem">
        My Wallet
      </Text>
      <Box display="grid" gridTemplateColumns="1fr 0.5fr" gap={6}>
        <Box mb="100px">
          <MyWallets />

          <Transactions />
        </Box>

        <Box>
          <MyCards />
        </Box>
      </Box>
    </Box>
  );
}

export default WalletView;

import React from "react";
import { Box } from "@chakra-ui/react";
import {
  MyWallets,
  Transactions,
  MyCards,
  Highlights,
} from "@components/Wallet";

function WalletView() {
  return (
    <Box px="3rem" pt="3rem">
      <Box display="grid" gridTemplateColumns="1fr 0.5fr" gap={6}>
        <Box mb="100px">
          <MyWallets />

          <Highlights />

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

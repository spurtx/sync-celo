import {
  Box,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  IconButton,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

const Transactions = () => {
  return (
    <Box mt="3rem">
      <Text color="#0D0138" fontWeight="medium" fontSize="lg">
        Recent Transactions
      </Text>

      <TableContainer
        mt="1rem"
        bgColor="white"
        borderRadius="13px"
        px="15px"
        border="1px solid #D7D7D7"
      >
        <Table variant="simple" size="xs">
          <Tbody border="none">
            <Tr
              border="none"
              color="#0D0138"
              fontSize="sm"
              fontWeight="medium"
              h="70px"
            >
              <Td border="none">
                Monthly Salary
                <Text color="#0D0138" opacity="0.5" mt="3px">
                  21 Dec 2021, at 08.12 am
                </Text>
              </Td>

              <Td border="none">Salary</Td>

              <Td border="none">Emmanuel Johnson</Td>

              <Td border="none">
                <Box d="flex">
                  <GoPrimitiveDot color="#00A15D" size="1.2rem" />
                  Income
                </Box>
              </Td>

              <Td border="none">+$10,000</Td>

              <Td border="none">
                <IconButton
                  aria-label="action button"
                  size="sm"
                  icon={<BsThreeDots />}
                />
              </Td>
            </Tr>

            <Tr
              border="none"
              color="#0D0138"
              fontSize="sm"
              fontWeight="medium"
              h="70px"
            >
              <Td border="none">
                Monthly Salary
                <Text color="#0D0138" opacity="0.5" mt="3px">
                  21 Dec 2021, at 08.12 am
                </Text>
              </Td>

              <Td border="none">Project</Td>

              <Td border="none">Emmanuel Johnson</Td>

              <Td border="none">
                <Box d="flex">
                  <GoPrimitiveDot color="#00A15D" size="1.2rem" />
                  Income
                </Box>
              </Td>

              <Td border="none">+$10,000</Td>

              <Td border="none">
                <IconButton
                  aria-label="action button"
                  size="sm"
                  icon={<BsThreeDots />}
                />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Transactions;

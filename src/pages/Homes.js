import React from "react";
import EniEnchere from "../components/EniEnchere";
import LienLogin from "../components/LienLogin";
import ListeEncheres from "../components/ListeEncheres";
import { Box, Flex, Spacer } from "@chakra-ui/react";

const Homes = () => {
  return (
    <div className="index_settings">
      <Box mr={8} ml={8} mt={8}>
        <Flex>
          <EniEnchere />
          <Spacer />
          <LienLogin />
        </Flex>
      </Box>
      <Box mt={35} mr={8} ml={8}>
        <ListeEncheres />
      </Box>
    </div>
  );
};

export default Homes;

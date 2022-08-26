import { Box, Link } from "@chakra-ui/react";
import React from "react";

const LienLogin = () => {
  return (
    <Box>
      <Link href="/inscription" color="teal.500">
        S'inscrire
      </Link>
      <span> - </span>
      <Link href="/connection" color="teal.500">
        Se connecter
      </Link>
    </Box>
  );
};

export default LienLogin;

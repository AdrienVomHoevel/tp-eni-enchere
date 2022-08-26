import React from "react";
import { Box, Flex, Link, Text, Image } from "@chakra-ui/react";

const Card = ({ articles }) => {
  const idVendeur = articles.vendeur.noUtilisateur;

  return (
    <Box border="1px" w="400px" h="120px">
      <Flex>
        <Image src="../styles/img/imgArticle.png" alt="Image par défault" />
        <Flex direction="column" alignItems="baseline" pl="5px">
          <Text as="u" fontSize="20px" fontWeight="2px">
            {articles.nomArticle}
          </Text>
          <Text>Prix : {articles.miseAPrix}</Text>
          <Text>Fin de l'enchère : {articles.dateFinEncheres}</Text>
          <Text>
            Vendeur :{" "}
            <Link href={`/profil/${idVendeur}`}>{articles.vendeur.pseudo}</Link>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;

import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";

const Card = ({ articles }) => {
  const idVendeur = articles.vendeur.noUtilisateur;

  return (
    <Box>
      <Text size="lg">{articles.nomArticle}</Text>
      <Text>{articles.miseAPrix}</Text>
      <Text>Fin de l'enchère : {articles.dateFinEncheres}</Text>
      <Text>
        Vendeur :
        <Link href={`/profil/${idVendeur}`}>{articles.vendeur.pseudo}</Link>
      </Text>
    </Box>
  );
};

export default Card;

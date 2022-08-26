import React from "react";
import {
  Box,
  Flex,
  Link,
  Text,
  Image,
  Slide,
  useDisclosure,
} from "@chakra-ui/react";

const Card = ({ articles }) => {
  const idVendeur = articles.vendeur.noUtilisateur;
  const { isOpen, onToggle } = useDisclosure();

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
            Vendeur : <Link onClick={onToggle}>{articles.vendeur.pseudo}</Link>
            <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
              <Box
                p="40px"
                color="white"
                mt="4"
                bg="teal.500"
                rounded="md"
                shadow="md"
              >
                <Text>Pseudo : {articles.vendeur.pseudo}</Text>
                <Text>Nom : {articles.vendeur.nom}</Text>
                <Text>Prénom : {articles.vendeur.prenom}</Text>
                <Text>Email : {articles.vendeur.email}</Text>
                <Text>Teléphone : {articles.vendeur.telephone}</Text>
                <Text>Rue : {articles.vendeur.rue}</Text>
                <Text>Code postal : {articles.vendeur.codePostal}</Text>
                <Text>Ville : {articles.vendeur.ville}</Text>
              </Box>
            </Slide>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;

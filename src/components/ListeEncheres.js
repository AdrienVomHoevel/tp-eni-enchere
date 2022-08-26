import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Center,
  Select,
  Text,
  Input,
  Button,
  Wrap,
  WrapItem,
  FormLabel,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import Card from "./Card";
import { Search2Icon } from "@chakra-ui/icons";

const ListeEncheres = () => {
  const [data, setData] = useState([]);
  const categorieSearch = [
    "Informatique",
    "Ameublement",
    "Vêtement",
    "Sport&Loisirs",
  ];

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/articles")
      .then((res) => setData(res.data));
  }, []);

  return (
    <Box>
      <form>
        <Center>
          <Text fontSize="3xl">Liste des enchères</Text>
        </Center>
        <Flex align="center" justify="space-between">
          <Flex direction="column">
            <FormLabel>Filtres :</FormLabel>
            <Box width={350} height={100}>
              <Flex align="center">
                <Search2Icon />
                <Input
                  htmlSize="9"
                  type="search"
                  id="filtres"
                  name="filtres"
                  size="xs"
                  placeholder="Le nom de l'article contient"
                />
              </Flex>

              <Flex align="center" mt={15}>
                <label htmlFor="categorie">Catégorie :</label>
                <Spacer />
                <Select
                  width={125}
                  placeholder="Toutes"
                  name="categorie"
                  id="categorie"
                  size="xs"
                >
                  {categorieSearch.map((categorie, index) => (
                    <option key={index} name={categorie} value={categorie}>
                      {categorie}
                    </option>
                  ))}
                </Select>
              </Flex>
            </Box>
          </Flex>
          <Button
            ml="3%"
            mr="45%"
            type="submit"
            id="submit_list"
            variant="outline"
            w={300}
            h={75}
          >
            Rechercher
          </Button>
        </Flex>
      </form>
      <ul>
        <Wrap spacing="5em" align="center" justify="center">
          {data.map((articles, index) => (
            <WrapItem>
              <Card key={index} articles={articles} />
            </WrapItem>
          ))}
        </Wrap>
      </ul>
    </Box>
  );
};

export default ListeEncheres;

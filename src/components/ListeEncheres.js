import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Center,
  Flex,
  Select,
  Spacer,
  Text,
  Input,
  Button,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Card from "./Card";

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
    <div className="liste">
      <form>
        <Center>
          <Text fontSize="3xl">Liste des enchères</Text>
        </Center>
        <Flex>
          <Box>
            <label htmlFor="filtres">Filtres :</label>
            <Input
              htmlSize="9"
              type="search"
              id="filtres"
              name="filtres"
              size="xs"
            />
            <Flex>
              <Box>
                <label htmlFor="categorie">Catégorie :</label>
              </Box>
              <Spacer />
              <Box>
                <Select
                  placeholder="Toutes"
                  name="categorie"
                  id="categorie"
                  size="xs"
                >
                  {categorieSearch.map((categorie) => (
                    <option name={categorie} value={categorie}>
                      {categorie}
                    </option>
                  ))}
                </Select>
              </Box>
            </Flex>
          </Box>
          <Spacer />
          <Button type="submit" id="submit_list" variant="outline">
            Rechercher
          </Button>
        </Flex>
      </form>
      <ul>
        <Wrap spacing="5em" align="center" justify="center">
          {data.map((articles, noArticle) => (
            <WrapItem>
              <Card key={noArticle} articles={articles} />
            </WrapItem>
          ))}
        </Wrap>
      </ul>
    </div>
  );
};

export default ListeEncheres;

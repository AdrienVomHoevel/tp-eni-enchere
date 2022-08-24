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
} from "@chakra-ui/react";

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
      .get("https://restcountries.com/v3.1/all")
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
    </div>
  );
};

export default ListeEncheres;

/* A ajouter pour l'affichage des articles
import Card from "./Card";
                {
                    data
                        .map((article, index) => 
                            <Card key={index} article={article}/>
               ) }*/

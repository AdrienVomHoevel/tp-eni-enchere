import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { Center, Flex, Select, Spacer, Text } from "@chakra-ui/react";

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
          <box>
            <label htmlFor="filtres">Filtres :</label>
            <input type="search" id="filtres" name="filtres" />
            <label htmlFor="categorie">Catégorie :</label>
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
          </box>
          <Spacer />
          <button type="submit" id="submit_list">Rechercher</button>
        </Flex>
      </form>
    </div>
  );
};

export default ListeEncheres;

/* A ajouter pour l'affichage des articles{
                    data
                        .map((article, index) => 
                            <Card key={index} article={article}/>
               ) }*/

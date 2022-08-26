import React, { useEffect, useState } from "react";
import axios from "axios";
import EniEnchere from "../components/EniEnchere";
import { Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Profil = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/utilisateurs/${id}`)
      .then((reponse) => {
        setData(reponse.data);
        console.log("data", reponse.data);
      });
  }, [id]);

  const { pseudo, nom, prenom, email, telephone, rue, codePostal, ville } =
    data;

  return (
    <div className="index_settings">
      <EniEnchere />
      <Wrap justify="center" align="center" direction="column">
        <WrapItem>
          <Text>Pseudo : </Text>
          <Text>{pseudo}</Text>
        </WrapItem>
        <WrapItem>
          <Text>Nom :</Text>
          <Text>{nom}</Text>
        </WrapItem>
        <WrapItem>
          <Text>Prénom :</Text>
          <Text>{prenom}</Text>
        </WrapItem>
        <WrapItem>
          <Text>Email :</Text>
          <Text>{email}</Text>
        </WrapItem>
        <WrapItem>
          <Text>Teléphone : </Text>
          <Text>{telephone}</Text>
        </WrapItem>
        <WrapItem>
          <Text>Rue :</Text>
          <Text>{rue}</Text>
        </WrapItem>
        <WrapItem>
          <Text>Code postal :</Text>
          <Text>{codePostal}</Text>
        </WrapItem>
        <WrapItem>
          <Text>Ville :</Text>
          <Text>{ville}</Text>
        </WrapItem>
      </Wrap>
    </div>
  );
};

export default Profil;

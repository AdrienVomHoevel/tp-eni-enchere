import React, { useEffect, useState } from "react";
import axios from "axios";
import EniEnchere from "../components/EniEnchere";
import { Text } from "@chakra-ui/react";

const Profil = (idVendeur) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/utilisateurs/" + idVendeur)
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="index_settings">
      <EniEnchere />
      <Text>Pseudo :</Text>
      <Text>{data.pseudo}</Text>
      <Text>Nom :</Text>
      <Text></Text>
    </div>
  );
};

export default Profil;

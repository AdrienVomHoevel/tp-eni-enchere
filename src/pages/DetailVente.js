import React from "react";
import EniEnchere from "../components/EniEnchere";
import {
  Text,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from "@chakra-ui/react";

const DetailVente = () => {
  return (
    <div className="index_settings">
      <EniEnchere />
      <Text>Détail Vente</Text>
      <Text>Nom de l'article à venir</Text>
      <Text>Description :</Text>
      <Text>Catégorie :</Text>
      <Text>Meilleure offre :</Text>
      <Text>Mise à prix :</Text>
      <Text>Fin de l'enchère :</Text>
      <Text>Retrait :</Text>
      <Text>Vendeur : </Text>
      <form>
        <FormControl isRequired>
          <FormLabel>Mise à prix :</FormLabel>
          <NumberInput defaultValue={50} min={1} clampValueOnBlur={false}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <Button variant="outline">Enchérir</Button>
      </form>
    </div>
  );
};

export default DetailVente;

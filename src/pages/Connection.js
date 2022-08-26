import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Link,
} from "@chakra-ui/react";
import React from "react";
import EniEnchere from "../components/EniEnchere";

const Connection = () => {
  return (
    <div className="index_settings">
      <EniEnchere />

      <form>
        <FormControl isRequired>
          <FormLabel>Identifiant :</FormLabel>
          <Input variant="outline" placeholder="Pseudo" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Mot de passe :</FormLabel>
          <Input type="password" variant="outline" />
        </FormControl>
        <Button variant="outline" type="submit">
          Connexion
        </Button>
        <Checkbox>Se souvenir de moi</Checkbox>
        <Link color="teal.500" href="#">
          Mot de passe oublié
        </Link>
      </form>
      <Button variant="outline"> Créer un compte</Button>
    </div>
  );
};

export default Connection;

import { Button, FormControl, FormLabel, Input, Link } from "@chakra-ui/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import EniEnchere from "../components/EniEnchere";

const Inscription = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => res(data);

  const res = (async) => {
    axios
      .post(`http://localhost:8080/api/utilisateurs`, onSubmit, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => console.log(res));
  };

  return (
    <div className="index_settings">
      <EniEnchere />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isRequired>
          <FormLabel>Pseudo :</FormLabel>
          <Input
            {...register("pseudo")}
            variant="outline"
            placeholder="Pseudo"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Nom :</FormLabel>
          <Input {...register("nom")} variant="outline" placeholder="Nom" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Prénom :</FormLabel>
          <Input
            {...register("prenom")}
            variant="outline"
            placeholder="Prénom"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email :</FormLabel>
          <Input {...register("email")} variant="outline" placeholder="Email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Teléphone :</FormLabel>
          <Input
            {...register("telephone")}
            variant="outline"
            placeholder="Telephone"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Rue :</FormLabel>
          <Input {...register("rue")} variant="outline" placeholder="Rue" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Code postal :</FormLabel>
          <Input
            {...register("codePostal")}
            variant="outline"
            placeholder="Code postal"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Ville :</FormLabel>
          <Input {...register("ville")} variant="outline" placeholder="Ville" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Mot de passe :</FormLabel>
          <Input
            {...register("motDePasse")}
            variant="outline"
            placeholder="Mot de passe"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Confirmation :</FormLabel>
          <Input
            {...register("motDePasse")}
            variant="outline"
            placeholder="Confirmation"
          />
        </FormControl>
        <Button type="submit" variant="outline">
          Créer
        </Button>
        <Link href="/">
          <Button variant="outline">Annuler</Button>
        </Link>
      </form>
    </div>
  );
};

export default Inscription;

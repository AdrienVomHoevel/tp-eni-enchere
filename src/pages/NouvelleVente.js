import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Textarea,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import EniEnchere from "../components/EniEnchere";

const NouvelleVente = () => {
  const categorieSearch = [
    "Informatique",
    "Ameublement",
    "Vêtement",
    "Sport&Loisirs",
  ];

  return (
    <div className="index_settings">
      <EniEnchere />
      <form>
        <FormControl isRequired>
          <FormLabel>Article :</FormLabel>
          <Input variant="outline" placeholder="Article" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Description :</FormLabel>
          <Textarea placeholder="Description de l'article" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Catégorie :</FormLabel>
          <Select
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
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Photo de l'article :</FormLabel>
          <Button variant="outline" isLoading LoadingText="A venir">
            A venir
          </Button>
        </FormControl>
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
        <FormControl isRequired>
          <FormLabel>Début de l'enchère :</FormLabel>
          <Input type="date" variant="outline" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Fin de l'enchère :</FormLabel>
          <Input type="date" variant="outline" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Rue :</FormLabel>
          <Input variant="outline" placeholder="Rue" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Code postal :</FormLabel>
          <Input variant="outline" placeholder="Code postal" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Ville :</FormLabel>
          <Input variant="outline" placeholder="Ville" />
        </FormControl>
        <Button type="submit" variant="outline">
          Enregistrer
        </Button>
        <Link href="/">
          <Button variant="outline">Annuler</Button>
        </Link>
      </form>
    </div>
  );
};

export default NouvelleVente;

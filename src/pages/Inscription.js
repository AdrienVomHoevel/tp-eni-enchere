import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  Box,
  Center,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import EniEnchere from "../components/EniEnchere";

const Inscription = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    axios
      .post(`http://localhost:8080/api/utilisateurs`, data)
      .then((res) => console.log(res));
  };

  return (
    <Box mr={8} ml={8} mt={8}>
      <EniEnchere />
      <Center mt="5%">
        <Text fontSize="3xl">Mon Profil</Text>
      </Center>
      <Center mt="5%">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex justifyItems="space-around">
            <Box mr="5%">
              <FormControl isRequired>
                <Flex mb="3%">
                  <FormLabel>Pseudo :</FormLabel>
                  <Spacer />
                  <Input
                    w="50%"
                    h="30px"
                    {...register("pseudo")}
                    variant="outline"
                    placeholder="Pseudo"
                  />
                </Flex>
              </FormControl>

              <FormControl isRequired>
                <Flex mb="3%">
                  <FormLabel>Prénom :</FormLabel>
                  <Spacer />
                  <Input
                    w="50%"
                    h="30px"
                    {...register("prenom")}
                    variant="outline"
                    placeholder="Prénom"
                  />
                </Flex>
              </FormControl>
              <FormControl isRequired>
                <Flex mb="3%">
                  <FormLabel>Teléphone :</FormLabel>
                  <Spacer />
                  <Input
                    w="50%"
                    h="30px"
                    {...register("telephone")}
                    variant="outline"
                    placeholder="Telephone"
                  />
                </Flex>
              </FormControl>

              <FormControl isRequired>
                <Flex mb="3%">
                  <FormLabel>Code postal :</FormLabel>
                  <Spacer />
                  <Input
                    w="50%"
                    h="30px"
                    {...register("codePostal")}
                    variant="outline"
                    placeholder="Code postal"
                  />
                </Flex>
              </FormControl>
              <FormControl isRequired>
                <Flex mb="3%">
                  <FormLabel>Mot de passe :</FormLabel>
                  <Spacer />
                  <Input
                    w="50%"
                    h="30px"
                    {...register("motDePasse")}
                    variant="outline"
                    placeholder="Mot de passe"
                  />
                </Flex>
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <Flex mb="3%">
                  <FormLabel>Email :</FormLabel>
                  <Spacer />
                  <Input
                    w="50%"
                    h="30px"
                    {...register("email")}
                    variant="outline"
                    placeholder="Email"
                  />
                </Flex>
              </FormControl>
              <FormControl isRequired>
                <Flex mb="3%">
                  <FormLabel>Nom :</FormLabel>
                  <Spacer />
                  <Input
                    w="50%"
                    h="30px"
                    {...register("nom")}
                    variant="outline"
                    placeholder="Nom"
                  />
                </Flex>
              </FormControl>

              <FormControl isRequired>
                <Flex mb="3%">
                  <FormLabel>Rue :</FormLabel>
                  <Spacer />
                  <Input
                    w="50%"
                    h="30px"
                    {...register("rue")}
                    variant="outline"
                    placeholder="Rue"
                  />
                </Flex>
              </FormControl>

              <FormControl isRequired>
                <Flex mb="3%">
                  <FormLabel>Ville :</FormLabel>
                  <Spacer />
                  <Input
                    w="50%"
                    h="30px"
                    {...register("ville")}
                    variant="outline"
                    placeholder="Ville"
                  />
                </Flex>
              </FormControl>

              <FormControl isRequired>
                <Flex mb="3%">
                  <FormLabel>Confirmation :</FormLabel>
                  <Spacer />
                  <Input
                    w="50%"
                    h="30px"
                    {...register("motDePasse")}
                    variant="outline"
                    placeholder="Confirmation"
                  />
                </Flex>
              </FormControl>
            </Box>
          </Flex>

          <Flex justify="space-around" mt="5%">
            <Button type="submit" variant="outline" w="150px" h="50px">
              Créer
            </Button>

            <Link href="/">
              <Button variant="outline" w="150px" h="50px">
                Annuler
              </Button>
            </Link>
          </Flex>
        </form>
      </Center>
    </Box>
  );
};

export default Inscription;

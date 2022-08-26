import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Checkbox,
  Box,
  Center,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import EniEnchere from "../components/EniEnchere";

const Connection = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    axios
      .post(`http://localhost:8080/api/login`, data)
      .then((res) => console.log(res));
  };

  return (
    <Box mr={8} ml={8} mt={8}>
      <EniEnchere />
      <Center>
        <Box width="35%" h="60%" mt="10%">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isRequired>
              <Flex mb="5%">
                <FormLabel>Identifiant :</FormLabel>
                <Spacer />
                <Input
                  {...register("pseudo")}
                  w="50%"
                  h="30px"
                  variant="outline"
                  placeholder="Pseudo"
                />
              </Flex>
            </FormControl>

            <FormControl isRequired>
              <Flex mb="5%">
                <FormLabel>Mot de passe :</FormLabel>
                <Spacer />
                <Input
                  {...register("motDePasse")}
                  w="50%"
                  h="30px"
                  type="password"
                  variant="outline"
                />
              </Flex>
            </FormControl>
            <Flex mb="15%" justify="space-between">
              <Button w={150} h={50} variant="outline" type="submit">
                Connexion
              </Button>
              <Flex direction="column" justify="center" alignItems="flex-end">
                <Checkbox>Se souvenir de moi</Checkbox>

                <Link color="teal.500" href="#">
                  Mot de passe oublié
                </Link>
              </Flex>
            </Flex>
            <Center>
              <Button
                type="submit"
                id="submit_login"
                variant="outline"
                w={300}
                h={75}
              >
                {" "}
                Créer un compte
              </Button>
            </Center>
          </form>
        </Box>
      </Center>
    </Box>
  );
};

export default Connection;

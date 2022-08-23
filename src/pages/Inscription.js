import React from "react";
import EniEnchere from "../components/EniEnchere";
import { useForm } from "react-hook-form";

const Inscription = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data =>
    console.log(data)
    )

  return (
    <div>
      <EniEnchere />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Mon Profil</h2>
        <label htmlFor="pseudo">Pseudo :</label>
        <input type="text" id="pseudo" name="pseudo" ref={register} />
        <label htmlFor="nom">Nom :</label>
        <input type="text" id="nom" name="nom" ref={register}/>
        <label htmlFor="prenom">Prénom :</label>
        <input type="text" id="prenom" name="prenom" ref={register}/>
        <label htmlFor="email">Email :</label>
        <input type="text" id="email" name="email" ref={register}/>
        <label htmlFor="telephone">Teléphone :</label>
        <input type="text" id="telephone" name="telephone" ref={register}/>
        <label htmlFor="rue">Rue :</label>
        <input type="text" id="rue" name="rue" ref={register}/>
        <label htmlFor="codePostal">Code postal :</label>
        <input type="text" id="codePostal" name="codePostal" ref={register}/>
        <label htmlFor="ville">Ville :</label>
        <input type="text" id="ville" name="ville" ref={register}/>
        <label htmlFor="motDePasse">Mot de passe :</label>
        <input type="password" id="motDePasse" name="motDePasse" ref={register}/>
        <label htmlFor="motDePasse-conf">Confirmation :</label>
        <input type="password" id="motDePasse-conf" name="motDePasse-conf" ref={register}/>
        <button>Créer</button>
        <button>Annuler</button>
      </form>
    </div>
  );
};

export default Inscription;

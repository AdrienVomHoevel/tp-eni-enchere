import React from "react";
import EniEnchere from "../components/EniEnchere";
import { useForm } from "react-hook-form";

const Inscription = () => {

  return (
    <div className="index_settings">
        <EniEnchere />
        <form>
                <label htmlFor="pseudo">Pseudo :</label>
                <input type="text" name="pseudo" id="pseudo"/>
                <label htmlFor="nom">Nom :</label>
                <input type="text" name="nom" id="nom"/>
                <button type="submit">Créer</button>
                <button>Annuler</button>
        </form>
    </div>
  );
};

export default Inscription;

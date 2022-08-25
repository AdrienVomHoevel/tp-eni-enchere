import React from "react";
import Profil from "../pages/Profil";

const Card = ({ articles }) => {
  const idVendeur = articles.vendeur.noUtilisateur;

  return (
    <div>
      <li>
        <div>
          <p>{articles.nomArticle}</p>
          <p>Prix : {articles.miseAPrix}</p>
          <p>Fin de l'enchère : {articles.dateFinEncheres}</p>
          <p>
            Vendeur :
            <a href="/profil" onClick={() => Profil(idVendeur)}>
              {articles.vendeur.pseudo}
            </a>
          </p>
        </div>
      </li>
    </div>
  );
};

export default Card;

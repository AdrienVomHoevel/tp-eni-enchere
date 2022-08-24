import React from 'react';

const Card = ({article}) => {
    return (
        <div>
            <li className="card">
                <img 
                    scr={article.img} 
                    alt={"Article" + article.name} />
                <div>
                    <p>{article.name}</p>
                    <p>Prix : {article.prix}</p>
                    <p>Fin de l'enchère : {article.finEnchere}</p>
                    <p>Vendeur : {article.pseudo}</p>
                </div>
            </li>
        </div>
    );
};

export default Card;
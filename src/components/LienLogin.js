import React from "react";
import { NavLink } from "react-router-dom";

const LienLogin = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/inscription">
          <li>S'inscrire</li>
        </NavLink>
        <li>Se connecter </li>
      </ul>
    </div>
  );
};

export default LienLogin;

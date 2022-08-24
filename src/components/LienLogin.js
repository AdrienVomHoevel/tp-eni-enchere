import React from "react";
import { NavLink } from "react-router-dom";

const LienLogin = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/inscription">
          <li>S'inscrire</li>
        </NavLink>
        <NavLink to="/connection">
        <li>Se connecter </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default LienLogin;

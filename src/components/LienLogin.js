import React from "react";
import { NavLink } from "react-router-dom";
import { Center } from '@chakra-ui/react'

const LienLogin = () => {
  return (
      <ul>
        <NavLink to="/inscription">
          <li>S'inscrire</li>
        </NavLink>
        <NavLink to="/connection">
        <li>Se connecter </li>
        </NavLink>
      </ul>
  );
};

export default LienLogin;

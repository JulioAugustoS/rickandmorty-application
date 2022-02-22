import React from "react";
import { Link } from "react-router-dom";

import { Container, Menu } from "./styles";

const Header = () => {
  return (
    <Container>
      <Menu>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/personagens">Personagens</Link>
          </li>
          <li>
            <Link to="/localizacoes">Localizações</Link>
          </li>
          <li>
            <Link to="/episodios">Episódios</Link>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export { Header };

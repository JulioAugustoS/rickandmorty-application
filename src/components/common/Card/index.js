import React from "react";

import { Container, Top, Bottom } from "./styles";

const Card = ({ bg, screen, photo, param1, param2, param3 }) => {
  const getParamTwo = () => {
    const titleTwo = {
      characters: "Especie:",
      episodes: "Data Exibição:",
      locations: "Tipo:",
    };

    return titleTwo[screen];
  };

  const getParamThree = () => {
    const titleThree = {
      characters: "Origem:",
      episodes: "Episódio:",
      locations: "Dimensão:",
    };

    return titleThree[screen];
  };

  return (
    <Container color={bg}>
      <Top src={photo} />
      <Bottom>
        <span>
          <b>Nome:</b> {param1}
        </span>
        <br />
        <span>
          <b>{getParamTwo()}</b> {param2}
        </span>
        <br />
        <span>
          <b>{getParamThree()}</b> {param3}
        </span>
      </Bottom>
    </Container>
  );
};

export { Card };

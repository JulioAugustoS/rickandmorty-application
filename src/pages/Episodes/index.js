import React from "react";

import { Content } from "../../global/style.global";
import { Container } from "./styles";
import { Header, Title, Search } from "../../components/common";

const Episodes = () => {
  return (
    <Container>
      <Header />
      <Title color="#00b200">Episódios</Title>
      <Search color="#00b200" btnTitle="Pesquisar" />
      <Content></Content>
    </Container>
  );
};

export { Episodes };

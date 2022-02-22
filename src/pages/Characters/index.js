import React, { useEffect, useState } from "react";
import request from "../../config/request";

import { Content } from "../../global/style.global";
import { Container } from "./styles";
import { Header, Card, Title, Search } from "../../components/common";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  const findCharacters = async (name = "") => {
    try {
      const { data } = await request.get(`/character/?name=${name}`);
      setCharacters(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    findCharacters();
  }, []);

  const handleSearch = () => {
    if (!search.length) {
      return alert("Digite um nome para pesquisar");
    }

    findCharacters(search);
    setSearch("");
  };

  return (
    <Container>
      <Header />
      <Title color="#00b200">Personagens</Title>
      <Search
        color="#00b200"
        btnTitle="Pesquisar"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onClick={() => handleSearch()}
      />
      <Content>
        {characters.map((character, index) => (
          <Card
            key={index}
            bg="#00b200"
            screen="characters"
            photo={character.image}
            param1={character.name}
            param2={character.species}
            param3={character.origin.name}
          />
        ))}
      </Content>
    </Container>
  );
};

export { Characters };

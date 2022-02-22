import React, { useEffect, useState } from "react";
import request from "../../config/request";

import { Content } from "../../global/style.global";
import { Container } from "./styles";
import { Header, Card, Title, Search } from "../../components/common";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState("");

  const findLocations = async (name = "") => {
    try {
      const { data } = await request.get(`/location/?name=${name}`);
      setLocations(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    findLocations();
  }, []);

  const handleSearch = () => {
    if (!search.length) {
      return alert("Digite um nome para pesquisar");
    }

    findLocations(search);
    setSearch("");
  };

  return (
    <Container>
      <Header />
      <Title color="#00b200">Localizações</Title>
      <Search
        color="#00b200"
        btnTitle="Pesquisar"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onClick={() => handleSearch()}
      />
      <Content>
        {locations.map((location, index) => (
          <Card
            key={index}
            bg="#00b200"
            screen="locations"
            param1={location.name}
            param2={location.type}
            param3={location.dimension}
            photo="https://jpimg.com.br/uploads/2019/05/rick-and-morty-season-4.png"
          />
        ))}
      </Content>
    </Container>
  );
};

export { Locations };

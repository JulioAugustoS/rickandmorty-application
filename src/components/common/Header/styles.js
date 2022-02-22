import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 60px;
  background-color: #00b200;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.nav`
  ul {
    display: flex;

    li {
      margin: 0 20px;
      list-style: none;

      a {
        text-decoration: none;
        font-size: 1.6rem;
        color: #fff;
        font-weight: bold;
      }
    }
  }
`;

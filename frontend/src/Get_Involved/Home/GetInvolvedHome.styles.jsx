import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  border: 2px solid blue;
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

export const LinksContainer = styled.div`
  border: 2px solid blue;
  height: 70%;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
`;

export const Links = styled(Link)`
  border: 2px solid red;
  width: 40%;
`;

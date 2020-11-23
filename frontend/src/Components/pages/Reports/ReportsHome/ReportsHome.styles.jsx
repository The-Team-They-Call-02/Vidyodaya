import styled from "styled-components";
import { colorObj } from "../../../../Styles/GlobalStyles";
import { Link } from "react-router-dom";

const LinksContainer = styled.div`
  height: 450px;
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled(Link)`
  background: #fff;
  border: 5px solid ${colorObj.green};
  border-radius: 20px;
  width: 40%;
  height: 80%;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colorObj.dark};
  font-size: 4.8rem;
  font-weight: 700;
  letter-spacing: 3px;

  &:nth-child(2) {
    margin: 30px;
  }
`;

export { LinksContainer, Links };

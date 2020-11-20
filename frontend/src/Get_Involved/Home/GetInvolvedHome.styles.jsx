import styled from "styled-components";
import { Link } from "react-router-dom";
import { colorObj } from "../../Styles/GlobalStyles";

export const HomeContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  height: 100%;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 20%;
`;

export const ViewDashboard = styled.button`
  display: ${(props) => (props.isAdmin ? "inline" : "none")};
  border: 2px solid #00703a;
  background: #e5e5e5;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  padding: 10px;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: 900;
  color: #00703a;
`;

export const LinksContainer = styled.div`
  height: 80%;
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Links = styled(Link)`
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
  color: #000;
`;

export const InfoContainer = styled.div`
  height: 60%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
`;

export const PageHeader = styled.h3`
  font-size: 4.8rem;
`;

export const Info = styled.p`
  font-size: 3.6rem;
`;

import styled from "styled-components";
import { Link } from "react-router-dom";
import { colorObj } from "../../../../Styles/GlobalStyles";

const DocumentsContainer = styled.div`
  min-height: 65vh;
`;

const Document = styled.div`
  width: 80%;
  border: 5px solid ${colorObj.green};
  border-radius: 10px;
  margin: 20px auto;
  padding: 5px;
`;

const Name = styled(Link)`
  width: 100%;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;

  color: ${colorObj.dark};
`;

export { DocumentsContainer, Document, Name };

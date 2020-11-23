import styled from "styled-components";
import { colorObj } from "../../../../../Styles/GlobalStyles";

const TableContainer = styled.div`
  background: #fff;
  margin: 0 auto;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 100px 70px;
`;

const Table = styled.table`
  margin: 0 auto;
  width: 100%;
`;

const TableRows = styled.tr`
  display: flex;
  justify-content: space-between;
  background: ${(props) => (props.fieldName ? "#c4c4c4" : "none")};
  padding: 20px;
`;

const TableColumns = styled.th`
  width: 10%;
  padding: 5px;
  font-size: 1.2rem;
  font-weight: 900;
`;

const TableData = styled.td`
  width: 10%;
  padding: 5px;
  font-size: 1.2rem;
`;

const LinkContainer = styled.div`
  padding: 15px;
  width: 40%;
  border-radius: 15px;
  margin: 0 auto;
  font-size: 3rem;
  background: ${colorObj.green};
  color: #fff;
  margin-top: 50px;
  cursor: pointer;
  font-weight: 700;
`;

export {
  TableContainer,
  Table,
  TableRows,
  TableColumns,
  TableData,
  LinkContainer,
};

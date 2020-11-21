import styled, { css } from "styled-components";
import { colorObj } from "../../../../Styles/GlobalStyles";
import { Link } from "react-router-dom";

const year = css`
  color: ${colorObj.dark};
  font-weight: 700;
  margin-bottom: 30px;
`;

const name = css`
  color: ${colorObj.green};
  font-weight: 500;
  margin-bottom: 10px;
`;

const checkYear = (props) => {
  if (props.year) {
    return year;
  } else {
    return name;
  }
};

const ReportsContainer = styled.div`
  min-height: 65vh;
`;

const YearsContainer = styled.div`
  border: 5px solid ${colorObj.green};
  border-radius: 10px;
  font-size: 3.6rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  width: 80%;
  margin: 30px auto;
  min-height: 300px;
`;

const Text = styled(Link)`
  ${checkYear}

  &:hover {
    text-decoration: underline;
  }
`;

export { ReportsContainer, YearsContainer, Text };

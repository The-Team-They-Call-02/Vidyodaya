import styled from "styled-components";
import { colorObj } from "../../../../Styles/GlobalStyles";

export const CultureContainer = styled.div`
  padding: 50px 0;
  background: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 20px;

  .culture-inner-container {
    width: 90%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 30px;
    color: ${colorObj.dark};
    h3.main-title {
      font-size: 3.6rem;
      margin-bottom: 3.6rem;
    }
    p {
      text-align: left;
    }
    img.alphabet {
      width: 80%;
      margin: 50px auto 0 auto;
    }
  }
`;

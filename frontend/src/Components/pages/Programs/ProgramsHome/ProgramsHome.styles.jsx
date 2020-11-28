import styled from "styled-components";
import { colorObj } from "../../../../Styles/GlobalStyles";

export const ProgramsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .programs-page-inner-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .programs-page-h1 {
      margin: 50px auto;
    }

    .programs-page-cards-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      width: 1533px;
      max-width: 80vw;

      .card {
        background-color: #ffffff;
        box-shadow: 0px 1px 10px 0px ${colorObj.dark};
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 37vw;
        height: 56vh;
        border-radius: 20px;
        border: 5px solid #77cc6d;
        margin: 20px;
        &:last-child {
          width: 77vw;
        }
        img.education-image,
        img.camps-image {
          width: 30rem;
          height: 20rem;
        }
        span.balwadis-subtitle {
          font-size: 2.6rem;
          font-weight: 600;
        }
      }
      .programs-page-Culture {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        img {
          height: 38.9rem;
        }
      }
    }
  }
`;

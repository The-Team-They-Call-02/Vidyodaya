import styled from "styled-components";
import { colorObj } from "../../../../../Styles/GlobalStyles";

export const CampCardContainer = styled.div`
  padding: 50px 0;
  background: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 20px;

  .camp-card-inner-container {
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
    justify-content: center;
    width: 90%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    font-size: 2.4rem;
    color: ${colorObj.dark};

    h3.main-title {
      margin-bottom: 20px;
    }

    h4.subtitle {
      font-size: 2.4rem;
      font-style: italic;
    }

    h4.participants,
    h4.village-covered {
      margin-top: 10px;
      font-size: 2rem;
      font-weight: 300;

      span.count {
        font-size: 2rem;
        font-weight: 700;
      }
    }

    .camp-card-highlights-container {
      display: flex;
      flex-direction: column;
      align-items: space-evenly;
      justify-content: center;
      font-size: 3rem;
      font-weight: 700;

      .camp-card-highlights-inner-div {
        margin: 15px auto;
        width: 100%;
        max-width: 900px;
        h4.title {
          font-size: 2.4rem;
          text-align: left;
          margin: 15px auto;
        }

        p.description {
          font-size: 2rem;
          font-weight: 300;
        }

        img {
          object-fit: cover;
          height: 400px;
          margin: 20px auto;
        }
      }
    }
    .camp-card-feedback-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 70%;
      font-size: 3rem;
      font-weight: 700;
      margin: 50px auto;

      .testimonial {
        font-size: 2rem;
        font-weight: 300;
        font-style: italic;
        margin: 20px auto;

        .source {
          font-style: normal;
        }
      }
    }
    h3 {
      font-size: 3.6rem;
    }
  }
`;

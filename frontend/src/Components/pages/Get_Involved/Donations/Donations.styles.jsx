import styled from "styled-components";

const ImagesContainer = styled.div`
  border-radius: 20px;
  padding: 50px;
  background: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 150px 70px 100px 70px;
`;

const InfoContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  min-height: 300px;
`;

const ImgContainer = styled.figure`
  height: 900px;
  width: 100%;

  &:first-of-type {
    margin-top: 50px;
  }

  &:last-of-type {
    margin-bottom: 50px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const InfoHeading = styled.h3`
  font-size: 3.6rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;

const CTABtn = styled.button`
  font-size: 4.8rem;
  font-family: "Roboto", sans-serif;
  color: white;
  padding: 15px;
  height: auto;
  min-width: 300px;
  cursor: pointer;
  margin: ${(props) =>
    props.bankdetails ? "30px 30px 100px 30px" : "30px 30px 30px 30px"};

  &:focus {
    outline: none;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const Description = styled.p`
  font-size: 2.4rem;
  color: #000;
  margin-top: ${(props) => (props.bottom ? "30px" : "0")};
  margin-bottom: ${(props) => (props.bottom ? "0" : "30px")};

  text-align: ${(props) => (props.bankdetails ? "left" : "center")};
`;

const BankDetails = styled.div`
  width: 60%;
  font-size: 2.4rem;
  font-family: "Roboto", sans-serif;
  text-align: left;
  margin-bottom: 20px;
`;

const BankInformation = styled.p`
  font-weight: ${(props) => (props.heading ? "700" : "500")};
  margin-bottom: 10px;
`;

export {
  ImagesContainer,
  ImgContainer,
  Img,
  InfoContainer,
  InfoHeading,
  CTABtn,
  Description,
  BankDetails,
  BankInformation,
};

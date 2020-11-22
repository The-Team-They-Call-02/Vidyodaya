import styled from "styled-components";
import { colorObj } from "../../../Styles/GlobalStyles";

const MainContainer = styled.div`
  background: #f8f7f7;
  padding: 150px 0 0 0;
`;

const Heading = styled.h2`
  font-size: ${(props) => (props["form-heading"] ? "4.8rem" : "6.4rem")};
  font-family: "Roboto", sans-serif;
  color: ${colorObj.dark};
  font-weight: 700;
  margin-bottom: ${(props) => (props["form-heading"] ? "50px" : "0")};
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 50px;
  min-height: calc(100vh - (40vh + 150px));
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 150px;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoContainer = styled.div`
  width: 20%;
`;

const Title = styled.div`
  text-align: left;

  h3 {
    font-size: 4rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;

const Address = styled.div`
  text-align: left;
  font-size: 2rem;

  p {
    margin-bottom: 5px;
  }
`;

const Form = styled.form`
  border-radius: 10px;
  background: #fff;
  padding: 50px 0 50px 100px;
  width: 70%;
  min-height: 65vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 2rem;
  font-weight: 700;
  width: 30%;
  text-align: left;
  margin-right: 50px;

  span {
    color: #9d1818;
    margin-left: 10px;
  }
`;

const InputField = styled.input`
  padding: 10px;
  width: 40%;
  border-radius: 5px;
  border: 1px solid black;

  &:focus {
    outline-color: ${colorObj.green};
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  width: 40%;
  border-radius: 5px;

  &:focus {
    outline-color: ${colorObj.green};
  }
`;

const SubmitBtn = styled.button`
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: capitalize;
  height: auto;
  font-size: 2rem;
`;

export {
  MainContainer,
  Heading,
  Container,
  HeadingContainer,
  FormContainer,
  InfoContainer,
  Form,
  Title,
  Address,
  InputWrapper,
  Label,
  InputField,
  TextArea,
  SubmitBtn,
};

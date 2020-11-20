import styled from "styled-components";
import { colorObj } from "../../../../../Styles/GlobalStyles";

const FormContainer = styled.div`
  background: #fff;
  margin: 0 auto;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 150px 70px 100px 70px;
`;

const Form = styled.form`
  padding: 50px 0 20px 0;
`;

const Title = styled.h3`
  font-size: 4.8rem;
  text-align: left;
`;

const Description = styled.p`
  font-size: 2.4rem;
  text-align: left;
  margin: 20px 0;
`;

const Divider = styled.div`
  border: 2px solid black;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 50px;
  position: relative;
`;

const NameLabel = styled.p`
  text-align: left;
  font-size: 1.5rem;
  margin: 5px 0;
`;

const Label = styled.label`
  width: 35%;
  font-size: 2.4rem;
  font-weight: 900;
  text-align: left;
  display: flex;
`;

const Star = styled.span`
  color: red;
  margin-left: 15px;
`;

const InputContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;

const InputField = styled.input`
  padding: 5px 10px;
  width: ${(props) => (props.username ? "100%" : "50%")};

  &:focus {
    outline-color: ${colorObj.green};
  }
`;

const Select = styled.select`
  width: 50%;
  padding: 5px 10px;

  &:focus {
    outline-color: ${colorObj.green};
  }
`;
const Option = styled.option`
  font-size: 1.3rem;
`;
const Textarea = styled.textarea`
  width: 50%;
  padding: 5px 10px;

  &:focus {
    outline-color: ${colorObj.green};
  }
`;

const RadioContainer = styled.div`
  display: flex;
  width: 15%;
  justify-content: flex-start;
`;

const RadioChoices = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:first-child {
    margin-right: 20px;
  }
`;

const RadioLabel = styled.p`
  font-size: 1.5rem;
  margin-left: 10px;
`;

const SubmitBtn = styled.button`
  font-size: 2rem;
  color: white;
  font-weight: 900;
  background: ${colorObj.green};
  padding: 5px;
  width: 150px;
  height: auto;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-transform: capitalize;

  &:focus {
    outline: none;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const ErrorContainer = styled.div`
  width: 22%;
  text-align: left;
  font-size: 1.5rem;
  color: red;
  position: absolute;
  top: 0;
  right: 0;
`;

export {
  FormContainer,
  Form,
  Title,
  Description,
  Divider,
  InputWrapper,
  Label,
  NameLabel,
  Star,
  InputContainer,
  InputField,
  Textarea,
  RadioContainer,
  RadioChoices,
  RadioLabel,
  SubmitBtn,
  ErrorContainer,
  Select,
  Option,
};

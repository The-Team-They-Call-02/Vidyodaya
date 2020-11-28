import styled from "styled-components";
import { colorObj } from "../../../../Styles/GlobalStyles";

const FormContainer = styled.div`
  background: #fff;
  margin: 0 auto;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 100px 0;
`;

const Form = styled.form`
  width: 60%;
  margin: 0 auto;
`;

const AlignImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 50px 0;
`;

const UploadedImage = styled.img`
  width: 500px;
  height: 400px;
  padding: 0;
  border: solid black 4px;
  border-radius: 10px;
`;

const TwoRows = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin: 50px 0;
`;

const Rows = styled.div`
  margin-bottom: 50px;
`;

const InputWrapper = styled.div`
  width: ${(props) => (props.full ? "100%" : props.category ? "50%" : "30%")};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
`;

const Label = styled.label`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const InputField = styled.input`
  padding: 10px;
  width: 100%;
  font-size: 1.6rem;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;

  &:focus {
    outline: none;
    border: 2px solid ${colorObj.green};
  }
`;

const TextareaField = styled.textarea`
  padding: 10px;
  width: 100%;
  font-size: 1.6rem;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;

  &:focus {
    outline: none;
    border: 2px solid ${colorObj.green};
  }
`;

const Select = styled.select`
  padding: 10px;
  width: 100%;
  font-size: 1.6rem;
  border-radius: 10px;

  &:focus {
    outline: none;
    border: 1px solid ${colorObj.green};
  }
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 1.5rem;
  position: absolute;
  bottom: -25px;
  left: 5px;
`;

const UploadContainer = styled.div`
  border: 1px solid black;
  height: 150px;
  border-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const FileContainer = styled.div`
  width: 50%;
  font-size: 1.5rem;
`;

const AddBtn = styled.button`
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: capitalize;
  height: auto;
  font-size: 2rem;
`;

const FileBtn = styled.div`
  background-color: ${colorObj.green};
  color: ${colorObj.light};
  border-radius: 10px;
  border: none;
  width: 12rem;
  height: 3rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.5rem;
  position: relative;
  margin-left: 38%;
`;

export {
  AlignImage,
  FormContainer,
  Form,
  FileBtn,
  TwoRows,
  Rows,
  InputWrapper,
  InputField,
  TextareaField,
  Label,
  Select,
  ErrorMsg,
  UploadContainer,
  FileContainer,
  AddBtn,
  UploadedImage,
};

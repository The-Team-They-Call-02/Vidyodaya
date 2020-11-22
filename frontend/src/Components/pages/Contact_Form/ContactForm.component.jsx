import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

// styled-components
import {
  MainContainer,
  Container,
  HeadingContainer,
  Heading,
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
} from "./ContactForm.styles";

const ContactForm = () => {
  const history = useHistory();
  const { handleSubmit, errors, register, reset } = useForm();

  const goBack = () => {
    history.push("/");
  };

  const onSubmit = (values, e) => {
    e.preventDefault();

    console.log(values);
    reset();
  };

  return (
    <MainContainer className="test">
      <Container>
        <HeadingContainer>
          <Heading>Contact</Heading>
        </HeadingContainer>

        <FormContainer>
          <InfoContainer>
            <Title>
              <h3>Vidyodaya</h3>
              <p>Our complete postal address is: </p>
            </Title>

            <Address>
              <p>Vidyodaya,</p>
              <p>Post Box No. 28,</p>
              <p>GUDALUR,</p>
              <p>The Nilgris District,</p>
              <p>INDIA, 643 212</p>
            </Address>
          </InfoContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Heading form-heading>Send us a message</Heading>

            <InputWrapper>
              <Label htmlFor="name">
                Name <span>*</span>
              </Label>
              <InputField
                type="text"
                id="name"
                name="name"
                ref={register({ required: true })}
              />
              {errors.name && <p>Please enter your name</p>}
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="email">
                Email <span>*</span>
              </Label>
              <InputField
                type="email"
                id="email"
                name="email"
                ref={register({ required: true })}
              />
              {errors.email && <p>Please enter your email</p>}
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="comments">
                How did you hear about us? <span>*</span>
              </Label>
              <TextArea
                id="comments"
                name="comments"
                rows="10"
                ref={register({ required: true })}
              ></TextArea>
              {errors.comments && <p>Please fill out this field</p>}
            </InputWrapper>

            <SubmitBtn type="submit">Submit</SubmitBtn>
          </Form>
        </FormContainer>
      </Container>
    </MainContainer>
  );
};

export default ContactForm;

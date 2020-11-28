import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Pageclip from "pageclip";

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
  ErrorMsg,
} from "./ContactForm.styles";

const ContactForm = () => {
  const { handleSubmit, errors, register, reset } = useForm();

  //   test once deployed
  //   let pageclip = new Pageclip(process.env.REACT_APP_PAGECLIP_API);

  const onSubmit = (values, e) => {
    e.preventDefault();

    console.log(values);

    // test once deployed. currently having cors issues
    // pageclip.send(data).then((res) => {
    //   console.log(res.data);
    // });

    // successfully send an email but it gives error messages in my console
    axios
      .post(
        `https://send.pageclip.co/${process.env.REACT_APP_PAGECLIP}`,
        values
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    //   send to backend
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
          <Form onSubmit={handleSubmit(onSubmit)} id="pageclip-form">
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
              {errors.name && <ErrorMsg>Please enter your name</ErrorMsg>}
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
              {errors.email && <ErrorMsg>Please enter your email</ErrorMsg>}
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
              {errors.comments && (
                <ErrorMsg>Please fill out this field</ErrorMsg>
              )}
            </InputWrapper>

            <SubmitBtn type="submit">Submit</SubmitBtn>
          </Form>
        </FormContainer>
      </Container>
    </MainContainer>
  );
};

export default ContactForm;

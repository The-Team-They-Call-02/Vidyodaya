import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

// styled-components
import {
  Container,
  HeadingContainer,
  Heading,
  BackBtn,
  ViewDashboard,
} from "../../GetInvolved.styles";

import {
  FormContainer,
  Form,
  Title,
  Description,
  Divider,
  InputWrapper,
  Label,
  Star,
  InputContainer,
  InputField,
  Textarea,
  RadioContainer,
  RadioChoices,
  RadioLabel,
  NameLabel,
  SubmitBtn,
  ErrorContainer,
  Select,
  Option,
} from "./Register-form.styles";

const RegisterForm = () => {
  const { handleSubmit, register, errors, reset } = useForm();
  const history = useHistory();

  const goBack = () => {
    history.push("/get-involved/volunteers");
  };

  const viewDashboard = () => {
    history.push("/get-involved/volunteers/volunteers-dashboard");
  };

  const submit = (values, e) => {
    e.preventDefault();

    const d = new Date();

    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDay();

    const parsedValues = {
      ...values,
      haveChildren: values.haveChildren === "yes" ? true : false,
      married: values.married === "yes" ? true : false,
      volunteeredBefore: values.volunteeredBefore === "yes" ? true : false,
      timestamp: `${year}-${month}-${day}`,
    };

    axios
      .post(
        "https://opportunity-hack-vidyodaya.herokuapp.com/volunteers/volunteer",
        parsedValues
      )
      .then((res) => {
        reset();
        history.push("/get-involved");
      })
      .catch((err) => {
        console.log(err);
        // later maybe we can create a component that renders when there's a problem sending a request
        reset();
      });
  };

  return (
    <Container>
      <HeadingContainer>
        <Heading>Register to Volunteer</Heading>
        <ViewDashboard onClick={viewDashboard}>View Dashboard</ViewDashboard>
        <BackBtn onClick={goBack}>Back</BackBtn>
      </HeadingContainer>
      <FormContainer>
        <Title>Registration</Title>
        <Description>
          Here is an opportunity for you to be a partner in change and to give
          an adivasi child a chance to leap into a wonderful time
        </Description>

        <Divider></Divider>
        <Form onSubmit={handleSubmit(submit)}>
          {/* name */}
          <InputWrapper>
            <Label htmlFor="username">
              Name <Star>*</Star>
            </Label>

            <InputContainer>
              <div style={{ width: "45%" }}>
                <InputField
                  id="username"
                  username
                  type="text"
                  name="firstName"
                  ref={register({
                    required: true,
                  })}
                />
                <NameLabel>First</NameLabel>
              </div>

              <div style={{ width: "45%" }}>
                <InputField
                  username
                  type="text"
                  name="lastName"
                  ref={register({
                    required: true,
                  })}
                />
                <NameLabel>Last</NameLabel>
              </div>
            </InputContainer>

            {(errors.firstName || errors.lastName) && (
              <ErrorContainer>Please enter your name</ErrorContainer>
            )}
          </InputWrapper>

          {/* married */}
          <InputWrapper>
            <Label htmlFor="married">
              Married <Star>*</Star>
            </Label>

            <RadioContainer>
              <RadioChoices>
                <input
                  type="radio"
                  id="married"
                  value="yes"
                  name="married"
                  ref={register({ required: true })}
                />
                <RadioLabel>Yes</RadioLabel>
              </RadioChoices>
              <RadioChoices>
                <input
                  type="radio"
                  value="no"
                  name="married"
                  ref={register({ required: true })}
                />
                <RadioLabel>No</RadioLabel>
              </RadioChoices>
            </RadioContainer>
            {errors.married && (
              <ErrorContainer>Please select one of the options</ErrorContainer>
            )}
          </InputWrapper>

          {/* children */}
          <InputWrapper>
            <Label htmlFor="children">
              Children <Star>*</Star>
            </Label>

            <RadioContainer>
              <RadioChoices>
                <input
                  type="radio"
                  id="children"
                  value="yes"
                  name="haveChildren"
                  ref={register({ required: true })}
                />
                <RadioLabel>Yes</RadioLabel>
              </RadioChoices>

              <RadioChoices>
                <input
                  type="radio"
                  value="no"
                  name="haveChildren"
                  ref={register({ required: true })}
                />
                <RadioLabel>No</RadioLabel>
              </RadioChoices>
            </RadioContainer>
            {errors.children && (
              <ErrorContainer>Please select one of the options</ErrorContainer>
            )}
          </InputWrapper>

          {/* volunteering as */}
          <InputWrapper>
            <Label htmlFor="volunteeringAs">
              Volunteering As <Star>*</Star>
            </Label>
            <InputContainer>
              <Select
                name="role"
                id="volunteeringAs"
                ref={register({ required: true })}
              >
                <option value="" disabled selected>
                  -Select-
                </option>
                <Option value="web designer">Web Designer</Option>
                <Option value="graphic designer">Graphic Designer</Option>
                <Option value="tech trainer">Tech Trainer</Option>
                <Option value="games enthusiast">Games Enthusiast</Option>
                <Option value="finance manager">Finance Manager</Option>
                <Option value="fund raising">Fund Raising</Option>
              </Select>
            </InputContainer>

            {errors.volunteeringAs && (
              <ErrorContainer>Please select one of the options</ErrorContainer>
            )}
          </InputWrapper>

          {/* have you volunteered before */}
          <InputWrapper>
            <Label htmlFor="experience">Have you volunteered before?</Label>

            <RadioContainer>
              <RadioChoices>
                <input
                  type="radio"
                  id="experience"
                  value="yes"
                  name="volunteeredBefore"
                  ref={register}
                />
                <RadioLabel>Yes</RadioLabel>
              </RadioChoices>

              <RadioChoices>
                <input
                  type="radio"
                  value="no"
                  name="volunteeredBefore"
                  ref={register}
                />
                <RadioLabel>No</RadioLabel>
              </RadioChoices>
            </RadioContainer>
          </InputWrapper>

          {/* contact */}

          <InputWrapper>
            <Label htmlFor="contact">
              Preferred contact method <Star>*</Star>
            </Label>

            <RadioContainer>
              <RadioChoices>
                <input
                  type="radio"
                  id="contact"
                  value="email"
                  name="contactMethod"
                  ref={register({ required: true })}
                />
                <RadioLabel>Email</RadioLabel>
              </RadioChoices>

              <RadioChoices>
                <input
                  type="radio"
                  value="phone"
                  name="contactMethod"
                  ref={register({ required: true })}
                />
                <RadioLabel>Phone</RadioLabel>
              </RadioChoices>
            </RadioContainer>
            {errors.contact && (
              <ErrorContainer>Please select one of the options</ErrorContainer>
            )}
          </InputWrapper>

          {/* Email */}
          <InputWrapper>
            <Label htmlFor="email">
              Email <Star>*</Star>
            </Label>

            <InputContainer>
              <InputField
                type="email"
                id="email"
                name="email"
                ref={register({ required: true })}
              />
            </InputContainer>

            {errors.email && (
              <ErrorContainer>Please enter your email</ErrorContainer>
            )}
          </InputWrapper>

          {/* Phone */}
          <InputWrapper>
            <Label htmlFor="phone">
              Phone <Star>*</Star>
            </Label>

            <InputContainer>
              <InputField
                type="text"
                id="phone"
                name="phone"
                ref={register({ required: true })}
              />
            </InputContainer>

            {errors.phone && (
              <ErrorContainer>Please enter your email</ErrorContainer>
            )}
          </InputWrapper>

          {/* how did you hear about us */}
          <InputWrapper>
            <Label htmlFor="textField">
              How did you hear about us? <Star>*</Star>
            </Label>

            <InputContainer>
              <Textarea
                name="text"
                id="textField"
                ref={register({ required: true })}
                rows="5"
              ></Textarea>
            </InputContainer>

            {errors.textArea && (
              <ErrorContainer>Please fill out this field</ErrorContainer>
            )}
          </InputWrapper>

          <SubmitBtn type="submit">Submit</SubmitBtn>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default RegisterForm;

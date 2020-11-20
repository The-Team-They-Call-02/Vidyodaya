import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
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
} from "./Register-form.styles";

const RegisterForm = () => {
  const { handleSubmit, register, errors, reset } = useForm({
    defaultValues: {
      username: {
        first: "",
        last: "",
      },
      volunteeringAs: "",
      email: "",
      phone: "",
      textField: "",
    },
  });
  const history = useHistory();

  const goBack = () => {
    history.push("/get-involved/volunteers");
  };

  const submit = (values, e) => {
    e.preventDefault();

    // const parsedValues = {
    //   ...values,
    //   married: values.married === "true" ? true : false,
    //   children: values.children === "true" ? true : false,
    //   experience: values.experience === "true" ? true : false,
    // };
    // console.log(errors.username.message);
    console.log(values);
    reset();
  };

  return (
    <Container>
      <HeadingContainer>
        <Heading>Register to Volunteer</Heading>
        <ViewDashboard isAdmin>View Dashboard</ViewDashboard>
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

              {/* {errors.firstName && <p style={{ fontSize: "5rem" }}>Test</p>}
            {errors.lastName && <p style={{ fontSize: "5rem" }}>Test</p>} */}
            </InputContainer>
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

              {/* {errors.married && <p style={{ fontSize: "2rem" }}>Test</p>} */}
            </RadioContainer>
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
                  name="children"
                  ref={register({ required: true })}
                />
                <RadioLabel>Yes</RadioLabel>
              </RadioChoices>

              <RadioChoices>
                <input
                  type="radio"
                  value="no"
                  name="children"
                  ref={register({ required: true })}
                />
                <RadioLabel>No</RadioLabel>
              </RadioChoices>

              {/* {errors.children && <p style={{ fontSize: "2rem" }}>Test</p>} */}
            </RadioContainer>
          </InputWrapper>

          {/* volunteering as */}
          <InputWrapper>
            <Label htmlFor="volunteeringAs">
              Volunteering As <Star>*</Star>
            </Label>

            <InputContainer>
              <InputField
                id="volunteeringAs"
                type="text"
                name="volunteeringAs"
                ref={register({ required: true })}
              />
            </InputContainer>

            {/* {errors.volunteeringAs && <p style={{ fontSize: "2rem" }}>Test</p>} */}
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
                  name="experience"
                  ref={register}
                />
                <RadioLabel>Yes</RadioLabel>
              </RadioChoices>

              <RadioChoices>
                <input
                  type="radio"
                  value="no"
                  name="experience"
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
                  name="contact"
                  ref={register({ required: true })}
                />
                <RadioLabel>Email</RadioLabel>
              </RadioChoices>

              <RadioChoices>
                <input
                  type="radio"
                  value="phone"
                  name="contact"
                  ref={register({ required: true })}
                />
                <RadioLabel>Phone</RadioLabel>
              </RadioChoices>
              {/* {errors.contact && <p style={{ fontSize: "2rem" }}>Test</p>} */}
            </RadioContainer>
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

            {/* {errors.email && <p style={{ fontSize: "2rem" }}>Test</p>} */}
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

            {/* {errors.phone && <p style={{ fontSize: "2rem" }}>Test</p>} */}
          </InputWrapper>

          {/* how did you hear about us */}
          <InputWrapper>
            <Label htmlFor="textField">
              How did you hear about us? <Star>*</Star>
            </Label>

            <InputContainer>
              <Textarea
                name="textArea"
                id="textField"
                ref={register({ required: true })}
                rows="5"
              ></Textarea>
            </InputContainer>

            {errors.textArea && <p style={{ fontSize: "2rem" }}>Test</p>}
          </InputWrapper>

          <button type="submit">Submit</button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default RegisterForm;

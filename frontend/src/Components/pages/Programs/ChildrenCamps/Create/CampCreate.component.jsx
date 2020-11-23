import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

// styled-components
import {
	Container,
	HeadingContainer,
	Heading,
	BackBtn,
} from "../../Programs.styles";

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
} from "./CampCreate.styles";

const CampCreate = () => {
	const { handleSubmit, register, errors, reset } = useForm();
	const history = useHistory();

	const goBack = () => {
		history.push("/programs/children-camps");
	};

	const submit = (values, e) => {
		e.preventDefault();

		console.log(values);
		reset();
	};

	return (
		<Container>
			<HeadingContainer>
				<Heading>Add Camp</Heading>
				<BackBtn onClick={goBack}>Back</BackBtn>
			</HeadingContainer>
			<FormContainer>
				<Title>Create Camp</Title>
				<Description>Create your camp memories here.</Description>

				<Divider></Divider>
				<Form onSubmit={handleSubmit(submit)}>
					<SubmitBtn type="submit">Submit</SubmitBtn>
				</Form>
			</FormContainer>
		</Container>
	);
};

export default CampCreate;

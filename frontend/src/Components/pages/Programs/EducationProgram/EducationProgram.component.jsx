import React from "react";
import { useHistory, Link } from "react-router-dom";

// components
// import CampCard from "./CampCard/CampCard.component";

// styled components
import {
	Container,
	HeadingContainer,
	Heading,
	BackBtn,
	ProgramDonateContainer,
} from "../Programs.styles";
import { EducationContainer } from "./EducationProgram.styles";

const EducationProgram = (props) => {
	// const { campsData } = props;
	const history = useHistory();

	const goBack = () => {
		history.push("/programs/");
	};

	return (
		<Container>
			<HeadingContainer>
				<Heading>Education Program</Heading>
				<BackBtn onClick={goBack}>Back</BackBtn>
			</HeadingContainer>

			<EducationContainer>
				<div className="education-program-inner-container">
					<p>
						Another important area of intervention of Vidyodaya is
						to provide academic, financial and material support for
						those who wish to go on for higher education.
						<br />
						Tutorial support has become essential to score grades in
						order to pursue higher education and so financial
						support for this has to be provided. This is being made
						available to children in the classes from 8 to 12.
						<br /> Financial support is also being provided for
						those who wish to pursue education at the university
						level and for this purpose a savings scheme is already
						initiated. A Loan scheme is also being initiated where
						each Area has a fund which can be lent out. This will be
						repaid through the child’s savings on a long term basis.
						The savings of the children will not be used for this
						instead a separate fund will be created. The savings
						will be credited into individual savings often idleness.
						<br />
						<br /> Select options below to learn more.
					</p>
					<br />
					<br />
					<div className="camp-buttons-container"></div>
				</div>
			</EducationContainer>
			<ProgramDonateContainer>
				<h5 className="program-donations-text">
					Help us continue our education programs by donating.
				</h5>
				<button className="program-donations-btn">Donate</button>
			</ProgramDonateContainer>
		</Container>
	);
};

export default EducationProgram;

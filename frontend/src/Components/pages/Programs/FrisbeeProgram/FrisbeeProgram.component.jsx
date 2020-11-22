import React from "react";
import { useHistory } from "react-router-dom";

// styled components
import {
	Container,
	HeadingContainer,
	Heading,
	BackBtn,
} from "../Programs.styles";
import { FrisbeeContainer } from "./FrisbeeProgram.styles";

const FrisbeeProgram = () => {
	const history = useHistory();

	const goBack = () => {
		history.push("/programs/");
	};

	return (
		<Container>
			<HeadingContainer>
				<Heading>Ultimate Frisbee Program</Heading>
				<BackBtn onClick={goBack}>Back</BackBtn>
			</HeadingContainer>

			<FrisbeeContainer>
				<img
					src="https://one-all.in/wp-content/uploads/2017/03/ONE-ALL-Logo-transparent-background.png"
					alt="One All logo"
				/>
				<div className="frisbee-inner-container">
					<p>
						VBVT has officially partnered with The One All Trust
						from Chennai since March 2018 to strengthen the values
						of the adivasi community through sport – specifically
						Ultimate Frisbee.
						<br />
						<br />
						One All is an organization that uses Ultimate Frisbee as
						a tool to empower the worldview of youth. VBVT finds
						that the values imparted through Ultimate Frisbee is
						along the same lines that adivasis have in their
						culture. Hence we have started a Values through Frisbee
						program in partnership with
						<a href="https://one-all.in/"> One All. </a>
					</p>
					<br />
					<br />
					<iframe
						width="100%"
						height="770"
						src="https://www.youtube.com/embed/KIgS48vdpfg"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
						title="one all video"
					></iframe>
				</div>
			</FrisbeeContainer>
		</Container>
	);
};

export default FrisbeeProgram;

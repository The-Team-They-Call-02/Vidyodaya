import React from "react";
import { useHistory } from "react-router-dom";

// styled components
import {
	Container,
	HeadingContainer,
	Heading,
	BackBtn,
	ProgramDonateContainer,
} from "../Programs.styles";
import { CultureContainer } from "./Culture.styles";

import alphabet from "../../../../Assets/Programs/alphabet.jpg";
import photo from "../../../../Assets/Programs/Picture3-1024x683.jpg";

const Culture = () => {
	const history = useHistory();

	const goBack = () => {
		history.push("/programs/");
	};

	return (
		<Container>
			<HeadingContainer>
				<Heading>Culture</Heading>
				<BackBtn onClick={goBack}>Back</BackBtn>
			</HeadingContainer>

			<CultureContainer>
				<div className="culture-inner-container">
					<h3 className="main-title">Cultural Curriculum</h3>
					<p>
						We realise that the only way a culture gets conserved is
						when it is promoted. Mere documenting it does not help.
						It is best promoted when it is used in the context of a
						school and children are using it in some form or other.
						This ensures that it is handed down to the next
						generation and will be passed on too. It is in this
						context that we have planned this whole programme. So
						far we have gathered together some of the stories, songs
						and riddles. Whatever could be used for children have
						been used but it has not been much. Also given the fact
						that these did not really pertain to the curriculum of
						the government we were unable to put them to good use.
						Now that we can work on our own curriculum we are keen
						on having whatever we can introduce.
					</p>
					<br />
					<h4 className="sub-title">Documenting Knowledge</h4>
					<p>
						This year we have decided to take up Medicinal plants
						and honey collection for documentation. Each year we can
						decide on some topics like these depending upon
						availability of people to do the documentation. Over the
						years we can build up a good store of their knowledge.
					</p>
					<br />
					<h4 className="sub-title">Introducing in curriculum</h4>
					<p>
						We have decided that as and when such information is
						gathered we would immediately introduce them into the
						curriculum at the various levels. Another aspect that is
						being introduced in the current year is the history of
						the adivasis in Gudalur.
					</p>
					<img src={alphabet} alt="alphabet" className="alphabet" />
				</div>
			</CultureContainer>
			<br />
			<br />
			<CultureContainer>
				<div className="culture-inner-container">
					<h3 className="main-title">Cultural Curriculum</h3>
					<br />
					<h4 className="sub-title">Documenting Knowledge</h4>

					<p>
						Kilina Penga: a collection of short stories and songs
						for Paniya community for children.
					</p>

					<br />

					<p>
						Pattola: a pre-primer in Paniya introducing a script for
						the language.
					</p>

					<br />

					<p>
						Documents on information about the tribes and their way
						of life so that the adivasi way of life gets universal
						acceptance and appreciation.
					</p>

					<br />

					<p>
						Food book: A book for children on food from forest used
						by 4 Adivasi community in Gudalur.
					</p>

					<br />

					<p>
						Our Forest, Our Rights: The Forest Rights Act made in an
						easy-tounderstand form for children. It also traces the
						history of how and why the Forest Rights Act came into
						existence.
					</p>

					<img src={photo} alt="alphabet" className="alphabet" />
				</div>
			</CultureContainer>

			<ProgramDonateContainer>
				<h5 className="program-donations-text">
					Support us by donating.
				</h5>
				<button className="program-donations-btn">Donate</button>
			</ProgramDonateContainer>
		</Container>
	);
};

export default Culture;

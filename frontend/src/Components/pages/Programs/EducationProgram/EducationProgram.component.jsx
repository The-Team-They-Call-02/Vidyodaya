import React, {useState} from 'react';
import { useHistory } from "react-router-dom";


import Sarva from "../../../../Assets/Programs/Sarva.svg";
import nioosc from "../../../../Assets/Programs/nioosc.svg";

// styled components
import {
	Container,
	HeadingContainer,
	Heading,
	BackBtn,
	ProgramDonateContainer,
	TextContainer,
	ButtonContainer,
	Links
} from "../Programs.styles";
import { EducationContainer } from "./EducationProgram.styles";


const EducationProgram = () => {
	const history = useHistory();


	const goBack = () => {
		history.push("/programs/");
	};

	return (
		<Container>
			<HeadingContainer>
				<Heading id="education-program">Education Program</Heading>
				<BackBtn onClick={goBack}>Back</BackBtn>
			</HeadingContainer>

			<EducationContainer>
				<div className="education-program-inner-container">
					<TextContainer>
						<h3 id="higher-education">Higher Education</h3>
						<br/>
						<p>
						Another important area of intervention of Vidyodaya is
						to provide academic, financial and material support for
						those who wish to go on for higher education.
						</p> 
						<br />
						<p>
						Tutorial support has become essential to score grades in
						order to pursue higher education and so financial
						support for this has to be provided. This is being made
						available to children in the classes from 8 to 12.
						</p>
						<br />
						<p>
						Financial support is also being provided for
						those who wish to pursue education at the university
						level and for this purpose a savings scheme is already
						initiated. A Loan scheme is also being initiated where
						each Area has a fund which can be lent out. This will be
						repaid through the child’s savings on a long term basis.
						The savings of the children will not be used for this
						instead a separate fund will be created. The savings
						will be credited into individual savings often idleness.
						</p>
						<br />
						<br /> 
						<p>
						Select options below to learn more.
						</p>
					</TextContainer>
					<ProgramDonateContainer>
					<ButtonContainer>
						<Links to="/programs/education-program/childrens-bank">
							Children's Bank
						</Links>
						<Links to="/programs/education-program/study-centers">
							Study Centers
						</Links>
						<Links to="/programs/education-program/scholarships">
							Scholarships
						</Links>
					</ButtonContainer>
					</ProgramDonateContainer>
                    <div style={{border: "2px solid", margin: "4%"}}></div>
				</div>

				<TextContainer>
					<h3 id="teacher-training">Teacher Training</h3>
					<br/>
					<p>
					Today we stand at the threshold of education, but do not find entrance. The children are in schools with 95% of them in government schools and getting little in terms of even literacy and numeracy as can be seen from the report on the tests conducted by us. It is very doubtful whether we can make a major change in the govt’s attitude to schooling as there is a lot of resistance from the teachers. The only answer then is to take on this task ourselves to the best of our ability. This is the only way we are able to see a some critical change taking place in the lives of these children in the immediate future. Therefore improving the quality of education will be the keystone of our intervention.
					</p>
					<br/>
					<p>
					We are aware that in the final analysis quality in education will depend upon the extent to which the community is willing to exercise its authority. But this authority must also be tempered with knowledge. We have there decided on two approaches – one, through community empowerment and secondly, an institutional approach. These are not exclusive approaches as the institutional approach will be through the community and the community’s empowerment will be through the institutional inputs that are built in.
					</p> 
				</TextContainer>
				<ProgramDonateContainer>
					<ButtonContainer style={{flexDirection: "column"}}>
						<Links style={{width: "40%", margin: "1%"}} to="/programs/education-program/skills-upgradation">
						Skills Upgradation Training Jan'15 to Dec'15
						</Links>
						<Links style={{width: "40%", margin: "1%"}} to="/programs/education-program/teacher-training-2014">
						Teacher Training Program 2014
						</Links>
						<Links style={{width: "40%", margin: "1%"}} to="/programs/education-program/teacher-training-2012">
						Teacher Training 2012
						</Links>
					</ButtonContainer>
				</ProgramDonateContainer>
				<br/>
				<p style={{fontStyle: "italic", padding: "5%"}}>
				‘When I came here I wanted to learn about teaching, but it seems that I am learning more about myself and my community. Doing a Teacher training course has equipped me with leadership skills and now in the village, the same people who earlier saw me only as a child now recognize me as a leader and come  to me for any of their problems.’
				</p>
				<br/>

				<div style={{border: "2px solid", margin: "4%"}}></div>

				<TextContainer>
					<h3 id="sarva-shiksa-abhiyan">Sarva Shiksha Abhiyan</h3>
					<br/>
					<p>
					A residential school for drop-out children – with the Sarva Shiksha Abhiyan (SSA) to address the problem of a large number of drop-outs in the age group of 6-14 years. The trust along with the support from SSA runs a residential school upto 8th class.
					</p>
					<br/>
					<p>
					Government records showed that about 120 children had dropped out of school between standard II and VIII. It was shocking to note that of these 110 children were from adivasi community.
					</p>
					<br/>
				</TextContainer>
					<img src={Sarva} alt="" style={{width: "800px"}}/>
				<TextContainer>
					<p>
					The residential school till class VIII has 100 children who come from a radius of about 40 kilometer from Gudalur and Pandalur taluk. Although SSA funds all the cost to run the school, many other expenses had to be borne by the trust.
					</p>
					<br/>
				</TextContainer>

				<div style={{border: "2px solid", margin: "4%"}}></div>

				<TextContainer>
					<h3 id="adivasi-foundation-course">Adivasi Foundation Course</h3>
					<br/>
					<p>
					Leapfrogging our teens – Enabling aboriginal youth to learn to imagine creatively, reason systematically and learn continuously, to confidently interact with the outside world and possibly become anchors in their community by exposing them to various skills and knowledge while staying rooted in their values..
					</p>
				</TextContainer>
				<br/>
				<iframe width="951" height="384" src="https://www.youtube.com/embed/SqpthXadHKE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<br/>

				<div style={{border: "2px solid", margin: "4%"}}></div>

				<TextContainer>
					<h3 id="niosc">National Institute of Open Schooling Centre</h3>
					<br/>
					<p>
					Vidyodaya school has been accredited as a Study Centre by the National Institute of Open Schooling under the Open Basic Scheme. This allows children to appear at the class 3 – A level, Class 5 – B level, Class 8 – C level exams conducted by the school.
					</p>
					<br/>
					<p>
					It gives the school tremendous flexibility in terms of teaching methods and curriculum. During the last three years, only the Nodal centre has been sending candidates for examination. However some students from far off villages who wish to complete schooling upto class 8th level, have also enrolled and completed their exams.
					</p>
					<br/>
				</TextContainer>				
					<img src={nioosc} style={{width: "800px"}}/>
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


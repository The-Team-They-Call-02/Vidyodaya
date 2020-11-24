import React from "react";
import { useHistory, Link } from "react-router-dom";

// styled components
import {
	Container,
	HeadingContainer,
	Heading,
	BackBtn,
} from "../../Programs.styles";
import { CampCardContainer } from "./CampCard.styles";
import { FaTrashAlt } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";

//DUMMY DATA
const camp = {
	campId: 4,
	title: "Children Camp – May 2018",
	subtitle: "To make future leaders",
	participants: 73,
	facilitators: 13,
	villagesCovered: 11,
	description: "",
	highlights: [
		{
			highlightTitle: "Alcoholism",
			description:
				"This is major problem that we face in the community: Here Vijay kumar shared his experience on struggles during alcoholic days and with great determination how did he come out of it.",
			imageURL:
				"http://www.vidyodaya.org/vbvt/wp-content/uploads/2018/07/camp-2018-pic5.jpg",
		},
		{
			highlightTitle: "Unity",
			description:
				"To solve any problem in the village we need to be united. Unity brings strength by Stan",
			imageURL: "",
		},
		{
			highlightTitle: "Questioning",
			description:
				"To fight injustice in the community we need to ask relevant questions to solve – by Ramdas",
			imageURL:
				"http://www.vidyodaya.org/vbvt/wp-content/uploads/2018/07/camp-2018-pic2.jpg",
		},
		{
			highlightTitle: "Herbal Medicine",
			description:
				"A workshop made us understanding the importance of traditional medicine and its uses.",
			imageURL:
				"http://www.vidyodaya.org/vbvt/wp-content/uploads/2018/07/camp-2018-pic6.jpg",
		},
		{
			highlightTitle: "Drama",
			description:
				"Art form which broke our fear to speak in public and made us confident.",
			imageURL: "",
		},
		{
			highlightTitle: "Planning",
			description: "Making sure all the activities goes smoothly",
			imageURL:
				"http://www.vidyodaya.org/vbvt/wp-content/uploads/2018/07/camp-2018-pic4.jpg",
		},
		{
			highlightTitle: "Games",
			description:
				"Lots of fun activities which brought everyone together",
			imageURL:
				"http://www.vidyodaya.org/vbvt/wp-content/uploads/2018/07/camp-2018-pic1.jpg",
		},
		{
			highlightTitle: "Food",
			description: "To add to the flavor to the camp",
			imageURL:
				"http://www.vidyodaya.org/vbvt/wp-content/uploads/2018/07/camp-2018-pic7.jpg",
		},
	],
	feedback: [
		{
			testimonial:
				"I have always been afraid to talk in public and after successful drama I am very confident",
			source: "Kamalakshi, participant",
		},
		{
			testimonial: "All the sessions went effortlessly. Great team work ",
			source: "Intern from Banglore",
		},
		{
			testimonial:
				"I never thought I have loud voice to run sessions for so many kids.I am happy with myself. I am looking forward to next camp",
			source: "Parvathi, Facilitator",
		},
	],
};

const CampCard = (props) => {
	const history = useHistory();
	// const { camp } = props;
	console.log("camp from campcard", camp);

	const goBack = () => {
		history.push("/programs/children-camps");
	};
	return (
		<Container>
			<HeadingContainer>
				<Heading> {camp.title} </Heading>
				<BackBtn onClick={goBack}>Back</BackBtn>
			</HeadingContainer>

			<CampCardContainer>
				{localStorage.getItem("token") ? (
					<div>
						<Link to="/programs/children-camps/edit">
							<BsPencilSquare size="24px" /> Edit
						</Link>
						{/* Still need to hook up the delete */}
						<div onClick="functionToDelete">
							<FaTrashAlt size="24px" /> Delete
						</div>
					</div>
				) : null}
				<div className="camp-card-inner-container">
					{camp.title ? (
						<h3 className="main-title"> {camp.title} </h3>
					) : null}
					{camp.subtitle ? (
						<h4 className="subtitle"> "{camp.subtitle}" </h4>
					) : null}
					{camp.participants === 0 ? (
						<h4 className="participants">
							Number of Children Participants:{" "}
							<span className="count"> {camp.participants} </span>
						</h4>
					) : null}
					{camp.villagesCovered === 0 ? (
						<h4 className="village-covered">
							{" "}
							Village Covered:{" "}
							<span className="count">
								{" "}
								{camp.villagesCovered}{" "}
							</span>
						</h4>
					) : null}
					{camp.description ? (
						<p className=" main-description">
							{" "}
							{camp.description}{" "}
						</p>
					) : null}
					<br />
					{camp.highlights ? (
						<div className="camp-card-highlights-container">
							Highlights
							{camp.highlights.map((hl) => {
								console.log("hl in cards", hl);
								return (
									<div className="camp-card-highlights-inner-div">
										{hl.highlightTitle ? (
											<h4 className="title">
												{" "}
												∎ {hl.highlightTitle}
											</h4>
										) : null}
										{hl.description ? (
											<p className="description">
												{" "}
												{hl.description}{" "}
											</p>
										) : null}
										{hl.imageURL ? (
											<img
												src={hl.imageURL}
												alt={
													hl.highlightTitle
														? hl.highlightTitle
														: null
												}
											/>
										) : null}
									</div>
								);
							})}
						</div>
					) : null}
					{camp.feedback ? (
						<div className="camp-card-feedback-container">
							Feedback
							{camp.feedback.map((fb) => {
								return fb.testimonial ? (
									<p className="testimonial">
										"{fb.testimonial}"{" "}
										<span className="source">
											{" "}
											-{fb.source}{" "}
										</span>
									</p>
								) : null;
							})}
						</div>
					) : null}
				</div>
			</CampCardContainer>
		</Container>
	);
};

export default CampCard;

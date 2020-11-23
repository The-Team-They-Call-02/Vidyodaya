import styled from "styled-components";
import { Link } from "react-router-dom";
import { colorObj } from "../../../Styles/GlobalStyles";
import tribalImage from "../../../Assets/Programs/tribalProgramsPage.svg";

export const MainContainer = styled.div`
	padding: 150px 0 100px 0;
	background-image: url(${tribalImage});
`;


export const Heading = styled.h2`
	font-size: 6.4rem;
	font-family: "Roboto", sans-serif;
	color: ${colorObj.dark};
	font-weight: 700;
`;

export const Container = styled.div`
	width: 80%;
	margin: 0 auto;
	text-align: center;
	height: 100%;
`;

export const TextContainer = styled.div`
text-align: left;
padding: 0 5%;
`;

export const ButtonContainer = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
`;

export const HeadingContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	height: 150px;
`;

export const AddBtn = styled.div`
	position: fixed;
	right: 40px;
	bottom: 40px;
	display: ${localStorage.getItem("token") ? "flex" : "none"};
	justify-content: center;
	align-items: center;
	background-color: ${colorObj.green};
	color: #fff;
	font-size: 4.3rem;
	width: 6.9rem;
	height: 6.9rem;
	border-radius: 2rem;
	z-index: 100;
`;

export const ViewDashboard = styled.button`
	display: ${localStorage.getItem("token") ? "inline" : "none"};
	border: 2px solid #00703a;
	background: rgba(255, 255, 255, 0.1);
	position: absolute;
	top: 50%;
	right: 0;
	transform: translateY(-50%);
	padding: 10px;
	border-radius: 10px;
	text-transform: uppercase;
	font-weight: 900;
	color: #00703a;
	width: 20rem;
	height: 5rem;
`;

export const BackBtn = styled.div`
	position: absolute;
	bottom: 10px;
	color: ${colorObj.dark};
	left: 10px;
	font-weight: 900;
	font-size: 1.5rem;
	cursor: pointer;

	&:before {
		content: "\u00AB";
		font-size: 2rem;
		color: black;
		font-weight: 900;
		margin-right: 3px;
	}
`;

export const ProgramDonateContainer = styled.div`
	padding: 5.6rem 0 0 0;
	h5.program-donations-text {
		font-size: 3.6rem;
	}
	button.program-donations-btn {
		font-size: 4.8rem;
		color: #fff;
		width: 32.9rem;
		height: 8.3rem;
		border-radius: 20px;
		margin: 3rem 0 0 0;
	}
`;

export const Links = styled(Link)`
  background: #fff;
  border: 5px solid ${colorObj.green};
  border-radius: 20px;
  width: 20%;
  height: 75px;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colorObj.dark};
`;
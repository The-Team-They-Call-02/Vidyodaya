import React from "react";
import { Link } from "react-router-dom";
import {
	BannerGreen,
	BannerImg,
	HeroText,
	GreenHeader,
	Spacer,
	GreenBkg,
	WhiteBkg,
	VerticalLine,
} from "../../Styles/HomeStyle";
import { colorObj, CenteredDiv } from "../../Styles/GlobalStyles";
import arrow from "../../Assets/Home/arrow.svg";
import child from "../../Assets/Home/child.svg";
import impact1 from "../../Assets/Home/educationSupport.png";
import impact2 from "../../Assets/Home/supportteacher.png";
import impact3 from "../../Assets/Home/warmclothes.png";
import impact4 from "../../Assets/Home/3dayex.png";
import impact5 from "../../Assets/Home/feast.png";
import impact6 from "../../Assets/Home/notebooks.png";
import impact7 from "../../Assets/Home/scholarship.png";
import homeBG from "../../Assets/Home/homeBG.svg";
import photo1 from "../../Assets/Home/photo1.jpg";
import photo2 from "../../Assets/Home/photo2.jpg";
import photo3 from "../../Assets/Home/photo3.jpg";
import photo4 from "../../Assets/Home/photo4.jpg";

import styled from "styled-components";

const HomePage = styled.div`
	height: 100%;
	width: 100vw;
	overflow-x: hidden;
	div.background-image {
		position: absolute;
		height: 100%;
		width: 100%;
		z-index: -1;
		top: 0;
		left: 0;
		background-image: url(${homeBG});
		background-repeat: no-repeat;
		overflow: hidden;
		margin-top: 450px;
	}
	div.hero-section {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: calc(100vh - 150px);
		margin-top: 150px;
		padding-right: 4%;
		background-color: #c4c4c4;
		color: ${colorObj.light};
		img.child-image {
			display: flex;
			justify-self: flex-start;
			height: 100%;
		}
		img.arrow {
			position: relative;
			width: 426px;
			height: 267px;
			left: -15vh;
			top: 14.4478vh;
			width: 400px;
		}
		div.hero-donate-section {
			position: relative;
			left: -20vh;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
	div.section1 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		width: 63.229vw;
		margin: 0 auto;
		z-index: -3;
		p.green-highlight-text {
			display: flex;
			background-color: ${colorObj.green};
		}
		p.mission-highlight {
			font-size: 2.4rem;
			font-weight: 700;
			text-transform: uppercase;
		}
	}
	div.section2 {
		display: flex;
		justify-content: center;
		align-content: center;
		position: relative;
		background-color: ${colorObj.green};
		z-index: -6;
		img {
			z-index: -3;
			width: 500px;
			height: 400px;
		}
	}
	button.hero-btn-donate {
		font-size: 4.8rem;
		color: #fff;
		width: 32.9rem;
		height: 8.3rem;
		border-radius: 20px;
		margin: 3rem 0 0 0;
		cursor: pointer;
		&:focus {
			border: unset;
			outline: unset;
		}
	}
`;

const Home = () => {
	return (
		<HomePage>
			<div className="background-image"></div>
			<div className="hero-section">
				<img src={child} alt="adivasi child" className="child-image" />
				<img src={arrow} alt="" className="arrow" />
				<div className="hero-donate-section">
					<HeroText>
						Bring <br />a <br />
						change!
					</HeroText>
					<a
						href="https://www.payumoney.com/paybypayumoney/#/9F4C7B2FCB7AA9833CAD8D3FDEC46DD7"
						target="_blank"
						rel="noreferrer"
					>
						<button
							style={{ color: "#FFFFFF" }}
							className="hero-btn-donate"
						>
							Donate
						</button>
					</a>
				</div>
			</div>
			<div className="section1">
				<Spacer />
				<GreenHeader>Viswa Bharati Vidyodaya Trust</GreenHeader>
				<Spacer />
				<h2>EDUCATING ADIVASI CHILDREN SINCE 1993</h2>
				<Spacer />
				<p className="green-highlight-text">
					Vidyodaya’s mission is to improve the quality of education
					received by underprivileged children in adivasi
				</p>
				<p className="green-highlight-text">
					communities and to establish a culturally appropriate
					learning system with active participation of the community.
				</p>
				<p className="green-highlight-text">We want to ensure that:</p>
				<Spacer />
				<p className="mission-highlight">
					Every adivasi child completes schooling <br />
					Every child gets a good education <br />
					Every child can pursue learning (not only schooling) up to
					whatever level they desire the supportive and cultural
					environment for this is facilitated
				</p>
				<Spacer />
			</div>

			<div className="section2">
				<img src={photo1} alt="child smile" className="photo1" />
				<img src={photo2} alt="teach" className="photo2" />
				<img src={photo3} alt="colab" className="photo3" />
				<img src={photo4} alt="amaze" className="photo4" />
			</div>

			<BannerImg>
				<GreenBkg>
					<Link to="/get-involved">
						<h1>Get Involved</h1>
					</Link>
				</GreenBkg>
				<WhiteBkg style={{ padding: "4% 2%", margin: "0 10%" }}>
					<CenteredDiv style={{ marginLeft: "2%" }}>
						<Link to="/get-involved/volunteer">
							<h2>Volunteer</h2>
						</Link>
						<Spacer />
						<p>
							Anyone can volunteer! As long as you love working
							with children. Vidyodaya provides a unique
							opportunity for volunteers to be involved with our
							work here. Join us for internship, research, or
							volunteer your talents!
						</p>
					</CenteredDiv>
					<VerticalLine></VerticalLine>
					<CenteredDiv style={{ margin: "0 7%" }}>
						<Link to="/get-involved/donations">
							<h2>Donate</h2>
						</Link>
						<Spacer />
						<p>
							Your support keeps us going! Whether you like to
							support a child education, support a teacher, or
							just to donate clothes, it helps us help those in
							need.
						</p>
					</CenteredDiv>
				</WhiteBkg>
			</BannerImg>

			<CenteredDiv>
				<GreenBkg>
					<a href="" target="_blank">
						<h1>Your Impact</h1>
					</a>
				</GreenBkg>
				<Spacer />
				<img src={impact1} alt="" />
				<img src={impact2} alt="" />
				<img src={impact3} alt="" />
				<img src={impact4} alt="" />
				<img src={impact5} alt="" />
				<img src={impact6} alt="" />
				<img src={impact7} alt="" />
				<Spacer />
			</CenteredDiv>
			<CenteredDiv>
				<GreenBkg>
					<a href="" target="_blank">
						<h1>Updates</h1>
					</a>
				</GreenBkg>
				{/* <p style={{backgroundColor: "gray", height: "500px", width: "100%"}}>Map new posts here</p> */}
			</CenteredDiv>
		</HomePage>
	);
};

export default Home;

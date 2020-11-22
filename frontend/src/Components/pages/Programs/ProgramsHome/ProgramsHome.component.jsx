import React, { useState } from "react";
import { Link } from "react-router-dom";

//STYLING
import { ProgramsPageContainer } from "./ProgramsHome.styles";

const ProgramsHome = () => {
	return (
		<ProgramsPageContainer>
			<div className="programs-page-inner-div">
				<h1 className="programs-page-h1"> OUR PROGRAMS </h1>
				<div className="programs-page-cards-container">
					<Link
						to="/programs/ultimate-frisbee"
						className="programs-page-frisbee card"
					>
						{" "}
						<h2>Ultimate Frisbee Program</h2> <br />
						<img
							src="https://one-all.in/wp-content/uploads/2017/03/ONE-ALL-Logo-transparent-background.png"
							alt="One All logo"
						/>{" "}
					</Link>
					<Link
						to="/programs/children-camps"
						className="programs-page-children-camps card"
					>
						{" "}
						<h2> Children Camps </h2>{" "}
					</Link>
					<Link
						to="/programs/education-program"
						className="programs-page-education card"
					>
						{" "}
						<h2> Education Programs </h2>{" "}
					</Link>
					<Link
						to="/programs/balwadis"
						className="programs-page-balwadis card"
					>
						{" "}
						<h2> Balwadis </h2>{" "}
						<span>
							{" "}
							(Integrated Child Development Services Centres){" "}
						</span>
					</Link>
					<Link
						to="/programs/culture"
						className="programs-page-Culture card"
					>
						{" "}
						<h2> Culture </h2>{" "}
					</Link>
				</div>
			</div>
		</ProgramsPageContainer>
	);
};

export default ProgramsHome;

import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import ProgramsHome from "./ProgramsHome/ProgramsHome.component";
import FrisbeeProgram from "./FrisbeeProgram/FrisbeeProgram.component";
import ChildrenCamps from "./ChildrenCamps/ChildrenCamps.component";
import EducationProgram from "./EducationProgram/EducationProgram.component";
import Balwadis from "./Balwadis/Balwadis.component";
import Culture from "./Culture/Culture.componet";
import CampCard from "./ChildrenCamps/CampCard/CampCard.component";
import ChildrensBank from "./EducationProgram/Childrens_Bank/ChildrensBank.component";
import Scholarships from "./EducationProgram/Scholarships/Scholarships.component";
import StudyCenters from "./EducationProgram/Study_Centers/StudyCenters.component";

// styled-components
import { MainContainer } from "./Programs.styles";


const Programs = () => {
	return (
		<MainContainer>
			<Switch>
				<Route exact path="/programs/children-camps/:id" component={CampCard}/>
				<Route exact path="/programs/culture" component={Culture} />
				<Route exact path="/programs/balwadis" component={Balwadis} />
				<Route exact path="/programs/education-program" component={EducationProgram}/>
				<Route exact path="/programs/education-program/childrens-bank" component={ChildrensBank}/>
				<Route exact path="/programs/education-program/study-centers" component={StudyCenters}/>
				<Route exact path="/programs/education-program/scholarships" component={Scholarships}/>

				<Route exact path="/programs/children-camps" component={ChildrenCamps} />
				<Route exact path="/programs/ultimate-frisbee" component={FrisbeeProgram} />
				<Route exact path="/programs/" component={ProgramsHome} />
			</Switch>
		</MainContainer>
	);
};

export default Programs;

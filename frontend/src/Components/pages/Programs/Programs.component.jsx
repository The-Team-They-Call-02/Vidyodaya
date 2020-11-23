import React from "react";
import { Route, Switch } from "react-router-dom";


// components
import ProgramsHome from "./ProgramsHome/ProgramsHome.component";
import FrisbeeProgram from "./FrisbeeProgram/FrisbeeProgram.component";
import ChildrenCamps from "./ChildrenCamps/ChildrenCamps.component"
import EducationProgram from "./EducationProgram/EducationProgram.component";
import Balwadis from "./Balwadis/Balwadis.component";
import Culture from "./Culture/Culture.componet";


// styled-components
import { MainContainer } from "./Programs.styles";

const Programs = () => {
  return (
    <MainContainer>
      <Switch>
        <Route path="/programs/" component={ProgramsHome} />
        <Route path="/programs/frisbee-program" component={FrisbeeProgram}/>
        <Route path="/programs/children-camps" component={ChildrenCamps} />
        <Route path="/programs/education-program" component={EducationProgram} />
        <Route path="/programs/balwadis" component={Balwadis} />
        <Route path="/programs/culture" component={Culture} />
      </Switch>
    </MainContainer>
  );
};

export default Programs;

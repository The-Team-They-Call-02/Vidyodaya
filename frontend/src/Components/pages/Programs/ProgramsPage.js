import React, {useState} from 'react';


//COMPONENTS
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';

//STYLING
import styled from 'styled-components';


const ProgramsPageContainer = styled.div`
    height: 100%;
    background-color: #F8F7F7;
    .programs-page-inner-div {
        margin-top: 150px;
        display: flex;
        .card {
            width: 714px;
            height: 545px;
            border-radius: 20px;
            border: 5px solid #77CC6D;
        }
    }

`;



const ProgramsPage = () => {

    return(
        <ProgramsPageContainer>
            <Navbar />
            <div className="programs-page-inner-div">
                <div className="programs-page-frisbee card"> Ultimate Frisbee Program </div>
                <div className="programs-page-children-camps card"> Children Camps </div>
                <div className="programs-page-education card"> Education Programs </div>
                <div className="programs-page-balwadis card"> Balwadis <span> (Integrated Child Development Services Centres) </span></div>
                <div className="programs-page-Culture card"> Culture </div>
            </div>
            <Footer />
        </ProgramsPageContainer>
    )
}

export default ProgramsPage;
import React, {useState} from 'react';
import { Link } from "react-router-dom";

//COMPONENTS
import Navbar from '../../../common/Navbar';
import Footer from '../../../common/Footer';

//STYLING
import styled from 'styled-components';
import { colorObj } from '../../../../Styles/GlobalStyles';


const ProgramsPageContainer = styled.div`
display: flex;
flex-direction: column;
    height: 100%;
    .programs-page-inner-div {
        background-color: #F8F7F7;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 150px;
        .programs-page-h1 {
            margin: 50px auto;
        }
        .programs-page-cards-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 1533px;
            .card {
                background-color: #ffffff;
                box-shadow: 0px 1px 10px 0px ${colorObj.dark};
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                text-align: center;
                width: 714px;
                height: 545px;
                border-radius: 20px;
                border: 5px solid #77CC6D;
                margin-bottom: 100px;
                &:last-child {
                    width: 1533px;
                }
            }
            .programs-page-frisbee {

            }
        }
    }

`;



const ProgramsHome = () => {

    return(
        <ProgramsPageContainer>
            <div className="programs-page-inner-div">
                <h1 className="programs-page-h1"> OUR PROGRAMS </h1>
                <div className="programs-page-cards-container">
                    <Link to="./programs/ultimate-frisbee" className="programs-page-frisbee card"> <h2>Ultimate Frisbee Program</h2> </Link>
                    <Link className="programs-page-children-camps card"> <h2> Children Camps </h2> </Link>
                    <Link className="programs-page-education card"> <h2> Education Programs </h2> </Link>
                    <Link className="programs-page-balwadis card"> <h2> Balwadis </h2> <span> (Integrated Child Development Services Centres) </span></Link>
                    <Link className="programs-page-Culture card"> <h2> Culture </h2> </Link>
                </div>
            </div>
        </ProgramsPageContainer>
    )
}

export default ProgramsHome;
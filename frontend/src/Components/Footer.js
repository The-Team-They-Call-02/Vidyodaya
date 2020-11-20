import React from 'react';
import { FooterStyle, H2Styled, PStyled, Links, Social } from "../Styles/FooterStyle";
import logo from "../Assets/Home/logo.png";

const Footer = () => {

    return(
        <FooterStyle>
        <Links>
            <div style={{padding: "2%"}}>
            <H2Styled>About Us</H2Styled>
            <PStyled>History</PStyled>
            <PStyled>Founder Trustees</PStyled>
            <PStyled>Managing Committees</PStyled>
            <PStyled>Charities Aid Foundation</PStyled>
            <PStyled>Changemaker School</PStyled>
            <br/>
            <H2Styled>Reports</H2Styled>
            <PStyled>Annual Reports</PStyled>
            <PStyled>Financial Reports</PStyled>
            <PStyled>Other Reports</PStyled>
            </div>
            <div style={{padding: "2%"}}>
            <H2Styled>Programs</H2Styled>
            <PStyled>Ultimate Frisbee Program</PStyled>
            <PStyled>Children Camps</PStyled>
            <PStyled>Education Programs</PStyled>
            <PStyled>Higher Education</PStyled>
            <PStyled>Quality Education</PStyled>
            <PStyled>Study Centres</PStyled>
            <PStyled>Model School</PStyled>
            <PStyled>National Institute of Open Schooling Centre</PStyled>
            <PStyled>Sarva Shiksha Abhiyan</PStyled>
            <PStyled>Adivasi Foundation Course</PStyled>
            <PStyled>Balwadis (ICDS Centres)</PStyled>
            <PStyled>Culture</PStyled>
            <PStyled>Cultural Curriculum</PStyled>
            <PStyled>Culture Centre</PStyled>
            </div>
            <div style={{padding: "2%"}}>
            <H2Styled>Get Involved</H2Styled>
            <PStyled>Volunteer</PStyled>
            <PStyled>Internship</PStyled>
            <PStyled>Research</PStyled>
            <PStyled>Donate</PStyled>
            <br/>
            <H2Styled>Articles & Blogs</H2Styled>
            <PStyled>Blog</PStyled>
            <PStyled>Articles</PStyled>
            <br/>
            <H2Styled>Contact</H2Styled>
            <H2Styled>Location</H2Styled>
            </div>
        </Links>
        <Social>
            <img src={logo} alt="" style={{height: "300px"}}/>
            <p style={{color: "white"}}>social icons</p>
        </Social>
        </FooterStyle>
    )
}

export default Footer;
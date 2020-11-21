import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FooterStyle, H2Styled, PStyled, Links, Social } from "../../Styles/FooterStyle";
import logo from "../../Assets/Home/logo.png";

const Footer = () => {

    return(
        <FooterStyle>
        <Links>
            <div style={{padding: "2%"}}>
            <NavLink to="/about"><H2Styled>About Us</H2Styled></NavLink>
            <HashLink to="/about#history"><PStyled>History</PStyled></HashLink>
            <HashLink to="/about#founder-trustees"><PStyled>Founder Trustees</PStyled></HashLink>
            <HashLink to="/about#managing-committees"><PStyled>Managing Committees</PStyled></HashLink>
            <HashLink to="/about#charities-aid-foundation"><PStyled>Charities Aid Foundation</PStyled></HashLink>
            <HashLink to="/about#changemaker-school"><PStyled>Changemaker School</PStyled></HashLink>
            <br/>
            <NavLink to="/reports"><H2Styled>Reports</H2Styled></NavLink>
            <HashLink to="/reports#annual-reports"><PStyled>Annual Reports</PStyled></HashLink>
            <HashLink to="/reports#financial-reports"><PStyled>Financial Reports</PStyled></HashLink>
            <HashLink to="/reports#other-reports"><PStyled>Other Reports</PStyled></HashLink>
            </div>
            <div style={{padding: "2%"}}>
            <NavLink to="/programs"><H2Styled>Programs</H2Styled></NavLink>
            <NavLink to="/programs/frisbee"><PStyled>Ultimate Frisbee Program</PStyled></NavLink>
            <NavLink to="/programs/childrenCamps"><PStyled>Children Camps</PStyled></NavLink>
            <NavLink to="/programs/educationPrograms"><PStyled>Education Programs</PStyled></NavLink>
            <HashLink to="/programs/educationPrograms#higher-education"><PStyled>Higher Education</PStyled></HashLink>
            <HashLink to="/programs/educationPrograms#quality-education"><PStyled>Quality Education</PStyled></HashLink>
            <HashLink to="/programs#study-centres"><PStyled>Study Centres</PStyled></HashLink>
            <HashLink to="/programs#model-school"><PStyled>Model School</PStyled></HashLink>
            <HashLink to="/programs#niosc"><PStyled>National Institute of Open Schooling Centre</PStyled></HashLink>
            <HashLink to="/programs#sarva-shiksa-abhiyan"><PStyled>Sarva Shiksha Abhiyan</PStyled></HashLink>
            <HashLink to="/programs#adivasi-foundation-course"><PStyled>Adivasi Foundation Course</PStyled></HashLink>
            <NavLink to="/programs/balwadis"><PStyled>Balwadis (ICDS Centres)</PStyled></NavLink>
            <NavLink to="/programs/culture"><PStyled>Culture</PStyled></NavLink>
            <HashLink to="/programs#cultural-curriculum"><PStyled>Cultural Curriculum</PStyled></HashLink>
            <HashLink to="/programs#culture-centre"><PStyled>Culture Centre</PStyled></HashLink>
            </div>
            <div style={{padding: "2%"}}>
            <NavLink to="/get-involved/"><H2Styled>Get Involved</H2Styled></NavLink>
            <NavLink to="/get-involved/volunteers"><PStyled>Volunteer</PStyled></NavLink>
            <NavLink to="/get-involved/volunteers"><PStyled>Internship</PStyled></NavLink>
            <NavLink to="/get-involved/volunteers"><PStyled>Research</PStyled></NavLink>
            <NavLink to="/get-involved/donations"><PStyled>Donate</PStyled></NavLink>
            <br/>
            <H2Styled>Articles & Blogs</H2Styled>
            <NavLink to="/blog"><PStyled>Blog</PStyled></NavLink>
            <NavLink to="/articles"><PStyled>Articles</PStyled></NavLink>
            <br/>
            <NavLink to="/contact"><H2Styled>Contact</H2Styled></NavLink>
            <NavLink to="/location"><H2Styled>Location</H2Styled></NavLink>
            </div>
        </Links>
        <Social>
            <img src={logo} alt="" style={{height: "300px"}}/>
            <p style={{color: "white", fontSize: "2rem"}}>social icons</p>
        </Social>
        </FooterStyle>
    )
}

export default Footer;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FooterStyle, H2Styled, PStyled, Links, Social } from "../../Styles/FooterStyle";
import logo from "../../Assets/Home/logo.png";

const Footer = () => {

    return(
        <FooterStyle>
        <Links>
            <div style={{padding: "2%"}}>
            <NavLink to="/about"><H2Styled>About Us</H2Styled></NavLink>
            <NavLink to="/about#history"><PStyled>History</PStyled></NavLink>
            <NavLink to="/about#founder-trustees"><PStyled>Founder Trustees</PStyled></NavLink>
            <NavLink to="/about#managing-committees"><PStyled>Managing Committees</PStyled></NavLink>
            <NavLink to="/about#charities-aid-foundation"><PStyled>Charities Aid Foundation</PStyled></NavLink>
            <NavLink to="/about#changemaker-school"><PStyled>Changemaker School</PStyled></NavLink>
            <br/>
            <NavLink to="/reports"><H2Styled>Reports</H2Styled></NavLink>
            <NavLink to="/reports#annual-reports"><PStyled>Annual Reports</PStyled></NavLink>
            <NavLink to="/reports#financial-reports"><PStyled>Financial Reports</PStyled></NavLink>
            <NavLink to="/reports#other-reports"><PStyled>Other Reports</PStyled></NavLink>
            </div>
            <div style={{padding: "2%"}}>
            <NavLink to="/programs"><H2Styled>Programs</H2Styled></NavLink>
            <NavLink to="/programs/frisbee"><PStyled>Ultimate Frisbee Program</PStyled></NavLink>
            <NavLink to="/programs/childrenCamps"><PStyled>Children Camps</PStyled></NavLink>
            <NavLink to="/programs/educationPrograms"><PStyled>Education Programs</PStyled></NavLink>
            <NavLink to="/programs/educationPrograms#higher-education"><PStyled>Higher Education</PStyled></NavLink>
            <NavLink to="/programs/educationPrograms#quality-education"><PStyled>Quality Education</PStyled></NavLink>
            <NavLink to="/programs#study-centres"><PStyled>Study Centres</PStyled></NavLink>
            <NavLink to="/programs#model-school"><PStyled>Model School</PStyled></NavLink>
            <NavLink to="/programs#niosc"><PStyled>National Institute of Open Schooling Centre</PStyled></NavLink>
            <NavLink to="/programs#sarva-shiksa-abhiyan"><PStyled>Sarva Shiksha Abhiyan</PStyled></NavLink>
            <NavLink to="/programs#adivasi-foundation-course"><PStyled>Adivasi Foundation Course</PStyled></NavLink>
            <NavLink to="/programs/balwadis"><PStyled>Balwadis (ICDS Centres)</PStyled></NavLink>
            <NavLink to="/programs/culture"><PStyled>Culture</PStyled></NavLink>
            <NavLink to="/programs#cultural-curriculum"><PStyled>Cultural Curriculum</PStyled></NavLink>
            <NavLink to="/programs#culture-centre"><PStyled>Culture Centre</PStyled></NavLink>
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
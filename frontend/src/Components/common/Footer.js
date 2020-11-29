import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../Assets/Home/logo.png";

// styled-components
import {
  FooterStyle,
  H2Styled,
  PStyled,
  Links,
  Social,
  Icons,
} from "../../Styles/FooterStyle";

// react-icons
import { FaYoutubeSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -300;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <FooterStyle>
      <Links>
        <div style={{ padding: "2%" }}>
          <HashLink
            smooth
            to="/about#history"
            scroll={(el) => scrollWithOffset(el)}
          >
            <H2Styled>About Us</H2Styled>
          </HashLink>
          <HashLink
            smooth
            to="/about#history"
            scroll={(el) => scrollWithOffset(el)}
          >
            <PStyled>History</PStyled>
          </HashLink>
          <HashLink
            smooth
            to="/about/founder-trustees"
            scroll={(el) => scrollWithOffset(el)}
          >
            <PStyled>Founder Trustees</PStyled>
          </HashLink>
          <HashLink
            smooth
            to="/about/managing-committee"
            scroll={(el) => scrollWithOffset(el)}
          >
            <PStyled>Managing Committees</PStyled>
          </HashLink>
          <HashLink
            smooth
            to="/about#charities-aid-foundation"
            scroll={(el) => scrollWithOffset(el)}
          >
            <PStyled>Charities Aid Foundation</PStyled>
          </HashLink>
          <HashLink
            smooth
            to="/about#changemaker-school"
            scroll={(el) => scrollWithOffset(el)}
          >
            <PStyled>Changemaker School</PStyled>
          </HashLink>
          <br />
          <HashLink smooth to="/reports" scroll={(el) => scrollWithOffset(el)}>
            <H2Styled>Reports</H2Styled>
          </HashLink>
          <HashLink
            smooth
            to="/reports/annual"
            scroll={(el) => scrollWithOffset(el)}
          >
            <PStyled>Annual Reports</PStyled>
          </HashLink>
          <HashLink
            smooth
            to="/reports/financial"
            scroll={(el) => scrollWithOffset(el)}
          >
            <PStyled>Financial Reports</PStyled>
          </HashLink>
          <HashLink
            smooth
            to="/reports/other"
            scroll={(el) => scrollWithOffset(el)}
          >
            <PStyled>Other Reports</PStyled>
          </HashLink>
        </div>
        <div style={{ padding: "2%" }}>
          <NavLink to="/programs">
            <H2Styled>Programs</H2Styled>
          </NavLink>
          <NavLink to="/programs/frisbee-program">
            <PStyled>Ultimate Frisbee Program</PStyled>
          </NavLink>
          <NavLink to="/programs/children-camps">
            <PStyled>Children Camps</PStyled>
          </NavLink>
          <NavLink to="/programs/education-program">
            <PStyled>Education Programs</PStyled>
          </NavLink>
          {/* <HashLink smooth to="/programs/educationPrograms#higher-education" scroll={el => scrollWithOffset(el)}><PStyled>Higher Education</PStyled></HashLink> */}
          {/* <HashLink smooth to="/programs/educationPrograms#quality-education" scroll={el => scrollWithOffset(el)}><PStyled>Quality Education</PStyled></HashLink> */}
          {/* <HashLink smooth to="/programs#study-centres" scroll={el => scrollWithOffset(el)}><PStyled>Study Centres</PStyled></HashLink> */}
          {/* <HashLink smooth to="/programs#model-school" scroll={el => scrollWithOffset(el)}><PStyled>Model School</PStyled></HashLink> */}
          {/* <HashLink smooth to="/programs#niosc" scroll={el => scrollWithOffset(el)}><PStyled>National Institute of Open Schooling Centre</PStyled></HashLink> */}
          {/* <HashLink smooth to="/programs#sarva-shiksa-abhiyan" scroll={el => scrollWithOffset(el)}><PStyled>Sarva Shiksha Abhiyan</PStyled></HashLink> */}
          {/* <HashLink smooth to="/programs#adivasi-foundation-course" scroll={el => scrollWithOffset(el)}><PStyled>Adivasi Foundation Course</PStyled></HashLink> */}
          <NavLink to="/programs/balwadis">
            <PStyled>Balwadis (ICDS Centres)</PStyled>
          </NavLink>
          <NavLink to="/programs/culture">
            <PStyled>Culture</PStyled>
          </NavLink>
          {/* <HashLink smooth to="/programs#cultural-curriculum" scroll={el => scrollWithOffset(el)}><PStyled>Cultural Curriculum</PStyled></HashLink> */}
          {/* <HashLink smooth to="/programs#culture-centre" scroll={el => scrollWithOffset(el)}><PStyled>Culture Centre</PStyled></HashLink> */}
        </div>
        <div style={{ padding: "2%" }}>
          <NavLink to="/get-involved/">
            <H2Styled>Get Involved</H2Styled>
          </NavLink>
          <NavLink to="/get-involved/volunteers">
            <PStyled>Volunteer</PStyled>
          </NavLink>
          {/* <NavLink to="/get-involved/volunteers"><PStyled>Internship</PStyled></NavLink> */}
          {/* <NavLink to="/get-involved/volunteers"><PStyled>Research</PStyled></NavLink> */}
          <NavLink to="/get-involved/donations">
            <PStyled>Donate</PStyled>
          </NavLink>
          <br />
          <H2Styled>Articles</H2Styled>
          {/* <NavLink to="/blog"><PStyled>Blog</PStyled></NavLink> */}
          <NavLink to="/articles">
            <PStyled>Articles</PStyled>
          </NavLink>
          <br />
          <NavLink to="/contact">
            <H2Styled>Contact</H2Styled>
          </NavLink>
          {/* <NavLink to="/location"><H2Styled>Location</H2Styled></NavLink> */}
        </div>
      </Links>
      <Social>
        <img src={logo} alt="" style={{ height: "300px" }} />
        <Icons>
          <a
            href="https://www.facebook.com/VidyodayaGudalur"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare color="white" size="50px" />
          </a>
          <a
            href="https://www.youtube.com/user/VidyodayaGudalur"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutubeSquare color="white" size="50px" />
          </a>
        </Icons>
      </Social>
    </FooterStyle>
  );
};

export default Footer;

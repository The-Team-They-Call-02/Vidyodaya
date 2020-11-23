import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Home/logo.png";

// styled-components
import {
  NavbarStyle,
  NavText,
  SocialIconsContainer,
  SocialIcons,
} from "../../Styles/NavbarStyle";

// react-icons
import { FaYoutubeSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

// remember to put href="" attr in SocialIcons
const Navbar = () => {
  return (
    <NavbarStyle>
      <img src={logo} style={{ height: "150px" }} alt="" />
      <NavLink to="/">
        <NavText>Welcome</NavText>
      </NavLink>
      <NavLink to="/about">
        <NavText>About</NavText>
      </NavLink>
      <NavLink to="/programs">
        <NavText>Programs</NavText>
      </NavLink>
      <NavLink to="/get-involved">
        <NavText>Get Involved</NavText>
      </NavLink>
      <NavLink to="/articles">
        <NavText>Articles</NavText>
      </NavLink>
      <NavLink to="/reports">
        <NavText>Reports</NavText>
      </NavLink>
      <NavLink to="/contact">
        <NavText>Contact</NavText>
      </NavLink>
      <NavLink to="/login">
        <NavText>Login</NavText>
      </NavLink>
      <a
        href="https://www.payumoney.com/paybypayumoney/#/9F4C7B2FCB7AA9833CAD8D3FDEC46DD7"
        target="_blank"
        rel="noreferrer"
      >
        <button>Donate</button>
      </a>

      <SocialIconsContainer>
        <SocialIcons color="#3B5998" href="https://www.facebook.com/VidyodayaGudalur" target="_blank">
          <FaFacebookSquare  />
        </SocialIcons>
        <SocialIcons color="#b31217" href="https://www.youtube.com/user/VidyodayaGudalur" target="_blank">
          <FaYoutubeSquare />
        </SocialIcons>
      </SocialIconsContainer>
    </NavbarStyle>
  );
};

export default Navbar;

import React from 'react';
import { NavbarStyle, NavText } from "../../Styles/NavbarStyle";
import logo from "../../Assets/Home/logo.png";

const Navbar = () => {

    return(
        <NavbarStyle>
            <img src={logo} style={{height: "150px"}} alt=""/>
            <NavText>Welcome</NavText>
            <NavText>About</NavText>
            <NavText>Programs</NavText>
            <NavText>Get Involved</NavText>
            <NavText>Blog</NavText>
            <NavText>Articles</NavText>
            <NavText>Contact</NavText>
            <NavText>Login</NavText>
            <button>Donate</button>
        </NavbarStyle>
    )
}

export default Navbar;
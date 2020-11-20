import React from 'react';
import { BannerGray, BannerGreen, BannerImg, HeroText, GreenHeader, Spacer, GreenBkg, WhiteBkg, VerticalLine } from "../../Styles/HomeStyle";
import { CenteredDiv } from "../../Styles/GlobalStyles";
import arrow from "../../Assets/Home/arrow.png";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Home = () => {

    return(
        <div className="home-page">
            <Navbar />
            <BannerGray>
            <p>MISSING CHILD!!</p>
            <img src={arrow} alt="" style={{width: "400px"}}/>
                <CenteredDiv>
                    <HeroText>Bring <br/>a <br/>change!</HeroText>
                    <button style={{color: "#FFFFFF"}}>Donate</button>
                </CenteredDiv>
            </BannerGray>

            <CenteredDiv style={{padding: "0 25%", textAlign: "center"}}>
                <Spacer/>
                <GreenHeader>Viswa Bharati Vidyodaya Trust</GreenHeader>
                <Spacer/>
                <h2>EDUCATING ADIVASI CHILDREN SINCE 1993</h2>
                <Spacer/>
                <GreenBkg>
                <p>Vidyodaya’s mission is to improve the quality of education received by underprivileged children in adivasi communities and to establish a culturally appropriate learning system with active participation of the community. We want to ensure that</p></GreenBkg>
                <Spacer/>
                <p>Every adivasi child completes schooling <br/>
                Every child gets a good education <br/>
                Every child can pursue learning (not only schooling) up to whatever level they desire the supportive and cultural environment for this is facilitated</p>
                <Spacer/>
            </CenteredDiv>

            <BannerGreen>
                <Spacer/>
                <WhiteBkg>
                <h1>Volunteer</h1>
                </WhiteBkg>
                <Spacer/>
                <p>Your time and talent can make a real difference in people’s lives</p>
                <Spacer/>
                <button style={{backgroundColor: "#FFFFFF"}}>Sign Up</button>
                <Spacer/>
            </BannerGreen>

            <BannerImg>
                <GreenBkg>
                <h1>Get Involved</h1>
                </GreenBkg>
                <WhiteBkg style={{padding: "4% 2%", margin: "0 10%"}}>
                <CenteredDiv>
                    <h2>Volunteer</h2>
                    <Spacer/>
                    <p>Anyone can volunteer! As long as you love working with children. Vidyodaya provides a unique opportunity for volunteers to be involved with our work here. Join us for internship, research, or volunteer your talents!</p>
                </CenteredDiv>
                <VerticalLine></VerticalLine>
                <CenteredDiv>
                    <h2>Donate</h2>
                    <Spacer/>
                    <p>Your support keeps us going! Whether you like to support a child education, support a teacher, or just to donate clothes, it helps us help those in need.</p>
                </CenteredDiv>
                </WhiteBkg>
            </BannerImg>
            
            <CenteredDiv>
                <GreenBkg>
                    <h1>Your Impact</h1>
                </GreenBkg>
                <Spacer/>
                <p>Insert Images here</p>
                <Spacer/>
            </CenteredDiv>
            <CenteredDiv>
                <GreenBkg>
                    <h1>Updates</h1>
                </GreenBkg>
                <p style={{backgroundColor: "gray", height: "500px", width: "100%"}}>Map new posts here</p>
            </CenteredDiv>
            <Footer />
        </div>

    )
}

export default Home;
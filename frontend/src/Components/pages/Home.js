import React from 'react';
import { BannerGray, BannerGreen, BannerImg, HeroText, GreenHeader, Spacer, GreenBkg, WhiteBkg, VerticalLine } from "../../Styles/HomeStyle";
import { colorObj , CenteredDiv, BackgroundImageContainer } from "../../Styles/GlobalStyles";
import arrow from "../../Assets/Home/arrow.svg";
import child from "../../Assets/Home/child.svg";
import impact1 from "../../Assets/Home/educationSupport.png";
import impact2 from "../../Assets/Home/supportteacher.png";
import impact3 from "../../Assets/Home/warmclothes.png";
import impact4 from "../../Assets/Home/3dayex.png";
import impact5 from "../../Assets/Home/feast.png";
import impact6 from "../../Assets/Home/notebooks.png";
import impact7 from "../../Assets/Home/scholarship.png";

import styled from 'styled-components';

const HomePage = styled.div`
    p.green-highlight-text {
        background-color: ${colorObj.green};
    }
    button.hero-btn-donate {
        font-size: 4.8rem;
		color: #fff;
		width: 32.9rem;
		height: 8.3rem;
		border-radius: 20px;
		margin: 3rem 0 0 0;
    }
`;


const Home = () => {

    return(
        <HomePage>
            <BannerGray>
                <div style={{height: "100%", display: "flex", alignItems: "flex-end"}}>
                    <img src={child} alt="adivasi child"/>
                </div>
                <img src={arrow} alt="" style={{width: "400px"}}/>
                <CenteredDiv>
                    <HeroText>Bring <br/>a <br/>change!</HeroText>
                    <a href="https://www.payumoney.com/paybypayumoney/#/9F4C7B2FCB7AA9833CAD8D3FDEC46DD7" target="_blank" rel="noreferrer">
                        <button style={{color: "#FFFFFF"}} className="hero-btn-donate">Donate</button>
                    </a>
                </CenteredDiv>
            </BannerGray>
            <BackgroundImageContainer style={{marginTop: "40%", height: "100%"}}>
			</BackgroundImageContainer>
            <CenteredDiv style={{padding: "0 25%", textAlign: "center"}}>
                <Spacer/>
                <GreenHeader>Viswa Bharati Vidyodaya Trust</GreenHeader>
                <Spacer/>
                <h2>EDUCATING ADIVASI CHILDREN SINCE 1993</h2>
                <Spacer/>
                <p className="green-highlight-text">
                Vidyodaya’s mission is to improve the quality of education received by underprivileged children in adivasi
                 communities and to establish a culturally appropriate learning system with active participation of the community.
                 <br/>We want to ensure that
                </p>
                <Spacer/>
                <p>Every adivasi child completes schooling <br/>
                Every child gets a good education <br/>
                Every child can pursue learning (not only schooling) up to whatever level they desire the supportive and cultural environment for this is facilitated
                </p>
                <Spacer/>
            </CenteredDiv>

            {/* <BannerGreen>
                <Spacer/>
                <WhiteBkg>
                    <a href="" target="_blank" >
                        <h1>Volunteer</h1>
                    </a>
                </WhiteBkg>
                <Spacer/>
                <p>Your time and talent can make a real difference in people’s lives</p>
                <Spacer/>
                <a href="" target="_blank" >
                    <button style={{backgroundColor: "#FFFFFF"}}>Sign Up</button>
                </a>
                <Spacer/>
            </BannerGreen> */}

            <BannerImg>
                <GreenBkg>
                <a href="" target="_blank" >
                    <h1>Get Involved</h1>
                </a>
                </GreenBkg>
                <WhiteBkg style={{padding: "4% 2%", margin: "0 10%"}}>
                    <CenteredDiv style={{marginLeft: "2%"}}>
                    
                        <a href="" target="_blank" >
                            <h2>Volunteer</h2>
                        </a>
                        <Spacer/>
                        <p>Anyone can volunteer! As long as you love working with children. Vidyodaya provides a unique opportunity for volunteers to be involved with our work here. Join us for internship, research, or volunteer your talents!</p>
                    
                    </CenteredDiv>
                    <VerticalLine></VerticalLine>
                    <CenteredDiv style={{margin: "0 7%"}}>

                        <a href="" target="_blank" >
                            <h2>Donate</h2>
                        </a>
                        <Spacer/>
                        <p>Your support keeps us going! Whether you like to support a child education, support a teacher, or just to donate clothes, it helps us help those in need.</p>
                    
                    </CenteredDiv>
                </WhiteBkg>
            </BannerImg>
            
            <CenteredDiv>
                <GreenBkg>
                    <a href="" target="_blank" >
                        <h1>Your Impact</h1>
                    </a>
                </GreenBkg>
                <Spacer/>
                <img src={impact1} alt=""/>
                <img src={impact2} alt=""/>
                <img src={impact3} alt=""/>
                <img src={impact4} alt=""/>
                <img src={impact5} alt=""/>
                <img src={impact6} alt=""/>
                <img src={impact7} alt=""/>
                <Spacer/>
            </CenteredDiv>
            <CenteredDiv>
                <GreenBkg>
                    <a href="" target="_blank" >
                        <h1>Updates</h1>
                    </a>
                </GreenBkg>
                {/* <p style={{backgroundColor: "gray", height: "500px", width: "100%"}}>Map new posts here</p> */}
            </CenteredDiv>
        </HomePage>

    )
}

export default Home;
import React, {useState} from 'react';

import { Header, HistorySection } from "../../Styles/AboutStyle";
import { Card } from "../../Styles/PageStyle";
import img1 from "../../Assets/About/vidyodaya1.jpg";
import img2 from "../../Assets/About/VBVT-Charities-Aid-Foundation.jpg";
import img3 from "../../Assets/About/ashoka-changemaker-logo.png";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";


// ADD THESE LINKS
// /about#history
// /about#founder-trustees
// /about#managing-committees
// /about#charities-aid-foundation
// /about#changemaker-school

const About = () => {

    return(
        <div>
        <Navbar/>
        <Card style={{boxShadow: "none", padding: "0"}}>
        
        <HistorySection id="history">
            <Header>History</Header>
            <h2>Founded in 1993</h2>
            <p>
            The Viswa Bharati Vidyodaya Trust is a charitable body registered (No. 41 of 1993) under the Indian Trusts Act. Its registered office is 12/669B, Thottamoola, Gudalur – 643 212, The Nilgiris, Tamilnadu. It has nine members on the board of Trustees, which includes the Managing Trustee. Six of the Trustees are from the adivasi community.
            </p>
            <img src={img1} alt="" />
            <p>
            The VBVT’s first programme was the Vidyodaya School, a school modelled along an alternative pedagogy. 
            </p>
            <p>
            They were:
            </p>
            <ul>Cooperation and group work </ul>
            <ul>Possibility for children to work at their own pace</ul>
            <ul>Co-curricular activities given equal importance</ul>
            <ul>A firm value-base</ul>
            <ul>Some aspects of the Adivasi culture included in the curriculum</ul>
            <ul>Assessments not based only on performance in the examinations or tests, but based on a holistic approach</ul>
            <p>
            The Trust had also been interacting with the Adivasi Community of Gudalur and coordinating the educational programmes for ACCORD, a sister NGO working exclusively with adivasis. VBVT undertook to train the Adivasi Teacher Volunteers, follow-up of the non-formal centre of ACCORD and thirdly, provide the supervisory support to the Adivasi Teachers who were placed in the Government’s Tribal Schools. However, the Vidyodaya School remained its central activity.
            </p>
            <p>
            In 1996, on a request from the adivasi community, the Trust decided to concentrate its activities on the Adivasi Community of Gudalur Block. Its first step was to open the school to adivasi children. Our experience with the government’s tribal schools had clearly shown that unless the school had adivasis as teachers the children would not respond favourably.
            </p>
            <p>
            From 2004 the school has had around 75 students, all of whom are adivasi children, except for one or two staff children. The school does not have the space to accommodate more and so we have been compelled to stop further admissions.
            </p>
            <p>
            In 1996, the Trust also took on four adivasi educated youth, who were previously working in the Govt. Residential Schools as Tribal volunteers, to train as Teachers on an experimental basis. We realized that in-service training alone was not adequate, so the following year 10 more volunteers were taken on for a full time 2 year residential training. Of these four left during the year as they found other sources of employment. The rest have continued and today form the Education Team, which handles the entire education programme.
            </p>
            <p>
            In the year 2000, VBVT decided that the adivasi community, having seen their children’s progress in Vidyodaya school, was now ready for an educational intervention and so launched a major programme covering 138 of the 303 adivasi villages of the two taluks of Gudalur Block. By 2015 it had covered all the villages. 
            </p>
        </HistorySection>

        <section classname="charities-aid-foundation">
            <Header>Charities Aid Foundation India</Header>
            <h1>About Charities Aid Foundation, India:</h1>
            <p>
            CAF India is a registered charitable trust set up in 1998 to provide strategic and management support to corporates, individuals and NGOs with an aim to ensure greater impact of their philanthropic and CSR investments.</p>
            <p>
            Charities Aid Foundation is a leading international not-for-profit organisation, which works to make giving more effective and charities more successful. CAF India is part of an international network with offices in nine countries, including Australia, Brazil, Canada, India, Russia, South Africa and the United States of America and distributes funds to over 90 countries around the world.
            </p>
            <img src={img2} alt="" style={{width: "800px"}}/>
            <p>Click here to download the certificate</p>
        </section>
        <section classname="changemaker-school">
        <Header>Changemaker School</Header>
        <img src={img3} alt="" />
            <p>
            Vidyodaya is now an “ASHOKA CHANGEMAKER SCHOOL”!! With your constant support we are here – recognized as a Changemaker school in India by ASHOKA. Every child, teacher and member of the team in Vidyodaya is proud about this recognition.
            </p>
            <p>
            ASHOKA has so far identified around 100 schools across 25 countries in the world (including 7 in India) as Changemaker schools. These schools emphasize empathy, teamwork, leadership and creativity, and encourage their students to become agents of change.
            </p>
            <p>
            A video by ASHOKA foundation about our school. It talks about why we needed a school, how unique is our school in retaining tribal culture & values and our teachers & ex-students talking about their experiences of the school.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/o3umVefG5Hs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ih96-EZrgUQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>
            As an ASHOKA Changemaker school, Vidyodaya will collaborate with Ashoka and other Changemaker schools in the network to extend ideas and influence, share insights and practices, to build upon what we have achieved so far.
            </p>
            
        </section>
        </Card>
        <Footer/>
        </div>
    )
}

export default About;
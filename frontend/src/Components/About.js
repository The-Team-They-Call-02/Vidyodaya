import React, {useState} from 'react';
import { Header } from "../Styles/AboutStyle";
import img1 from "../Assets/About/vidyodaya1.jpg";
const About = () => {

    return(
        <div>
        <p>Insert Nav bar here</p>
            <Header>History</Header>
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
        </div>
    )
}

export default About;
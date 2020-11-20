import React, {useState} from 'react';
import {ClassRm, Leader, PbSpk, Whole, Hip, Mentor} from './ProgramStyles'

const Programs = () => {
{/*Need to create cards here for programs, public speaking, adopt a classroo, youth leadership, hiphop dance, and mentoship*/}
    return(
        <Whole className='programs'>
            <h1>Our Programs</h1>
            <PbSpk className='PublicSpeaking'><h2>Jr. Public Speaking</h2></PbSpk>
            <ClassRm className='AdoptClass'><h2>Adopt a Classroom</h2></ClassRm>
            <Leader className='YouthLeader'><h2>youth Leadership Program</h2></Leader>
            <Hip className='HipHop'><h2>Hip Hop Dance</h2></Hip>
            <Mentor className='MentorShip'><h2>Be Powerful Mentorship</h2></Mentor>
            
        </Whole>
    )
}

export default Programs;
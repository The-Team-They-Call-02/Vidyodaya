import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import ProgramsHome from "./ProgramsHome/ProgramsHome.component";
import FrisbeeProgram from "./FrisbeeProgram/FrisbeeProgram.component";
import ChildrenCamps from "./ChildrenCamps/ChildrenCamps.component";
import EducationProgram from "./EducationProgram/EducationProgram.component";
import Balwadis from "./Balwadis/Balwadis.component";
import Culture from "./Culture/Culture.componet";
import CampCard from "./ChildrenCamps/CampCard/CampCard.component";

import CampCreate from "./ChildrenCamps/Create/CampCreate.component";
import CampEdit from "./ChildrenCamps/Edit/CampEdit.component";

import ChildrensBank from "./EducationProgram/Childrens_Bank/ChildrensBank.component";
import Scholarships from "./EducationProgram/Scholarships/Scholarships.component";
import StudyCenters from "./EducationProgram/Study_Centers/StudyCenters.component";
import SkillsUpgradation from "./EducationProgram/Teacher_Training/SkillsUpgradation.component";
import TeacherTraining2014 from "./EducationProgram/Teacher_Training/TeacherTraining2014.component";
import TeacherTraining2012 from "./EducationProgram/Teacher_Training/TeacherTraining2012.component";


// styled-components
import { MainContainer } from "./Programs.styles";


//DUMMY DATA
const campsData = [
	{
		campId: 4,
		title: "Children Camp – May 2018",
		subtitle: "To make future leaders",
		participants: 73,
		facilitators: 13,
		villagesCovered: 11,
		description: "",
		highlights: [
			{
				highlightTitle: "Alcoholism",
				description:
					"This is major problem that we face in the community: Here Vijay kumar shared his experience on struggles during alcoholic days and with great determination how did he come out of it.",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2018/07/camp-2018-pic5.jpg",
			},
			{
				highlightTitle: "Unity",
				description:
					"To solve any problem in the village we need to be united. Unity brings strength by Stan",
				imageURL: "",
			},
			{
				highlightTitle: "Questioning",
				description:
					"To fight injustice in the community we need to ask relevant questions to solve – by Ramdas",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2018/07/camp-2018-pic2.jpg",
			},
			{
				highlightTitle: "Herbal Medicine",
				description:
					"A workshop made us understanding the importance of traditional medicine and its uses.",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2018/07/camp-2018-pic6.jpg",
			},
			{
				highlightTitle: "Drama",
				description:
					"Art form which broke our fear to speak in public and made us confident.",
				imageURL: "",
			},
			{
				highlightTitle: "Planning",
				description: "Making sure all the activities goes smoothly",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2018/07/camp-2018-pic4.jpg",
			},
			{
				highlightTitle: "Games",
				description:
					"Lots of fun activities which brought everyone together",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2018/07/camp-2018-pic1.jpg",
			},
			{
				highlightTitle: "Food",
				description: "To add to the flavor to the camp",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2018/07/camp-2018-pic7.jpg",
			},
		],
		feedback: [
			{
				testimonial:
					"I have always been afraid to talk in public and after successful drama I am very confident",
				source: "Kamalakshi, participant",
			},
			{
				testimonial:
					"All the sessions went effortlessly. Great team work ",
				source: "Intern from Banglore",
			},
			{
				testimonial:
					"I never thought I have loud voice to run sessions for so many kids.I am happy with myself. I am looking forward to next camp",
				source: "Parvathi, Facilitator",
			},
		],
	},
	{
		campId: 3,
		title: "Children Camp – December 2017",
		subtitle: "",
		participants: 84,
		facilitators: 0,
		villagesCovered: 0,
		description:
			"Children Camp has always proved to be effective – the learning that happens during these camps are intangible. Despite the freezing cold of December, we had a very interesting and exciting camp at Gudalur campus during December 28th to 31st where the camp was run by the children itself. 84 adivasi children from different villages participated in the camp. VBVT Area education co-ordinators, teachers and members facilitated the program.",
		highlights: [
			{
				highlightTitle: "Drama & dance",
				description: "",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2018/01/camp-4-1024x576.jpg",
			},
			{
				highlightTitle: "Learning craft",
				description: "",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2018/01/camp-3-1024x576.jpg",
			},
			{
				highlightTitle: "Critical Thinking sessions through Movies",
				description: "",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2018/01/camp-1-1024x576.jpg",
			},
			{
				highlightTitle:
					"Introduction to Adivasi Munnetra Sangam and VBVT",
				description: "",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2018/01/camp-2-1024x576.jpg",
			},
			{
				highlightTitle:
					"Visits to Adivasi hospital and Just Change Soap Unit.",
				description: "",
				imageURL: "",
			},
			{
				highlightTitle: "Team building activities",
				description:
					"The objective of the camp is that the participants would learn varied things during this camp and they would take back to the community/villages and teach – during this process the children would become an anchor/leader/resource person in their villages. That way we can build young leaders in the adivasi community.",
				imageURL: "",
			},
			{
				highlightTitle: "Thank You Srinivas",
				description:
					"This is an opportunity for us to thank Srinivas who rode a 1000 km cycling tour in the Nilgiris(Blue Mountains) from the 10th Dec to 17th Dec to raise funds for this camp. Thank You Srinivas – such support always helps us.",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2018/01/srinivas-1024x768.jpg",
			},
			{
				highlightTitle: "",
				description:
					"The benefits of the camp was immediately realized by the participants and their feedback has given the community hope and spirit to run many similar camps.",
				imageURL: "",
			},
		],
		feedback: [
			{
				testimonial:
					"I never thought I will be able to teach something like craft. It has given me  immense confidence",
				source: "Kethi, Young Trainer",
			},
			{
				testimonial:
					"I feel sad to leave after this camp yet I have learnt so many things from the camp. I am motivated to go back and teach in my village",
				source: "Kutti Krishnan, Participant",
			},
			{
				testimonial:
					"Despite the cold everyone took part in all the activities with great interest without complaining",
				source: "Karalan, Facilitator",
			},
			{
				testimonial:
					"Despite the cold everyone took part in all the activities with great interest without complaining",
				source: "Karalan, Facilitator",
			},
		],
	},
	{
		campId: 2,
		title: "Camps for Children 2016",
		subtitle: "",
		participants: 92,
		facilitators: 0,
		villagesCovered: 0,
		description:
			"Camps had always played an important role to build relationships among the children. 92 children attended the camps this year – with lot of learning, brainstorming, fun, observations, discussions and reflections. VBVT would like to thank the donors who supported the camps.",
		highlights: [
			{
				highlightTitle: "Village Visit:",
				description: "Talking to the village Thalaivar",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2016/06/IMG_20160521_110959231_HDR-768x432.jpg",
			},
			{
				highlightTitle: "",
				description: "Observations about the village",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2016/06/IMG_20160512_104852-768x432.jpg",
			},
			{
				highlightTitle: "",
				description: "Discussing and Reflecting about the village",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2016/06/IMG_20160521_113310-768x432.jpg",
			},
			{
				highlightTitle: "Cultural Songs and Dance:",
				description: "Cultural dance at the village",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2016/06/IMG_20160512_162904-768x432.jpg",
			},
			{
				highlightTitle: "Anti-Alcoholism sessions:",
				description: "Anti-alcoholism discussion",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2016/06/IMG_20160505_093902-768x432.jpg",
			},
			{
				highlightTitle: "Art & Craft:",
				description:
					"T-shirt painting : Reflecting their adivasi values through art",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2016/06/IMG_20160513_201054-768x432.jpg",
			},
			{
				highlightTitle: "Sports: Frisbee Training",
				description:
					"A sport that is enjoyed by both boys and the girls",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2016/06/IMG_20160522_181519207-768x432.jpg",
			},
			{
				highlightTitle: "",
				description:
					"A sport that is enjoyed by both boys and the girls",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2016/06/IMG_20160522_073042128-768x432.jpg",
			},
			{
				highlightTitle: "Camp 1 (Devala):",
				description: "Camp 1",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2016/06/IMG_20160507_134023-768x432.jpg",
			},
			{
				highlightTitle: "Camp 2 (Ayyankolly):",
				description: "Camp 2",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2016/06/IMG_20160514_135658-768x432.jpg",
			},
			{
				highlightTitle: "Camp 3 (Ponnani):",
				description: "Camp 3",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2016/06/IMG_20160523_130325-768x432.jpg",
			},
		],
		feedback: [
			{
				testimonial: "We wish the camps run for 2 weeks.",
				source: "",
			},
			{
				testimonial:
					"We got some ideas to tackle the problem of alcoholism",
				source: "",
			},
			{
				testimonial:
					"I have got one more family and will keep in touch.",
				source: "",
			},
			{
				testimonial: "We learnt about different adivasi culture.",
				source: "",
			},
			{
				testimonial:
					"We would like to have regular monthly camps with the teachers.",
				source: "",
			},
		],
	},
	{
		campId: 1,
		title: "Camps for Children 2015",
		subtitle: "",
		participants: 0,
		facilitators: 0,
		villagesCovered: 0,
		description:
			"Vidyodaya School, Gudalur, organized a camp for thirty students from four different tribes in Ponnani village. Every day the children divided themselves into two groups and went on a ‘padayatra’ through the local villages. They had conversations with the elders as well as the children and advocated for the need for education and campaigned against child labour and alcoholism. The campaign was very successful as many children enrolled themselves in school. We found that children sharing their ideas with others were far more effective than adults.",
		highlights: [
			{
				highlightTitle: "",
				description:
					"Children camps play an important role in improving the confidence of children and their understanding about the society at large.",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2015/06/IMG-20150507-WA0009-575x1024.jpg",
			},
			{
				highlightTitle: "",
				description:
					"These are motivational programmes conducted from time to time especially for those from newer villages. They provide a number of inputs besides a good introduction to AMS, its activities and also to cultural inputs. These help to build a sense of dignity and pride in their backgrounds.",
				imageURL:
					"http://www.vidyodaya.org/vbvt/wp-content/uploads/2010/08/camp-e1454394187137.jpg",
			},
			{
				highlightTitle: "",
				description:
					"Camps are usually the first level intervention in a village and the rather shy and reserved boys and girls who have never been outside their villages get an opportunity to meet and interact with other children from other villages and tribes. They also get an opportunity to show their talents and learn about the AMS and to be proud of their culture.",
				imageURL: "",
			},
		],
		feedback: [
			{
				testimonial: "",
				source: "",
			},
		],
	},
];


const Programs = () => {
	return (
		<MainContainer>
			<Switch>
				<Route
					exact
					path="/programs/children-camps/create"
					component={CampCreate}
				/>
				<Route
					exact
					path="/programs/children-camps/edit"
					component={CampEdit}
				/>

				<Route exact path="/programs/children-camps/:id" component={CampCard}/>
				<Route exact path="/programs/culture" component={Culture} />
				<Route exact path="/programs/balwadis" component={Balwadis} />
				<Route exact path="/programs/education-program" component={EducationProgram}/>
				<Route exact path="/programs/education-program/childrens-bank" component={ChildrensBank}/>
				<Route exact path="/programs/education-program/study-centers" component={StudyCenters}/>
				<Route exact path="/programs/education-program/scholarships" component={Scholarships}/>
				<Route exact path="/programs/education-program/skills-upgradation" component={SkillsUpgradation}/>
				<Route exact path="/programs/education-program/teacher-training-2014" component={TeacherTraining2014}/>
				<Route exact path="/programs/education-program/teacher-training-2012" component={TeacherTraining2012}/>
				<Route exact path="/programs/children-camps" component={ChildrenCamps} />
				<Route exact path="/programs/ultimate-frisbee" component={FrisbeeProgram} />
				<Route exact path="/programs/" component={ProgramsHome} />
				{campsData &&
					campsData.map((camp) => {
						return (
							<>
								<Route
									exact
									style={{ textDecoration: "none" }}
									path={`/programs/children-camps/${camp.campId}`}
								>
									<CampCard camp={camp} key={camp.campId} />
								</Route>
							</>
						);
					})}
			</Switch>
		</MainContainer>
	);
};

export default Programs;

import '../../Style Sheets/Page Sections/Experience.css'
import { useState } from "react";

function Experience() {

    const experiences = {
        a: {
            label: "Student Leader",
            title: "Student Leader",
            type: "Paid Work",
            organization: "West Vancouver Schools",
            link: "https://westvancouverschools.ca/about-wvs/",
            date: "August 2024",
            points: [
                "Guided international students in adjusting to Canadian school and culture",
                "Attended trips and activities while maintaining student safety, accountability, and adherence to rules",
                "Helped international students feel welcome and connected with each other and the school community"
            ]
        },

        b: {
            label: "Tournament Volunteer",
            title: "Tournament Volunteer",
            type: "Volunteer Work",
            organization: "Ten Ton Robotics",
            link: "https://westvancouverschools.ca/academies/mechatronics-robotics/robotics-challenges-competitions/",
            date: "Feb 2024 - Present",
            points: [
                "Multiple roles including tournament director, scorekeeper, referee, field control, and judge",
                "Directed tournament setup and operations, managing volunteers, equipment, and participants",
                "Operated tournament software controlling screens, robots, and real-time data tracking, ensuring accurate scoring and rule compliance",
                "Evaluated competitors' notebooks and presentations and collaborated with judges to select winners"
            ]
        },

        c: {
            label: "Event Setup Manager",
            title: "Event Setup Manager",
            type: "Volunteer Work",
            organization: "Ten Ton Robotics",
            link: "https://westvancouverschools.ca/academies/mechatronics-robotics/robotics-challenges-competitions/",
            date: "December 2023 - Present",
            points: [
                "Led a team of 4 students in collecting and organizing field parts for a robotics tournament",
                "Assembled competition fields accurately according to official specifications",
                "Disassembled fields after the event and maintained organized equipment"
            ]
        },

        d: {
            label: "Junior Instructor",
            title: "Junior Instructor",
            type: "Volunteer Work",
            organization: "UBC Geering Up",
            link: "https://geeringup.apsc.ubc.ca/camps/in-person-camps/",
            date: "July 2024",
            points: [
                "Volunteered 140 hours at a STEM summer camp with University of British Columbia",
                "Led engineering design challenges, taught lessons, and facilitated games to engage students",
                "Supported elementry students by fostering teamwork, curiosity, and a positive learning environment"
            ]
        },

        e: {
            label: "Tour Guide",
            title: "Tour Guide",
            type: "Volunteer Work",
            organization: "Sentinel Secondary School",
            link: "https://westvancouverschools.ca/ecole-sentinel-secondary/",
            date: "January 2024",
            points: [
                "Welcomed prospective students and families at Sentinel's Open House",
                "Guided visitors through classrooms and school facilities",
                "Answered questions and shared student experiences"
            ]
        },

        
        f: {
            label: "Camp Counselor",
            title: "Camp Counselor",
            type: "Volunteer Work",
            organization: "Community Center",
            link: "https://westvancouver.ca/parks-recreation/facilities/gleneagles-community-centre",
            date: "August 2022",
            points: [
                "Served as a positive role model for campers",
                "Supported pottery activities, games, and instruction",
                "Fostered a safe, inclusive, and engaging camp environment"
            ]
        }
    }

    const [selectedExperience, setSelected] = useState("a");

    const experience_keys = Object.keys(experiences);

    let exp_title = experiences[selectedExperience].title;
    let exp_link = experiences[selectedExperience].link;
    let exp_org = experiences[selectedExperience].organization;
    let exp_date = experiences[selectedExperience].date;
    let exp_points = experiences[selectedExperience].points;
    let exp_type = experiences[selectedExperience].type;

    return (
        <div className="content-wrapper" id="experience">

            <h3>Work & Volunteer Experience</h3>

            <div className="experience-wrapper">
                <div className="buttons-wrapper">

                    {experience_keys.map((key) => (
                        <button
                        key={key} // Each child in a list needs a unique "key"
                        className={selectedExperience == key ? "selected" : ""}
                        onClick={() => setSelected(key)}>
                            <p>{experiences[key].label}</p>
                        </button>
                    ))}

                </div>

                <div className="experience-content">

                    <h6>
                        {exp_title} <a href={exp_link} target="_blank">@ {exp_org}</a>
                    </h6>

                    <p><span className="experience-type">{exp_type}:</span> {exp_date}</p>

                    <br/>
                    <ul>
                        {exp_points.map((point, i) => (
                            <li key={i}>{point}</li> // Each child in a list needs a unique "key"
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience
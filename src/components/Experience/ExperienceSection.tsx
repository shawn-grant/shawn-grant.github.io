import experiences from "../../data/experiences.json"
import './experience.scss'

// {
//     "company": "Spark Labs",
//     "position": "Co-Founder",
//     "industry": "AI",
//     "details": "Spark Labs is a startup that aims to use AI to solve problems in the Caribbean. Our flagship product, LectureLytics, uses AI to automatically generate lecture notes from recordings, pdfs and powerpoints.",
//     "skills": ["PaLM 2", "LLM", "Firebase", "Typescript", "React"],
//     "startDate": "DEC 2023",
//     "endDate": "PRESENT",
//     "infoUrl": "https://lecturelytics.web.app"
// },

export default function ExperienceSection() {
    return (
        <div className='ExperienceSection' id='experience'>
            <div className="content">

                <h1>My Experience</h1>
                <p>Here's some of the roles I've worked in.</p>

                <div className="list">
                    {experiences.map((exp, i) =>
                        <div key={i} className='card'>
                            <div className="head">
                                <img src={exp.companyLogo} alt="" />
                                <div className="desc">
                                    <p className='company'>{exp.company}</p>
                                    <p className='position'>{exp.position}</p>
                                </div>
                            </div>
                            <p className='duration'>{exp.startDate} - {exp.endDate}</p>
                            <p className='details'>{exp.details}</p>

                            <div className="buttons">
                                {exp.infoUrl !== "" &&
                                    <a href={exp.infoUrl} target='_blank' rel="noreferrer">
                                        More Info <i className='bi bi-box-arrow-up-right' />
                                    </a>
                                }
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
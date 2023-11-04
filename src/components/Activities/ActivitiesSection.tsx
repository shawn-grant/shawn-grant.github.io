import activities from "../../data/activities.json"
import './activities.scss'

export default function ActivitiesSection() {
    return (
        <div className='ActivitiesSection' id='activities'>
            <div className="content">
                <h1>Activities</h1>
                <p>My certificates, awards and other activities.</p>

                <div className="list">
                    {activities.map((activity, i) =>
                        <div key={i} className='card'>
                            <p className="date">{activity.date}</p>
                            <p className="title">{activity.title}</p>
                            <p className="subtitle">{activity.subtitle}</p>

                            {activity.type === "youtube" &&
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={activity.resource}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                />
                            }
                            {(activity.type === "image" || activity.type === "badge") &&
                                <img src={activity.resource} className={activity.type} alt="badge/cert" />
                            }
                        </div>
                    )}

                </div>

                <div className="arrow">
                    <i className="bi-caret-right-fill" />
                </div>
            </div>
        </div>
    )
}
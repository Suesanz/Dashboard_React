import React from 'react'
import moment from 'moment'
import ProjectDetails from './ProjectDetails'
import {Link} from "react-router-dom";

const ProjectSummary = ({project}) => {
    return (
        <div className="card mb-4 mt-4">
            <div className="card-body ">
                <h5 className="card-title ">{project.title}</h5>


                <Link to={'/project/' + project.id} key={project.id}>
                    More
                </Link>
                <p className="card-text">
                    <small className="text-muted">{moment(project.createdAt.toDate()).calendar()}</small>
                </p>
            </div>
        </div>
    )
}

export default ProjectSummary

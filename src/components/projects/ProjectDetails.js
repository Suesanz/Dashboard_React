import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'

const ProjectDetails = (props) => {
    const {project, auth} = props;
    if (!auth.uid) return <Redirect to='/signin'/>
    if (project) {
        return (
            <div className="container my-4">
               <div className="row">
                   <div className="col">
                       <div className="card ">
                           <div className="card-body">
                               <h5 className="card-title">{project.title}</h5>
                               <p>{project.content}</p>


                               <p className="card-text">
                                   <small className="text-muted">{moment(project.createdAt.toDate()).calendar()}</small>
                               </p>
                               {/*<div>Posted by {project.authorFirstName} {project.authorLastName}</div>*/}
                           </div>

                       </div>
                   </div>
               </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'projects'
    }])
)(ProjectDetails)

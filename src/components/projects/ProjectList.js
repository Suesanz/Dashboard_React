import React, {Component} from 'react'
import ProjectSummary from './ProjectSummary'
import {Link, Redirect} from 'react-router-dom'
import *as firebase from 'firebase'

class ProjectList extends Component {

    deleteProject = (id) => {
        const firestore = firebase.firestore();
        firestore.collection("projects").doc(id).delete().then(function () {
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
        console.log("check")

    }

    render() {
        if (firebase.auth().currentUser) {
            var userID = firebase.auth().currentUser.uid
        }
        if (this.props.projects) {
            return (
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-11">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col ">
                                        {this.props.projects && this.props.projects.map(project => {
                                            if (project.authorId === userID) {
                                                return (
                                                    <div>
                                                        <ProjectSummary project={project}/>
                                                        <button className='btn btn-primary' key={project.id}
                                                                onClick={() => this.deleteProject(project.id)}>Delete
                                                        </button>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1 ">
                            <div className="container-fluid ">
                                <div className=" row">
                                    <div className="col">
                                        <div className="progress " style={{width: 25 + 'em'}}>
                                            <div className="progress-bar" role="progressbar" style={{width: 25 + '%'}}
                                                 aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col my-4">
                                        <div className="card " style={{width: 18 + 'rem'}}>
                                            <div className="card-body ">
                                                <h5 className="card-title ">Lorem ipsum</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing
                                                    elit. Amet
                                                    aperiam aspernatur consequatur distinctio dolorum exs sapiente
                                                    soluta
                                                    unde
                                                    ut!</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col my-4">
                                        <div className="card" style={{width: 18 + 'rem', justifyContent: 'right'}}>
                                            <div className="card-body">
                                                <h5 className="card-title">Lorem ipsum</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing
                                                    elit. Amet
                                                    aperiam aspernatur consequatur distinctio dolorum exs sapiente
                                                    soluta
                                                    unde
                                                    ut!</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    Loading...
                </div>
            )
        }

    }
}


export default ProjectList
import React, {Component} from 'react'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'


class Dashboard extends Component {
    render() {
        const {projects, auth} = this.props;
        if (!auth.uid) return <Redirect to='/signin'/>

        return (

            <div className=" container-fluid">
                <div className="row">
                    <div className="col-8 mt-4 pb-4">
                        <ProjectList projects={projects}/>
                    </div>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(Dashboard)

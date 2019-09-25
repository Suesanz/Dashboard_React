import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectActions'
import {Redirect} from 'react-router-dom'

class CreateProject extends Component {
    state = {
        title: '',
        content: '',
        // p_id: Math.random().toString(36).substring(7)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createProject(this.state);
        this.props.history.push('/');
    }

    render() {
        const {auth} = this.props;
        if (!auth.uid) return <Redirect to='/signin'/>
        return (
            <div className="container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <form onSubmit={this.handleSubmit}>
                    <h3 className="my-4" >Create a New Task</h3>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Task Title</label>
                        <input type="text" className="form-control" id="title"
                               style={{width: 15 + 'em'}} onChange={this.handleChange}/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Task Content</label>
                        <textarea className="form-control" id="content" rows="4" style={{width: 25 + 'em'}}
                                  onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)

import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp} from '../../store/actions/authActions'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }

    render() {
        const {auth, authError} = this.props;
        if (auth.uid) return <Redirect to='/'/>
        return (
            <div className="container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                <div className="row">
                    <div className="col">
                        <form onSubmit={this.handleSubmit} >
                            <h5 className="grey-text text-darken-3">Sign Up</h5>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input  className="form-control" style={{width: 15 + 'em'}}  type="email" id='email' onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input type="password" style={{width: 15 + 'em'}}  className="form-control" id='password' onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" style={{width: 15 + 'em'}}  className="form-control" id='firstName' onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" style={{width: 15 + 'em'}}  className="form-control" id='lastName' onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <button className="btn  btn-primary" type="submit">Sign Up</button>
                                <div className="center red-text">
                                    {authError ? <p>{authError}</p> : null}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

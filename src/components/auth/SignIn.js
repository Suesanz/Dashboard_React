import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }

    render() {
        const {authError, auth} = this.props;
        if (auth.uid) return <Redirect to='/'/>
        return (
            <div className="container " style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className="row">
                    <div className="col">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" style={{width: 20 + 'rem'}} id="email"
                                       aria-describedby="emailHelp"
                                       placeholder="Enter email" onChange={this.handleChange}/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                    anyone else.
                                </small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" style={{width: 20 + 'rem'}}
                                       id="password" placeholder="Password" onChange={this.handleChange}/>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                            <div className="center red-text">
                                {authError ? <p>{authError}</p> : null}
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
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

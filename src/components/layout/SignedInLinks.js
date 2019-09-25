import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Scenarios <span
                        className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Media</a>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link " href="#" to='/create'>New Task</NavLink>

                </li>
                {/*</ul>*/}
                {/*<ul className="navbar-nav ml-auto">*/}

                    {/*<li className="nav-item active pull-right">*/}
                    {/*    /!*<a className="nav-link" href="#" onClick={props.signOut}>Log Out</a>*!/*/}
                    {/*</li>*/}
                    {/*<li className="nav-item active ">*/}
                    {/*    <NavLink to='/' style={{borderRadius: 50 + '%', backgroundColor: '#808080', color: 'white'}}*/}
                    {/*             className="btn ">*/}
                    {/*        {props.profile.initials}*/}
                    {/*    </NavLink></li>*/}


            </ul>
            <form className="form-inline my-2 my-lg-0">
                <a className="nav-link mr-sm-2" href="#" onClick={props.signOut}>Log Out</a>
                <NavLink  to='/' style={{borderRadius: 50 + '%', backgroundColor: '#808080', color: 'white'}}
                         className="btn  my-2 my-sm-0">
                    {props.profile.initials}
                </NavLink>
                {/*<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>*/}
                {/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
            </form>
        </div>


    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)

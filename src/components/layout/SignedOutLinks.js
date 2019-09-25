import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks = () => {
    return (

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to='/signin'>Login</NavLink></li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to='/signup'>Signup</NavLink>
                    </li>

                </ul>
            </div>


    )
}

export default SignedOutLinks
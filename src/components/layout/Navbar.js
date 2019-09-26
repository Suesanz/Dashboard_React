import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'
import '../../styles/nav.css'

const Navbar = (props) => {
    const {auth, profile} = props;
    // console.log(auth);
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            {/*<div className="container">*/}
            <a className="navbar-brand"> <Link to='/'><h2>BRAND</h2></Link></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            {links}
            {/*</div>*/}
        </nav>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)

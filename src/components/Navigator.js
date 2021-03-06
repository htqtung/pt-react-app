import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

import { firebaseAuth } from '../config/firebase';

import PTLogo from '../assets/logo_cover.jpg';

class Navigator extends Component {
    logout = () => {
        return firebaseAuth().signOut()
    }

    render() {
        let logLink = null;
        if (this.props.isAuthenticated) {
            logLink = <FlatButton onClick={this.logout} label="Logout" primary/>;
        }
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/"> <img alt="page logo" src={PTLogo} style={{height: 40}} /> </Link>
                <button className="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button >
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/customers" >Customers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/trainings" >Trainings</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/calendar">Calendar</Link>
                        </li >
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item float-left">
                            {logLink}
                        </li >
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigator;
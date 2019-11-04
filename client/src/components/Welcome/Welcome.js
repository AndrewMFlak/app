import React from "react";
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./Welcome.css";

class Welcome extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <li>
                    Welcome to the App...
                </li>
                <li>
                    Would you like to Join?
                </li>
                <li>
                    No just let me login please.
                </li>
            </div>
        )
    }
}

Welcome.props = {
    placeholder: PropTypes.string
}

export default Welcome;
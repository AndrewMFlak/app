import React from "react";
import PropTypes from 'prop-types';
import "./Welcome.css";

class Welcome extends React.Component {
    render() {
        return (
            <div className="container-fluid" id="welcomeBox">
                <br/>
                <div className="welcomeBox">
                    <label>Welcome to THE App...
                    </label>
                </div>
                <br/>
                <div className="welcomeBox">
                    <label>Would you like to Join today?  If so select here.
                    </label>  
                </div>
                <br/>
                <div className="welcomeBox">
                    <label>If you are already a member select here to enter.
                    </label>
                </div>
            </div>
        );
    }
}

Welcome.props = {
    placeholder: PropTypes.string
}

export default Welcome;
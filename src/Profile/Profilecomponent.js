import React from 'react';
import PropTypes from "prop-types";

function Profilecomponent (props) {
    
    return (
        <div>
            {props.children}
            <p>Full Name : {props.Name}</p>
            <p>Bio : {props.Bio}</p>
            <p>Profession : {props.Profession}</p>
        </div>
    )
}

export default Profilecomponent

Profilecomponent.propTypes = {
    Name: PropTypes.string,
    Bio: PropTypes.string,
    Professioon : PropTypes.string
  };
  

import React from 'react'


function Handlename(props) {
    
    
    return (
        <div>
            <h1>Profile User : {props.User}</h1>
        </div>
    )
}

export default Handlename

Handlename.defaultProps = {
    User : "Abderrahman ",
  };

 


import React from "react";


function Navigation(item) {

    const handleClick = (item) = (item) => {
        console.group(item);
        return item;
    }
    return (
        <div>
        <span onClick={() => handleClick('About')}> 
        About me </span>
        <span onClick={() => handleClick('Project')}>
        Projects
        </span>
        
        </div>
    )
}

export default Navigation;
import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(item) {

    const handleClick = (item) = (item) => {
        console.group(item);
        return item;
    }
    return (
        <header >
            <nav> 
                <ul className = "flex">
                    <li className="mr-6">
                        <a className="text-blue-500 hover:text-blue-800" href="#About"> 
                        About me 
                        </a>
                    </li>
                    <li className="mr-6">
                        <span className="text-blue-500 hover:text-blue-800" href="#Contact"> 
                        Contact 
                        </span>                   
                    </li>
                    <li className="mr-6">
                        <a className="text-blue-500 hover:text-blue-800" href="#Portfolio"> 
                        Portfolio
                        </a>
                    </li>
            </ul>
        </nav>
        
        
        
        </header>
    )
}

export default Nav;
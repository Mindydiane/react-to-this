// import React, { useEffect } from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(item) {

    // useEffect(() => { capitalizeFirstLetter();
    // }, [];)

    // }
    return (
        <header >
            <nav> 
                <ul className = "flex">
                    <li className="mr-6">
                        <a className="text-blue-700 hover:text-blue-900" href="#About"> 
                        About me 
                        </a>
                    </li>
                    <li className="mr-6">
                        <span className="text-blue-700 hover:text-blue-900" href="#Contact"> 
                        Contact Me
                        </span>                   
                    </li>
                    <li className="mr-6">
                        <a className="text-blue-700 hover:text-blue-900" href="#Portfolio"> 
                        My Portfolio
                        </a>
                    </li>
            </ul>
        </nav>
        
        
        
        </header>
    )
}

export default Nav;
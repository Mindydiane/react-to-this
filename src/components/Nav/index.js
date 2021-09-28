import React from "react";

// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
    } = props;

    // useEffect(() => { capitalizeFirstLetter(currentCategory.name);
    // }, [currentCategory]);

   
    return (
        <header>
            <nav> 
                <ul className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <li className="mr-6">
                        <a className="text-blue-700 font-bold hover:text-blue-900" href="#About"> 
                        About me 
                        </a>
                    </li>
                    <li className="mr-6">
                        <span className="text-blue-700 font-bold hover:text-blue-900" href="#Contact"> 
                        Contact Me
                        </span>                   
                    </li>
                    <li className="mr-6">
                        <a className="text-blue-700 font-bold hover:text-blue-900" href="#Portfolio"> 
                        My Portfolio
                        </a>
                    </li>
            </ul>
        </nav>
        
        
        
        </header>
    )
}

export default Nav;
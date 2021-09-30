import React from "react";
import { Link } from "react-router-dom";

// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    // const {
    //     categories = [],
    //     setCurrentCategory,
    //     contactSelected,
    //     currentCategory,
    //     setContactSelected,
    // } = props;

    // useEffect(() => { capitalizeFirstLetter(currentCategory.name);
    // }, [currentCategory]);

   
    return (
        <header>
            <nav> 
                <ul className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <li className="mr-6">
                        <Link to="/" className="text-blue-700 font-bold hover:text-blue-900" > 
                        Home
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link to="/contact" className="text-blue-700 font-bold hover:text-blue-900"> 
                        Contact Me
                        </Link>                   
                    </li>
                    <li className="mr-6">
                        <Link to="/portfolio" className="text-blue-700 font-bold hover:text-blue-900"> 
                        My Portfolio
                        </Link>
                    </li>
            </ul>
        </nav>
        
        
        
        </header>
    )
}

export default Nav;
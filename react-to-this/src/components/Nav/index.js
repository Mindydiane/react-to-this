import React from "react";


function Nav(item) {

    const handleClick = (item) = (item) => {
        console.group(item);
        return item;
    }
    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid= "link" href="/">
                    <span > Mindy Diane Garza</span>
                </a>
            </h2>
            <nav> 
                <ul className="flex-row">
                    <li>
                        <a data-testid="about" href="#about"> 
                        About me 
                        </a>
                    </li>
                    <li className={"mx-2"}>
                        <span onClick={() => handleClick('Contact')}> 
                        Contact 
                        </span>                   
                    </li>
                   

            
            </ul>
        </nav>
        
        
        
        </header>
    )
}

export default Nav;
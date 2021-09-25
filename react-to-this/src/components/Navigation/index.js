import React from "react";


function Navigation(item) {

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
                    <a onClick={() => handleClick('About')}> 
                    About me 
                    </a>
                    </li>

            
            </ul>
        </nav>
        
        <span onClick={() => handleClick('Project')}>
        Projects
        </span>
        <span onClick={() => handleClick('Contact')}> 
        Contact </span>
        
        </header>
    )
}

export default Navigation;
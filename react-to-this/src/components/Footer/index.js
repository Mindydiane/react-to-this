import React from "react";
import { FaGithub } from 'react-icons/fa';

function Footer() {
    return  (
        <div className='py-5 border-t-3/2'>
        <div className='flex align-center just-center mt-4'>
                <div className='flex align-center just-center mt-4' />
                     <a className = "text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover: bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/mindydiane" >
                        <FaGithub />
                        <span class ='sr-only'>Github</span>    
                    </a>
            </div>
        </div>
    )
}

export default Footer;
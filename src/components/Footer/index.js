import React from "react";
import { FaGithub, FaYoutube, FaLinkedin,  FaEnvelope } from 'react-icons/fa';


function Footer() {
    return  (
        <div>
            <div className='py-5 border-t-3/2'>      
                <div className='flex align-center justify-center mt-4' >
                    <a className = "text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/mindydiane" >
                        <FaGithub />
                        <span class ='sr-only'>Github</span>    
                    </a>
                    <a className = "text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-800 rounded-full hover:text-white transition-colors duration-300" href="https://www.youtube.com/watch?v=8pd-yp2-Bm4" >
                        <FaYoutube />
                        <span class ='sr-only'>YouTube</span>    
                    </a>
                    <a className = "text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-700 hover:bg-blue-800 rounded-full hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/mindy-garza-250b85208/" >
                        <FaLinkedin />
                        <span class ='sr-only'>LinkedIn</span>    
                    </a>
                    <a className = "text-xl m-1 p-1 sm:m-2 sm:p-2 text-indigo-800 hover:bg-indigo-900 rounded-full hover:text-white transition-colors duration-300">
                        <FaEnvelope />
                        <span class ='sr-only'>Email</span>    
                    </a>
                </div>    
            </div>
        </div>
    )
}

export default Footer;
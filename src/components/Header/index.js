import React from 'react';
import profile from '../../assets/portfolio-images/profile-pic/me.jpg';
import Nav from '../Nav';
function Header()
{
    return(
        <div className='w-full'>
            <div className='flex flex-col justify-center max-w-ms bg-pink-400 shadow-x1 rounded-x1'>
                <div>
                
                    <img className= 'w-32 mx-auto shadow-xl rounded-full' src={profile} alt='profile'>
                    </img>
                        <div className="text-center mt-5">
                            <p className='text-xl text-blue-100 font-bold'> 
                            Mindy Diane Garza
                            </p>
                            <p className='text-xs sm:text-base text-blue-900 font-bold pt-2 pb-4 px-5 w-auto inline-block border-b-2'> 
                            Full Stack Web Developer
                            </p>
                            <Nav></Nav>  
                        </div>                        
                </div>
            </div>
        </div>
    )
}

export default Header;
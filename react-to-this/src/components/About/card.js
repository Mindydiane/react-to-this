import React from 'react';
import profile from '../../images/image.jpg'
function Card()
{
    return(
        <div className='w-full'>
            <div className='flex flex-col justify-center max-w-ms bg-white shadow-x1 rounded-x1'>
                <div className=''>
                    <img className= 'w-32 mx-auto shadow-xl rounded-full drop-shadow-md' src={profile} alt='profile photo'>
                    </img>
                        <div className="text-center mt-5">
                            <p className='text-xl text-gray-900'> 
                            Mindy Diane Garza
                            </p>
                            <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'> 
                            Full Stack Web Developer
                            </p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
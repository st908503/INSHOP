import React from 'react'

import Woman from '../assets/images/woman.png'

const HeroSection = () => {<div className="


"></div>
    return (

        <div>
            <div className=" w-screen md:w-[100%] bg-[#70908B] pt-40 pb-28 h-fit flex items">
                <div className='w-[100%] md:w-[60%] pl-8 md:pl-24'>
                    <h1 className='text-xl md:text-5xl w-[85%] md:w-[100%] text-white pb-5 leading-snug font-bold '>Exclusive Deals of outfit Collection</h1>
                    <h3 className='text-white text-l w-[85%] md:text-lg pb-5 font-normal '>Explore different categories. Find the best deals.</h3>
                    <button className='bg-[#07484a] text-sm px-2 py-1 md:px-8 md:my-3 md:py-3 rounded-lg text-white font-semibold '>Shop Now</button>
                </div>
                <div className='w-[60%] flex justify-center '>
                 <div><img className='h-34 md:h-72 animate-moving' src={Woman} alt="" /></div>   
                </div>
            </div>
        </div>

    )
}

export default HeroSection

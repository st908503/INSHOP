import React from 'react'

import Woman from '../assets/images/woman.png'

const HeroSection = () => {
    return (

        <div>
            <div className=" bg-[#70908B] pt-48 px-20 pb-28 h-fit flex items z-0">
                <div className='w-[60%] pl-24'>
                    <h1 className='text-5xl text-white pb-5 leading-snug font-bold '>Exclusive Deals of outfit Collection</h1>
                    <h3 className='text-white text-lg pb-5 font-normal '>Explore different categories. Find the best deals.</h3>
                    <button className='bg-[#07484a] px-8 my-3 py-3 rounded-lg text-white font-semibold '>Shop Now</button>
                </div>
                <div className='w-[60%] flex justify-center '>
                 <div><img className='h-72 animate-moving' src={Woman} alt="" /></div>   
                </div>
            </div>
        </div>

    )
}

export default HeroSection

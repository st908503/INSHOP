import React from 'react'
import Man from '../assets/images/man.png'

const NewsLetter = () => {
    return (
        <div>
            <div className='md:flex'>
                <div className='w-[100%] bg-[#D9D9D9] h-96 flex justify-center items-center  md:w-[50%]'>
                    <img className=' h-56' src={Man} alt="" />
                </div>
                <div className='w-[100%] bg-[#E0F6F1] h-96 md:w-[50%] flex-col justify-center items-center px-20 py-14 '>
                    <div className='font-base text-4xl pb-1 text-[#07484A]'>Join Our</div>
                    <div className='font-semibold pb-3 text-4xl text-[#07484A]'>Newsletter</div>
                    <div className='text-[#07484A] font-semibold pb-5'>Receive exclusive deals, discounts and offers.</div>
                    <div className='flex-col'>
                        <div className='pb-6'><input className='bg-[#E0F6F1] w-[60%] h-12 pl-4' type="text" placeholder='Enter your email' /></div>
                        <div><button className='bg-[#70908b] px-10 py-3 rounded-md text-white font-semibold '>Subscribe</button></div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default NewsLetter
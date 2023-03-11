import React from 'react'
import Payment from '../assets/images/payment.png'
import Return from '../assets/images/return.png'
import Support from '../assets/images/support.png'

const Benefits = () => {
    return (
        <div className=' sm:w-[100%] md:w-[100%] md:px-20 bg-[#E0EFF6]'>
            <div className='pt-16 flex justify-center text-center font-bold text-4xl text-[#07484a] pb-20
            '>Benefits for your expediency</div>
            <div className='md:flex justify-between pb-24' >
                <div className='pb-10'>
                    <div className='flex justify-center mb-4'><img className='rounded-lg' src={Payment} alt="" /></div>
                    <div className='font-bold text-2xl text-[#07484A] text-center mb-4'>Payment Method</div>
                    <div className='text-center'>We offer flexible payment options, to make easier</div>
                </div>
                <div className='pb-10'>
                    <div className='flex justify-center mb-4'><img className='rounded-lg' src={Return} alt="" /></div>
                    <div className='font-bold text-2xl text-[#07484A] text-center mb-4'>Return policy</div>
                    <div className='text-center '>We offer flexible payment options, to make easier</div>
                </div>
                <div className='pb-10'>
                    <div className='flex justify-center mb-4'><img className='rounded-lg' src={Support} alt="" /></div>
                    <div className='font-bold text-2xl text-[#07484A] text-center mb-4 '>Customer Support</div>
                    <div className='text-center '>We offer flexible payment options, to make easier</div>
                </div>
            </div>
        </div>
    )
}

export default Benefits
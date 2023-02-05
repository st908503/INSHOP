import React from 'react'

const Testimonials = () => {
    return (
        <div className='pb-20'>
            <div className='flex justify-center pt-10 pb-6 font-bold text-4xl text-[#07484a]'>Testimonials</div>
            <div className='flex justify-center text-[#07484a] pb-14 text-xl font-medium'>Over 15,000 happy customers</div>
            <div className='flex px-64 w-[100%] justify-between items-center '>
                <div ><img className='w-[100%] h-52 rounded-lg' src='https://avatars.githubusercontent.com/u/47517058?v=4' alt="" /></div>
                <div className='w-[70%] flex-col items-center'>
                    <h2 className='text-[#07484a] w-[100%]'>"My Experience with inshop is a complete success, from customer service, wide range of products, clean store, purchasing experience, the newsletter. Thank you."</h2>
                    <h3 className='text-[#07484a] pt-6 font-bold text-sm'>Avinash Kumar</h3>
                    <h3 className='text-[#07484a] '>FSD, Janio</h3>
                </div>
            </div>
            <hr className='mt-20 mx-20 text-[#07484a]' />

        </div>
    )
}

export default Testimonials
import React from 'react'
import { Link } from 'react-router-dom'
// import SearchIcon from '@mui/icons-material/Search';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Category = () => {
    return (
        <div className='pb-28 flex flex-col justify-center items-center'>
            <div><h1 className='flex items-center justify-center py-16 text-[#07484a] text-4xl font-bol font-bold text-smd'>Explore by Category</h1></div>
            <div className='flex items-center'>
                <div className='hidden md:flex md:flex-col md:w-[40%] mr-20 h-fit'>
                    <input className='bg-[#f0f0f0] h-10 pl-4 rounded w-[100%] ' type="text" placeholder='Search' />
                    <div className='text-[#07484A] pl-4 font-medium pt-12 pb-10'> <Link to='/'>Topwear</Link></div>
                    <div className='text-[#07484A] pl-4 font-medium pb-10'> <Link to='/'>Jewellery</Link></div>
                    <div className='text-[#07484A] pl-4 font-medium pb-10'> <Link to='/'>Western Wear</Link></div>
                    <div className='text-[#07484A] pl-4 font-medium pb-10'> <Link to='/'>Fashion Accessories</Link></div>
                    <div className='text-[#07484A] pl-4 font-medium pb-10'> <Link to='/'>Sports Wear</Link></div>
                    <div className='text-[#07484A] pl-4 font-medium pb-10'><Link to='/'>Bottomwear</Link></div>
                    <div className='text-[#07484A] pl-4 font-medium pb-12' ><Link to='/'>FootWear</Link></div>
                    <button className='bg-[#70908b] px-7 py-4 rounded-md text-white text-sm font-semibold'>All Categories <ArrowRightAltIcon /> </button>
                </div>

                <div className='grid grid-cols-1 items-center md:grid-cols-2 w-[100%] md:w-[100%]'>
                    <div className='w-screen mb-8 bg-[#adadad] h-48 md:w-[95%] rounded-lg flex justify-center items-center'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='text-white font-bold text-4xl text-center pb-3 '>Topwear</div>
                            <div className='flex justify-center items-center '> <button className='bg-[#07484A] text-white px-4 py-1 rounded-md font-bold text-sm '>Explore</button>
                            </div>
                        </div>
                    </div>
                    <div className=' w-screen mb-8 bg-[#d9d9d9] h-48 md:w-[95%] rounded-lg flex justify-center items-center  '>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='text-white font-bold text-4xl text-center  pb-3 '>Jewellery</div>
                            <div className='flex justify-center items-center '> <button className='bg-[#07484A] text-white px-4 py-1 rounded-md font-bold text-sm '>Explore</button></div>
                        </div>
                    </div>


                    <div className=' w-screen mb-8 bg-[#d9d9d9] h-48 md:w-[95%] rounded-lg flex justify-center items-center  '>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='text-white font-bold text-4xl text-center  pb-3 '>Western Wear</div>
                            <div className='flex justify-center items-center '> <button className='bg-[#07484A] text-white px-4 py-1 rounded-md font-bold text-sm '>Explore</button></div>
                        </div>
                    </div>
                    <div className=' w-screen mb-8 bg-[#d9d9d9] h-48 md:w-[95%] rounded-lg flex justify-center items-center  '>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='text-white font-bold text-4xl text-center pb-3 '>Fashion Accessories</div>
                            <div className='flex justify-center items-center '> <button className='bg-[#07484A] text-white px-4 py-1 rounded-md font-bold text-sm '>Explore</button></div>
                        </div>
                    </div>


                    <div className=' w-screen mb-8 bg-[#d9d9d9] h-48 md:w-[95%] rounded-lg flex justify-center items-center  '>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='text-white font-bold text-4xl text-center  pb-3 '>Sports Wear</div>
                            <div className='flex justify-center items-center '> <button className='bg-[#07484A] text-white px-4 py-1 rounded-md font-bold text-sm '>Explore</button></div>
                        </div>
                    </div>
                    <div className=' w-screen mb-8 bg-[#d9d9d9] h-48 md:w-[95%] rounded-lg flex justify-center items-center  '>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='text-white font-bold text-4xl text-center pb-3 '>Bottomwear</div>
                            <div className='flex justify-center items-center '> <button className='bg-[#07484A] text-white px-4 py-1 rounded-md font-bold text-sm '>Explore</button></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Category

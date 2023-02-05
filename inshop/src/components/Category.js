import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Category = () => {
    return (
        <div className='pb-28'>
            <div><h1 className='flex items-center justify-center py-16 text-[#07484a] text-4xl font-bol font-bold text-smd'>Explore by Category</h1></div>
            <div className='flex'>
                <div className='flex-col w-[26%] px-16 h-fit'>
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

                <div className='w-[75%]'>
                    <div className='flex mb-4'>
                        <div className=' bg-[#adadad] h-48 w-[35%] mr-4 rounded-lg flex justify-center items-center   '>
                            <div className='flex-col'>
                                <div className='text-white font-bold text-4xl flex justify-center items-center pb-3 '>Topwear</div>
                                <div className='flex justify-center items-center '> <button className='bg-[#07484A] text-white px-4 py-1 rounded-md font-bold text-sm '>Explore</button></div>
                            </div>
                        </div>
                        <div className=' bg-[#d9d9d9] h-48 w-[35%] mr-4 rounded-lg flex justify-center items-center  '>
                            <div className='flex-col'>
                                <div className='text-white font-bold text-4xl flex justify-center items-center pb-3 '>Jewellery</div>
                                <div className='flex justify-center items-center '> <button className='bg-[#07484A] text-white px-4 py-1 rounded-md font-bold text-sm '>Explore</button></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex mb-4 '>
                    <div className=' bg-[#d9d9d9] h-48 w-[35%] mr-4 rounded-lg flex justify-center items-center  '>
                            <div className='flex-col'>
                                <div className='text-white font-bold text-4xl flex justify-center items-center pb-3 '>Western Wear</div>
                                <div className='flex justify-center items-center '> <button className='bg-[#07484A] text-white px-4 py-1 rounded-md font-bold text-sm '>Explore</button></div>
                            </div>
                        </div>
                        <div className=' bg-[#d9d9d9] h-48 w-[35%] mr-4 rounded-lg flex justify-center items-center  '>
                            <div className='flex-col'>
                                <div className='text-white font-bold text-4xl flex justify-center items-center pb-3 '>Fashion Accessories</div>
                                <div className='flex justify-center items-center '> <button className='bg-[#07484A] text-white px-4 py-1 rounded-md font-bold text-sm '>Explore</button></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                    <div className=' bg-[#d9d9d9] h-48 w-[35%] mr-4 rounded-lg flex justify-center items-center  '>
                            <div className='flex-col'>
                                <div className='text-white font-bold text-4xl flex justify-center items-center pb-3 '>Sports Wear</div>
                                <div className='flex justify-center items-center '> <button className='bg-[#07484A] text-white px-4 py-1 rounded-md font-bold text-sm '>Explore</button></div>
                            </div>
                        </div>
                        <div className=' bg-[#d9d9d9] h-48 w-[35%] mr-4 rounded-lg flex justify-center items-center  '>
                            <div className='flex-col'>
                                <div className='text-white font-bold text-4xl flex justify-center items-center pb-3 '>Bottomwear</div>
                                <div className='flex justify-center items-center '> <button className='bg-[#07484A] text-white px-4 py-1 rounded-md font-bold text-sm '>Explore</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Category

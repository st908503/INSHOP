import React from 'react'
import Logo from '../assets/images/logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <div>
            <div className=' flex justify-between bg-[#F3F6F5] py-20 px-20'>
                <div>
                    <div className='flex items-center text-[#07484A] pb-3'>
                        <img className='h-6 rounded w-6' src={Logo} alt="" />
                        <h1 className='text-base text-[#06484a] font-bold ml-1'>INSHOP</h1>
                    </div>
                    <div className='flex pb-3'>
                        <div className='pr-5'><FacebookIcon className='text-[#06484a]' /></div>
                        <div className='pr-5'><InstagramIcon className='text-[#06484a]' /></div>
                        <div className='pr-5'><LinkedInIcon className='text-[#06484a]' /></div>
                        <div className='pr-5'><TwitterIcon className='text-[#06484a]' /></div>
                    </div>
                    <div className='text-[#07484A] font-bold text-sm pb-2'>Address</div>
                    <div className='text-[#07484A] text-sm pb-2 '>+123 654 987</div>
                    <div className='text-[#07484A] text-sm pb-2'>877 The Bronx, NY</div>
                    <div className='text-[#07484A] text-sm pb-2'>14568, USA</div>
                </div>


                <div className=' text-[#07484A]'>
                    <div className='font-bold pb-6 text-sm '>My Account</div>
                    <div className='text-sm pb-2'>Sign In</div>
                    <div className='text-sm pb-2'>Register</div>
                    <div className='text-sm pb-2'>Order Status</div>
                </div>

                <div className='text-[#07484A] '>
                    <div className='font-bold pb-6 text-sm'>Help</div>
                    <div className='text-sm pb-2'>Shipping</div>
                    <div className='text-sm pb-2'>Returns</div>
                    <div className='text-sm pb-2'>Sizing</div>
                </div>

                <div className=' text-[#07484A]' >
                    <div className='font-bold pb-6 text-sm'>Shop</div>
                    <div className='text-sm pb-2'>All Products</div>
                    <div className='text-sm pb-2'>Winter Collection</div>
                    <div className='text-sm pb-2'>Summer Collection</div>
                </div>

                <div className='text-[#07484A]'>
                    <div className='font-bold pb-6 text-sm'>Legal Stuff</div>
                    <div className='text-sm pb-2'>Shipping & Delivery</div>
                    <div className='text-sm pb-2'>Terms & Conditions</div>
                    <div className='text-sm pb-2'>Privacy & Ploicy</div>
                </div>
            </div>

            <div className='flex justify-center pb-6 text-[#07484A] font-medium bg-[#F3F6F5] '>Copyight ©2023 INSHOP. All Rights Reserved</div>

        </div>
    )
}

export default Footer
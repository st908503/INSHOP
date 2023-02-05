import React from 'react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <div className='flex justify-between bg-[#c4c4c4] py-3 px-20 sticky top-0 z-50'>
      <div className='flex items-center'>
        <img className='h-10 rounded' src={Logo} alt="" />
        <h1 className='text-2xl text-[#07484a] font-semibold ml-1'>INSHOP</h1>
      </div>

      <div className='flex text-[#07484a] items-center '>
        <div>
          <Link className='px-4 font-semibold hover:underline decoration-green-900' to={"/"}>Home</Link>
        </div>
        <div>
          <Link className='px-4 font-semibold ' to={"/products"}>Products</Link>
        </div>
        <div>
          <Link className='px-4 font-semibold' to={"/categories"}>Categories</Link>
        </div>
        <div>
          <Link className='px-4 font-semibold' to={"/about"}>About</Link>
        </div>
        <div>
          <Link className='px-4 font-semibold' to={"/contact"}>Contact Us</Link>
        </div>
      </div>

      <div className='flex text-[#06484a] items-center '>
        <div className='px-4'>
          <Link to="/"><SearchIcon /></Link>
        </div>
        <div className='px-4'>
          <Link to="/"><ShoppingCartIcon /></Link>
        </div>
        <div className='px-4'>
          <Link to="/"><AccountCircleIcon /></Link>
        </div>
      </div>

    </div>
  )
}

export default Header
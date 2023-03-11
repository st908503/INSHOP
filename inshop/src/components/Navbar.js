// import React, { useState } from 'react'
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';




// const Navbar = () => {

//     const [menu, setMenu] = useState(false)

//     const menuState = () => {
//         if (menu) {
//             setMenu(false)
//         }
//         else {
//             setMenu(true)
//         }
//     }

//     return (
//         <div onClick={menuState} className='bg-[#70908B] text-[#07484A] px-2 py-2'>
//             {!menu ? <MenuIcon /> :
//             <CloseIcon />}
//         </div>
//     )
// }

// export default Navbar



import React from 'react'
import Logo from '../assets/images/logo.png'
import { Link  } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
  
  return (
    <div className='hidden  md:flex justify-between bg-[#c4c4c4] py-3 px-20 sticky top-0 z-50'>
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

        <div>
          {
            isAuthenticated &&
            <div>
              <p>{user.name}</p>
            </div>
          }
        </div>

        {isAuthenticated
          ?
          (<div className='px-4'>
            <button className='bg-[#06484a] text-white px-2 py-1 rounded' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
             Logout
            </button>
          </div>)
          : (<div className='px-4'>
            <button className='bg-[#06484a] text-white px-2 py-1 rounded' onClick={() => loginWithRedirect()}>LOGIN</button>
          </div>)

        }


      </div>

    </div>
  )
}

export default Navbar;












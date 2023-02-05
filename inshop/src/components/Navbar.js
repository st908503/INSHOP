import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';




const Navbar = () => {

    const [menu, setMenu] = useState(false)

    const menuState = () => {
        if (menu) {
            setMenu(false)
        }
        else {
            setMenu(true)
        }
    }

    return (
        <div onClick={menuState} className='bg-[#70908B] text-[#07484A] px-2 py-2'>
            {!menu ? <MenuIcon /> :
            <CloseIcon />}
        </div>
    )
}

export default Navbar



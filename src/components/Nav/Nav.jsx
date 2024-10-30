
import { BiHome } from 'react-icons/bi';
import './nav.css'
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { ImCancelCircle } from 'react-icons/im';



const Nav = () => {
    const [menu, setmenu] = useState(false)
    console.log(menu);

    return (
        <div className={menu ? 'nav_holder' : 'alt_nav_holder'}>
            <NavLink id='house' to='/'><BiHome /> <span>rchitecture</span></NavLink>

            <div className="link">
                <NavLink onClick={() => { setmenu(!menu) }} className='navlinks' to='/'> home</NavLink>
                <NavLink onClick={() => { setmenu(!menu) }} className='navlinks' to='service'>services</NavLink>
                <NavLink onClick={() => { setmenu(!menu) }} className='navlinks' to='portfolio'>portfolio</NavLink>
                <NavLink onClick={() => { setmenu(!menu) }} className='navlinks' to='about'>about</NavLink>
                <NavLink onClick={() => { setmenu(!menu) }} className='navlinks' to='contact'>contact</NavLink>
                <NavLink onClick={() => { setmenu(!menu) }} className='navlinks' to='blog'>blog</NavLink>
            </div>
            <label htmlFor="checkbox">{menu ? <ImCancelCircle /> : <GiHamburgerMenu />}</label>
            <input type="checkbox" value={menu} onClick={() => { setmenu(!menu) }} name="checkbox" id="checkbox" />
        </div>
    )
}

export default Nav
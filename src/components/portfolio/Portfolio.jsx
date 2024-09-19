import React from 'react'
import './portfolio.css'
import { NavLink } from 'react-router-dom'
// import { IoIosArrowBack } from 'react-icons/io'

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <div></div>
            <div className='section'>
                {/* <p>
                    <NavLink className='none' to='/'> <IoIosArrowBack />back</NavLink>
                </p> */}
                <p className='links'>
                    <NavLink className='navlinks' to='residential'> residential</NavLink>
                    <NavLink className='navlinks' to='commercial'> commercial</NavLink>
                    <NavLink className='navlinks' to='institution'> institutional & others</NavLink>
                </p>


            </div>
        </div>
    )
}

export default Portfolio
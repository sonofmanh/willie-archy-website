import React from 'react'
import './Footer.css'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


function Footer() {
    return (
        <div className='Mainfooterdiv'>
            <div className="main_footer_article">
                <header>eilliw architects</header>
                <p className='first_article'>
                    we help customers and affiliates get their imaginations into this reality.no time searching for the best ones,we just build them
                </p>
                <p className='socials'>
                    <FaInstagramSquare className='socials_icons' />
                    <FaFacebookSquare className='socials_icons' />
                    <FaLinkedin className='socials_icons' />
                </p>
            </div>
            <div className="main_footer_article">
                <header>site links</header>
                <p><NavLink className='footernavlinks' to='/'> home</NavLink></p>
                <p><NavLink className='footernavlinks' to='/service'>services</NavLink></p>
                <p><NavLink className='footernavlinks' to='portfolio'>portfolio</NavLink></p>
                <p><NavLink className='footernavlinks' to='/about'>about</NavLink></p>
                <p><NavLink className='footernavlinks' to='/contact'>contact</NavLink></p>
                <p><NavLink className='footernavlinks' to='/blog'>blog</NavLink></p>
            </div>
            <div className="main_footer_article">
                <header>support</header>
                <p><NavLink className='footernavlinks' to='/about'>account</NavLink></p>
                <p><NavLink className='footernavlinks' to='/about'>support center</NavLink></p>
                <p><NavLink className='footernavlinks' to='/about'>feedback</NavLink></p>
                <p><NavLink className='footernavlinks' to='/about'>accessibility</NavLink></p>
            </div>
        </div>

    )
}

export default Footer
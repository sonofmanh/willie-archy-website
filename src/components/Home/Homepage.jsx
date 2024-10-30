import { NavLink } from 'react-router-dom'
import './home.css'
import { ArrowBigRight } from 'lucide-react'
import { MdArrowForwardIos } from 'react-icons/md'
import Footer from '../Footer/Footer'


const Homepage = () => {
    return (
        <div className='home'>
            <video src='/videos/106340-672600365.mp4' autoPlay muted loop className='video' />
            <div className='banner_frame'>
                <div className="second_banner_frame">
                    <div className='Banner_article'>
                        <p className='banner_p'>we deliver exceptional</p>
                        <p className='banner_p'>most beautiful,intelligent and unrivalled tailored</p>
                        <p className='banner_p'>building structure projects in africa</p>
                        <p className='banner_p'>and beyond ...</p>
                        <NavLink className='banner_anchor' to='portfolio'>portfolio<MdArrowForwardIos /> </NavLink>
                    </div>
                </div>
                <div className="third_banner_frame">
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default Homepage
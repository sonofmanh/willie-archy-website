import { NavLink } from 'react-router-dom'
import './home.css'
import { ArrowBigRight } from 'lucide-react'


const Homepage = () => {
    return (
        <div className='home'>
            <video src='/videos/106340-672600365.mp4' autoPlay muted loop className='video' />
            <div>
                <p>we deliver exceptional</p>
                <p>most beautiful,intelligent and unrivalled tailored</p>
                <p>building structure projects in africa</p>
                <p>and beyond</p>
                <NavLink to='portfolio'>portfolio<ArrowBigRight /> </NavLink>
            </div>
        </div>
    )
}
export default Homepage
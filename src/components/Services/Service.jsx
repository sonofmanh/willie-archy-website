import { NavLink } from 'react-router-dom'
import './services.css'
// import { IoIosArrowBack } from 'react-icons/io'

const Service = () => {
    return (
        <div className='service'>
            <div className='section'>
                {/* <p>
                    <NavLink className='navlinks' to='/'> <IoIosArrowBack />back</NavLink>
                </p> */}
                <p className='links'>
                    <NavLink className='navlinks' to='architectural_design'> architectural design</NavLink>
                    <NavLink className='navlinks' to='planning_application'> planning application</NavLink>
                    <NavLink className='navlinks' to='interio/'>interio design</NavLink>
                    <NavLink className='navlinks' to='convoandher/'>conservation/heritage design</NavLink>
                    <NavLink className='navlinks' to='createandconstruct/'>create & construct</NavLink>
                </p>
            </div>
            <div></div>
        </div>
    )
}

export default Service
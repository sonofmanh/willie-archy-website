import React from 'react'
import './arcresident.css'
import { Link } from 'react-router-dom'
import { PiArrowDownFill } from 'react-icons/pi'
import { MdArrowBackIosNew } from 'react-icons/md'
import Footer from '../Footer/Footer'


const Arch_resident = () => {
    return (
        <div className='arc_resident'>
            <div className="arc_resident_frame">
                <div className='arc_frame1'>
                    <div className='arcbox'>
                        <Link to='/service/Architectural_design'><MdArrowBackIosNew className='backarrow' /></Link>
                        <p><span className='one'>Architectural designs</span>  | <span className='two'>residential</span></p>
                        Architectural designs are more than just building blocks...
                        <p className='ancho'>
                            <Link to='#'>read more below</Link>
                        </p>
                    </div>
                </div>

                <div id='frame2' className='arc_frame2'>
                    <div className='arc_frame2_frame'>
                        <div className="img">
                            <img className='frame2_img' src='/public/images/22.jpg' alt="" srcset="" />
                        </div>
                        <div className="article">
                            <h1>
                                residential Architecture
                            </h1>
                            <p>Our residential architecture is conceived and birthed based on the environmental,landscape and client needs.we render and hold every project as such high as we believe that our sorroundings and environment directly and inderictly influences the quality of our lives</p>
                        </div>
                    </div>
                </div>

                <div id='frame3' className='arc_frame3'>
                    <div className='arc_frame3_frame'>
                        <div className="article">
                            <h1>
                                Housing and renovations
                            </h1>
                            <p>known for our residential expertise,our architectural team develop innovative ideas and site specific design solution,bringing together creative vision and technical skills from concepts and screens to construction and reality.specializing on private residential projects, the team has completed project spanning from new building designs, to home renovation and refurbishments across africa and beyond.  </p>
                            {/* <p></p> */}
                        </div>
                        <div className="img">
                            <video src='/public/videos/resident.mp4' autoPlay muted loop className='video' />
                        </div>

                    </div>
                </div>
                <div className='arc_frame4'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Arch_resident
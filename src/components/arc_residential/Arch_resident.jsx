import React from 'react'
import './arcresident.css'
import { Link } from 'react-router-dom'
import { PiArrowDownFill } from 'react-icons/pi'
import { MdArrowBackIosNew } from 'react-icons/md'


const Arch_resident = () => {
    return (
        <div className='arc_resident'>
            <div>
                <div>
                    <Link to='/service/Architectural_design'><MdArrowBackIosNew className='backarrow' /></Link>
                    <p><span className='one'>Architectural designs</span>  | <span className='two'>residential</span></p>
                    Architectural designs are more than just building blocks...
                    <p className='ancho'>
                        <Link to='#frame2'>read more below</Link>
                        {/* <span>
                            <PiArrowDownFill className='green' />
                        </span> */}
                    </p>
                </div>
            </div>

            <section id='#frame2' className='frame2'>
                all
            </section>
        </div>
    )
}

export default Arch_resident
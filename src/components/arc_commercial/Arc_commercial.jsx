import React, { useState } from 'react'
import './arccom.css'
import { NavLink } from 'react-router-dom'
import { PiArrowDownFill } from 'react-icons/pi'
import { MdArrowBackIosNew } from 'react-icons/md'


const Arc_commercial = () => {
    return (
        <div className='arccom'>
            <div>
                <div>
                    <NavLink to='/service/Architectural_design'><MdArrowBackIosNew className='backarrow' /></NavLink>
                    <p><span className='one'>Architectural designs</span>  | <span className='two'>commercial</span></p>
                    design is about a way of living,be it at home or work place, <br />it is our duty to ehance social interactions through good designs
                    <p className='ancho'>
                        <NavLink to='#frame2'>read more below</NavLink>
                        {/* <span>
                            <PiArrowDownFill className='green' />
                        </span> */}
                    </p>
                </div>
            </div>

            <section className='frame2'>
                all
            </section>
        </div>
    )
}

export default Arc_commercial
import React from 'react'
import './Architecture_d.css'
import { NavLink } from 'react-router-dom'

const Architecture_design = () => {
    return (
        <div className='archy'>
            <div className="glassholder">
                <div>
                    <NavLink to='resident'>residential</NavLink>
                </div>
                <hr />
                <div>
                    <NavLink to='Arc_commercial'>commercial</NavLink>
                </div>

                <div className="back">
                    <NavLink to='/Service'>back</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Architecture_design
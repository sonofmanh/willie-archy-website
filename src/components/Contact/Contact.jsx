import { ImLocation2 } from 'react-icons/im'
import './contact.css'
import {  MdMarkEmailUnread } from 'react-icons/md'
import { GiVibratingSmartphone } from "react-icons/gi";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';


const Contact = () => {
    return (
        <div className='contact'>
            <div className="holder">
                <div>
                    <ImLocation2 className='icons' />
                    <p>office address</p>
                </div>
                <div>
                    <GiVibratingSmartphone className='icons' />
                    <p>mobile & social contacts</p>
                    <div>
                        <FaFacebookSquare className='socials_icons' />
                        <a href="#">eilliw architects</a>
                    </div>
                    <div>
                        <FaInstagramSquare className='socials_icons' />
                        <a href="#">eilliw architects</a>
                    </div>
                    <div>
                        <FaLinkedin className='socials_icons' />
                        <a href="#">eilliw architects</a>
                    </div>
                    <div>
                        <FaWhatsappSquare className='socials_icons' />
                        <a href="tel:+2349139211332">+2349139211332</a>
                    </div>
                </div>
                <div>
                    <MdMarkEmailUnread className='icons' />
                    <p>e-mail address</p>
                    <div>
                        <span>@</span>
                        <a href="mailto:Eilliw_architects@gmail.com">eilliw architects</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
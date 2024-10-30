import { ImLocation2 } from 'react-icons/im'
import './contact.css'
import { MdMarkEmailUnread } from 'react-icons/md'
import { GiVibratingSmartphone } from "react-icons/gi";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';
import Footer from '../Footer/Footer';


const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact_frame">
                <div className="contact_holder one">
                    <div className='one_article'>
                        <ImLocation2 className='icons' />
                        <p>office address</p>
                    </div>

                    <div className='one_article'>
                        <GiVibratingSmartphone className='icons' />
                        <p>mobile & social contacts</p>
                        <div className='socialplus'>
                            <FaFacebookSquare className='socials_icons' />
                            <a className='social_icons_links' href="#">eilliw architects</a>
                        </div>
                        <div className='socialplus'>
                            <FaInstagramSquare className='socials_icons' />
                            <a className='social_icons_links' href="#">eilliw architects</a>
                        </div>
                        <div className='socialplus'>
                            <FaLinkedin className='socials_icons' />
                            <a className='social_icons_links' href="#">eilliw architects</a>
                        </div>
                        <div className='socialplus'>
                            <FaWhatsappSquare className='socials_icons' />
                            <a className='social_icons_links' href="tel:+2349139211332">+2349139211332</a>
                        </div>
                    </div>

                    <div className='one_article'>
                        <MdMarkEmailUnread className='icons' />
                        <p>e-mail address</p>
                        <div>
                            <span>@</span>
                            <a className='social_icons_links' href="mailto:Eilliw_architects@gmail.com">eilliw architects</a>
                        </div>
                    </div>
                </div>
                <div className="contact_holder two">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Contact
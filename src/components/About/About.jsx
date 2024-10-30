
import Footer from '../Footer/Footer'
import './about.css'

const About = () => {
    return (
        <div className='about'>
            <div className="about_frame">
                <div className='alpha'>
                    <div className='one'>
                        <h1 className='About_h1'>who <br />we <br />are</h1>
                    </div>
                    <div className='two'>
                        <div className="article">
                            <p>buliding on our established foundation,our team of experienced architects,project managers and staff ask lots of questions -and we listen to your answers.</p>
                        </div>
                        <div className="article">
                            <p>Eilliw_Architectures understands the importance of  environmental stewardship in project design and our team experience with energy and environmental designs,profesionals will approach your project with special attention to sustainable practices. </p>
                        </div>
                    </div>
                </div>
                <div className="about_omega">
                    <div className='omega_sections'></div>
                    <div className='omega_sections'></div>
                    <div className='omega_sections'></div>
                    <div className='omega_sections'></div>
                </div>
                <div className="beta">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default About
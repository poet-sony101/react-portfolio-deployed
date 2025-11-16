import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Sony   </span> <br />Website Developer</span>
                <p className="introPara">I am a skilled web developer with experience in creating<br />visually appealing and user friendly websites.</p>
                <Link to="contact" smooth={true} duration={500}><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/><a href='https://wa.me/+2349159767637'>Hire Me</a></button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;
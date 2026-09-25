import React from 'react';
import './footer.css';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import { 
    GitHubIcon, 
    LinkedInIcon,
    WhatsAppIcon, 
    MailIcon, 
    ArrowUpRightIcon 
} from '../common/Icons';

const Footer = ({ currentView = 'home', onNavigate }) => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNavClick = (view, sectionId) => {
        if (onNavigate) {
            onNavigate(view, sectionId);
        }
    };

    return (
        <footer className="footerWrapper">
            <div className="footerContainer">
                {/* Top Section */}
                <div className="footerTop">
                    <div className="footerBrand">
                        <div className="footerLogoRow">
                            <img src={logo} alt="Oluwaniyi Amao Logo" className="footerLogo" />
                            <span className="footerBrandTitle">Oluwaniyi Amao (Poet Sony)</span>
                        </div>
                        <p className="footerTagline">
                            Full-Stack Developer, Writer & Tech Generalist proficient in React, Next.js, and Node.js. University of Lagos (UNILAG) Applied Physics with Electronics scholar.
                        </p>
                    </div>

                    <div className="footerNav">
                        <span className="footerNavHeader">Quick Navigation</span>
                        {currentView === 'home' ? (
                            <>
                                <Link to="intro" smooth={true} duration={500} offset={-100} className="footerLink">Home</Link>
                                <button className="footerLink" onClick={() => handleNavClick('about')}>About Poet Sony</button>
                                <button className="footerLink" onClick={() => handleNavClick('blog')}>Blog & Writings</button>
                                <Link to="skills" smooth={true} duration={500} offset={-80} className="footerLink">Expertise</Link>
                                <Link to="experience" smooth={true} duration={500} offset={-80} className="footerLink">Experience & Education</Link>
                                <Link to="works" smooth={true} duration={500} offset={-80} className="footerLink">Portfolio</Link>
                                <Link to="clients" smooth={true} duration={500} offset={-80} className="footerLink">Clients</Link>
                                <Link to="contact" smooth={true} duration={500} offset={-80} className="footerLink">Contact</Link>
                            </>
                        ) : (
                            <>
                                <button className="footerLink" onClick={() => handleNavClick('home', 'intro')}>Home</button>
                                <button className={`footerLink ${currentView === 'about' ? 'active' : ''}`} onClick={() => handleNavClick('about')}>About Poet Sony</button>
                                <button className={`footerLink ${currentView === 'blog' ? 'active' : ''}`} onClick={() => handleNavClick('blog')}>Blog & Writings</button>
                                <button className="footerLink" onClick={() => handleNavClick('home', 'skills')}>Expertise</button>
                                <button className="footerLink" onClick={() => handleNavClick('home', 'experience')}>Experience & Education</button>
                                <button className="footerLink" onClick={() => handleNavClick('home', 'works')}>Portfolio</button>
                                <button className="footerLink" onClick={() => handleNavClick('home', 'clients')}>Clients</button>
                                <button className="footerLink" onClick={() => handleNavClick('home', 'contact')}>Contact</button>
                            </>
                        )}
                    </div>

                    <div className="footerConnect">
                        <span className="footerNavHeader">Connect Directly</span>
                        <div className="footerSocialIcons">
                            <a 
                                href="https://wa.me/+2349159767637" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="socialIconBtn" 
                                aria-label="WhatsApp"
                            >
                                <WhatsAppIcon size={18} />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/oluwaniyiamao/" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="socialIconBtn" 
                                aria-label="LinkedIn"
                            >
                                <LinkedInIcon size={18} />
                            </a>
                            <a 
                                href="mailto:amaooluwaniyi18@gmail.com" 
                                className="socialIconBtn" 
                                aria-label="Email"
                            >
                                <MailIcon size={18} />
                            </a>
                            <a 
                                href="https://github.com/poet-sony101" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="socialIconBtn" 
                                aria-label="GitHub"
                            >
                                <GitHubIcon size={18} />
                            </a>
                        </div>
                        <button onClick={scrollToTop} className="backToTopBtn">
                            <span>Back to Top</span>
                            <ArrowUpRightIcon size={14} className="upArrow" />
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footerBottom">
                    <p className="copyrightText">
                        &copy; {currentYear} Oluwaniyi Amao (Poet Sony). All rights reserved.
                    </p>
                    <p className="craftText">
                        Crafted with modern React & dynamic design systems.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
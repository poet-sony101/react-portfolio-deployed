import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import { MenuIcon, CloseIcon, WhatsAppIcon, DownloadIcon } from '../common/Icons';

const Navbar = ({ currentView = 'home', onNavigate }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (view, sectionId) => {
        setShowMenu(false);
        if (onNavigate) {
            onNavigate(view, sectionId);
        }
    };

    return (
        <header className={`navWrapper ${scrolled ? 'navScrolled' : ''}`}>
            <nav className="navbar">
                <div 
                    className="navBrand" 
                    onClick={() => handleNavClick('home', 'intro')}
                    style={{ cursor: 'pointer' }}
                >
                    <img src={logo} alt="Oluwaniyi Amao Logo" className="logo" />
                    <div className="brandText">
                        <span className="brandName">Poet Sony</span>
                        <span className="brandRole">Dev & Physicist</span>
                    </div>
                </div>

                <div className="desktopMenu">
                    {currentView === 'home' ? (
                        <>
                            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="navLink">
                                Home
                            </Link>
                            <button className="navLink" onClick={() => handleNavClick('about')}>
                                About
                            </button>
                            <button className="navLink" onClick={() => handleNavClick('blog')}>
                                Blog
                            </button>
                            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-80} duration={500} className="navLink">
                                Expertise
                            </Link>
                            <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-80} duration={500} className="navLink">
                                Experience
                            </Link>
                            <Link activeClass="active" to="works" spy={true} smooth={true} offset={-80} duration={500} className="navLink">
                                Works
                            </Link>
                            <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-80} duration={500} className="navLink navLinkClients">
                                Clients
                            </Link>
                            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-80} duration={500} className="navLink">
                                Contact
                            </Link>
                        </>
                    ) : (
                        <>
                            <button className="navLink" onClick={() => handleNavClick('home', 'intro')}>
                                Home
                            </button>
                            <button className={`navLink ${currentView === 'about' ? 'active' : ''}`} onClick={() => handleNavClick('about')}>
                                About
                            </button>
                            <button className={`navLink ${currentView === 'blog' ? 'active' : ''}`} onClick={() => handleNavClick('blog')}>
                                Blog
                            </button>
                            <button className="navLink" onClick={() => handleNavClick('home', 'skills')}>
                                Expertise
                            </button>
                            <button className="navLink" onClick={() => handleNavClick('home', 'experience')}>
                                Experience
                            </button>
                            <button className="navLink" onClick={() => handleNavClick('home', 'works')}>
                                Works
                            </button>
                            <button className="navLink navLinkClients" onClick={() => handleNavClick('home', 'clients')}>
                                Clients
                            </button>
                            <button className="navLink" onClick={() => handleNavClick('home', 'contact')}>
                                Contact
                            </button>
                        </>
                    )}
                </div>

                <div className="navActions">
                    <a 
                        href={`${process.env.PUBLIC_URL}/Oluwaniyi_Amao_Resume.pdf`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="cvPillBtn"
                        title="Download Curriculum Vitae (PDF)"
                    >
                        <DownloadIcon size={14} />
                        <span>CV</span>
                    </a>

                    <a 
                        href="https://wa.me/+2349159767637" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="hirePillBtn"
                    >
                        <WhatsAppIcon size={15} />
                        <span>Chat Direct</span>
                    </a>

                    <button 
                        className="mobileMenuToggle" 
                        onClick={() => setShowMenu(!showMenu)} 
                        aria-label="Toggle navigation menu"
                    >
                        {showMenu ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
                    </button>
                </div>

                {/* Mobile Dropdown Drawer */}
                {showMenu && (
                    <div className="mobileDrawer">
                        <div className="mobileDrawerContent">
                            <button 
                                className={`mobileNavItem ${currentView === 'home' ? 'active' : ''}`}
                                onClick={() => handleNavClick('home', 'intro')}
                            >
                                Home
                            </button>
                            <button 
                                className={`mobileNavItem ${currentView === 'about' ? 'active' : ''}`}
                                onClick={() => handleNavClick('about')}
                            >
                                About Poet Sony
                            </button>
                            <button 
                                className={`mobileNavItem ${currentView === 'blog' ? 'active' : ''}`}
                                onClick={() => handleNavClick('blog')}
                            >
                                Blog & Writings
                            </button>
                            <button 
                                className="mobileNavItem"
                                onClick={() => handleNavClick('home', 'skills')}
                            >
                                Expertise & Skills
                            </button>
                            <button 
                                className="mobileNavItem"
                                onClick={() => handleNavClick('home', 'experience')}
                            >
                                Experience & Education
                            </button>
                            <button 
                                className="mobileNavItem"
                                onClick={() => handleNavClick('home', 'works')}
                            >
                                Portfolio Work
                            </button>
                            <button 
                                className="mobileNavItem"
                                onClick={() => handleNavClick('home', 'clients')}
                            >
                                Clients & Proof
                            </button>
                            <button 
                                className="mobileNavItem"
                                onClick={() => handleNavClick('home', 'contact')}
                            >
                                Contact Me
                            </button>
                            <a 
                                href={`${process.env.PUBLIC_URL}/Oluwaniyi_Amao_Resume.pdf`} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="mobileCvBtn"
                                onClick={() => setShowMenu(false)}
                            >
                                <DownloadIcon size={16} />
                                <span>Download Resume (PDF)</span>
                            </a>
                            <a 
                                href="https://wa.me/+2349159767637" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="mobileHireBtn"
                                onClick={() => setShowMenu(false)}
                            >
                                <WhatsAppIcon size={18} />
                                <span>Message on WhatsApp</span>
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
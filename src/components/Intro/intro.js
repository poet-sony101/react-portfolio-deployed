import React from 'react';
import './intro.css';
import profileImg from '../../assets/image.png';
import { Link } from 'react-scroll';
import { 
    WhatsAppIcon, 
    LinkedInIcon,
    GitHubIcon,
    DownloadIcon,
    ArrowUpRightIcon, 
    CodeIcon, 
    GraduationCapIcon, 
    CpuIcon 
} from '../common/Icons';

const Intro = ({ onNavigate }) => {
    return (
        <section id="intro" className="introSection">
            <div className="introContainer">
                {/* Left Column: Hero Copy & Actions */}
                <div className="introContent">
                    <div className="statusWrapper">
                        <span className="status-badge">
                            <span className="status-dot"></span>
                            Available for new projects & roles
                        </span>
                    </div>

                    <h1 className="heroTitle">
                        Transforming bold ideas into <span className="gradient-text">cutting-edge</span> digital reality.
                    </h1>

                    <p className="heroBio">
                        Hi, I'm <strong className="highlightName">Oluwaniyi Amao</strong> (popularly known as <strong className="heroAlias">Poet Sony</strong>) — a versatile 
                        <span className="pillTag">Full-Stack Developer</span>, <span className="pillTag">Applied Physics Scholar</span> & <span className="pillTag">Writer & Poet</span>. 
                        Currently studying B.Sc. in Applied Physics with Electronics at the University of Lagos (UNILAG), I engineer custom, responsive web platforms, scalable backend services, and robust tech infrastructure.
                    </p>

                    <div className="heroActions">
                        <a 
                            href={`${process.env.PUBLIC_URL}/Oluwaniyi_Amao_Resume.pdf`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-primary heroCv"
                            download="Oluwaniyi_Amao_Resume.pdf"
                        >
                            <DownloadIcon size={18} />
                            <span>Download CV</span>
                        </a>

                        <button 
                            onClick={() => onNavigate && onNavigate('about')} 
                            className="btn-secondary heroExplore"
                            style={{ cursor: 'pointer' }}
                        >
                            <span>About Story</span>
                            <ArrowUpRightIcon size={18} />
                        </button>

                        <a 
                            href="https://wa.me/+2349159767637" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="btn-secondary heroCta"
                        >
                            <WhatsAppIcon size={18} />
                            <span>Let's Talk</span>
                        </a>

                        <Link to="experience" smooth={true} duration={600} offset={-80} className="btn-secondary heroExplore">
                            <span>Experience</span>
                            <ArrowUpRightIcon size={18} />
                        </Link>

                        <a 
                            href="https://www.linkedin.com/in/oluwaniyiamao/" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="btn-secondary heroLinkedIn"
                            aria-label="LinkedIn Profile"
                        >
                            <LinkedInIcon size={18} />
                            <span>LinkedIn</span>
                        </a>

                        <a 
                            href="https://github.com/poet-sony101" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="btn-secondary heroGitHub"
                            aria-label="GitHub Profile"
                        >
                            <GitHubIcon size={18} />
                            <span>GitHub</span>
                        </a>
                    </div>

                    {/* Metric Highlights */}
                    <div className="heroMetrics">
                        <div className="metricItem">
                            <span className="metricValue">15+</span>
                            <span className="metricLabel">Clients Served</span>
                        </div>
                        <div className="metricDivider"></div>
                        <div className="metricItem">
                            <span className="metricValue">Full-Stack</span>
                            <span className="metricLabel">React & Next.js</span>
                        </div>
                        <div className="metricDivider"></div>
                        <div className="metricItem">
                            <span className="metricValue">UNILAG</span>
                            <span className="metricLabel">Applied Physics Scholar</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Interactive Profile Showcase */}
                <div className="introVisual">
                    <div className="profileGlowRing"></div>
                    <div className="profileCard glass-card">
                        <div className="profileImageContainer">
                            <img 
                                src={profileImg} 
                                alt="Oluwaniyi Amao - Full-Stack Developer & Tech Generalist" 
                                className="profilePhoto"
                            />
                        </div>

                        {/* Floating Micro-Badges */}
                        <div className="floatingBadge badgeTopLeft">
                            <CodeIcon size={16} className="badgeIconCode" />
                            <span>Full-Stack Dev</span>
                        </div>

                        <div className="floatingBadge badgeBottomRight">
                            <GraduationCapIcon size={16} className="badgeIconDesign" />
                            <span>Applied Physics &bull; UNILAG</span>
                        </div>

                        <div className="floatingBadge badgeBottomLeft">
                            <CpuIcon size={16} className="badgeIconSys" />
                            <span>Hardware & Systems</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
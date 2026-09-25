import React, { useEffect } from 'react';
import './about.css';
import profileImg from '../../assets/image.png';
import { 
    ArrowLeftIcon, 
    BadgeCheckIcon, 
    GraduationCapIcon, 
    WhatsAppIcon, 
    MailIcon,
    BookOpenIcon 
} from '../common/Icons';

const techStack = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'Git & GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' }
];

const certificates = [
    {
        title: "Advanced Diploma in Software Engineering",
        acronym: "ADSE",
        standing: "★ 89.1% Distinction",
        institution: "Aptech Learning",
        location: "Nigeria & Global",
        year: "2024",
        skills: "Next.js, React, Node.js, Python, Django, MySQL, Git"
    },
    {
        title: "Computer Engineering Apprenticeship",
        acronym: "Cert",
        standing: "Completed Apprenticeship",
        institution: "Suf-Del Communications",
        location: "Lagos, Nigeria",
        year: "2023",
        skills: "Motherboard Diagnostics, Electronics Repair, Soldering"
    }
];

const education = [
    {
        degree: "B.Sc., Applied Physics with Electronics",
        status: "In Progress",
        institution: "University of Lagos (UNILAG)",
        period: "2025 — 2029",
        society: "National Association of Physics Students (NAPS)",
        focus: "Electromagnetism, Quantum Mechanics, Electronics Circuit Analysis"
    },
    {
        degree: "Bachelor's Degree, Electrical & Electronics Engineering",
        status: "★ 4.80 CGPA First Class",
        institution: "University of Lagos (UNILAG)",
        period: "2024 — 2025",
        society: "Society of Electrical, Electronics & Computer Engineering Students (SEES)",
        focus: "Circuit Theory, Digital Systems, Signal Processing, Engineering Math"
    }
];

const About = ({ onBack, onNavigate }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="aboutPageWrapper">
            <div className="aboutContainer">
                {/* Back Button */}
                <div className="aboutBackNav">
                    <button 
                        onClick={onBack} 
                        className="aboutBackBtn"
                        aria-label="Back to home"
                    >
                        <ArrowLeftIcon size={16} />
                        <span>Back to Home</span>
                    </button>
                </div>

                {/* Hero Header with Suspended Picture Frame */}
                <section className="aboutHero">
                    {/* The Hanging Picture Frame (Somkene style) */}
                    <div className="hangingFrameWrapper">
                        <div className="hangingPin"></div>
                        <div className="hangingFrameAssembly">
                            {/* SVG Hanging Suspension Wires */}
                            <svg className="hangingWiresSvg" viewBox="0 0 170 32">
                                <line x1="85" y1="4" x2="20" y2="30" stroke="rgba(210, 210, 210, 0.65)" strokeWidth="1.2" />
                                <line x1="85" y1="4" x2="150" y2="30" stroke="rgba(210, 210, 210, 0.65)" strokeWidth="1.2" />
                            </svg>

                            {/* Beveled Metallic Picture Frame */}
                            <div className="outerFrame">
                                <div className="innerMatte">
                                    <img 
                                        src={profileImg} 
                                        alt="Oluwaniyi Amao (Poet Sony)" 
                                        className="framedPhoto" 
                                        draggable="false"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Identity & Headline */}
                    <div className="aboutHeroText">
                        <p className="aboutEyebrow">About Me</p>
                        <h1 className="aboutName">Oluwaniyi Amao</h1>
                        <p className="aboutSubtitle">
                            Software Engineer & Applied Physicist · <span className="aboutAliasHighlight">Poet Sony</span> · 
                            <span className="locationBadge">
                                <span className="nigeriaFlagText">Lagos, Nigeria 🇳🇬</span>
                            </span>
                        </p>
                    </div>
                </section>

                {/* 4 Quick Stat Cards */}
                <section className="aboutStatsGrid">
                    <div className="statCard">
                        <p className="statCardLabel">Experience</p>
                        <p className="statCardValue">4+ Years</p>
                    </div>
                    <div className="statCard">
                        <p className="statCardLabel">Focus</p>
                        <p className="statCardValue">Full-Stack & Systems</p>
                    </div>
                    <div className="statCard">
                        <p className="statCardLabel">Currently</p>
                        <p className="statCardValue">UNILAG & Building</p>
                    </div>
                    <div className="statCard">
                        <p className="statCardLabel">Availability</p>
                        <p className="statCardValue">Open for Projects</p>
                    </div>
                </section>

                {/* Section Divider */}
                <div className="aboutSectionDivider"></div>

                {/* My Story: 2-Column Deep Narrative */}
                <section className="aboutStorySection">
                    <div className="aboutSectionHeader">
                        <span className="aboutSectionTag">Personal Narrative</span>
                        <h2 className="aboutSectionTitle">My Story</h2>
                    </div>

                    <div className="aboutStoryGrid">
                        {/* Column 1 */}
                        <div className="storyCol">
                            <p className="storyParagraph">
                                My path into <strong>software engineering</strong> wasn't ordinary—it began at the rigorous crossroads of <strong>Applied Physics and Electronics at the University of Lagos (UNILAG)</strong>. Studying the fundamental forces of nature—from quantum mechanics and electromagnetic wave equations to discrete mathematical modelling—conditioned my mind to view any complex system through the unshakeable clarity of <span className="storyHighlight">first-principles logic</span>.
                            </p>
                            <p className="storyParagraph">
                                When I transitioned into software architecture, that exact physical intuition translated effortlessly. To me, modern web applications behave just like physical systems: state flows mirror thermodynamic equilibria, network latency behaves like fluid dynamics, and distributed databases demand optimal energy pathways. Building software wasn't merely typing syntax; it became an obsession of turning theoretical ideas into resilient, living machines.
                            </p>
                            <p className="storyParagraph">
                                Over time, I gravitated toward the <strong>full stack</strong>. I refused to be confined to just one layer of an application. From designing intuitive, pixel-perfect frontend interfaces with React and Next.js to engineering robust, containerized microservices and relational database schemas with Node.js, Python, and PostgreSQL—mastering the entire stack gives me the freedom to own products from concept to deployment.
                            </p>
                        </div>

                        {/* Column 2 */}
                        <div className="storyCol">
                            <p className="storyParagraph">
                                Today, I specialise in building <strong>performant, accessible, and visually striking web products</strong>. I care deeply about the invisible details: sub-second time-to-interactive, frictionless micro-interactions, responsive fluid layouts, and predictable backend APIs. I believe the greatest engineering is transparent; users shouldn't have to think about the technology underneath—they should simply be captivated by the experience.
                            </p>
                            <p className="storyParagraph">
                                Beyond the terminal, I am popularly known as <span className="storyPoet">Poet Sony</span>. Writing poetry, delivering spoken word, and engaging in public speaking are not hobbies separated from my code—they are the human foundation of my engineering craft. They instill deep emotional intelligence, acute empathy for the end-user, and the rare ability to articulate complex technical architectures to stakeholders with clarity, charisma, and passion.
                            </p>
                            <p className="storyParagraph">
                                I have had the privilege of collaborating with startups and forward-thinking businesses across <strong>Nigeria, the United Kingdom, and the United States</strong>. Whether optimizing enterprise platforms or building zero-to-one products, I thrive in fast-paced environments where the engineering bar is high and the mission truly matters.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section Divider */}
                <div className="aboutSectionDivider"></div>

                {/* Technologies Grid */}
                <section className="aboutTechSection">
                    <div className="aboutSectionHeader">
                        <span className="aboutSectionTag">Core Stack</span>
                        <h2 className="aboutSectionTitle">Technologies & Tooling</h2>
                    </div>

                    <div className="aboutTechGrid">
                        {techStack.map((tech, idx) => (
                            <div key={idx} className="techItemCard">
                                <div className="techIconWrapper">
                                    <img src={tech.icon} alt={tech.name} className="techIcon" loading="lazy" />
                                </div>
                                <span className="techItemName">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section Divider */}
                <div className="aboutSectionDivider"></div>

                {/* Certificates & Education (2-Column Split) */}
                <section className="aboutCredentialsSection">
                    <div className="aboutCredentialsGrid">
                        {/* Certificates Column */}
                        <div className="credentialCol">
                            <div className="credentialCategoryTitle">
                                <BadgeCheckIcon size={18} />
                                <span>Certifications</span>
                            </div>
                            <div className="credentialList">
                                {certificates.map((cert, idx) => (
                                    <div key={idx} className="credentialCard">
                                        <div className="credentialIconBox">
                                            <BadgeCheckIcon size={20} />
                                        </div>
                                        <div className="credentialBody">
                                            <div className="credentialTitleRow">
                                                <h3 className="credentialTitle">{cert.title}</h3>
                                                <span className="standingPill">{cert.standing}</span>
                                            </div>
                                            <p className="credentialOrg">
                                                <strong>{cert.institution}</strong> · {cert.location}
                                            </p>
                                            <div className="credentialMeta">
                                                <span>Year: {cert.year}</span>
                                                <span>•</span>
                                                <span>{cert.skills}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education Column */}
                        <div className="credentialCol">
                            <div className="credentialCategoryTitle">
                                <GraduationCapIcon size={18} />
                                <span>Education</span>
                            </div>
                            <div className="credentialList">
                                {education.map((edu, idx) => (
                                    <div key={idx} className="credentialCard">
                                        <div className="credentialIconBox">
                                            <GraduationCapIcon size={20} />
                                        </div>
                                        <div className="credentialBody">
                                            <div className="credentialTitleRow">
                                                <h3 className="credentialTitle">{edu.degree}</h3>
                                                <span className="standingPill">{edu.status}</span>
                                            </div>
                                            <p className="credentialOrg">
                                                <strong>{edu.institution}</strong>
                                            </p>
                                            <div className="credentialMeta">
                                                <span>{edu.period}</span>
                                                <span>•</span>
                                                <span className="credentialSociety">🏛️ {edu.society}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Divider */}
                <div className="aboutSectionDivider"></div>

                {/* Bottom Callout / Direct CTA */}
                <div className="aboutCtaBox">
                    <div>
                        <h3 className="aboutCtaTitle">
                            Have an inspiring project or vision?
                        </h3>
                        <p className="aboutCtaDesc">
                            Whether you're looking for full-stack engineering, systems consulting, creative storytelling, or public speaking—let's create something extraordinary together.
                        </p>
                    </div>

                    <div className="aboutCtaActions">
                        <button 
                            type="button"
                            onClick={() => onNavigate && onNavigate('blog')}
                            className="btn-secondary"
                            style={{ cursor: 'pointer', background: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.15)' }}
                        >
                            <BookOpenIcon size={18} />
                            <span>Read My Blog</span>
                        </button>

                        <a 
                            href="https://wa.me/+2349159767637?text=Hi%20Poet%20Sony,%20I%20just%20read%20your%20About%20page%20and%20would%20love%20to%20connect!" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="btn-primary"
                        >
                            <WhatsAppIcon size={18} />
                            <span>Message on WhatsApp</span>
                        </a>

                        <a 
                            href="mailto:amaooluwaniyi18@gmail.com" 
                            className="btn-secondary"
                        >
                            <MailIcon size={18} />
                            <span>Send Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;

import React, { useState } from 'react';
import './experience.css';
import { 
    BriefcaseIcon, 
    GraduationCapIcon, 
    AwardIcon, 
    CalendarIcon, 
    SparklesIcon, 
    ArrowUpRightIcon,
    CodeIcon,
    DownloadIcon,
    CpuIcon
} from '../common/Icons';

const experiences = [
    {
        id: 'freelance',
        role: "Freelance Web Developer",
        company: "Self-employed",
        location: "Lagos, Nigeria",
        flag: "🇳🇬",
        country: "Nigeria",
        period: "2023 — Present",
        type: "Full Client Lifecycle",
        category: "web",
        description: "End-to-end development of custom, responsive web platforms for small businesses and personal brands using React, Next.js, and Tailwind CSS. Managing full client lifecycles: requirement discovery, architectural planning, interface design, performance optimization, and branded polish.",
        skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "UI/UX Architecture", "Client Delivery"]
    },
    {
        id: 'born-king',
        role: "Computer Repair Technician",
        company: "Born King Artistry",
        location: "Lagos, Nigeria",
        flag: "🇳🇬",
        country: "Nigeria",
        period: "Oct 2025",
        type: "Hardware Support",
        category: "it",
        description: "Diagnosed hardware and electronic faults, performed precision component replacements, workstation system upgrades, and preventative maintenance for creative studio operations.",
        skills: ["Hardware Diagnostics", "System Repairs", "Troubleshooting", "Workstation Optimization"]
    },
    {
        id: 'gmg',
        role: "Web Developer",
        company: "GMG Barbershop (The Gentlemen's Group)",
        location: "Abuja, Nigeria",
        flag: "🇳🇬",
        country: "Nigeria",
        period: "May 2025 — Aug 2025",
        type: "On-site Contract",
        category: "web",
        description: "Served as full-time, on-site web developer architecting core brand web initiatives, customer booking interfaces, appointment management systems, and high-performance digital presentation.",
        skills: ["Web Development", "Booking Systems", "Brand Strategy", "Performance Optimization"]
    },
    {
        id: 'techsavvy',
        role: "Digital Marketer",
        company: "Techsavvy Solutions Group",
        location: "Lagos, Nigeria",
        flag: "🇳🇬",
        country: "Nigeria",
        period: "Feb 2025 — Aug 2025",
        type: "Growth Contract",
        category: "creative",
        description: "Spearheaded digital marketing strategy and managed multi-channel campaigns on a seven-month contract, driving brand visibility, engagement, and measurable customer acquisition.",
        skills: ["SEO/SEM", "Content Strategy", "Digital Campaigns", "Analytics", "Social Media Marketing"]
    },
    {
        id: 'logoknox',
        role: "Full-Stack Web Developer",
        company: "Logo Knox",
        location: "Remote",
        flag: "🇺🇸",
        country: "United States (Remote)",
        period: "Feb 2025 — Apr 2025",
        type: "US Remote Engagement",
        category: "web",
        description: "Maintained and enhanced high-volume WordPress platforms using custom HTML, CSS, JavaScript, and PHP, improving site speed, cross-device responsiveness, and client conversion rates.",
        skills: ["WordPress", "JavaScript", "PHP", "HTML5/CSS3", "Speed Optimization"]
    },
    {
        id: 'boucherie',
        role: "Web Developer",
        company: "Boucherie",
        location: "New York, US (Remote)",
        flag: "🇺🇸",
        country: "United States (Remote)",
        period: "2024",
        type: "US Remote Contract",
        category: "web",
        description: "Developed and enhanced responsive web interfaces for US-based hospitality and restaurant branding, ensuring seamless cross-device compatibility, modern visual aesthetics, and fluid user interactions.",
        skills: ["Front-End Development", "Responsive Design", "JavaScript", "UI Implementation"]
    },
    {
        id: 'softlink',
        role: "Content Writer (Apprentice)",
        company: "Softlink.ai",
        location: "United Kingdom (Remote)",
        flag: "🇬🇧",
        country: "United Kingdom (Remote)",
        period: "2024",
        type: "UK Remote Apprenticeship",
        category: "creative",
        description: "Authored technical articles, documentation, and explanatory content covering AI solutions and digital software products for international audiences, aligning copy with product marketing goals.",
        skills: ["Technical Writing", "AI Product Copy", "SEO Writing", "Content Strategy"]
    },
    {
        id: 'creativeminds',
        role: "Junior Graphic Designer / Video Editor",
        company: "Creative Minds Hub",
        location: "Lagos, Nigeria",
        flag: "🇳🇬",
        country: "Nigeria",
        period: "2024",
        type: "Creative Media Contract",
        category: "creative",
        description: "Designed high-converting promotional graphics, UI brand assets, and edited dynamic short-form and long-form video content for multimedia marketing campaigns and creative clients.",
        skills: ["Figma", "Graphic Design", "Video Editing", "Adobe Creative Suite", "Motion Graphics"]
    },
    {
        id: 'newdawn',
        role: "IT Specialist",
        company: "New Dawn Technologies (Pty) Ltd",
        location: "Lagos, Nigeria",
        flag: "🇳🇬",
        country: "Nigeria",
        period: "2022 — 2024",
        type: "IT Infrastructure & Support",
        category: "it",
        description: "Handled enterprise hardware/computer repairs, technical troubleshooting, system maintenance routines, and authored technical documentation across a two-year tenure.",
        skills: ["Hardware Repair", "Troubleshooting", "Technical Writing", "IT Infrastructure"]
    },
    {
        id: 'sufdel',
        role: "Computer Repair Specialist (Apprentice)",
        company: "Suf-Del Communications",
        location: "Lagos, Nigeria",
        flag: "🇳🇬",
        country: "Nigeria",
        period: "Aug 2021 — Sep 2023",
        type: "Technical Apprenticeship",
        category: "it",
        description: "Completed a two-year foundational technical apprenticeship diagnosing and repairing computer hardware, troubleshooting motherboard and peripheral faults, component-level soldering, and providing hands-on customer hardware support.",
        skills: ["Hardware Diagnostics", "Electronics Repair", "Component Upgrades", "Technical Support"]
    }
];

const educationList = [
    {
        id: 'unilag-physics',
        degree: "Bachelor of Science (B.Sc.), Applied Physics with Electronics",
        institution: "University of Lagos (UNILAG)",
        location: "Lagos, Nigeria",
        period: "2025 — 2029",
        status: "In Progress",
        statusClass: "statusProgress",
        accentClass: "physicsAccent",
        iconType: "grad",
        activities: "National Association of Physics Students (NAPS - Physics), Physical & Earth Science Students' Association (PESSA)",
        description: "Pursuing rigorous academic training in Applied Physics with Electronics at UNILAG, synthesizing mathematical modelling, semiconductor physics, signal processing, and computational logic. This analytical foundation provides a distinct first-principles edge in software architecture, algorithm efficiency, and system design.",
        skills: ["Applied Physics", "Electronics Engineering", "Mathematical Modelling", "Computational Logic", "NAPS Member"]
    },
    {
        id: 'unilag-eee',
        degree: "Bachelor's Degree, Electrical and Electronics Engineering",
        institution: "University of Lagos (UNILAG)",
        location: "Lagos, Nigeria",
        period: "2024 — 2025",
        status: "Completed Studies",
        statusClass: "statusCompleted",
        grade: "4.80 CGPA (First Class Standing)",
        accentClass: "eeeAccent",
        iconType: "grad",
        activities: "Society of Electrical, Electronics and Computer Engineering Students [SEES]",
        description: "Completed rigorous engineering training across electrical circuits, digital logic, electronics design, microprocessors, and systems engineering, achieving an outstanding academic standing of 4.80 CGPA.",
        skills: ["4.80 CGPA", "Circuit Analysis", "Digital Logic", "Signal Processing", "Microcontrollers", "SEES Member"]
    },
    {
        id: 'aptech-adse',
        degree: "Advanced Diploma In Software Engineering (ADSE)",
        institution: "Aptech Learning",
        location: "Accredited Professional Training",
        period: "2022 — 2024",
        status: "Verified Credential",
        statusClass: "statusVerified",
        grade: "89.1% (Distinction)",
        accentClass: "certAccent",
        iconType: "award",
        description: "Comprehensive two-year software engineering diploma covering end-to-end web architectures, object-oriented programming, relational databases, cloud deployment, and responsive design systems, graduating with 89.1% distinction.",
        skills: ["89.1% Distinction", "Next.js", "React", "Node.js", "JavaScript (ES6+)", "Python", "Django", "MySQL", "Git & GitHub", "Tailwind CSS", "Bootstrap", "Figma", "UI/UX Design"]
    },
    {
        id: 'sufdel-ce',
        degree: "Computer Engineering (Apprenticeship)",
        institution: "Suf-Del Communications",
        location: "Lagos, Nigeria",
        period: "2021 — 2023",
        status: "Completed Apprenticeship",
        statusClass: "statusTech",
        accentClass: "hardwareAccent",
        iconType: "cpu",
        description: "Completed an immersive two-year foundational technical training apprenticeship diagnosing and repairing computer hardware, troubleshooting motherboard and peripheral electronics, component-level soldering, and workstation maintenance.",
        skills: ["Computer Repairs", "Electronics Repair", "Motherboard Diagnostics", "Soldering & Assembly", "Hardware Systems"]
    }
];

const flagshipProjects = [
    {
        name: "UniConnect",
        role: "Founder / CEO & Full-Stack Developer",
        desc: "Comprehensive social & academic ecosystem engineered specifically for UNILAG students. Features real-time messaging, collaborative study tools, a skills leaderboard, student stories, alumni networking, grade calculation tracker, and rapid emergency contacts.",
        stack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Node.js", "Express", "PostgreSQL", "Socket.io"],
        badge: "Flagship Venture",
        status: "Active Product"
    },
    {
        name: "BudTrack",
        role: "Full-Stack Developer",
        desc: "AI-driven fintech app concept built as an OPay mini-program for Gen Z & Gen Alpha users across Nigeria. Integrates a gamified 'Money Journey' financial literacy map, automated micro-investing options, and a conversational floating AI companion.",
        stack: ["React", "Vite", "Tailwind CSS", "Generative AI", "Fintech UX"],
        badge: "Fintech Innovation",
        status: "Hackathon Concept"
    }
];

const Experience = () => {
    const [activeTab, setActiveTab] = useState('experience');
    const [filterCategory, setFilterCategory] = useState('all');

    const filteredExperiences = filterCategory === 'all' 
        ? experiences 
        : experiences.filter(exp => exp.category === filterCategory);

    const counts = {
        all: experiences.length,
        web: experiences.filter(e => e.category === 'web').length,
        it: experiences.filter(e => e.category === 'it').length,
        creative: experiences.filter(e => e.category === 'creative').length
    };

    return (
        <section id="experience" className="experienceSection">
            <div className="experienceContainer">
                <div className="sectionHeader">
                    <span className="sectionEyebrow">
                        <SparklesIcon size={16} />
                        EXPERIENCE & CREDENTIALS
                    </span>
                    <h2 className="sectionTitle">
                        Proven background, <span className="gradient-text">academic rigor</span> & expertise.
                    </h2>
                    <p className="sectionSubtitle">
                        Bridging rigorous physics-based analytical problem solving, client engineering across 3 continents, and verified software certifications.
                    </p>
                </div>

                {/* Tab Switcher */}
                <div className="expTabSwitcher">
                    <button 
                        className={`expTabBtn ${activeTab === 'experience' ? 'active' : ''}`}
                        onClick={() => setActiveTab('experience')}
                    >
                        <BriefcaseIcon size={17} />
                        <span>Work Experience ({experiences.length})</span>
                    </button>
                    <button 
                        className={`expTabBtn ${activeTab === 'education' ? 'active' : ''}`}
                        onClick={() => setActiveTab('education')}
                    >
                        <GraduationCapIcon size={17} />
                        <span>Education & Credentials ({educationList.length})</span>
                    </button>
                    <button 
                        className={`expTabBtn ${activeTab === 'story' ? 'active' : ''}`}
                        onClick={() => setActiveTab('story')}
                    >
                        <SparklesIcon size={17} />
                        <span>My Story & Philosophy</span>
                    </button>
                    <button 
                        className={`expTabBtn ${activeTab === 'ventures' ? 'active' : ''}`}
                        onClick={() => setActiveTab('ventures')}
                    >
                        <CodeIcon size={17} />
                        <span>Flagship Ventures</span>
                    </button>
                </div>

                {/* Tab 1: Work Experience Timeline */}
                {activeTab === 'experience' && (
                    <div className="timelineWrapper">
                        {/* Sub-Filter Bar */}
                        <div className="expSubFilterBar">
                            <div className="filterPillsGroup">
                                <button 
                                    className={`filterPillBtn ${filterCategory === 'all' ? 'active' : ''}`}
                                    onClick={() => setFilterCategory('all')}
                                >
                                    All Roles ({counts.all})
                                </button>
                                <button 
                                    className={`filterPillBtn ${filterCategory === 'web' ? 'active' : ''}`}
                                    onClick={() => setFilterCategory('web')}
                                >
                                    Software & Web ({counts.web})
                                </button>
                                <button 
                                    className={`filterPillBtn ${filterCategory === 'it' ? 'active' : ''}`}
                                    onClick={() => setFilterCategory('it')}
                                >
                                    IT & Hardware ({counts.it})
                                </button>
                                <button 
                                    className={`filterPillBtn ${filterCategory === 'creative' ? 'active' : ''}`}
                                    onClick={() => setFilterCategory('creative')}
                                >
                                    Growth & Media ({counts.creative})
                                </button>
                            </div>

                            <div className="expScopeBadge">
                                <span>🌍 Global Footprint: 🇳🇬 Nigeria &bull; 🇺🇸 United States &bull; 🇬🇧 United Kingdom</span>
                            </div>
                        </div>

                        {/* Complete 10-Role Timeline */}
                        <div className="timelineList">
                            {filteredExperiences.map((exp, idx) => (
                                <div key={exp.id} className="timelineItem">
                                    <div className="timelineNode">
                                        <div className="nodeDot"></div>
                                        {idx !== filteredExperiences.length - 1 && <div className="nodeLine"></div>}
                                    </div>
                                    <div className="timelineCard glass-card">
                                        <div className="timelineHeader">
                                            <div>
                                                <div className="timelineRoleRow">
                                                    <h3 className="timelineRole">{exp.role}</h3>
                                                    <span className="timelineTypeBadge">{exp.type}</span>
                                                    <span className="countryFlagBadge" title={exp.country}>
                                                        <span className="flagEmoji">{exp.flag}</span>
                                                        <span className="countryName">{exp.country}</span>
                                                    </span>
                                                </div>
                                                <h4 className="timelineCompany">
                                                    {exp.company} &bull; <span className="timelineLoc">{exp.location}</span>
                                                </h4>
                                            </div>
                                            <div className="timelineDate">
                                                <CalendarIcon size={14} />
                                                <span>{exp.period}</span>
                                            </div>
                                        </div>
                                        <p className="timelineDesc">{exp.description}</p>
                                        <div className="timelineSkills">
                                            {exp.skills.map((s, i) => (
                                                <span key={i} className="timelineSkillBadge">{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Download Resume Banner */}
                        <div className="resumeBanner glass-card">
                            <div>
                                <h4 className="resumeBannerTitle">Looking for complete employment history & technical references?</h4>
                                <p className="resumeBannerSubtitle">Download the comprehensive curriculum vitae in standard recruiter PDF format.</p>
                            </div>
                            <a 
                                href={`${process.env.PUBLIC_URL}/Oluwaniyi_Amao_Resume.pdf`} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn-primary"
                                download="Oluwaniyi_Amao_Resume.pdf"
                            >
                                <DownloadIcon size={16} />
                                <span>Download Full CV (PDF)</span>
                            </a>
                        </div>
                    </div>
                )}

                {/* Tab 2: Education & Credentials */}
                {activeTab === 'education' && (
                    <div className="educationWrapper">
                        <div className="eduCardsGrid">
                            {educationList.map((edu) => (
                                <div key={edu.id} className="eduCard glass-card">
                                    <div className="eduCardHeader">
                                        <div className={`eduIconBox ${edu.accentClass}`}>
                                            {edu.iconType === 'grad' && <GraduationCapIcon size={28} />}
                                            {edu.iconType === 'award' && <AwardIcon size={28} />}
                                            {edu.iconType === 'cpu' && <CpuIcon size={28} />}
                                        </div>
                                        <div className="eduStatusBadges">
                                            {edu.grade && (
                                                <span className="eduGradeBadge">
                                                    ★ {edu.grade}
                                                </span>
                                            )}
                                            <span className={`eduStatusBadge ${edu.statusClass}`}>{edu.status}</span>
                                        </div>
                                    </div>

                                    <h3 className="eduDegree">{edu.degree}</h3>
                                    <h4 className="eduInstitution">{edu.institution}</h4>
                                    
                                    <div className="eduMetaRow">
                                        <span className="eduPeriodBadge">
                                            <CalendarIcon size={13} />
                                            <span>{edu.period}</span>
                                        </span>
                                        <span className="eduLocationDot">&bull;</span>
                                        <span className="eduLocation">{edu.location}</span>
                                    </div>

                                    {edu.activities && (
                                        <div className="eduActivities">
                                            <span className="eduActivitiesIcon">🏛️</span>
                                            <span><strong>Activities & Societies:</strong> {edu.activities}</span>
                                        </div>
                                    )}

                                    <p className="eduDesc">{edu.description}</p>

                                    <div className="eduHighlights">
                                        {edu.skills.map((skill, sIdx) => (
                                            <span key={sIdx} className="eduPill">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Tab 3: My Story & Philosophy */}
                {activeTab === 'story' && (
                    <div className="storyWrapper">
                        <div className="storyCard glass-card">
                            <div className="storyHeader">
                                <div className="storyBadge">
                                    <SparklesIcon size={16} />
                                    <span>The Applied Physics & Code Intersection</span>
                                </div>
                                <h3 className="storyTitle">How analytical science shapes my software engineering.</h3>
                            </div>

                            <div className="storyBody">
                                <p>
                                    My journey into software engineering is uniquely grounded in <strong>Applied Physics with Electronics at the University of Lagos (UNILAG)</strong>. 
                                    Studying physical systems—from quantum mechanics and thermodynamics to mathematical modelling—taught me one fundamental truth: 
                                    <em>every complex, chaotic problem can be decomposed into elegant, deterministic first principles.</em>
                                </p>
                                <p>
                                    When I transitioned into code, that exact mental model transferred seamlessly. To me, a full-stack software application is a living physical system:
                                    state changes behave like thermodynamic equilibria, API latency follows network fluid dynamics, and database queries require optimal algorithmic trajectories.
                                </p>
                                <p>
                                    Over the past three years, I have applied this analytical rigor across <strong>15+ client platforms</strong> and international teams in the <strong>US, the UK, and Nigeria</strong>. 
                                    Whether architecting real-time messaging pipelines for <em>UniConnect</em>, engineering AI-powered micro-investing flows for <em>BudTrack</em>, or designing conversion-optimized websites, 
                                    my focus remains unwavering: <strong>fast, scalable, resilient software wrapped in intuitive, pixel-perfect user interfaces</strong>.
                                </p>
                                <p>
                                    Beyond the terminal, I am popularly known as <strong>Poet Sony</strong>. 
                                    Writing poetry, public speaking, and literary expression are not separate from my engineering—they are the human bridge to it. 
                                    They instill deep emotional intelligence, sharp communicative empathy, and the ability to articulate complex technical architectures to any audience with resonance and clarity.
                                </p>
                            </div>

                            <div className="storyPillars">
                                <div className="pillarItem">
                                    <span className="pillarNumber">01</span>
                                    <h5 className="pillarHeading">First-Principles Thinking</h5>
                                    <p className="pillarDesc">Deconstructing business requirements into clean, decoupled, and maintainable software components.</p>
                                </div>
                                <div className="pillarItem">
                                    <span className="pillarNumber">02</span>
                                    <h5 className="pillarHeading">End-to-End Ownership</h5>
                                    <p className="pillarDesc">Navigating every layer—from database schemas and server routes to pixel-perfect interactive UI.</p>
                                </div>
                                <div className="pillarItem">
                                    <span className="pillarNumber">03</span>
                                    <h5 className="pillarHeading">Performance & Precision</h5>
                                    <p className="pillarDesc">Obsessing over micro-interactions, responsive fluid typography, and sub-second load times.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Tab 4: Flagship Ventures */}
                {activeTab === 'ventures' && (
                    <div className="venturesGrid">
                        {flagshipProjects.map((proj, idx) => (
                            <div key={idx} className="ventureCard glass-card">
                                <div className="ventureHeader">
                                    <div className="ventureTopRow">
                                        <span className="ventureBadge">{proj.badge}</span>
                                        <span className="ventureStatus">{proj.status}</span>
                                    </div>
                                    <h3 className="ventureName">{proj.name}</h3>
                                    <h4 className="ventureRole">{proj.role}</h4>
                                </div>
                                <p className="ventureDesc">{proj.desc}</p>
                                <div className="ventureStack">
                                    {proj.stack.map((item, i) => (
                                        <span key={i} className="ventureStackPill">{item}</span>
                                    ))}
                                </div>
                                <div className="ventureFooter">
                                    <a 
                                        href="https://wa.me/+2349159767637?text=Hi%20Poet%20Sony,%20I%20would%20like%20to%20discuss%20your%20project%20" 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="ventureActionBtn"
                                    >
                                        <span>Request Architectural Overview</span>
                                        <ArrowUpRightIcon size={16} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Experience;

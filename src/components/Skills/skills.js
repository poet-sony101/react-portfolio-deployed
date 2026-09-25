import React from 'react';
import './skills.css';
import { 
    CodeIcon, 
    PaletteIcon, 
    TrendUpIcon, 
    CpuIcon, 
    VideoIcon, 
    PenToolIcon,
    SparklesIcon 
} from '../common/Icons';

const skillCategories = [
    {
        id: 'web',
        featured: true,
        icon: <CodeIcon size={28} className="bentoIcon codeAccent" />,
        title: "Full-Stack Web Development",
        categoryBadge: "Core Focus",
        description: "Architecting responsive, high-performance web applications with modular components, fluid layouts, and robust backend integrations.",
        skills: ["React", "Next.js", "JavaScript (ES6+)", "Node.js", "Express", "Python", "Django", "Tailwind CSS", "Bootstrap", "MySQL", "Git & GitHub", "Vercel & Netlify", "WordPress"]
    },
    {
        id: 'design',
        featured: false,
        icon: <PaletteIcon size={28} className="bentoIcon designAccent" />,
        title: "UI/UX & Graphic Design",
        categoryBadge: "Visual Systems",
        description: "Crafting memorable visual identities, marketing collateral, design systems, and intuitive user experiences.",
        skills: ["Figma", "Adobe Photoshop", "Illustrator", "CorelDRAW", "Canva", "Pixelab", "Brand Identity"]
    },
    {
        id: 'analytical',
        featured: true,
        icon: <SparklesIcon size={28} className="bentoIcon analyticalAccent" />,
        title: "Analytical Thinking & Problem Solving",
        categoryBadge: "Core Intelligence",
        description: "Rooted in Applied Physics and first-principles logic. Deconstructing complex technical and business problems into deterministic solutions, driven by critical thinking, quantitative analysis, and high emotional intelligence.",
        skills: ["Problem Solving", "Critical Thinking", "Analytical Skills", "Physics", "Emotional Intelligence", "First-Principles Thinking", "Mathematical Modelling"]
    },
    {
        id: 'hardware',
        featured: false,
        icon: <CpuIcon size={28} className="bentoIcon hardwareAccent" />,
        title: "Systems & Hardware Engineering",
        categoryBadge: "Infrastructure",
        description: "Diagnosing hardware faults, motherboard diagnostics, electronics repairs, local networking, and system security hardening.",
        skills: ["Hardware Diagnostics", "Computer Repairs", "Electronics Repair", "Motherboard Diagnostics", "System Upgrades", "Local Networking"]
    },
    {
        id: 'marketing',
        featured: false,
        icon: <TrendUpIcon size={28} className="bentoIcon marketingAccent" />,
        title: "Digital Growth & Marketing",
        categoryBadge: "Growth Strategy",
        description: "Scaling brand reach through search engine optimization, performance campaigns, data analytics, and targeted messaging.",
        skills: ["SEO", "SEM", "Google Analytics", "Social Media Marketing", "Content Strategy", "Email Campaigns"]
    },
    {
        id: 'video',
        featured: false,
        icon: <VideoIcon size={28} className="bentoIcon videoAccent" />,
        title: "Video Editing & Motion",
        categoryBadge: "Media Production",
        description: "Producing cinematic, dynamic video content and motion graphics tailored for digital audiences and high engagement.",
        skills: ["Adobe Premiere Pro", "After Effects", "Motion Graphics", "Color Grading", "Audio Sync"]
    },
    {
        id: 'writing',
        featured: false,
        icon: <PenToolIcon size={28} className="bentoIcon writingAccent" />,
        title: "Writing, Poetry & Public Speaking",
        categoryBadge: "Literary & Oratory",
        description: "Renowned as Poet Sony — uniting poetry, creative storytelling, impactful public speaking, and lucid technical documentation to move audiences, inspire communities, and articulate complex ideas with emotional clarity.",
        skills: ["Poetry", "Public Speaking", "Writing", "Creative Writing", "Technical Docs", "Tech Blogging", "Storytelling", "Proofreading & Editing"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="skillsSection">
            <div className="skillsContainer">
                <div className="sectionHeader">
                    <span className="sectionEyebrow">
                        <SparklesIcon size={16} />
                        EXPERTISE & DISCIPLINES
                    </span>
                    <h2 className="sectionTitle">
                        A versatile toolkit built for <span className="gradient-text">modern problems</span>.
                    </h2>
                    <p className="sectionSubtitle">
                        Bridging multidisciplinary domains from analytical physics and cognitive problem-solving to full-stack engineering, visual design, hardware systems, and poetic storytelling.
                    </p>

                    {/* Core Competencies Strip */}
                    <div className="skillsPillStrip">
                        <span className="skillsPillLabel">Cognitive Core:</span>
                        <span className="skillsPillItem">💡 Problem Solving</span>
                        <span className="skillsPillItem">🧠 Critical Thinking</span>
                        <span className="skillsPillItem">🤝 Emotional Intelligence</span>
                        <span className="skillsPillItem">⚛️ Physics</span>
                        <span className="skillsPillItem">📊 Analytical Skills</span>
                    </div>
                </div>

                <div className="bentoGrid">
                    {skillCategories.map((item) => (
                        <div 
                            key={item.id} 
                            className={`bentoCard glass-card ${item.featured ? 'bentoCardLarge' : ''}`}
                        >
                            <div className="bentoCardHeader">
                                <div className="bentoIconWrapper">
                                    {item.icon}
                                </div>
                                <span className="bentoCategoryBadge">
                                    {item.categoryBadge || (item.featured ? 'Core Focus' : 'Discipline')}
                                </span>
                            </div>

                            <h3 className="bentoTitle">{item.title}</h3>
                            <p className="bentoDescription">{item.description}</p>

                            <div className="bentoTags">
                                {item.skills.map((skill, idx) => {
                                    const isLinkedInHighlight = ["Problem Solving", "Critical Thinking", "Analytical Skills", "Physics", "Emotional Intelligence"].includes(skill);
                                    const isWritingHighlight = ["Poetry", "Public Speaking", "Writing"].includes(skill);
                                    return (
                                        <span 
                                            key={idx} 
                                            className={`bentoTag ${isLinkedInHighlight ? 'bentoTagHighlight' : ''} ${isWritingHighlight ? 'bentoTagHighlightGold' : ''}`}
                                        >
                                            {skill}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
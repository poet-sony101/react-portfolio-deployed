import React, { useState, useEffect } from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.PNG';
import Portfolio3 from '../../assets/portfolio-3.PNG';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';
import HackathonThumbnail from '../../assets/hackathon-thumbn-ai.png';
import HackathonUniConnect1 from '../../assets/hackathon-uniconnect-1.png';
import HackathonUniConnect2 from '../../assets/hackathon-uniconnect-2.png';
import HackathonKlova from '../../assets/hackathon-klova.jpg';
import HackathonBudTrack from '../../assets/hackathon-budtrack.png';
import { 
    SparklesIcon, 
    ArrowUpRightIcon, 
    WhatsAppIcon, 
    EyeIcon, 
    CloseIcon,
    CheckIcon,
    BriefcaseIcon,
    TrophyIcon,
    RocketIcon
} from '../common/Icons';

/* Commercial & Client Works */
const commercialItems = [
    {
        id: "comm-1",
        title: "StoqBox — Grocery & Essential Box Subscription Platform",
        subtitle: "Full-Stack E-Commerce & Subscription SaaS",
        category: "web",
        categoryLabel: "Web Application",
        accentColor: "#10b981",
        image: Portfolio5,
        imageType: "web",
        summary: "Nigeria's premier grocery & kitchen essentials subscription platform delivering customized staple goods to homes across Lagos.",
        description: "Engineered with a responsive modular architecture, StoqBox enables households and businesses to build personalized staple grocery boxes or choose pre-curated monthly bundles with automated recurring deliveries. Features dynamic cart state management, order tracking dashboards, and seamless payment integration.",
        deliverables: [
            "Custom Box Builder with real-time calorie & budget calculator",
            "Automated monthly recurring subscription engine",
            "Customer orders & delivery status dashboard",
            "Mobile-first responsive design for quick checkout"
        ],
        tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Supabase", "REST API"],
        inquiryText: "Hi Poet Sony, I saw your StoqBox subscription web platform in your portfolio and would like to discuss a project!"
    },
    {
        id: "comm-2",
        title: "GMG Hair Salon & Spa — Booking & Digital Portal",
        subtitle: "Commercial Salon & Spa Client Platform",
        category: "web",
        categoryLabel: "Client Platform",
        accentColor: "#d97706",
        image: Portfolio2,
        imageType: "web",
        summary: "Full-service digital portal for premium hair salon and luxury spa services in Nigeria.",
        description: "Designed and engineered an elegant client experience featuring an online appointment booking engine, treatment catalog with transparent pricing tiers, stylist showcase gallery, and seamless brand identity integration.",
        deliverables: [
            "Online appointment booking with date & stylist selection",
            "Interactive service menu and transparent pricing tables",
            "Responsive client gallery and treatment showcase",
            "Direct WhatsApp and call integration for client inquiries"
        ],
        tags: ["React", "JavaScript", "Responsive UI", "Appointment Engine", "Brand Identity"],
        inquiryText: "Hi Poet Sony, I saw the GMG Hair Salon & Spa website in your portfolio and would like to build something similar!"
    },
    {
        id: "comm-3",
        title: "El Akubé Collection — Fashion Brand & Merchandise Identity",
        subtitle: "Luxury Apparel Identity & Emblem Design",
        category: "design",
        categoryLabel: "Graphic Design",
        accentColor: "#ef4444",
        image: Portfolio1,
        imageType: "graphic",
        summary: "Complete visual identity and merchandise branding for luxury apparel brand El Akubé Collection.",
        description: "Crafted a distinctive, bold brand mark featuring custom curved typography with drop-shadow relief alongside circular geometric apparel emblems and metal pin designs. Perfected for high-end fashion tags, embroidered jackets, and digital lookbooks.",
        deliverables: [
            "Custom bespoke typography lettering with 3D contouring",
            "Geometric circular pin badges and embroidered emblem vectors",
            "Apparel hang-tag system and garment branding guidelines",
            "High-resolution vector assets for screen printing & embroidery"
        ],
        tags: ["Brand Identity", "Merchandise Design", "Typography", "Vector Illustration", "Emblem Design"],
        inquiryText: "Hi Poet Sony, I loved your El Akubé Collection branding design in your portfolio and want to discuss custom branding!"
    },
    {
        id: "comm-4",
        title: "Logo Knox — Digital Creative Agency Platform",
        subtitle: "One-Stop Solution Branding & Designing Agency",
        category: "web",
        categoryLabel: "Agency Platform",
        accentColor: "#8b5cf6",
        image: Portfolio3,
        imageType: "web",
        summary: "Digital experiences engineered to perform — high-converting agency portal for brand-focused creative solutions.",
        description: "A comprehensive digital agency web platform engineered for maximum client conversion. Features dynamic service catalogs, bundled combo pricing packages, interactive portfolio sampler carousels, and live client chat widgets.",
        deliverables: [
            "Multi-tier service & combo pricing packaging architecture",
            "Interactive client onboarding flow with real-time support widget",
            "Portfolio showcase carousels with smooth micro-interactions",
            "SEO-optimized landing pages engineered for high conversion"
        ],
        tags: ["React.js", "Modern CSS", "UI/UX Architecture", "Conversion Funnels", "Web Performance"],
        inquiryText: "Hi Poet Sony, I saw the Logo Knox creative agency platform in your portfolio and have a project to discuss!"
    },
    {
        id: "comm-5",
        title: "Boucherie — Authentic French Gastronomy Portal",
        subtitle: "Traditional Culinary Experience & Digital Menu",
        category: "web",
        categoryLabel: "Culinary Experience",
        accentColor: "#f59e0b",
        image: Portfolio4,
        imageType: "web",
        summary: "Traditional French culinary web application celebrating good food and joie de vivre.",
        description: "An evocative culinary web experience showcasing artisanal French dishes, wine pairings, and dining ambiance. Features responsive sliding hero carousels, seasonal menu breakdowns, and table reservation flows.",
        deliverables: [
            "Interactive sliding hero carousel with pause and play controls",
            "Mobile-first digital menu highlighting ingredients and culinary origins",
            "Online table reservation interface with party size selection",
            "Warm, appetizing typography and dark bistro visual styling"
        ],
        tags: ["React", "Mobile-First", "Interactive Menu", "Visual Storytelling", "Hospitality UI"],
        inquiryText: "Hi Poet Sony, I saw the Boucherie restaurant website in your portfolio and would like to discuss building a restaurant platform!"
    },
    {
        id: "comm-6",
        title: "Story | Board | Films — Cinematic Studio Monogram",
        subtitle: "Film Production & Studio Vector Identity",
        category: "design",
        categoryLabel: "Vector Graphics",
        accentColor: "#06b6d4",
        image: Portfolio6,
        imageType: "graphic",
        summary: "Minimalist monochrome monogram logo and vector identity for film production house Story Board Films.",
        description: "Designed a clean, dynamic monogram combining the letters 'S' and 'B' into a stylized film aperture and roll motif with custom drop-shadow depth. Tailored for cinematic title slates, movie credits, production gear, and digital watermarks.",
        deliverables: [
            "Monochrome geometric monogram logo design",
            "Scale-invariant vector curves suitable for 4K video title slates",
            "Branded watermark lockups for digital film reels and pitch decks",
            "Typography guidelines for studio correspondence and credits"
        ],
        tags: ["Logo Design", "Vector Graphics", "Cinematography", "Monogram", "Iconography"],
        inquiryText: "Hi Poet Sony, I saw your Story Board Films logo and vector design in your portfolio and need a custom brand mark!"
    }
];

/* Hackathon & Innovation Competitions */
const hackathonItems = [
    {
        id: "hack-1",
        name: "Monad Blitz Lagos",
        organizer: "Monad Foundation",
        projectTitle: "Thumbn(AI)l — AI Thumbnail Generator",
        category: "finalist",
        standingBadge: "Top 6 Finalist",
        badgeStyle: "standingGold",
        standingRank: "Top 6",
        hasImage: true,
        image: HackathonThumbnail,
        imageType: "web",
        accentColor: "#f59e0b",
        tagline: "High-CTR AI thumbnail generation platform engineered on Monad's high-throughput ecosystem.",
        summary: "AI thumbnail generation platform designed for creators, digital marketers, and video editors to create high-converting thumbnails in seconds.",
        description: "Built during the high-intensity Monad Blitz Lagos hackathon. Thumbn(AI)l solves the creator bottleneck by utilizing structured prompt styling, multi-aspect ratio rendering (16:9, 1:1, 9:16), dynamic aesthetic themes, and tailored color schemes to generate viral video thumbnails instantly.",
        highlights: [
            "Top 6 placement among hundreds of competitive builders across Lagos",
            "Multi-aspect ratio rendering (YouTube 16:9, Square 1:1, Shorts/TikTok 9:16)",
            "Dynamic style selectors (Bold & Graphic, Minimalist, Cyberpunk, 3D Render)",
            "Fluid UI built with React, Vite, Motion, and Lenis smooth scrolling"
        ],
        tags: ["React", "TypeScript", "Tailwind CSS", "Motion", "Lenis", "AI Prompt Engineering", "Monad"],
        folderRef: "Desktop: AI Thumbnail Generator",
        inquiryText: "Hi Poet Sony, I saw your Thumbn(AI)l project from Monad Blitz Lagos in your portfolio!"
    },
    {
        id: "hack-2",
        name: "PESSA Innovation Challenge (PIC)",
        organizer: "Physical & Earth Science Students' Association (PESSA)",
        projectTitle: "UNICONNECT 1.0",
        category: "finalist",
        standingBadge: "Top 5 (4th Place)",
        badgeStyle: "standingGold",
        standingRank: "4th Place",
        hasImage: true,
        image: HackathonUniConnect1,
        imageType: "web",
        themeGradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
        iconLetter: "U",
        accentColor: "#3b82f6",
        tagline: "Real-time academic peer network & campus collaboration ecosystem for university students.",
        summary: "Campus academic connectivity engine uniting student communities, study pods, and departmental resource sharing.",
        description: "Campus communication and academic resources often remain trapped in disjointed messaging threads. Built UNICONNECT to bridge student peers with real-time websocket messaging, departmental hubs, collaborative study rooms, and campus opportunities. Competed and secured 4th place overall in the Physical & Earth Science Students' Association (PESSA) Innovation Challenge.",
        highlights: [
            "4th place finalist standing in university-wide innovation competition",
            "Real-time websocket communication powered by Socket.io and Axios",
            "Departmental resource hubs and collaborative student study rooms",
            "Intuitive modern UI built with React, Vite, and Framer Motion"
        ],
        tags: ["React", "Vite", "Socket.io", "Axios", "Tailwind CSS", "Framer Motion"],
        folderRef: "Desktop: UniConnect",
        inquiryText: "Hi Poet Sony, I saw your UniConnect project from PESSA Innovation Challenge!"
    },
    {
        id: "hack-3",
        name: "SEES Hackathon 2026",
        organizer: "Society of Electrical, Electronics & Computer Engineering Students (SEES)",
        projectTitle: "UNICONNECT 2.0",
        category: "finalist",
        standingBadge: "11th Place",
        badgeStyle: "standingCyan",
        standingRank: "11th Place",
        hasImage: true,
        image: HackathonUniConnect2,
        imageType: "web",
        themeGradient: "linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)",
        iconLetter: "U2",
        accentColor: "#06b6d4",
        tagline: "High-concurrency distributed campus collaboration architecture with real-time sockets.",
        summary: "High-concurrency distributed campus collaboration platform built to withstand university exam period traffic.",
        description: "The second-generation evolution of UNICONNECT developed during the SEES 2026 Engineering Hackathon. Rebuilt with React 19, Tailwind CSS v4, and distributed backend state handling for instant room synchronization and minimal latency under peak concurrent student load.",
        highlights: [
            "11th place finish in the highly competitive SEES 2026 Engineering Hackathon",
            "Distributed real-time state synchronization with socket.io-client",
            "Low-latency room messaging and study group channels",
            "Upgraded frontend to React 19 and Tailwind CSS v4"
        ],
        tags: ["React 19", "Tailwind CSS v4", "Socket.io-client", "Node.js", "Express", "REST API"],
        folderRef: "Desktop: UniConnect",
        inquiryText: "Hi Poet Sony, I saw your UniConnect 2.0 submission at SEES Hackathon 2026!"
    },
    {
        id: "hack-4",
        name: "PIDEC 1.0 (Project Innovation & Design)",
        organizer: "Engineering & Applied Sciences Council",
        projectTitle: "KLOVA — Drainage Bio-Filter System",
        category: "finalist",
        standingBadge: "Top 7 Finalist",
        badgeStyle: "standingGreen",
        standingRank: "Top 7",
        hasImage: true,
        image: HackathonKlova,
        imageType: "web",
        themeGradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
        iconLetter: "K",
        accentColor: "#10b981",
        tagline: "Passive, modular, multi-stage bio-filter treatment system for contaminated urban drainage water.",
        summary: "Zero-energy passive bio-filtration matrix applying fluid mechanics to purify open metropolitan drainage water.",
        description: "Contaminated runoff and untreated municipal drain water degrade ecosystems across African cities. Leveraged my Applied Physics and environmental science background to pitch KLOVA: a gravity-fed, modular multi-stage bio-filtration system that purifies heavy metal runoff in open metropolitan gutters without requiring electrical power.",
        highlights: [
            "Top 7 Finalist pitched innovation among cross-disciplinary engineering teams",
            "Multi-stage passive filtration matrix removing sediment and chemical contaminants",
            "Zero external power required — 100% gravity and hydrostatic pressure driven",
            "Modular interlocking design for rapid deployment in existing metropolitan gutters"
        ],
        tags: ["Applied Physics", "Fluid Dynamics", "Bio-Filtration Matrix", "Environmental Engineering", "Hardware Modeling"],
        folderRef: "Pitched Engineering Solution",
        inquiryText: "Hi Poet Sony, I read about KLOVA, your bio-filter drainage system from PIDEC 1.0!"
    },
    {
        id: "hack-5",
        name: "OPay Hackathon Challenge",
        organizer: "OPay Nigeria",
        projectTitle: "BudTrack — AI Financial Intelligence Layer",
        category: "finalist",
        standingBadge: "Quarter-Finalist",
        badgeStyle: "standingPurple",
        standingRank: "Quarter-Finalist",
        hasImage: true,
        image: HackathonBudTrack,
        imageType: "mobile",
        themeGradient: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
        iconLetter: "B",
        accentColor: "#8b5cf6",
        tagline: "AI-powered personal finance, cash-flow pulse gauge, and wealth-education mini-program for Gen Z & Gen Alpha.",
        summary: "AI-powered personal finance and wealth-education mini-program designed for OPay's next-generation digital banking app.",
        description: "Engineered BudTrack as an interactive OPay mini-program targeting Nigeria's Gen Z and Gen Alpha. Features a signature 'Cash-Flow Pulse' velocity gauge, real-time spending insights via Recharts, a micro-investment marketplace (T-Bills, index funds), and gamified financial literacy quests.",
        highlights: [
            "Quarter-Finalist standing in the nationwide OPay FinTech Hackathon",
            "Signature 'PulseRing' cash-flow velocity and spending health gauge",
            "Spend insights breakdowns and weekly comparison charts via Recharts",
            "Micro-investment marketplace (T-Bills, index funds) and gamified literacy quests"
        ],
        stack: ["React 18", "Tailwind CSS", "Recharts", "Lucide React", "OPay Mini-Program", "Financial Modeling"],
        folderRef: "Desktop: budtrack",
        inquiryText: "Hi Poet Sony, I saw your BudTrack mini-program from the OPay Hackathon!"
    },
    {
        id: "hack-6",
        name: "PayStack Hackathon",
        organizer: "PayStack / Stripe",
        projectTitle: "Next-Gen Merchant Payments & Split Engine",
        category: "upcoming",
        standingBadge: "Registered & In Prep",
        badgeStyle: "standingAmber",
        standingRank: "Registered",
        hasImage: false,
        themeGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
        iconLetter: "P",
        accentColor: "#f59e0b",
        tagline: "High-throughput payment orchestration, automated split payouts, and developer tooling for African commerce.",
        summary: "Registered and actively preparing for PayStack's developer challenge focusing on African marketplace settlements.",
        description: "Currently architecting an advanced payment layer leveraging PayStack's developer APIs for instant sub-account disbursements, resilient webhook retries, and real-time reconciliation dashboards for multi-vendor African marketplaces.",
        highlights: [
            "Registered participant preparing for the upcoming sprint",
            "Automated multi-party transaction splits and fee deductions",
            "Event-driven webhook queue with automatic retry backoff",
            "Developer-first SDK and interactive integration playground"
        ],
        tags: ["FinTech", "Payment Gateways", "Webhooks", "Node.js", "PostgreSQL", "Developer Tooling"],
        folderRef: "Upcoming Sprint",
        inquiryText: "Hi Poet Sony, let's connect regarding your upcoming PayStack Hackathon submission!"
    },
    {
        id: "hack-7",
        name: "Xylem Global Student Innovation Challenge",
        organizer: "Xylem Watermark",
        projectTitle: "Smart Hydrological Telemetry & Bio-Monitoring",
        category: "upcoming",
        standingBadge: "Challenge Pipeline",
        badgeStyle: "standingBlue",
        standingRank: "Pipeline",
        hasImage: false,
        themeGradient: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
        iconLetter: "X",
        accentColor: "#0284c7",
        tagline: "IoT telemetry and predictive hydrological models addressing urban water security and contamination.",
        summary: "Global research and innovation challenge addressing metropolitan water security through sensor telemetry.",
        description: "In research and proposal formulation: combining Applied Physics sensor probes with edge telemetry to monitor water quality parameters (turbidity, pH, dissolved solids) in real time across urban distribution grids.",
        highlights: [
            "International innovation challenge pipeline entry",
            "Applied Physics sensor integration with low-power wireless telemetry",
            "Predictive contamination alerts and community dashboard alerts",
            "Sustainable, climate-resilient water infrastructure modeling"
        ],
        stack: ["Applied Physics", "IoT Sensors", "Hydrology Modeling", "Telemetry", "Global Water Security"],
        folderRef: "Research & Proposal",
        inquiryText: "Hi Poet Sony, I'm interested in your Xylem Global Water Innovation submission!"
    }
];

const Works = () => {
    const [sectionTab, setSectionTab] = useState('commercial'); // 'commercial' | 'hackathons'
    const [activeCommFilter, setActiveCommFilter] = useState('all');
    const [activeHackFilter, setActiveHackFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    // Close modal on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSelectedProject(null);
            }
        };

        if (selectedProject) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedProject]);

    // Commercial filtering
    const filteredCommercial = activeCommFilter === 'all'
        ? commercialItems
        : commercialItems.filter(p => p.category === activeCommFilter);

    // Hackathon filtering
    const filteredHackathons = activeHackFilter === 'all'
        ? hackathonItems
        : hackathonItems.filter(h => h.category === activeHackFilter);

    return (
        <section id="works" className="worksSection">
            <div className="worksContainer">
                <div className="sectionHeader">
                    <span className="sectionEyebrow">
                        <SparklesIcon size={16} />
                        PORTFOLIO SHOWCASE
                    </span>
                    <h2 className="sectionTitle">
                        Selected works & <span className="gradient-text">digital projects</span>.
                    </h2>
                    <p className="sectionSubtitle">
                        Explore real-world client platforms, commercial software products, and award-winning competitive hackathon solutions crafted by Poet Sony.
                    </p>
                </div>

                {/* Primary Section Switcher: Commercial vs. Hackathons */}
                <div className="worksCategorySwitch">
                    <button 
                        type="button"
                        className={`switchTabBtn ${sectionTab === 'commercial' ? 'active' : ''}`}
                        onClick={() => {
                            setSectionTab('commercial');
                            setActiveCommFilter('all');
                        }}
                    >
                        <BriefcaseIcon size={18} />
                        <span>Client & Company Works</span>
                        <span className="switchCountPill">{commercialItems.length}</span>
                    </button>
                    <button 
                        type="button"
                        className={`switchTabBtn ${sectionTab === 'hackathons' ? 'active' : ''}`}
                        onClick={() => {
                            setSectionTab('hackathons');
                            setActiveHackFilter('all');
                        }}
                    >
                        <TrophyIcon size={18} />
                        <span>Hackathons & Competitions</span>
                        <span className="switchCountPill goldPill">{hackathonItems.length}</span>
                    </button>
                </div>

                {/* ========================================================
                    VIEW 1: COMMERCIAL & CLIENT WORKS
                   ======================================================== */}
                {sectionTab === 'commercial' && (
                    <>
                        {/* Commercial Filter Tabs */}
                        <div className="filterTabs">
                            <button 
                                className={`filterBtn ${activeCommFilter === 'all' ? 'active' : ''}`}
                                onClick={() => setActiveCommFilter('all')}
                            >
                                All Works ({commercialItems.length})
                            </button>
                            <button 
                                className={`filterBtn ${activeCommFilter === 'web' ? 'active' : ''}`}
                                onClick={() => setActiveCommFilter('web')}
                            >
                                Web Applications ({commercialItems.filter(p => p.category === 'web').length})
                            </button>
                            <button 
                                className={`filterBtn ${activeCommFilter === 'design' ? 'active' : ''}`}
                                onClick={() => setActiveCommFilter('design')}
                            >
                                Graphic Design ({commercialItems.filter(p => p.category === 'design').length})
                            </button>
                        </div>

                        {/* Projects Grid */}
                        <div className="projectsGrid">
                            {filteredCommercial.map((project) => (
                                <div 
                                    key={project.id} 
                                    className={`projectCard glass-card ${project.imageType === 'graphic' ? 'cardGraphic' : 'cardWeb'}`}
                                >
                                    {/* Browser Mockup Header */}
                                    <div className="cardHeaderBar">
                                        <div className="windowDots">
                                            <span className="dot dotRed"></span>
                                            <span className="dot dotYellow"></span>
                                            <span className="dot dotGreen"></span>
                                        </div>
                                        <span 
                                            className="projectCategoryPill"
                                            style={{ 
                                                color: project.accentColor,
                                                borderColor: `${project.accentColor}40`,
                                                background: `${project.accentColor}15`
                                            }}
                                        >
                                            {project.categoryLabel}
                                        </span>
                                    </div>

                                    {/* Preview Window */}
                                    <div 
                                        className={`previewContainer ${project.imageType === 'graphic' ? 'previewGraphic' : 'previewWeb'}`}
                                        onClick={() => setSelectedProject(project)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className={`projectImage ${project.imageType === 'graphic' ? 'imageGraphic' : 'imageWeb'}`}
                                            loading="lazy"
                                        />
                                        <div className="previewOverlay">
                                            <button 
                                                type="button"
                                                className="previewBtn"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedProject(project);
                                                }}
                                            >
                                                <EyeIcon size={16} />
                                                <span>View Case Study</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Card Details */}
                                    <div className="cardBody">
                                        <div className="projectHeaderMeta">
                                            <span className="projectSubtitleTag">{project.subtitle}</span>
                                        </div>
                                        <h3 
                                            className="projectTitle"
                                            onClick={() => setSelectedProject(project)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {project.title}
                                        </h3>
                                        <p className="projectDesc">{project.summary}</p>
                                        
                                        <div className="projectTags">
                                            {project.tags.map((tag, idx) => (
                                                <span key={idx} className="projectTag">{tag}</span>
                                            ))}
                                        </div>

                                        <div className="cardFooter">
                                            <button 
                                                type="button"
                                                className="projectActionLink modalTrigger"
                                                onClick={() => setSelectedProject(project)}
                                            >
                                                <span>Case Details</span>
                                                <ArrowUpRightIcon size={14} />
                                            </button>

                                            <a 
                                                href={`https://wa.me/+2349159767637?text=${encodeURIComponent(project.inquiryText)}`}
                                                target="_blank" 
                                                rel="noreferrer" 
                                                className="projectChatLink"
                                                title="Inquire about this project"
                                            >
                                                <WhatsAppIcon size={16} />
                                                <span>Inquire</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* ========================================================
                    VIEW 2: HACKATHONS & INNOVATION CHALLENGES
                   ======================================================== */}
                {sectionTab === 'hackathons' && (
                    <div className="hackathonsSectionWrapper">
                        {/* Hackathon Achievement Stats Banner */}
                        <div className="hackathonStatsBanner">
                            <div className="hackStatBox">
                                <div className="hackStatIcon goldGlow">
                                    <TrophyIcon size={22} />
                                </div>
                                <div className="hackStatContent">
                                    <span className="hackStatNum">4x Top Finalist</span>
                                    <span className="hackStatLabel">Top 4 (PESSA), Top 6 (Monad), Top 7 (PIDEC), QF (OPay)</span>
                                </div>
                            </div>
                            <div className="hackStatDivider"></div>
                            <div className="hackStatBox">
                                <div className="hackStatIcon cyanGlow">
                                    <RocketIcon size={22} />
                                </div>
                                <div className="hackStatContent">
                                    <span className="hackStatNum">Rapid Sprints</span>
                                    <span className="hackStatLabel">24h – 48h zero-to-one prototyping under intense pressure</span>
                                </div>
                            </div>
                            <div className="hackStatDivider"></div>
                            <div className="hackStatBox">
                                <div className="hackStatIcon emeraldGlow">
                                    <SparklesIcon size={22} />
                                </div>
                                <div className="hackStatContent">
                                    <span className="hackStatNum">Cross-Disciplinary</span>
                                    <span className="hackStatLabel">Generative AI, Web3, FinTech & Applied Physics Bio-Filters</span>
                                </div>
                            </div>
                        </div>

                        {/* Hackathon Filter Tabs */}
                        <div className="filterTabs">
                            <button 
                                className={`filterBtn ${activeHackFilter === 'all' ? 'active' : ''}`}
                                onClick={() => setActiveHackFilter('all')}
                            >
                                All Challenges ({hackathonItems.length})
                            </button>
                            <button 
                                className={`filterBtn ${activeHackFilter === 'finalist' ? 'active' : ''}`}
                                onClick={() => setActiveHackFilter('finalist')}
                            >
                                Awarded & Finalists ({hackathonItems.filter(h => h.category === 'finalist').length})
                            </button>
                            <button 
                                className={`filterBtn ${activeHackFilter === 'upcoming' ? 'active' : ''}`}
                                onClick={() => setActiveHackFilter('upcoming')}
                            >
                                Upcoming & Pipeline ({hackathonItems.filter(h => h.category === 'upcoming').length})
                            </button>
                        </div>

                        {/* Hackathon Cards Grid */}
                        <div className="projectsGrid">
                            {filteredHackathons.map((hack) => (
                                <div 
                                    key={hack.id} 
                                    className="projectCard hackathonCard glass-card"
                                >
                                    {/* Card Header Bar */}
                                    <div className="cardHeaderBar">
                                        <div className="hackathonOrgTag">
                                            <span className="hackathonName">{hack.name}</span>
                                        </div>
                                        <span className={`hackStandingBadge ${hack.badgeStyle}`}>
                                            <TrophyIcon size={13} />
                                            <span>{hack.standingBadge}</span>
                                        </span>
                                    </div>

                                    {/* Preview Container: Screenshot or Tech Visualizer */}
                                    <div 
                                        className="previewContainer previewHackathon"
                                        onClick={() => setSelectedProject(hack)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {hack.hasImage ? (
                                            <img 
                                                src={hack.image} 
                                                alt={hack.projectTitle} 
                                                className={`projectImage ${hack.imageType === 'graphic' ? 'imageGraphic' : hack.imageType === 'mobile' ? 'imageMobile' : 'imageWeb'}`}
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div 
                                                className="hackathonVisualizer"
                                                style={{ background: hack.themeGradient }}
                                            >
                                                <div className="visualizerPattern"></div>
                                                <div className="visualizerEmblem">
                                                    <span className="visualizerInitial">{hack.iconLetter}</span>
                                                </div>
                                                <span className="visualizerOrgBadge">{hack.organizer}</span>
                                            </div>
                                        )}
                                        <div className="previewOverlay">
                                            <button 
                                                type="button"
                                                className="previewBtn"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedProject(hack);
                                                }}
                                            >
                                                <EyeIcon size={16} />
                                                <span>Inspect Solution</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="cardBody">
                                        <div className="projectHeaderMeta">
                                            <span className="hackathonProjectTag">{hack.tagline}</span>
                                        </div>
                                        <h3 
                                            className="projectTitle"
                                            onClick={() => setSelectedProject(hack)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {hack.projectTitle}
                                        </h3>
                                        <p className="projectDesc">{hack.summary}</p>
                                        
                                        <div className="projectTags">
                                            {(hack.stack || hack.tags).map((tag, idx) => (
                                                <span key={idx} className="projectTag">{tag}</span>
                                            ))}
                                        </div>

                                        <div className="cardFooter">
                                            <button 
                                                type="button"
                                                className="projectActionLink modalTrigger"
                                                onClick={() => setSelectedProject(hack)}
                                            >
                                                <span>Solution Breakdown</span>
                                                <ArrowUpRightIcon size={14} />
                                            </button>

                                            <a 
                                                href={`https://wa.me/+2349159767637?text=${encodeURIComponent(hack.inquiryText)}`}
                                                target="_blank" 
                                                rel="noreferrer" 
                                                className="projectChatLink"
                                                title="Discuss this hackathon project"
                                            >
                                                <WhatsAppIcon size={16} />
                                                <span>Discuss</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Bottom Callout */}
                <div className="worksCallout">
                    <div>
                        <p className="calloutText">Have an innovation sprint, hackathon team, or custom product in mind?</p>
                        <p className="calloutSub">Whether zero-to-one prototyping or enterprise-grade scaling, let's build something extraordinary.</p>
                    </div>
                    <a 
                        href="https://wa.me/+2349159767637?text=Hi%20Poet%20Sony,%20I'd%20love%20to%20connect%20with%20you%20about%20a%20project/hackathon!" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn-primary"
                    >
                        <WhatsAppIcon size={18} />
                        <span>Connect on WhatsApp</span>
                    </a>
                </div>
            </div>

            {/* Case Study / Solution Lightbox Modal (Works for both Commercial and Hackathons) */}
            {selectedProject && (
                <div 
                    className="projectModalOverlay"
                    onClick={() => setSelectedProject(null)}
                >
                    <div 
                        className="projectModalCard"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="modalHeader">
                            <div className="modalHeaderLeft">
                                {selectedProject.standingBadge ? (
                                    <span className={`hackStandingBadge ${selectedProject.badgeStyle}`}>
                                        <TrophyIcon size={13} />
                                        <span>{selectedProject.standingBadge}</span>
                                    </span>
                                ) : (
                                    <span 
                                        className="projectCategoryPill"
                                        style={{ 
                                            color: selectedProject.accentColor,
                                            borderColor: `${selectedProject.accentColor}40`,
                                            background: `${selectedProject.accentColor}15`
                                        }}
                                    >
                                        {selectedProject.categoryLabel}
                                    </span>
                                )}
                                <span className="modalSubtitle">{selectedProject.name || selectedProject.subtitle}</span>
                            </div>
                            <button 
                                className="modalCloseBtn"
                                onClick={() => setSelectedProject(null)}
                                aria-label="Close modal"
                            >
                                <CloseIcon size={20} />
                            </button>
                        </div>

                        {/* Modal Hero Frame */}
                        <div className="modalImageContainer">
                            {selectedProject.hasImage || selectedProject.image ? (
                                <img 
                                    src={selectedProject.image} 
                                    alt={selectedProject.title || selectedProject.projectTitle} 
                                    className={`modalImage ${selectedProject.imageType === 'graphic' ? 'modalImgGraphic' : selectedProject.imageType === 'mobile' ? 'modalImgMobile' : 'modalImgWeb'}`}
                                />
                            ) : (
                                <div 
                                    className="modalVisualizer"
                                    style={{ background: selectedProject.themeGradient }}
                                >
                                    <div className="visualizerPattern"></div>
                                    <div className="modalVisualizerEmblem">
                                        <span>{selectedProject.iconLetter}</span>
                                    </div>
                                    <span className="modalVisualizerOrg">{selectedProject.organizer}</span>
                                </div>
                            )}
                        </div>

                        {/* Modal Content */}
                        <div className="modalBody">
                            <h2 className="modalTitle">{selectedProject.title || selectedProject.projectTitle}</h2>
                            <p className="modalDescription">{selectedProject.description}</p>

                            {/* Problem & Solution for Hackathons */}
                            {selectedProject.problem && (
                                <div className="modalProblemSolution">
                                    <div className="problemBox">
                                        <span className="boxLabel redText">The Problem</span>
                                        <p className="boxText">{selectedProject.problem}</p>
                                    </div>
                                    <div className="solutionBox">
                                        <span className="boxLabel greenText">The Solution</span>
                                        <p className="boxText">{selectedProject.solution}</p>
                                    </div>
                                </div>
                            )}

                            {/* Key Highlights / Deliverables */}
                            {(selectedProject.deliverables || selectedProject.highlights) && (
                                <div className="modalHighlightsSection">
                                    <h4 className="modalSectionHeading">
                                        {selectedProject.deliverables ? "Key Deliverables & Features" : "Hackathon Highlights & Technical Achievements"}
                                    </h4>
                                    <ul className="modalHighlightsList">
                                        {(selectedProject.deliverables || selectedProject.highlights).map((item, idx) => (
                                            <li key={idx} className="modalHighlightItem">
                                                <div className="highlightCheck">
                                                    <CheckIcon size={14} />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Tags */}
                            <div className="modalTagsSection">
                                <h4 className="modalSectionHeading">Technologies & Disciplines</h4>
                                <div className="projectTags">
                                    {(selectedProject.tags || selectedProject.stack).map((tag, idx) => (
                                        <span key={idx} className="projectTag">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Modal Actions */}
                            <div className="modalActionRow">
                                <a 
                                    href={`https://wa.me/+2349159767637?text=${encodeURIComponent(selectedProject.inquiryText)}`}
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="modalPrimaryBtn"
                                >
                                    <WhatsAppIcon size={18} />
                                    <span>Discuss This Project on WhatsApp</span>
                                </a>
                                <button 
                                    type="button" 
                                    className="modalSecondaryBtn"
                                    onClick={() => setSelectedProject(null)}
                                >
                                    <span>Back to Works</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Works;
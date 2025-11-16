import React from 'react';
import './skills.css';


const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am an experienced web developer with a passion for creating dynamic and user-friendly websites. I have a strong understanding of design and a keen eye for detail. My journey in web development started with a simple HTML and CSS project, and since then, I have honed my skills in various technologies.</span>
            <div className="skillBars">
                <div className="skillBar">
                    01. 
                    <div className="skillBarText">
                        <h2>Website Development</h2>
                        <p>HTML, CSS, JavaScript, React.js, MySQL, Node.js, Python, Django, Tailwind CSS & GitHub</p>
                    </div>
                </div>
                <div className="skillBar">
                    02. 
                    <div className="skillBarText">
                        <h2>Digital Marketing</h2>
                        <p>SEO, SEM, Content Marketing, Social Media Marketing, Email Marketing, Google Analytics & AdWords</p>
                    </div>
                </div>
                <div className="skillBar">
                    03. 
                    <div className="skillBarText">
                        <h2>Computer Repairs</h2>
                        <p>Hardware Design, Troubleshooting, Maintenance, Upgrades, Networking, Security & Sales</p>
                    </div>
                </div>
                <div className="skillBar">
                    04. 
                    <div className="skillBarText">
                        <h2>Content Writing</h2>
                        <p>Blogging, Copywriting, Technical Writing, Creative Writing, Editing & Proofreading</p>
                    </div>
                </div>
                <div className="skillBar">
                    05. 
                    <div className="skillBarText">
                        <h2>Graphics Design</h2>
                        <p>Adobe Photoshop, Illustrator, Pixelab, CorelDRAW, Canva & Figma</p>
                    </div>
                </div>
                <div className="skillBar">
                    06. 
                    <div className="skillBarText">
                        <h2>Video Editing</h2>
                        <p>Adobe Premiere Pro & After Effects</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
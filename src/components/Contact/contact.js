import React, { useState } from 'react';
import './contact.css';
import { 
    WhatsAppIcon, 
    LinkedInIcon,
    GitHubIcon,
    MailIcon, 
    CopyIcon, 
    CheckIcon, 
    SparklesIcon, 
    ArrowUpRightIcon
} from '../common/Icons';

const clientList = [
    { id: '01', name: 'GMG BarberShop', services: 'Web Development' },
    { id: '02', name: 'El Akube Collections', services: 'Graphics Design' },
    { id: '03', name: 'Story-Board Films', services: 'Content Writing & Video Editing' },
    { id: '04', name: 'Softlink.ai', services: 'Content Writing' },
    { id: '05', name: 'Born King Artistry', services: 'Computer Repairs' },
    { id: '06', name: 'Logo Knox', services: 'Website Development' },
    { id: '07', name: 'StoqBox', services: 'Website & App Development' },
    { id: '08', name: 'Poppin', services: 'App Development' },
    { id: '09', name: 'Boucherie', services: 'Website Development' },
    { id: '10', name: 'Fat Rooster', services: 'Website Development' },
    { id: '11', name: 'Suf-Del Communications', services: 'Computer Repairs' },
    { id: '12', name: 'Creative Minds Hub', services: 'Graphics & Video Editing' },
    { id: '13', name: 'New Dawn Technologies', services: 'Content Writing & Computer Repairs' },
    { id: '14', name: 'TechSavvy Solutions', services: 'Digital Marketing' },
    { id: '15', name: 'Bright Future Academy', services: 'Graphics & Video Editing' }
];

const Contact = () => {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState(null); // { type: 'success' | 'error', message: string }

    const userEmail = "amaooluwaniyi18@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(userEmail);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        setFormStatus(null);

        const formData = new FormData(event.target);
        formData.append("access_key", "9ce7ec5d-53b6-4fa4-be60-87de996e14ae");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            const data = await res.json();

            if (data.success) {
                setFormStatus({
                    type: 'success',
                    message: "Thank you! Your message has been sent successfully. I'll get back to you shortly."
                });
                event.target.reset();
            } else {
                setFormStatus({
                    type: 'error',
                    message: data.message || "Something went wrong. Please reach out via WhatsApp or email directly."
                });
            }
        } catch (err) {
            console.error("Submission error:", err);
            setFormStatus({
                type: 'error',
                message: "Network error occurred. Please message directly on WhatsApp (+2349159767637)."
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div id="contactPage" className="contactPageWrapper">
            {/* Clients & Social Proof Section */}
            <section id="clients" className="clientsSection">
                <div className="sectionHeader">
                    <span className="sectionEyebrow">
                        <SparklesIcon size={16} />
                        TRACK RECORD & TRUST
                    </span>
                    <h2 className="sectionTitle">
                        Trusted by diverse <span className="gradient-text">brands & businesses</span>.
                    </h2>
                    <p className="sectionSubtitle">
                        I've partnered with over 15 companies across commerce, tech, creative studios, and education to engineer solutions that make an impact.
                    </p>
                </div>

                {/* Infinite Marquee Strip Row 1 */}
                <div className="marquee-container clientMarquee">
                    <div className="marquee-content">
                        {clientList.concat(clientList).map((client, index) => (
                            <div key={`m1-${index}`} className="marqueeCard glass-card">
                                <span className="marqueeIndex">{client.id}</span>
                                <div className="marqueeInfo">
                                    <h4 className="marqueeClientName">{client.name}</h4>
                                    <span className="marqueeClientService">{client.services}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Clients Grid Preview */}
                <div className="clientsCompactGrid">
                    {clientList.slice(0, 6).map((client) => (
                        <div key={client.id} className="clientGridCard glass-card">
                            <span className="clientGridIndex">{client.id}</span>
                            <div>
                                <h4 className="clientGridName">{client.name}</h4>
                                <span className="clientGridService">{client.services}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modern Contact Hub Section */}
            <section id="contact" className="contactHubSection">
                <div className="contactContainer">
                    {/* Left Column: Direct Outreach Info */}
                    <div className="contactDirect">
                        <span className="sectionEyebrow">
                            <SparklesIcon size={16} />
                            GET IN TOUCH
                        </span>

                        <h2 className="contactDirectTitle">
                            Have a vision in mind? <br />
                            <span className="gradient-text">Let's build it together.</span>
                        </h2>

                        <p className="contactDirectDesc">
                            Whether you need a high-performance web platform, creative & technical writing, poetry or public speaking, or systems engineering — I'm ready to collaborate.
                        </p>

                        <div className="contactQuickCards">
                            {/* WhatsApp Direct Card */}
                            <a 
                                href="https://wa.me/+2349159767637" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="quickCard glass-card"
                            >
                                <div className="quickCardIcon whatsAppAccent">
                                    <WhatsAppIcon size={22} />
                                </div>
                                <div className="quickCardContent">
                                    <span className="quickCardLabel">Instant Messaging</span>
                                    <span className="quickCardValue">+234 915 976 7637</span>
                                </div>
                                <ArrowUpRightIcon size={18} className="quickCardArrow" />
                            </a>

                            {/* LinkedIn Direct Card */}
                            <a 
                                href="https://www.linkedin.com/in/oluwaniyiamao/" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="quickCard glass-card"
                            >
                                <div className="quickCardIcon linkedinAccent">
                                    <LinkedInIcon size={22} />
                                </div>
                                <div className="quickCardContent">
                                    <span className="quickCardLabel">Professional Profile</span>
                                    <span className="quickCardValue">LinkedIn Network</span>
                                </div>
                                <ArrowUpRightIcon size={18} className="quickCardArrow" />
                            </a>

                            {/* GitHub Direct Card */}
                            <a 
                                href="https://github.com/poet-sony101" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="quickCard glass-card"
                            >
                                <div className="quickCardIcon githubAccent">
                                    <GitHubIcon size={22} />
                                </div>
                                <div className="quickCardContent">
                                    <span className="quickCardLabel">Open Source & Code</span>
                                    <span className="quickCardValue">github.com/poet-sony101</span>
                                </div>
                                <ArrowUpRightIcon size={18} className="quickCardArrow" />
                            </a>

                            {/* Email Copy Card */}
                            <div 
                                className="quickCard glass-card emailCard"
                                onClick={handleCopyEmail}
                                title="Click to copy email address"
                            >
                                <div className="quickCardIcon mailAccent">
                                    <MailIcon size={22} />
                                </div>
                                <div className="quickCardContent">
                                    <span className="quickCardLabel">Direct Email</span>
                                    <span className="quickCardValue">{userEmail}</span>
                                </div>
                                <button className="copyBtn" type="button" aria-label="Copy Email">
                                    {copiedEmail ? <CheckIcon size={18} className="copiedIcon" /> : <CopyIcon size={18} />}
                                    <span className="copyTooltip">{copiedEmail ? "Copied!" : "Copy"}</span>
                                </button>
                            </div>
                        </div>

                        {/* Availability Pill */}
                        <div className="availabilityCard">
                            <span className="status-dot"></span>
                            <span>Currently accepting freelance projects & contract engagements.</span>
                        </div>
                    </div>

                    {/* Right Column: Interactive Form */}
                    <div className="contactFormWrapper glass-card">
                        <h3 className="formTitle">Send a Message</h3>
                        <p className="formSubtitle">Fill out the details below and I'll respond within 24 hours.</p>

                        {formStatus && (
                            <div className={`statusAlert ${formStatus.type === 'success' ? 'statusSuccess' : 'statusError'}`}>
                                {formStatus.message}
                            </div>
                        )}

                        <form onSubmit={onSubmit} className="modernForm">
                            <div className="formGroup">
                                <label htmlFor="name" className="formLabel">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    className="formInput" 
                                    placeholder="Jane Doe" 
                                    required 
                                />
                            </div>

                            <div className="formGroup">
                                <label htmlFor="email" className="formLabel">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    className="formInput" 
                                    placeholder="jane@example.com" 
                                    required 
                                />
                            </div>

                            <div className="formGroup">
                                <label htmlFor="service" className="formLabel">Service Needed</label>
                                <select id="service" name="service" className="formSelect" defaultValue="Website Development">
                                    <option value="Website Development">Website Development</option>
                                    <option value="UI/UX & Graphics Design">UI/UX & Graphics Design</option>
                                    <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                                    <option value="Computer Repairs & Systems">Computer Repairs & Systems</option>
                                    <option value="Video Editing & Motion">Video Editing & Motion</option>
                                    <option value="Content & Technical Writing">Content & Technical Writing</option>
                                    <option value="Other Consultation">Other Consultation</option>
                                </select>
                            </div>

                            <div className="formGroup">
                                <label htmlFor="message" className="formLabel">Project Details / Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows={4} 
                                    className="formTextarea" 
                                    placeholder="Tell me about your project, timeline, and goals..." 
                                    required
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="btn-primary submitFormBtn"
                                disabled={submitting}
                            >
                                {submitting ? (
                                    <span>Sending Message...</span>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <ArrowUpRightIcon size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
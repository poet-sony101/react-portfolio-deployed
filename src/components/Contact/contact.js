import React from 'react';
import './contact.css';
import Glogo from '../../assets/Glogo.png';
import Sony from '../../assets/Sony.png';
import Softlink from '../../assets/Softlink.PNG';
import StoryBoards from '../../assets/STORYBOARDS.png';
import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';



const Contact = () => {
    
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9ce7ec5d-53b6-4fa4-be60-87de996e14ae");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    })
    .then((res) => res.json())
    .then((res) =>{
        if (res.success) {
      alert(res.message);
    }
    })
    .catch((err) => {
        console.error("Submission error:", err);
        alert("Something went wrong. Please try again.");
    });

    
  };

    
    return (
        <div id='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <span className="clientDesc">
                    I have had the opportunity to work with a diverse group of companies. 
                    Some of the notable companies/brands I have worked with, and what services I offered to them:
                </span>
                {/* <div className="clientImgs">
                    <img src={Glogo} alt="Client" className="clientImg" />
                    <img src={StoryBoards} alt="Client" className="clientImg" />
                    <img src={Softlink} alt="Client" className="clientImg" />
                    <img src={Sony} alt="Client" className="clientImg" />                   
                </div> */}
                <section id='Clients'>
                <div className="clients">
                <div className="client">
                    01. 
                    <div className="clientText">
                        <h2>GMG BarberShop</h2>
                        <p>My Services Offered:- Website Development and Digital Marketing</p>
                    </div>
                </div>
                <div className="client">
                    02. 
                    <div className="clientText">
                        <h2>El Akube Collections</h2>
                        <p>My Services Offered:- Graphics Design</p>
                    </div>
                </div>
                <div className="client">
                    03. 
                    <div className="clientText">
                        <h2>Story-Board Films</h2>
                        <p>My Services Offered:- Content Writing and Video Editing</p>
                    </div>
                </div>
                <div className="client">
                    04. 
                    <div className="clientText">
                        <h2>Softlink.ai</h2>
                        <p>My Services Offered:- Content Writing</p>
                    </div>
                </div>
                <div className="client">
                    05. 
                    <div className="clientText">
                        <h2>Born King Artistry</h2>
                        <p>My Services Offered:- Computer Repairs</p>
                    </div>
                </div>
                <div className="client">
                    06. 
                    <div className="clientText">
                        <h2>Logo Knox</h2>
                        <p>My Services Offered:- Website Development</p>
                    </div>
                </div>
                <div className="client">
                    07. 
                    <div className="clientText">
                        <h2>ShadowPulse Designs</h2>
                        <p>My Services Offered:- Website Development, Content Writing and Graphics Design</p>
                    </div>
                </div>
                <div className="client">
                    08. 
                    <div className="clientText">
                        <h2>Xave Studios</h2>
                        <p>My Services Offered:- Digital Marketing and Content Writing</p>
                    </div>
                </div>
                <div className="client">
                    09. 
                    <div className="clientText">
                        <h2>Boucherie</h2>
                        <p>My Services Offered:- Website Development</p>
                    </div>
                </div>
                <div className="client">
                    10. 
                    <div className="clientText">
                        <h2>TechFixit</h2>
                        <p>My Services Offered:- Computer Repairs</p>
                    </div>
                </div>
                <div className="client">
                    11. 
                    <div className="clientText">
                        <h2>Suf-Del Communications</h2>
                        <p>My Services Offered:- Computer Repairs</p>
                    </div>
                </div>
                <div className="client">
                    12. 
                    <div className="clientText">
                        <h2>Creative Minds Hub</h2>
                        <p>My Services Offered:- Graphics Design and Video Editing</p>
                    </div>
                </div>
                <div className="client">
                    13. 
                    <div className="clientText">
                        <h2>New Dawn Technologies</h2>
                        <p>My Services Offered:- Content Writing and Computer Repairs</p>
                    </div>
                </div>
                <div className="client">
                    14. 
                    <div className="clientText">
                        <h2>TechSavvy Solutions</h2>
                        <p>My Services Offered:- Website Development and Digital Marketing</p>
                    </div>
                </div>
                <div className="client">
                    15. 
                    <div className="clientText">
                        <h2>Bright Future Academy</h2>
                        <p>My Services Offered:- Website Development and Content Writing</p>
                    </div>
                </div>
            </div>
            </section>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">My inbox is wildly open, whether you want a website, or need any of my other services for your business.</span><br></br>
                <span className="contactDesc">I'm here for you and I will try my possible best to reply you as soon as possible. Thank you.</span>
                <form onSubmit={onSubmit} className="contactForm">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" className="name" placeholder='Enter your name' required/>
                    <label htmlFor="email">Your Email</label>
                    <input type="text" id="email" className="email" placeholder='Enter your email' required />
                    <label htmlFor="message">Write your message here</label>
                    <textarea id="message" name="message" placeholder='Write your message here' required rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <img src={facebookIcon} alt="Facebook" className="link" />
                        <img src={twitterIcon} alt="Twitter" className="link" />
                        <img src={youtubeIcon} alt="YouTube" className="link" />
                        <img src={instagramIcon} alt="Instagram" className="link" />
                    </div>
                </form>
                
            </div>
        </div>
    );
}

export default Contact;
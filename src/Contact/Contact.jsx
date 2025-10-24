import React from 'react'
import './Contact.css'
import myContactWays from "../Data/Contact.json"
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane, FaExternalLinkAlt } from 'react-icons/fa'

const Contact = () => {
    const getMediaIcon = (media) => {
        const icons = {
            'Linkedin': <FaLinkedin />,
            'Github': <FaGithub />,
            'Email': <FaEnvelope />
        };
        return icons[media];
    };

    const getButtonText = (media) => {
        const texts = {
            'Linkedin': 'Connect on LinkedIn',
            'Github': 'View GitHub Profile',
            'Email': 'Send Email'
        };
        return texts[media];
    };

    const getButtonIcon = (media) => {
        return media === 'Email' ? <FaPaperPlane /> : <FaExternalLinkAlt />;
    };

    return (
        <div className="contact">
            <div className='contact-content'>
                <h1 className='contact-title'>Get In Touch</h1>
                <p className='contact-subtitle'>
                    I'm always open to discussing new opportunities, creative projects, 
                    or potential collaborations. Feel free to reach out through any of these platforms.
                </p>
                
                <div className='contact-grid'>
                    {myContactWays.map((media, index) => (
                        <div key={index} className='contact-card'>
                            <div className="contact-icon">
                                {getMediaIcon(media.media)}
                            </div>
                            
                            <h3 className="contact-media">{media.media}</h3>

                            <a
                                href={media.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                <span style={{ marginRight: '8px' }}>
                                    {getButtonIcon(media.media)}
                                </span>
                                {getButtonText(media.media)}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Contact
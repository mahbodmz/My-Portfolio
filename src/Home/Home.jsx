import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import myImage from '../Data/Images/MyImage.jpg';


import { FaGithub, FaArrowRight, FaDownload, FaLinkedin, FaEnvelope } from "react-icons/fa";
const Home = () => {
    return (
        <div className="home">
            <div className="home-content">

                <div className="profile-container">
                    <img src={myImage} alt="Mahbod Mozafary" className='my-image' />
                </div>


                <h1>Mahbod Mozafary</h1>
                <h1>Frontend Developer | React Developer</h1>
                <p>
                    I create fast, modern, and responsive web applications using cutting-edge
                    technologies like React, JavaScript, and modern CSS. Passionate about
                    clean code and exceptional user experiences.
                </p>


                <div className="cta-buttons">
                    <Link to="/projects" className="btn">
                        <FaArrowRight style={{ marginRight: '8px' }} />
                        View My Projects
                    </Link>
                    <Link to="/resume" className="btn">
                        <FaDownload style={{ marginRight: '8px' }} />
                        Download Resume
                    </Link>
                </div>


                <div className="social-links">
                    <a href="https://github.com/mahbodmz" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaGithub className="social-icon" />
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/mahbod-mozafary-25b7aa1a0/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaLinkedin className="social-icon" />
                        LinkedIn
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&to=mahbodmozafary@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link">
                        <FaEnvelope className="social-icon" />
                        Email
                    </a>
                </div>
            </div>

            
            <div className="featured-skills">
                <span>React</span>
                <span>C++</span>
                <span>JavaScript</span>
                <span>CSS3</span>
                <span>HTML5</span>
            </div>

        </div>
    );
}

export default Home;
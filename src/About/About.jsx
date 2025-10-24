import React from 'react';
import './About.css';
import { FaGraduationCap, FaCode, FaRocket } from 'react-icons/fa';

const About = () => {
    const skills = [
        'React', 'JavaScript', 'C++', 'HTML5', 
        'CSS3', 'Git', 'Responsive Design', 'REST APIs'
    ];

    return (
        <div className='about'>
            <div className="about-content">
                <h1>About Me</h1>
                
                <div className="about-card">
                    
                    <p className="about-text">
                        I'm a passionate <strong>Frontend Developer</strong> specializing in building 
                        fast, accessible, and visually appealing web applications using React and 
                        modern JavaScript. My journey began with C++, which gave me a strong 
                        foundation in programming logic and problem-solving.
                    </p>
                    
                    
                    <p className="about-text">
                        Since 2025, I've been deeply focused on <strong>React ecosystem</strong>, 
                        creating projects that emphasize clean code, responsive design, and 
                        exceptional user experiences. I love turning complex ideas into 
                        intuitive and efficient web solutions.
                    </p>
                    
                    
                    <div className="education-section">
                        <div className="education-item">
                            <FaGraduationCap className="education-icon" />
                            <div>
                                <h3 className="education-title">University of Isfahan</h3>
                                <p>Currently pursuing my studies while expanding my expertise in frontend development</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="skills-section">
                        <h3 className="skills-title">
                            <FaCode style={{ marginRight: '10px' }} />
                            Technologies I Work With
                        </h3>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    
                    <p className="about-text">
                        I'm constantly learning and exploring new technologies to enhance 
                        my skills and stay at the forefront of modern web development trends.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
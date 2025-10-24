import React from 'react'
import './Skills.css'
import mySkills from "../Data/Skills.json"
import { FaCode, FaLaptopCode, FaDatabase, FaRobot, FaUsers, FaTrophy } from 'react-icons/fa'

const Skills = () => {
    const getCategoryIcon = (category) => {
        const icons = {
            'Languages': <FaCode />,
            'Frameworks & Libraries': <FaLaptopCode />,
            'Databases & APIs': <FaDatabase />,
            'AI & Prompting': <FaRobot />,
            'Soft Skills': <FaUsers />,
            'Experience': <FaTrophy />
        };
        return icons[category];
    };

    return (
        <div className="skills">
            <div className="skills-content">
                <h1 className="skills-title">My Skills & Expertise</h1>
                
                <div className="skills-grid">
                    {mySkills.map((category, index) => (
                        <div key={index} className="skills-card">
                            <h2 className="skills-category">
                                <span style={{ marginRight: '10px' }}>
                                    {getCategoryIcon(category.category)}
                                </span>
                                {category.category}
                            </h2>
                            <div className="skills-tags">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills

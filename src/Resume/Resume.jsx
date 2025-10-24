import React from 'react'
import './Resume.css'
import { FaDownload, FaFilePdf } from 'react-icons/fa'

const Resume = () => {
    const handleDownload = () => {
        const pdfUrl = '/Files/Mahbod-Mozafary-Resume.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Mahbod-Mozafary-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="resume">
            <div className="resume-content">
                <FaFilePdf className="resume-icon" />
                <h1 className="resume-title">My Resume</h1>
                <p className="resume-description">
                    Download my resume to learn more about my experience, skills, and background. 
                    I'm always open to new opportunities and exciting projects.
                </p>
                <button onClick={handleDownload} className="download-btn">
                    <FaDownload className="btn-icon" />
                    Download Resume
                </button>
                <p className="resume-note">
                    PDF Format • Always up to date
                </p>
            </div>
        </div>
    );
}

export default Resume
import React from 'react'

function Footer() {
    const openLinkedIn = () => {
        window.open("https://www.linkedin.com/in/alexander-clayton-64766090/")
    }

    const openTwitter = () => {
        window.open("https://twitter.com/webdevalexc")
    }

    const openGitHub = () => {
        window.open("https://github.com/alexanderclayton")
    }
    return (
        <div className="footer">
            <p>All Right Reserved 2023</p>
            <div className="social-media">
                <img className="footer-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" onClick={openTwitter} />
                <img className="footer-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" onClick={openGitHub} />
                <img className="footer-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" onClick={openLinkedIn} />
            </div>
        </div>
    )
}

export default Footer
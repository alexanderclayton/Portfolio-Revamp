import React from 'react'

function Contact() {

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
    <div>
        <div>
            <p>Email:</p>
            <a href="mailto:contact@alexclayton.co">contact@alexclayton.co</a>
        </div>
        <div>
            <p>LinkedIn:</p>
            <p onClick={openLinkedIn}>Alexander Clayton</p>
        </div>
        <div>
            <p>Twitter:</p>
            <p onClick={openTwitter}>@webdevalexc</p>
        </div>
        <div>
            <p>GitHub:</p>
            <p onClick={openGitHub}>alexanderclayton</p>
        </div>
    </div>
  )
}

export default Contact
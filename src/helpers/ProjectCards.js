import Kanye from '../assets/kanye-rest-image.jpg'
import Nps from '../assets/group-project-1.jpg'
import Signpost from '../assets/languages-signpost.jpg'

export const ProjectCards = [
    {
        name: "Kanye.rest",
        image: Kanye,
        skills: "HTML, CSS, JavaScript",
        link: "https://alexanderclayton.github.io/kanye.rest/",
        alt: "Kanye holding his arms out in inspiration",
        description: "Although simple, this is my favorite project.  I found the kanye.rest api while traveling down a YouTube rabbit-hole, and decided to play around with it.  The api returns a random Kanye quote json object, that renders on screen at the push of a button.  Easy to use, and equipped with endless inspiration.",
        github: "https://github.com/alexclaytonbootcamp/kanye.rest"
    },
    {
        name: "Group Project #1: NPS Trip Planner",
        image: Nps,
        skills: "HTML, CSS, JavaScript",
        link: "https://cecurtiss.github.io/parks-and-weather-app/index.html",
        alt: "Beautiful national park scene",
        description: "Our first group project in the KU Coding Bootcamp.  We decided to create a US National Park trip planner utilizing the NPS.gov api and the OpenWeather api.  This was a fun exercise, and really helped build my skills.",
        github: "https://github.com/CECurtiss/parks-and-weather-app"
    },
    {
        name: "Hello from the World",
        image: Signpost,
        skills: "HTML, CSS, JavaScript",
        link: "https://alexanderclayton.github.io/Hello-From-the-World/",
        alt: "Signpost pointing towards different languages",
        description: "This was a project I created when we learned how to navigate throughout HTML pages.  It's not the most optimized code, but it was really interesting to work with the different languages, and the CSS styling was quite a bit of fun.",
        github: "https://github.com/alexclaytonbootcamp/Hello-From-the-World"
    }
]
import apart from '../public/projects/apart.svg'
import apple from '../public/projects/apple.svg'
import weather from '../public/projects/weather.svg'
import rw from '../public/projects/rw.svg'
import artificium from '../public/projects/artificium.svg'
export const projects = [
    {
        project_image: artificium,
        project_tittle:"ARTIFICIUM",
        project_subtittle:"Web chat app ( In construction! )",
        project_description:"Artificium is a discord-based app with a unique design. The user will be able to set up a new account, log in using a form or google. Regardless of which login method the user chooses, his request to access the application data and its further parts will always be authenticated and checked. In the further part, the user can set up their chat, manage them, join new ones, add and remove friends, and above all, exchange messages with other users and more.",
        tech_array: ["Javascript", "TypeScript", "React", "Next", "Redux", "Tailwind", "GoogleProvider", "NextAuth", "Node", "Express", "MongoDB"],
        link:"",
        github_link:"https://github.com/Regnar110/artificium"
    },
    {
        project_image: apart,
        project_tittle:"APART",
        project_subtittle:"E-commerce platform",
        project_description: " A reproduction of the APART jewelry store. The website has implemented functionalities such as login, registration, wish list, shopping cart, STRIPE payments, content management system to facilitate product management and mo0re.",
        tech_array: ["Javascript", "TypeScript", "React", "Next", "Redux", "Tailwind", "Sanity CMS", "MongoDB", "Stripe", "MUI"],
        link:"https://apartredesign.netlify.app/",
        github_link:"https://github.com/Regnar110/apart_redesign"
    },
    {
        project_image: apple,
        project_tittle:"APPLE",
        project_subtittle:"E-commerce platform",
        project_description: "This is a new design proposal for the APPLA store. With this project, I focused on implementing functionalities such as logging in via Google, shopping cart, shopping via the STRIPE platform. In addition, with the help of the SANITY content management system, it was possible to manage products using an external system without the need to change the code.",
        tech_array: ["Javascript", "TypeScript", "React", "Next", "Redux", "Tailwind", "Sanity CMS", "Stripe"],
        link:"https://devbymat-appleredesign.netlify.app/",
        github_link:"https://github.com/Regnar110/apple_redesign"
    },
    // {
    //     project_image: weather,
    //     project_tittle:"Weather App",
    //     project_subtittle:"Weather forecasting application",
    //     project_description: "It is an application that shows the current weather with a forecast for the next seven days. Several APIs were used here, such as PlacesAPI, GeoLocationAPI OpenMeteoApI and others. The Front End of the Application was created with the help of React and the BackEnd with the help of Node.js + Express.js.",
    //     tech_array: ["Javascript", "React", "SCSS", "Node.js", "Express.js"],
    //     link:"https://regnar110weatherapp.netlify.app/",
    //     github_link:"https://github.com/Regnar110/react_weather"
    // },
    {
        project_image: rw,
        project_tittle:"Roofing company website",
        project_subtittle:"Roofing company website",
        project_description: "The website of the RW roofing company presenting the company's services, projects and certificates.",
        tech_array: ["Javascript", "React", "React-Router", "SCSS", "Bootstrap"],
        link:"https://rw-test-site.netlify.app/",
        github_link:"https://github.com/Regnar110/rw-roofing"
    },
]
import { FaNodeJs } from "react-icons/fa"
import HomePage from "./HomePage"
import { useEffect } from "react"
import { useState } from "react"
// import { ref, get } from "firebase/database"
// import { database } from "@/firebase"

// async function getData() {

//   return await (await get(ref(database))).val()

//   const DB_URL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL + '/.json'
//   const res = await fetch(DB_URL, { cache: 'no-store' })
//   const data = res.json()
  
//   return data;
// }

export default async function page() {
  // const [isClient, setIsClient] = useState(false)
 
  // useEffect(() => {
  //   setIsClient(true)
  // }, [])

  // const data = await getData();
  const data = {
    "main": {
      "name": "Bhushan Wanjari",
      "shortDesc": "I am a Full Stack Web Developer, Creating Web Applications and APIs using MERN Stack And Django.",
      "titles": [
        "Backend Development",
        "Frontend Development",
        "Competitive Programming",
      ],
      "heroImage": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
      "techStackImages": [
        "https://img.icons8.com/color/144/000000/material-ui.png",
        "https://img.icons8.com/color/144/000000/html-5--v1.png",
        "https://img.icons8.com/color/144/000000/redux.png",
        "https://img.icons8.com/color/144/000000/nodejs.png",
      ]
    },
    "about": {
      "aboutImage": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
      "aboutImageCaption": "< I build Cool stuff 🚀/>",
      "title": "Full Stack Developer",
      "about": "I am a Full-Stack developer based in Nagpur, India. I'm an Computer Science Undergraduate, and my journey in web development began during my first year of college. I'm passionate about creating beautiful, functional, and user-friendly websites and applications, and I'm constantly pushing myself to learn and grow as a developer. Love building cool featured aplications and usefull projects.",
      "callUrl": "",
      "resumeUrl": ""
    },
    "socials": [
      {
        "icon": "FaLinkedin",
        "name": "LinkedIn",
        "link": "https://www.linkedin.com/in/bhushan-wanjari-952042213/"
      },
      {
        "icon": "FaGithub",
        "name": "Github",
        "link": "https://github.com/Bhushan21z"
      },
      {
        "icon": "FaInstagram",
        "name": "Instagram",
        "link": "https://www.instagram.com/"
      },
      {
        "icon": "FaTwitter",
        "name": "Twitter",
        "link": "https://twitter.com/BHUSHANWANJARI9"
      }
    ],
    "skills": [
      {
        "name": "JavaScript",
        "image": "https://img.icons8.com/color/144/null/javascript--v1.png",
        "category": "Frontend"
      },
      {
        "name": "NEXTJs",
        "image": "https://jigarsable.vercel.app/nextjs.svg",
        "category": "Frontend"
      },
      {
        "name": "ReactJs",
        "image": "https://img.icons8.com/officel/480/react.png",
        "category": "Frontend"
      },
      {
        "name": "TypeScript",
        "image": "https://img.icons8.com/color/480/typescript.png",
        "category": "Frontend"
      },
      {
        "name": "Material Ui",
        "image": "https://img.icons8.com/color/480/material-ui.png",
        "category": "Frontend"
      },
      {
        "name": "Redux",
        "image": "https://img.icons8.com/color/480/redux.png",
        "category": "Frontend"
      },
      {
        "name": "Tailwind CSS",
        "image": "https://img.icons8.com/color/480/tailwind_css.png",
        "category": "Frontend"
      },
      {
        "name": "Bootstrap",
        "image": "https://img.icons8.com/color/480/bootstrap.png",
        "category": "Frontend"
      },
      {
        "name": "HTML5",
        "image": "https://img.icons8.com/color/480/html-5--v1.png",
        "category": "Frontend"
      },
      {
        "name": "CSS3",
        "image": "https://img.icons8.com/color/480/css3.png",
        "category": "Frontend"
      },
      /////////
      {
        "name": "NodeJS",
        "image": "https://img.icons8.com/color/480/nodejs.png",
        "category": "Backend"
      },
      {
        "name": "Express",
        "image": "https://img.icons8.com/ios/500/express-js.png",
        "category": "Backend"
      },
      {
        "name": "MongoDB",
        "image": "https://img.icons8.com/color/480/mongodb.png",
        "category": "Backend"
      },
      {
        "name": "MySQL",
        "image": "https://img.icons8.com/color/480/mysql-logo.png",
        "category": "Backend"
      },
      {
        "name": "Django",
        "image": "https://img.icons8.com/color/480/django.png",
        "category": "Backend"
      },
      {
        "name": "Flask",
        "image": "https://img.icons8.com/ios/500/flask.png",
        "category": "Backend"
      },
      {
        "name": "FastAPI",
        "image": "https://img.icons8.com/material-two-tone/96/lightning-bolt--v1.png",
        "category": "Backend"
      },
      {
        "name": "JAVA",
        "image": "https://img.icons8.com/color/480/java-coffee-cup-logo--v1.png",
        "category": "Backend"
      },
      {
        "name": "Amazon AWS",
        "image": "https://img.icons8.com/color/480/amazon-web-services.png",
        "category": "Backend"
      },
      {
        "name": "Google Cloud",
        "image": "https://img.icons8.com/color/480/google-cloud.png",
        "category": "Backend"
      },
      ///////
      {
        "name": "Solidity",
        "image": "https://img.icons8.com/color/480/solidity.png",
        "category": "WEB3"
      },
      {
        "name": "Ethereum",
        "image": "https://img.icons8.com/color/480/000000/ethereum.png",
        "category": "WEB3"
      },
      {
        "name": "Web3.js",
        "image": "https://seeklogo.com/images/W/web3js-logo-62DEE79B50-seeklogo.com.png",
        "category": "WEB3"
      },
      {
        "name": "IPFS",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ipfs-logo-1024-ice-text.png/768px-Ipfs-logo-1024-ice-text.png",
        "category": "WEB3"
      },
      {
        "name": "Alchemy",
        "image": "https://assets.website-files.com/6086f3afee58e6a9bb6c8053/63eaaa1951955d2e3352753d_alchemy-mark-david-philipson.png",
        "category": "WEB3"
      },
      {
        "name": "Hardhat",
        "image": "https://seeklogo.com/images/H/hardhat-logo-888739EBB4-seeklogo.com.png",
        "category": "WEB3"
      },
      //////
      {
        "name": "Git/GitHub",
        "image": "https://img.icons8.com/material-outlined/96/null/github.png",
        "category": "Tools"
      },
      {
        "name": "Docker",
        "image": "https://img.icons8.com/fluency/240/docker.png",
        "category": "Tools"
      },
      {
        "name": "Seleinum",
        "image": "https://img.icons8.com/ios/500/selenium-test-automation.png",
        "category": "Tools"
      },
      {
        "name": "Postman",
        "image": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png",
        "category": "Tools"
      }
    ],
    "projects": [
      ///////
      {
        "name": "PayEth",
        "techstack": "Solidity, ReactJs, Web3.js, Alchemy, Hardhat, IPFS",
        "category": "WEB3",
        "image": "https://imgtr.ee/images/2023/09/22/2e320fe90e716e6843a57b6896344714.png",
        "links": {
          "code": "https://github.com/Bhushan21z/Government-to-Vendor-Payment-Tracking-System",
          "video": "",
          "visit": "https://payment-tracking-system.netlify.app//"
        }
      },
      {
        "name": "Github Crypt",
        "techstack": "Solidity, ReactJs, Web3.js, Alchemy, Hardhat, IPFS",
        "category": "WEB3",
        "image": "https://imgtr.ee/images/2023/09/22/9b11e9bce879e7ff7c81e917084c833e.png",
        "links": {
          "code": "https://github.com/Bhushan21z/GithubCrypt",
          "video": "https://youtu.be/B4ZzTqYxtDo?si=uQSTfDzWhtW9He8I",
          "visit": "https://githubcrypt.netlify.app/"
        }
      },
      //////
      {
        "name": "Skill Sensei",
        "techstack": "NodeJs, Express, MongoDB, ReactJs, Material UI",
        "category": "Full Stack",
        "image": "https://user-images.githubusercontent.com/82889656/232333920-278c000c-8cdd-46b4-9fb8-09bc5603d510.png",
        "links": {
          "code": "https://github.com/Bhushan21z/SkillSensei",
          "video": "",
          "visit": "https://theskillsensei.netlify.app/"
        }
      },
      {
        "name": "College WIT",
        "techstack": "Django Rest APIs, Firebase, ReactJs, Material UI",
        "category": "Full Stack",
        "image": "https://imgtr.ee/images/2023/09/22/ff58b44295d58565278b71af5c8e3206.png",
        "links": {
          "code": "https://github.com/College-WIT/College_Wit_Website",
          "video": "",
          "visit": "https://collegewit.netlify.app/"
        }
      },
      {
        "name": "Frontend Scoring Engine",
        "techstack": "Flask, Docker, Puppeteer, NodeJs, MySQL, ReactJs, Material UI, AWS",
        "category": "Full Stack",
        "image": "https://imgtr.ee/images/2023/09/22/2b60d88a4260bcb1619e9ccc0b0e048c.png",
        "links": {
          "code": "",
          "video": "https://youtu.be/mEUekdm_AfE?si=iQ1GFfntwW3gz3x3",
          "visit": "https://frontend-scoring-engine.netlify.app/"
        }
      },
      /////
      {
        "name": "Bird Game",
        "techstack": "Solidity, ReactJs, Web3.js, Alchemy, Hardhat, IPFS",
        "category": "All",
        "image": "https://imgtr.ee/images/2023/09/22/21f765dabda1b323e208faab286fd97e.png",
        "links": {
          "code": "https://github.com/Bhushan21z/bird-game",
          "video": "",
          "visit": "https://bhushan21z.github.io/bird-game/"
        }
      },
      {
        "name": "Mario Game",
        "techstack": "HTML, CSS, JavaScript",
        "category": "All",
        "image": "https://imgtr.ee/images/2023/09/22/330b8ad01a4a3253345ae2c4a2002789.png",
        "links": {
          "code": "https://github.com/Bhushan21z/mario_game",
          "video": "",
          "visit": "https://bhushan21z.github.io/mario_game/"
        }
      },
      {
        "name": "Musi-Ween",
        "techstack": "HTML, CSS, JavaScript, Bootstrap",
        "category": "All",
        "image": "https://imgtr.ee/images/2023/09/22/5cef9edd489ff169cb6acfc342e1acf8.png",
        "links": {
          "code": "https://github.com/Bhushan21z/Music-Player",
          "video": "",
          "visit": "https://bhushan21z.github.io/Music-Player/"
        }
      },
      {
        "name": "URL Shortner",
        "techstack": "Django, SQLite, HTML, CSS, Javascript",
        "category": "All",
        "image": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        "links": {
          "code": "https://github.com/Bhushan21z/UrlShortnerre",
          "video": "",
          "visit": "https://bw-md-django-urlshortner.herokuapp.com/"
        }
      },
      {
        "name": "Secure Me",
        "techstack": "Django, SQLite, HTML, CSS, Javascript",
        "category": "All",
        "image": "https://imgtr.ee/images/2023/09/22/7a0bf3ad0a51e0da01fa5327e026a311.png",
        "links": {
          "code": "https://github.com/Bhushan21z/Secure-mee",
          "video": "",
          "visit": "https://secure-mee.herokuapp.com/"
        }
      },
      {
        "name": "Resume Analyzer",
        "techstack": "Python, NodeJs, Express, ReactJs, Material UI",
        "category": "All",
        "image": "https://imgtr.ee/images/2023/09/22/d31cff37996afc82a67e6bc1f14b9697.png",
        "links": {
          "code": "https://github.com/Bhushan21z/ResumeBuilder",
          "video": "",
          "visit": "https://resume-ana-react.netlify.app/"
        }
      },
      {
        "name": "PayEth",
        "techstack": "Solidity, ReactJs, Web3.js, Alchemy, Hardhat, IPFS",
        "category": "All",
        "image": "https://imgtr.ee/images/2023/09/22/2e320fe90e716e6843a57b6896344714.png",
        "links": {
          "code": "https://github.com/Bhushan21z/Government-to-Vendor-Payment-Tracking-System",
          "video": "",
          "visit": "https://payment-tracking-system.netlify.app/"
        }
      },
      {
        "name": "Github Crypt",
        "techstack": "Solidity, ReactJs, Web3.js, Alchemy, Hardhat, IPFS",
        "category": "All",
        "image": "https://imgtr.ee/images/2023/09/22/9b11e9bce879e7ff7c81e917084c833e.png",
        "links": {
          "code": "https://github.com/Bhushan21z/GithubCrypt",
          "video": "https://youtu.be/B4ZzTqYxtDo?si=uQSTfDzWhtW9He8I",
          "visit": "https://githubcrypt.netlify.app/"
        }
      },
      {
        "name": "Skill Sensei",
        "techstack": "NodeJs, Express, MongoDB, ReactJs, Material UI",
        "category": "All",
        "image": "https://user-images.githubusercontent.com/82889656/232333920-278c000c-8cdd-46b4-9fb8-09bc5603d510.png",
        "links": {
          "code": "https://github.com/Bhushan21z/SkillSensei",
          "video": "",
          "visit": "https://theskillsensei.netlify.app/"
        }
      },
      {
        "name": "College WIT",
        "techstack": "Django Rest APIs, Firebase, ReactJs, Material UI",
        "category": "All",
        "image": "https://imgtr.ee/images/2023/09/22/ff58b44295d58565278b71af5c8e3206.png",
        "links": {
          "code": "https://github.com/College-WIT/College_Wit_Website",
          "video": "",
          "visit": "https://collegewit.netlify.app/"
        }
      },
      {
        "name": "Frontend Scoring Engine",
        "techstack": "Flask, Docker, Puppeteer, NodeJs, MySQL, ReactJs, Material UI, AWS",
        "category": "All",
        "image": "https://imgtr.ee/images/2023/09/22/2b60d88a4260bcb1619e9ccc0b0e048c.png",
        "links": {
          "code": "",
          "video": "https://youtu.be/mEUekdm_AfE?si=iQ1GFfntwW3gz3x3",
          "visit": "https://frontend-scoring-engine.netlify.app/"
        }
      },
    ],
    "educations": [
      {
        "institute": "Shri Ramdeobaba College Of Engineering And Management",
        "degree": "BTech CSE",
        "duration": "2020 - 2024",
        "startDate": "2020-12-01",
        "endDate": "2024-05-01",
        "desc": [
          "Pursuing CSE Engineering course from Shri Ramdeobaba University",
          "Worked on Web application and APIs development using NodeJs, ReactJs, Django designing a database system using SQL and NoSQL",
          "Familiar with software development methodologies and project management practices, including various Software and Testing Techniques",
        ]
      },
    ],
    "experiences": [
      {
        "company": "Qodeit",
        "position": "Web Developer",
        "duration": "2022 - present",
        "startDate": "2022-01-01",
        "endDate": "2022-01-01",
        "desc": [
          "Worked on several real life projects under professional team serving multiple clients software solutions.",
          "Main work was on 'ATS Ready' product which is an resume analysing tool which parse user's resume.",
          "Tech Stack: Figma, React, NodeJs, Google Auth Apis, MongoDb."
        ]
      },
      {
        "company": "eLitmus Evaluation Pvt. Ltd.",
        "position": "Full Stack Developer",
        "duration": "2023 -2023",
        "startDate": "2023-05-10",
        "endDate": "2022-07-20",
        "desc": [
          "Assisted with design and development of project.",
          "Developed and implemented a software frontend scoring engine, enabling companies to assess candidates frontend coding skills.",
          "Tech Stack: Docker, Python(Flask), NodeJs, React, Mysql, Cloud Services(AWS), Selenium"
        ]
      }
    ]
  };  

  return (
    <>
      {data ?
        <HomePage data={data} />
        :
        <div className='h-screen w-screen flex flex-col items-center justify-center gap-5 text-violet-600 fixed z-30 bg-gray-100 dark:bg-grey-900'>
          <FaNodeJs size={100} className='animate-pulse' />
          <p className='animate-pulse text-xl'>Loading...</p>
        </div>
      }
    </>
  )
}
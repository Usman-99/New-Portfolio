import { motion } from 'framer-motion'
import Project1 from "./assets/Capture.webp";
import Project2 from "./assets/Capture1.webp";
import Project3 from "./assets/Capture2.webp";
import Project4 from "./assets/Capture3.webp";
import Project5 from "./assets/Capture4.webp";
import Project6 from "./assets/Capture5.webp";
import Project7 from "./assets/Capture6.webp";
import Project8 from "./assets/Capture7.webp"

const projects = [
  {
    img: Project1,
    name: "Fithub",
    intro:
      "Developed an eCommerce fitness store website using React with useContext and useReducer for state management, including cart functionality and automatic total calculation. Integrated Firebase for authentication",
    gitlink: "https://github.com/Usman-99/Fithub",
    dlink: "https://fithubstore.netlify.app/",
  },
  {
    img: Project7,
    name: "ReduxStore",
    intro:
      "– E-commerce application that uses Redux Toolkit and createAsyncThunk to manage state and handle asynchronous API calls for fetching products, allowing users to add items to their shopping cart and manage the cart's contents.",
    gitlink: "https://github.com/Usman-99/CartWithRedux",
    dlink: "https://usmanreduxstore.netlify.app/",
  },
  {
    img: Project3,
    name: "MovieLand",
    intro:
      "Developed a React-based movie project that fetches and displays movie data using Axios to make GET requests to an API",
    gitlink: "https://github.com/Usman-99/Movie-Search-Website",
    dlink: "https://usman-99.github.io/Movie-Search-Website/",
  }, {
    img: Project8,
    name: "Portfolio",
    intro:
      "Developed a personal website to showcase my skills and projects using React JS and Tailwind CSS. This site highlights my expertise in front-end development and responsive design.",
    gitlink: "https://github.com/Usman-99/Portfolio",
    dlink: "https://usmanwebsite99.netlify.app/",
  },
  {
    img: Project6,
    name: "Interview EQ Analyzer",
    intro:
      "Our FYP project, EQ Analyzer, is designed to assess and predict the emotional intelligence of individuals through audio analysis. I have developed the frontend of this project using React",
    gitlink: "https://github.com/Usman-99/EQ-Analyzer",
    dlink: "https://eqanalyzerusmanfyp.netlify.app/",
  },
 {
    img: Project2,
    name: "Lensmart",
    intro:
      "I build a beginner React user interface project to learn hooks and understand single-page routing",
    gitlink: "https://github.com/Usman-99/Lensmart-reactversion",
    dlink: "https://lensmart99.netlify.app/",
  },
  {
    img: Project4,
    name: "ContactBook",
    intro:
      "Created a React contact adder website that allows users to add and view contacts, with data stored in local storage for persistence.",
    gitlink: "https://github.com/Usman-99/ContactBook",
    dlink: "https://contactadder.netlify.app/",
  },
  {
    img: Project5,
    name: "Redux Todolist",
    intro:
      "Created a to-do list application using Redux Toolkit to learn and demonstrate how Redux works, like creating slices, managing the store and efficient handling of actions and reducers in React",
    gitlink:
      "https://github.com/Usman-99/TodoList-Created-Using-Redux-Toolkit",
    dlink: "https://todolistwithreduxtoolkit.netlify.app/",
  },

];


export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-col1 via-col2 to-col3 animate-gradient-x">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={project.img} alt={project.name} className="w-full h-auto object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-new-white">{project.name}</h3>
                <p className="text-new-white text-lg mb-4">{project.intro}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.dlink}target='_blank'
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-600 transition duration-300"
                  >
                    View Project
                  </a>
                  <a
                    href={project.gitlink} target='_blank'
                    className="inline-block bg-green-500 text-white px-4 py-2 rounded-full font-medium hover:bg-green-600 transition duration-300"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

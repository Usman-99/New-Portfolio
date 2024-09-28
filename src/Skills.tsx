import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub ,FaBootstrap,FaPython} from 'react-icons/fa'
import { SiMysql,SiTailwindcss, SiTypescript ,SiPostman,SiRedux,SiFirebase} from 'react-icons/si'
import { RiNextjsFill } from "react-icons/ri";
const skills = [
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
  { name: 'React', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Next JS', icon: RiNextjsFill, color: 'text-black' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
  { name: 'SQL', icon: SiMysql, color: 'text-blue-500' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-orange-500' },
  { name: 'Redux', icon: SiRedux, color: 'text-violet-600' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
  { name: 'Bootstrap', icon: FaBootstrap, color: 'text-violet-600' },
  { name: 'Git and Github', icon: FaGithub, color: 'text-black' },
  { name: 'Python', icon: FaPython, color: 'text-blue-500' },
 
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-green-300 via-blue-300 to-purple-300">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-purple-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white bg-opacity-110 backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <skill.icon className={`text-6xl ${skill.color} mb-4`} />
              <span className="text-lg font-medium text-purple-700">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
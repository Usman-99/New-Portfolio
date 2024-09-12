import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'
import Experience from './Experience'
import Footer from './Footer'
import "./App.css"

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'experience']
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="font-sans">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md"
      >
        <ul className="flex justify-center space-x-4 p-4">
          {['Home', 'Projects', 'Skills', 'Experience'].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`text-lg font-medium ${
                  activeSection === item.toLowerCase()
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
                onClick={() => setActiveSection(item.toLowerCase())}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
      
      <div className="bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500">
        {/* Sections rendered with keys to re-trigger animation */}
        <motion.div
          key={activeSection === 'home' ? 'home' : 'other'}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeSection === 'home' && <Home />}
        </motion.div>
        
        <motion.div
          key={activeSection === 'projects' ? 'projects' : 'other'}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeSection === 'projects' && <Projects />}
        </motion.div>

        <motion.div
          key={activeSection === 'skills' ? 'skills' : 'other'}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeSection === 'skills' && <Skills />}
        </motion.div>

        <motion.div
          key={activeSection === 'experience' ? 'experience' : 'other'}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeSection === 'experience' && <Experience />}
        </motion.div>
        <Footer/>
      </div>
    </div>
  )
}

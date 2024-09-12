import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-500 to-blue-900 text-white py-8 animate-gradient-x">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <motion.a
            href="https://www.linkedin.com/in/muhammadusmanyousuf/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-500 transition duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/Usman-99"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-slate-800 transition duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="mailto:usmanyousuf1137@gmail.com"
            className="text-3xl hover:text-red-300 transition duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope />
          </motion.a>
        </div>
        <motion.p
          className="text-center text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          © {new Date().getFullYear()} Muhammad Usman Yousuf. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}
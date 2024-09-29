import { motion } from 'framer-motion';
import {FaDownload } from 'react-icons/fa';
import pic from "./assets/bgnewpic.jpg";
import Resume from "./assets/UsmanResume.pdf"
// import Projects from './Projects';

export default function Home() {
  // const [showProjects, setShowProjects] = useState(false); // State to toggle between Home and Projects

  // // Handle navigation to Projects
  // const handleViewMyWork = () => {
  //   setShowProjects(true);
  //   window.scrollTo(0,0)
  // };


  // // Conditional rendering based on state
  // if (showProjects) {
  //   return <Projects />; // If showProjects is true, render the Projects component
  // }
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Updated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-new-purple via-new-blue to-new-red animate-gradient-x"></div>
      
      <div className="mt-20 relative z-10 container mx-auto px-4 text-center">
        <motion.img
          src={pic}
          alt="Developer"
          className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-white shadow-lg"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        />
        <motion.h1
          className="text-2xl md:text-6xl font-bold mb-4 text-indigo-100"  // Text color updated
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Muhammad Usman Yousuf
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-new-white gradiant-text"  // Text color updated
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Web Developer | React Enthusiast
        </motion.p>
        <motion.div
          className="max-w-xl md:max-w-2xl mx-auto mb-10 md:mb-15 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm md:text-base lg:text-lg text-new-white  ">  {/* Text color updated */}
            I'm a passionate web developer, expert in creating beautiful, 
            responsive, and user-friendly web applications. Specializing in React and modern JavaScript, 
            I love turning complex problems into simple, elegant solutions.
          </p>
        </motion.div>

        {/* <motion.button
          onClick={handleViewMyWork}
          className="mb-10 inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300 shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.button> */}
        <motion.a
            className="mb-4 mx-2 rounded-full md:w-auto inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-base md:text-lg hover:bg-blue-700 transition duration-300 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={Resume}
            target='_blank'
          >
            <FaDownload className="inline mr-2" />
            Download Resume
          </motion.a>
      </div>
    </section>
  );
}

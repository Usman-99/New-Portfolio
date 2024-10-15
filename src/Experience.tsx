import { motion } from "framer-motion";

const experiences = [
  {
    company: "NED University of Engineering and Technology",
    position: "BE in Computer and Information Systems Engineering",
    duration: "October 2020 - August 2024",
    description:
      "I graduated with a Bachelor of Engineering in Computer and Information Systems Engineering from NED University with CGPA of 3.564",
  },
  {
    company: "MCB Funds",
    position: "Web Developer Intern",
    duration: "September 2022 - October 2022",
    description:
      "I completed a web development internship at MCB Funds, where I gained invaluable experience in understanding the MVC (Model-View-Controller) structure and its application in real-world scenarios. During this internship, I had the opportunity to witness firsthand how financial transactions are managed by banks through web and mobile applications.",
  },
  {
    company: "KDA",
    position: "IT Intern",
    duration: "March 2023 - April 2023",
    description:
      "I have done internship at the Karachi Development Authority (KDA), where I gained hands-on experience in understanding server architecture and its functionalities. During this internship, I had the opportunity to delve into the complexities of database management systems and witnessed firsthand how a government organization efficiently manages city property details through systematic database management.",
  },
  {
    company: "Adamjee Government Science College",
    position: "Intermediate in Pre Engineering",
    duration: "July 2018 - June 2020",
    description:
      "I graduated from Adamjee Government Science College with a remarkable percentage of 89.91%. Additionally, I was honored to be among the top 20 position holders in the HSC BIEK results.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-col4 via-col2 to-col5 animate-gradient-x "
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-new-gray"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {exp.position}
              </h3>
              <p className="text-white mb-2">{exp.company}</p>
              <p className="text-sm text-gray-300 mb-4">{exp.duration}</p>
              <p className="text-gray-200">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

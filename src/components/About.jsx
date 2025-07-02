import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Full-Stack Development",
      description: "Experienced in both frontend and backend technologies"
    },
    {
      icon: <Database size={24} />,
      title: "Database Design",
      description: "Skilled in schema design and optimization"
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Clean Code Practices",
      description: "Committed to SOLID principles and design patterns"
    },
    {
      icon: <Users size={24} />,
      title: "Team Collaboration",
      description: "Strong communication and time management skills"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-lg">
                I'm a passionate Software Developer with extensive experience in creating robust web and desktop applications. My expertise spans across modern frameworks including <strong className="text-teal-600 dark:text-teal-400">Angular</strong>, <strong className="text-teal-600 dark:text-teal-400">React</strong>, and <strong className="text-teal-600 dark:text-teal-400">.NET</strong>, allowing me to deliver comprehensive solutions from frontend to backend.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-lg">
                I'm deeply committed to <strong className="text-teal-600 dark:text-teal-400">object-oriented programming principles</strong> and <strong className="text-teal-600 dark:text-teal-400">clean code practices</strong>. My approach to software development emphasizes maintainable, scalable solutions that stand the test of time.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                What drives me most is the opportunity to explore new technologies and continuously expand my skill set. Whether it's optimizing database schemas or implementing cutting-edge frontend features, I'm always eager to tackle new challenges and grow as a developer.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="card p-6 text-center group hover:border-teal-300 dark:hover:border-teal-600"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-lg mb-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50 transition-colors duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
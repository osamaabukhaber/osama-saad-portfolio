import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-8 hover:border-teal-300 dark:hover:border-teal-600"
          >
            <div className="flex items-start gap-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-white"
              >
                <GraduationCap size={32} />
              </motion.div>
              
              <div className="flex-1">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-slate-800 dark:text-white mb-2"
                >
                  Bachelor of Computer Science
                </motion.h3>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-4 text-teal-600 dark:text-teal-400"
                >
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span className="font-medium">Luxor University</span>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6"
                >
                  Comprehensive study of computer science fundamentals including software engineering, 
                  data structures, algorithms, database systems, and software architecture. 
                  Developed strong analytical and problem-solving skills through theoretical learning 
                  and practical project implementation.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 gap-4"
                >
                  <div className="bg-teal-50 dark:bg-slate-700 p-4 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Core Subjects</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                      <li>• Software Engineering</li>
                      <li>• Data Structures & Algorithms</li>
                      <li>• Database Systems</li>
                      <li>• Object-Oriented Programming</li>
                    </ul>
                  </div>
                  <div className="bg-teal-50 dark:bg-slate-700 p-4 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Specializations</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                      <li>• Web Development</li>
                      <li>• Software Architecture</li>
                      <li>• System Analysis & Design</li>
                      <li>• Network Programming</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
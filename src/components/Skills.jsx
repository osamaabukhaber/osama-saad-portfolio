import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [".NET Framework", "C#", "ASP.NET Core", "Java", "C++", "C", "JavaScript", "Angular", "React", "HTML5", "CSS3", "Bootstrap", "SASS"]
    },
    {
      title: "Databases & ORMs",
      skills: ["SQL Server", "MySQL", "ADO.NET", "Entity Framework Core", "Dapper", "NHibernate"]
    },
    {
      title: "Tools & Concepts",
      skills: ["OOP", "SOLID Principles", "Design Patterns", "Git/GitHub", "Unit Testing"]
    },
    {
      title: "CRM & Additional Skills",
      skills: ["Zoho CRM", "Problem Solving", "Software Architecture", "Data Structures", "Algorithms", "UI/UX Design", "Networking", "Operating Systems"]
    }
  ];

  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Very Good" }
  ];

  const softSkills = ["Communication", "Time Management", "Team Collaboration", "Problem Solving"];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="section-subtitle">
            A comprehensive toolkit of technologies and methodologies I use to build exceptional software solutions.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:border-teal-300 dark:hover:border-teal-600"
            >
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages and Soft Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card p-6 hover:border-teal-300 dark:hover:border-teal-600"
          >
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
              Languages
            </h3>
            <div className="space-y-3">
              {languages.map((language, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-slate-700 dark:text-slate-300">{language.name}</span>
                  <span className="skill-tag">{language.level}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card p-6 hover:border-teal-300 dark:hover:border-teal-600"
          >
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="skill-tag"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
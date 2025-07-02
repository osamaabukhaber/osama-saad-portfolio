import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Smartphone, Monitor, FileText } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Food Purveyance Development System (PDDS)",
      description: "A fully automated system for managing food commodity disbursement with comprehensive tracking and reporting capabilities.",
      technologies: ["PHP", "Flutter", "MySQL", "HTML5", "CSS", "JavaScript"],
      icon: <Database size={24} />,
      type: "Full-Stack Web & Mobile Application",
      features: ["Automated disbursement tracking", "Real-time reporting", "Mobile companion app", "Admin dashboard"],
      gradient: "from-teal-500 to-emerald-500"
    },
    {
      title: "Missing Children Web Application",
      description: "A compassionate web application designed to help families find missing children through community collaboration and data management.",
      technologies: ["C#", "ASP.NET", "SQL Server"],
      icon: <ExternalLink size={24} />,
      type: "Web Application",
      features: ["Family registration system", "Search functionality", "Community reporting", "Data security compliance"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Airline Ticket Reserving System",
      description: "A comprehensive desktop application for travel agencies to efficiently manage ticket bookings and customer information.",
      technologies: ["Java", "MySQL"],
      icon: <Monitor size={24} />,
      type: "Desktop Application",
      features: ["Ticket booking system", "Customer management", "Payment processing", "Inventory tracking"],
      gradient: "from-teal-600 to-emerald-600"
    },
    {
      title: "Airline Management System SRS",
      description: "Comprehensive Software Requirements Specification document for an airline company's management system.",
      technologies: ["Requirements Analysis", "System Design", "Documentation"],
      icon: <FileText size={24} />,
      type: "System Analysis & Documentation",
      features: ["Functional requirements", "Non-functional requirements", "Use case diagrams", "System architecture"],
      gradient: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="section-subtitle">
            A showcase of my work spanning web applications, mobile development, and system analysis.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 group hover:border-teal-300 dark:hover:border-teal-600"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-teal-600 dark:text-teal-400 font-medium mb-2">
                    {project.type}
                  </p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-white mb-2">Key Features:</h4>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="skill-tag text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg hover:from-teal-700 hover:to-teal-600 transition-all duration-300 text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  View Details
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 border border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-400 rounded-lg hover:bg-teal-600 hover:text-white dark:hover:bg-teal-400 dark:hover:text-slate-900 transition-all duration-300 text-sm font-medium"
                >
                  <Github size={16} />
                  Source
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
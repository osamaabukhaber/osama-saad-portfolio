import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Herafy",
      description: "A fullstack platform connecting craftsmen with clients through listings, advanced search, and real-time messaging.",
      technologies: ["MongoDB", "Express.js", "Angular", "React.js", "Node.js", "JWT"],
      icon: <Monitor size={24} />,
      type: "Fullstack Web Application",
      features: ["Secure authentication", "Role-based access", "Service listings", "Real-time chat", "CI/CD & API docs"],
      gradient: "from-teal-500 to-emerald-500",
      demo: "https://Herafy//",
      github: "https://github.com/osamaabukhaber/Herafy"
    },
    {
      title: "Eqamaa",
      description: "Desktop app for managing expatriate residencies, payment tracking, and report generation for a Saudi agency.",
      technologies: ["C#", "ASP.NET", "SQL Server"],
      icon: <Monitor size={24} />,
      type: "Desktop Application | Not Open Source",
      features: ["Residency tracking", "Payment alerts", "Client reports", "Office management"],
      gradient: "from-emerald-500 to-teal-500",
      // demo: "Not Open Source",
      github: "https://github.com/osamaabukhaber/EqamaaApp"
    },
    // {
    //   title: "My Portfolio",
    //   description: "Personal portfolio website showcasing my professional profile, featured projects, and contact info.",
    //   technologies: ["React", "Tailwind CSS", "React Router DOM"],
    //   icon: <ExternalLink size={24} />,
    //   type: "Frontend Web Application",
    //   features: ["Project showcase", "Responsive design", "Contact form", "Deployed on Netlify"],
    //   gradient: "from-teal-600 to-emerald-600"
    // },
    {
      title: "Food Purveyance Development System",
      description: "Automated system for managing disbursement of food commodities, used to solve a real-world societal issue.",
      technologies: ["PHP", "Flutter", "MySQL", "HTML5", "CSS3", "JavaScript"],
      icon: <Monitor size={24} />,
      type: "Fullstack Web & Mobile Application",
      features: ["Automated disbursement", "Mobile companion app", "Admin dashboard", "Reporting tools"],
      gradient: "from-emerald-600 to-teal-600",
      demo: "https://movies4u.vercel.app",
      github: "https://github.com/your-username/movies4u"
    },
    {
      title: "Movies4U",
      description: "Responsive movie browsing web app using TMDB API with trending, popular, and top-rated movies.",
      technologies: ["ReactJS", "TMDB API", "Tailwind CSS", "Axios"],
      icon: <Monitor size={24} />,
      type: "Frontend Web Application",
      features: ["API integration", "Movie details", "Responsive UI", "Deployed on Vercel"],
      gradient: "from-teal-500 to-emerald-500",
      demo: "https://movies4u.vercel.app",
      github: "https://github.com/your-username/movies4u"
    },
    {
      title: "NextLearn",
      description: "Interactive eLearning platform with video lessons, progress tracking, and quizzes.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      icon: <Monitor size={24} />,
      type: "Educational Web App",
      features: ["Video lessons", "Progress tracking", "Quizzes", "Deployed on Netlify"],
      gradient: "from-emerald-500 to-teal-500",
      demo: "https://next-learn-iti.vercel.app",
      github: "https://github.com/osamaabukhaber/NextLearn"
    },
    {
      title: "CRUD JS App",
      description: "Simple CRUD web app for managing data in local storage.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      icon: <Monitor size={24} />,
      type: "Mini Project",
      features: ["Create, Read, Update, Delete", "LocalStorage", "Lightweight UI"],
      gradient: "from-teal-600 to-emerald-600",
      demo: "https://crud-web-app-js.netlify.app/",
      github: "https://github.com/osamaabukhaber/CRUD-JS"
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
  {project.demo && (
    <motion.a
      href={project.demo}
      target="_blank"
      // rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg hover:from-teal-700 hover:to-teal-600 transition-all duration-300 text-sm font-medium"
    >
      <ExternalLink size={16} />
      View Demo
    </motion.a>
  )}

  {project.github && (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-4 py-2 border border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-400 rounded-lg hover:bg-teal-600 hover:text-white dark:hover:bg-teal-400 dark:hover:text-slate-900 transition-all duration-300 text-sm font-medium"
    >
      <Github size={16} />
      Github
    </motion.a>
  )}
</div>



            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
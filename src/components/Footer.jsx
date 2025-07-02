import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/in/osama-saad98",
      label: "LinkedIn"
    },
    {
      icon: <Github size={20} />,
      url: "https://github.com/osamaabukhaber",
      label: "GitHub"
    },
    {
      icon: <Mail size={20} />,
      url: "mailto:osamasaadabuelyazeed@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="container-max section-padding">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold font-display mb-4 gradient-text">Osama Saad</h3>
            <p className="text-slate-400 max-w-md mx-auto">
              Software Developer passionate about creating innovative solutions with modern technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 rounded-full hover:bg-teal-600 transition-all duration-300 border border-white/20 hover:border-teal-500"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-white/20 pt-8"
          >
            <p className="text-slate-400 flex items-center justify-center gap-2">
              © {currentYear} Osama Saad. Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-400"
              >
                <Heart size={16} fill="currentColor" />
              </motion.span>
              and React
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
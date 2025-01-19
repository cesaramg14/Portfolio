import { motion } from 'framer-motion';
import { FaEnvelope, FaDownload } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-8rem)] flex items-center px-4 py-8 relative bg-transparent">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Profile Picture Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl"></div>
            <img
              src="/Portfolio/profile01.webp"
              alt="Profile"
              className="rounded-full w-full h-full object-cover relative z-10 border-4 border-accent/50"
            />
          </div>
        </motion.div>

        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
          >
            Hi, I'm <span className="text-accent">Cesar Maldonado</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-4"
          >
            <b>Front End Web Developer</b>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-200 mb-6"
          >
            Passionate about creating beautiful and functional web applications
            using modern technologies and best practices.
          </motion.p>

          {/* Download Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="/Portfolio/CesarMaldonadoCV - WebDeveloper.pdf"
              download
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-accent hover:bg-accent/80 text-white rounded-lg font-medium transition-colors gap-2 text-sm sm:text-base"
            >
              <FaDownload />
              Download CV
            </a>
            <a
              href="mailto:cesaramg.14@gmail.com"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-secondary hover:bg-secondary/80 text-white rounded-lg font-medium transition-colors border border-accent gap-2 text-sm sm:text-base"
            >
              <FaEnvelope />
              Send Email
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
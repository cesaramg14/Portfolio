import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="h-[calc(100vh-8rem)] overflow-auto px-4 py-12 relative bg-transparent">
      <div className="max-w-4xl mx-auto pb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-secondary/80 backdrop-blur-sm p-6 rounded-lg border border-accent text-center"
          >
            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-200 mb-8"
            >
            If you have any inquiries or would like to collaborate, please don't hesitate to reach out.
            </motion.p>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
            >
            <a
              href="mailto:cesaramg.14@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent/80 text-white rounded-lg font-medium transition-colors gap-2"
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
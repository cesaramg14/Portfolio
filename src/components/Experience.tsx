import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Freelance',
    position: 'Full Stack Web Developer',
    period: '2021 - Present',
    description1: 'Responsive Web Design: Creating websites that adapt seamlessly to various devices and screen sizes.',
    description2: 'User Experience (UX) Design: Designing intuitive and engaging user interfaces.',
    description3: 'Search Engine Optimization (SEO): Implementing SEO best practices to improve website visibility.',
    description4: 'Web Performance Optimization: Ensuring fast loading times and optimal performance.',
  },
  {
    company: 'Agencia Maritima de Servicios, C.A',
    position: 'Web Developer',
    period: '2018 - 2020',
    description1: 'Creation, design and management of Company’s website.',
    description2: 'Hosting and domain management.',
    description3: 'Wordpress installation, plugin management and server configuration.',
    description4: 'Responsive Web Design.',
  },
];

export default function Experience() {
  return (
    <section className="h-[calc(100vh-8rem)] overflow-auto px-4 py-12 relative bg-transparent">
      <div className="max-w-4xl mx-auto pb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-secondary/80 backdrop-blur-sm p-6 rounded-lg border border-accent"
            >
              <h3 className="text-xl font-bold text-accent">{exp.company}</h3>
              <p className="text-lg font-medium mb-2">{exp.position}</p>
              <p className="text-gray-300 text-sm mb-4">{exp.period}</p>
              <ul>
                <li className="text-gray-200 list-disc list-inside">{exp.description1}</li>
                <li className="text-gray-200 list-disc list-inside">{exp.description2}</li>
                <li className="text-gray-200 list-disc list-inside">{exp.description3}</li>
                <li className="text-gray-200 list-disc list-inside">{exp.description4}</li>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
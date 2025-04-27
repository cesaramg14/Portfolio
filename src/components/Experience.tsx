import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Freelance',
    position: 'Full Stack Web Developer',
    period: '2021 - Now',
    description1: 'Website development from scratch using WordPress and Elementor. Theme and plugin customization, creating maintainable and scalable PHP, CSS, and JavaScript code. Online store development using WooCommerce, including payment system configuration and product creation.',
    description2: 'Developed static pages designed in Figma using HTML, JavaScript, Bootstrap, Tailwind, and React for multiple clients and companies. Utilized best practices for each website to ensure accurate display across multiple devices and screens, with search engine-optimized content and high performance.',
    description3: 'Development of complex web applications such as: a login page for a Mikrotik Hotspot using Python Flask, which manages Wi-Fi access for thousands of customers who visits the shopping center. Adjustment and creation of new features for a WhatsApp chatbot using PHP, which serves a database of more than 2,000 customers. Development of new features for a pet service reservation system located in Spain, including: notification and service management functions via email, pet data modification, and a return system, among others.',
  },
  {
    company: 'Agencia Maritima de Servicios, C.A',
    position: 'Web Developer',
    period: '2018 - 2020',
    description1: 'Creation, design and management of Company’s website. Responsive Web Design.',
    description2: 'Hosting and domain management.',
    description3: 'Wordpress installation, plugin management and server configuration.'
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
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import '../styles/projects.css';

const projects = [
  {
    title: 'Dorado Dental',
    description: 'Dorado Dental is a website that presents their dental practice in Rome, outlining their range of services from general dentistry to specialized treatments.',
    tech: ['Wordpress', 'Elementor', 'PHP'],
    image: '/Portfolio/DoradoDental01.webp',
    link: 'https://doradodental.it/',
  },
  {
    title: 'XportBridge',
    description: 'XportBridge is a website that offers a wide range of durable and cost-effective plastic products for the agricultural and construction sectors',
    tech: ['Wordpress', 'Elementor', 'PHP'],
    image: '/Portfolio/Xportbridge01.webp',
    link: 'https://xport-bridge.com/',
  },
  {
    title: 'Canguros8Pets',
    description: 'This website features a booking system designed to connect pet owners in Spain with a variety of essential services for their animals.',
    tech: ['Wordpress', 'Woocommerce', 'PHP'],
    image: '/Portfolio/Canguros01.webp',
    link: 'https://www.behance.net/gallery/222984565/Canguros8Pets',
  },
  {
    title: 'Temas Pro',
    description: 'An extension of "Plugins y Temas Premium", this site offers a distinct collection of premium WordPress themes and plugins under flexible subscription models.',
    tech: ['Wordpress', 'Woocommerce', 'PHP'],
    image: '/Portfolio/Temaspro01.webp',
    link: 'https://temas.pro/',
  },
  {
    title: 'ComiRest',
    description: 'Web application for restaurants offering customer-facing menu, ordering, and payment functionalities, alongside backend tools for administration and accounting.',
    tech: ['React', 'Typescript', 'Tailwind'],
    image: '/Portfolio/Comirest01.webp',
    link: 'https://s20-06-webapp.vercel.app',
  },
  {
    title: 'Plugins y Temas Premium',
    description: 'An extensive online store built with WordPress and WooCommerce, offering thousands of premium themes and plugins for WordPress websites.',
    tech: ['Wordpress', 'Woocommerce', 'PHP'],
    image: '/Portfolio/plugins01.webp',
    link: 'https://pluginsytemaspremium.com/',
  },
  {
    title: 'Servicios Integrales de Tesis',
    description: 'This website is designed to assist students in Peru and Ecuador through the challenging process of thesis writing, offering advisory services.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/Portfolio/sidt01.webp',
    link: 'https://asesoriasidt.com/',
  },
  {
    title: 'Banki',
    description: 'This web app empowers bank customers to manage their finances through features like balance checks, peer-to-peer transfers, and bill payments.',
    tech: ['React', 'Typescript', 'Bootstrap'],
    image: '/Portfolio/Banki01.webp',
    link: 'https://www.behance.net/gallery/215047781/Banki',
  },
  {
    title: 'Super Mario Project',
    description: 'A Super Mario World themed page created to practically apply the knowledge and techniques learned during a Tailwind CSS course.',
    tech: ['HTML5', 'TailwindCSS', 'JavaScript'],
    image: '/Portfolio/SuperMario01.webp',
    link: 'https://www.behance.net/gallery/209790417/Super-Mario-3D-World-Project-Website',
  },
  {
    title: 'Wifi Hotspot',
    description: 'A Wi-Fi Hotspot web application for shopping centers, integrating a login portal with Mikrotik router authentication and database storage for user data.',
    tech: ['Python', 'Flask', 'JavaScript'],
    image: '/Portfolio/WifiHotspot01.webp',
    link: 'https://www.behance.net/gallery/204947249/Wifi-Hotspot',
  },
  {
    title: 'Alpha Project',
    description: 'A final project developed for a PHP course, this website features a complete login and registration system, product display for an online store, and email notification',
    tech: ['PHP', 'JavaScript', 'Bootstrap'],
    image: '/Portfolio/Alpha01.webp',
    link: 'https://www.behance.net/gallery/112295909/Alpha-Project',
  },
  {
    title: 'First Portfolio',
    description: 'My first personal portfolio website, built from the ground up using fundamental web technologies: HTML, CSS, and vanilla JavaScript.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/Portfolio/Portfolio01.webp',
    link: 'https://cesaramg14.github.io/First-Portfolio/',
  },
  {
    title: 'Amarserca',
    description: 'A WordPress website developed for a maritime company offering naval services such as personnel transportation, inspections, and hull cleaning.',
    tech: ['Wordpress', 'Elementor', 'PHP'],
    image: '/Portfolio/Amarserca01.webp',
    link: 'https://www.behance.net/gallery/100662091/Amarserca',
  },
  {
    title: 'Cafe Project',
    description: 'A final project developed for a web development course, this PHP-based website utilizes a MySQL database to manage subscribed users of the site.',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    image: '/Portfolio/Cafe01.webp',
    link: 'https://www.behance.net/gallery/209793369/Cafe-Project',
  },
];

export default function Projects() {
  return (
    <section className="h-[calc(100vh-8rem)] overflow-auto px-4 py-12 relative bg-transparent">
      <div className="max-w-6xl mx-auto pb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-secondary/80 backdrop-blur-sm rounded-lg overflow-hidden border border-accent project-card"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
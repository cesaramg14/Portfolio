import { motion } from 'framer-motion';

const projects = [
  {
    title: 'ComiRest',
    description: 'Restaurant Web App made with a team of 3 people',
    tech: ['React', 'Typescript', 'Tailwind'],
    image: '/Portfolio/Comirest01.webp',
    link: 'https://s20-06-webapp.vercel.app',
  },
  {
    title: 'Temas Pro',
    description: 'Online store for premium plugins and themes for Wordpress',
    tech: ['Wordpress', 'Woocommerce', 'PHP'],
    image: '/Portfolio/plugins01.webp',
    link: 'https://temas.pro/',
  },
  {
    title: 'Servicios Integrales de Tesis',
    description: 'Website for a company that provides academic services',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/Portfolio/sidt01.webp',
    link: 'https://asesoriasidt.com/',
  },
  {
    title: 'Banki',
    description: 'Simulation Fintech Web App made with a team of 8 people',
    tech: ['React', 'Typescript', 'Bootstrap'],
    image: '/Portfolio/Banki01.webp',
    link: 'https://www.behance.net/gallery/215047781/Banki',
  },
  {
    title: 'Super Mario Project',
    description: 'Personal project made with Tailwind',
    tech: ['HTML5', 'TailwindCSS', 'JavaScript'],
    image: '/Portfolio/SuperMario01.webp',
    link: 'https://www.behance.net/gallery/209790417/Super-Mario-3D-World-Project-Website',
  },
  {
    title: 'Wifi Hotspot',
    description: 'Hotspot App to manage wifi connections',
    tech: ['Python', 'Flask', 'JavaScript'],
    image: '/Portfolio/WifiHotspot01.webp',
    link: 'https://www.behance.net/gallery/204947249/Wifi-Hotspot',
  },
  {
    title: 'Alpha Project',
    description: 'E-commerce website made with PHP',
    tech: ['PHP', 'JavaScript', 'Bootstrap'],
    image: '/Portfolio/Alpha01.webp',
    link: 'https://www.behance.net/gallery/112295909/Alpha-Project',
  },
  {
    title: 'First Portfolio',
    description: 'My first portfolio made with HTML and CSS',
    tech: ['HTML5', 'CSS3'],
    image: '/Portfolio/Portfolio01.webp',
    link: 'https://cesaramg14.github.io/First-Portfolio/',
  },
  {
    title: 'Amarserca',
    description: 'Wordpress website for a naval company',
    tech: ['Wordpress', 'Elementor', 'PHP'],
    image: '/Portfolio/Amarserca01.webp',
    link: 'https://www.behance.net/gallery/100662091/Amarserca',
  },
  {
    title: 'Cafe Project',
    description: 'Final exam project made with PHP and MySQL',
    tech: ['Wordpress', 'PHP', 'MySQL'],
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
              className="bg-secondary/80 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform border border-accent"
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
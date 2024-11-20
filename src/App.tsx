import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBehance,FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import VideoBackground from './components/VideoBackground';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const isActivePath = (path: string) => {
    const currentPath = window.location.pathname;
    if (path === '/Portfolio/' || path === '/Portfolio') {
      return currentPath === '/Portfolio/' || currentPath === '/Portfolio';
    }
    return currentPath === path;
  };

  return (
    <Router basename="/Portfolio">
      <div className="min-h-screen bg-transparent relative">
        <VideoBackground />
        <nav className="fixed top-0 w-full bg-secondary/80 backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={toggleMenu}
                className="md:hidden text-gray-300 hover:text-accent focus:outline-none"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hidden md:flex space-x-8"
              >
                <NavLink 
                  to="/"
                  className={({ isActive }) => 
                    `text-lg hover:text-accent transition-colors ${isActive || isActivePath('/Portfolio/') ? 'text-accent' : 'text-gray-300'}`
                  }
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/projects"
                  className={({ isActive }) => 
                    `text-lg hover:text-accent transition-colors ${isActive ? 'text-accent' : 'text-gray-300'}`
                  }
                >
                  Projects
                </NavLink>
                <NavLink 
                  to="/experience"
                  className={({ isActive }) => 
                    `text-lg hover:text-accent transition-colors ${isActive ? 'text-accent' : 'text-gray-300'}`
                  }
                >
                  Experience
                </NavLink>
                <NavLink 
                  to="/contact"
                  className={({ isActive }) => 
                    `text-lg hover:text-accent transition-colors ${isActive ? 'text-accent' : 'text-gray-300'}`
                  }
                >
                  Contact
                </NavLink>
              </motion.div>

              <div className="flex space-x-4">
                <a href="https://github.com/cesaramg14" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="w-6 h-6 text-gray-300 hover:text-accent transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/cesarmaldonado91/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="w-6 h-6 text-gray-300 hover:text-accent transition-colors" />
                </a>
                <a href="https://www.behance.net/cesarmaldonado2" target="_blank" rel="noopener noreferrer">
                  <FaBehance className="w-6 h-6 text-gray-300 hover:text-accent transition-colors" />
                </a>
              </div>
            </div>

            <motion.div
              initial={false}
              animate={{
                height: isMenuOpen ? 'auto' : 0,
                opacity: isMenuOpen ? 1 : 0
              }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive || isActivePath('/Portfolio/') ? 'text-accent bg-secondary' : 'text-gray-300 hover:text-accent hover:bg-secondary/50'
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/projects"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? 'text-accent bg-secondary' : 'text-gray-300 hover:text-accent hover:bg-secondary/50'
                    }`
                  }
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/experience"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? 'text-accent bg-secondary' : 'text-gray-300 hover:text-accent hover:bg-secondary/50'
                    }`
                  }
                >
                  Experience
                </NavLink>
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? 'text-accent bg-secondary' : 'text-gray-300 hover:text-accent hover:bg-secondary/50'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </div>
            </motion.div>
          </div>
        </nav>

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
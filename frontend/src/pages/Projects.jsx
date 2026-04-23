import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const projects = [
  { id: 1, category: 'Piping', title: 'Refinery Piping Upgrade', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400' },
  { id: 2, category: 'Fabrication', title: 'Pressure Vessel Fabrication', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400' },
  { id: 3, category: 'Maintenance', title: 'Power Plant Shutdown', image: 'https://images.unsplash.com/photo-1574689049868-e94ed5301745?auto=format&fit=crop&q=80&w=400' },
  { id: 4, category: 'Manpower', title: 'Offshore Rig Staffing', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400' },
  { id: 5, category: 'Piping', title: 'Chemical Plant Pipeline', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400' },
  { id: 6, category: 'Fabrication', title: 'Structural Steel Erection', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400' },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Piping', 'Fabrication', 'Maintenance', 'Manpower'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="projects-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Showcasing Our Engineering Excellence</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-tabs">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`filter-tab ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="projects-grid-gallery">
            <AnimatePresence>
              {filteredProjects.map(project => (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="project-card-gallery"
                >
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay-gallery">
                    <span className="category">{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

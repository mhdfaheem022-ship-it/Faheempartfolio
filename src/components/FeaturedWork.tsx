import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

import { PROJECTS, CATEGORIES } from '../data/projects';

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section className="section" id="work" style={{ backgroundColor: '#fafafa', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">Cinematic AI Productions</h2>
          <p className="section-desc">
            Explore a curated selection of premium marketing videos crafted with cutting-edge AI pipelines to drive commercial impact.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="filter-tabs">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid-2"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="premium-card project-card"
              >
                {/* Video Loop Hover Preview */}
                <div className="project-video-wrapper">
                  <video 
                    loop 
                    muted 
                    playsInline 
                    autoPlay
                    controlsList="nodownload"
                    onContextMenu={(e) => e.preventDefault()}
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                  </video>
                  
                  {/* Click Overlay */}
                  <div className="video-overlay" onClick={() => setSelectedVideo(project.videoUrl)}>
                    <div className="play-circle">
                      <Play size={22} fill="currentColor" />
                    </div>
                  </div>
                </div>

                {/* Details Footer */}
                <div className="project-details">
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span className="project-industry">{project.industry}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  
                  <button 
                    className="btn-play-action"
                    onClick={() => setSelectedVideo(project.videoUrl)}
                  >
                    <Play size={14} fill="currentColor" /> Play Video
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Video Modal Lightbox Overlay */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            className="video-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div 
              className="video-modal-container"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="video-modal-close" 
                onClick={() => setSelectedVideo(null)}
                aria-label="Close video player"
              >
                <X size={20} />
              </button>
              <video 
                className="video-modal-player"
                controls 
                autoPlay 
                playsInline
                controlsList="nodownload"
                onContextMenu={(e) => e.preventDefault()}
              >
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

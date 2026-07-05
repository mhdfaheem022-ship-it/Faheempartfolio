import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

import { PROJECTS, CATEGORIES } from '../data/projects';

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewAll, setViewAll] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340; // match column width approx
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handlePrevVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedVideoIndex !== null && selectedVideoIndex > 0) {
      setSelectedVideoIndex(selectedVideoIndex - 1);
    }
  };

  const handleNextVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedVideoIndex !== null && selectedVideoIndex < filteredProjects.length - 1) {
      setSelectedVideoIndex(selectedVideoIndex + 1);
    }
  };

  const selectedVideoUrl = selectedVideoIndex !== null ? filteredProjects[selectedVideoIndex]?.videoUrl : null;

  return (
    <section className="section" id="work" style={{ backgroundColor: '#fafafa', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0', overflow: 'hidden' }}>
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
              onClick={() => {
                setActiveCategory(cat);
                setViewAll(false); // Reset to slider when changing categories
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel controls (only visible if not viewAll and has items to scroll) */}
        {!viewAll && filteredProjects.length > 0 && (
          <div className="carousel-controls">
            <button className="carousel-btn" onClick={() => handleScroll('left')} aria-label="Previous campaigns">
              <ChevronLeft size={22} />
            </button>
            <button className="carousel-btn" onClick={() => handleScroll('right')} aria-label="Next campaigns">
              <ChevronRight size={22} />
            </button>
          </div>
        )}

        {/* Render View: Carousel Slider OR standard Grid */}
        <AnimatePresence mode="wait">
          {!viewAll ? (
            <motion.div 
              key="slider"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="works-scroll-wrapper"
              ref={scrollRef}
            >
              {filteredProjects.map((project, idx) => (
                <div key={project.id} className="work-carousel-item">
                  <motion.div
                    className="premium-card project-card"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
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
                      <div className="video-overlay" onClick={() => setSelectedVideoIndex(idx)}>
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
                        onClick={() => setSelectedVideoIndex(idx)}
                      >
                        <Play size={14} fill="currentColor" /> Play Video
                      </button>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid-2"
            >
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  className="premium-card project-card"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
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
                    <div className="video-overlay" onClick={() => setSelectedVideoIndex(idx)}>
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
                      onClick={() => setSelectedVideoIndex(idx)}
                    >
                      <Play size={14} fill="currentColor" /> Play Video
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All Button Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3.5rem' }}>
          <button 
            className="btn btn-primary"
            onClick={() => setViewAll(!viewAll)}
          >
            {viewAll ? 'Back to Slider' : 'View All Campaigns'}
          </button>
        </div>

      </div>

      {/* Video Modal Lightbox Overlay */}
      <AnimatePresence>
        {selectedVideoIndex !== null && selectedVideoUrl && (
          <motion.div 
            className="video-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideoIndex(null)}
          >
            {/* Prev Video Navigation */}
            {selectedVideoIndex > 0 && (
              <button 
                className="modal-nav-btn modal-nav-prev"
                onClick={handlePrevVideo}
                aria-label="Previous video"
              >
                <ChevronLeft size={28} />
              </button>
            )}

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
                onClick={() => setSelectedVideoIndex(null)}
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
                key={selectedVideoUrl}
              >
                <source src={selectedVideoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>

            {/* Next Video Navigation */}
            {selectedVideoIndex < filteredProjects.length - 1 && (
              <button 
                className="modal-nav-btn modal-nav-next"
                onClick={handleNextVideo}
                aria-label="Next video"
              >
                <ChevronRight size={28} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  industry: string;
  desc: string;
  videoUrl: string;
  poster: string;
}

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Echoes of the Future',
    category: 'Cinematic Videos',
    industry: 'Sci-Fi / Entertainment',
    desc: 'Cinematic AI-generated visuals capturing a futuristic cityscape. Combining advanced text-to-video tools with bespoke audio design.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-loop-41777-large.mp4',
    poster: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'HeyGen Ambassador Keynote',
    category: 'AI Clone Videos',
    industry: 'SaaS / Marketing',
    desc: 'A hyper-realistic digital clone presentation demonstrating automated sales videos at scale for global companies.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-looking-at-a-smartphone-in-bed-42404-large.mp4',
    poster: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Aura Coffee Campaign',
    category: 'Product Videos',
    industry: 'Food & Beverage',
    desc: 'Cinematic product sequence showing slow-motion closeups of fresh coffee brewing. Designed for Instagram advertisements.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-pouring-hot-coffee-into-a-cup-41712-large.mp4',
    poster: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'VibeCheck Social UGC',
    category: 'UGC Videos',
    industry: 'E-commerce',
    desc: 'Authentic user-generated marketing video showcasing skincare applications, designed to increase conversion rates on TikTok.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-girl-taking-selfies-with-smartphone-in-front-of-mirror-42211-large.mp4',
    poster: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    title: 'Obsidian Villa Walkthrough',
    category: 'Real Estate Videos',
    industry: 'Real Estate / Architecture',
    desc: 'Breathtaking virtual tour of a modern minimalist villa, combining drone footage simulation with AI rendering touchups.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-minimalist-living-room-with-fireplace-43110-large.mp4',
    poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    title: 'Future Tech Commercial',
    category: 'Commercial Ads',
    industry: 'Technology',
    desc: 'A premium promotional commercial highlighting corporate SaaS features using modern styling and high-end narrative pace.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-serving-freshly-brewed-coffee-41711-large.mp4',
    poster: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '7',
    title: 'The AI Horizon Podcast',
    category: 'AI Podcasts',
    industry: 'Media / Education',
    desc: 'Multi-camera simulated podcast layout with automated speaker tracking and text overlays, generating micro-content from audio.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-working-at-a-laptop-in-a-cafe-42260-large.mp4',
    poster: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '8',
    title: 'LaunchDay Campaign Reel',
    category: 'Social Media Campaigns',
    industry: 'Mobile Apps',
    desc: 'Dynamic social media compilation capturing rapid visual hooks and typography overlays for maximum engagement metrics.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-and-typing-on-smartphone-41662-large.mp4',
    poster: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80'
  }
];

const CATEGORIES = [
  'All',
  'Cinematic Videos',
  'AI Clone Videos',
  'Product Videos',
  'UGC Videos',
  'Real Estate Videos',
  'Commercial Ads',
  'AI Podcasts',
  'Social Media Campaigns'
];

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
                    poster={project.poster}
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

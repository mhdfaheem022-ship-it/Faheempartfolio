import { motion } from 'framer-motion';

const STEPS = [
  'Concept Development',
  'Script Writing',
  'Storyboard & Frames',
  'AI Video Generation',
  'Video Editing',
  'Sound & Voiceover',
  'Final Review & QA',
  'Ad Ready for Publishing'
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export default function Process() {
  return (
    <section className="section" id="process" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #eeeeee', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <span className="section-tag">Workflow</span>
          <h2 className="section-title">Production Process</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            A structured, step-by-step pipeline blending creative storytelling with generative AI tools.
          </p>
        </div>

        {/* Curved Process Map */}
        <motion.div 
          className="process-map-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Thread Dotted BG Line */}
          <div className="thread-svg-bg" />

          {/* Nodes Container */}
          <div className="thread-nodes-container">
            {STEPS.map((step, idx) => (
              <div key={idx} className="t-row">
                <motion.div 
                  className="t-step-box"
                  variants={itemVariants}
                >
                  <span className="num">{idx + 1}</span>
                  {step}
                </motion.div>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}

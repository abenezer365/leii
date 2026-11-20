import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="overview" className="hero-section scroll-mt-0">
      <img className="hero-photo" src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=2200&q=90" alt="Freshly harvested coffee cherries" fetchpriority="high" />
      <div className="hero-shade" />
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 44 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="hero-kicker">Addis Ababa, Ethiopia <span>·</span> Green coffee, grown at origin</p>
        <h1>Rooted in<br />Ethiopia.<br /><em>Ready for the world.</em></h1>
        <p className="hero-intro">Traceable Arabica. Six extraordinary origins. One direct line to your next great coffee.</p>
        <div className="hero-actions">
          <a href="#inquiry" className="hero-primary">Start a conversation <ArrowUpRight size={20} strokeWidth={1.8} /></a>
          <a href="#origins" className="hero-secondary">Explore our origins</a>
        </div>
      </motion.div>
      <div className="hero-bottom">
        <span>Guji / Sidama / Yirgacheffe / Limu / Jimma / Nekemte</span>
        <a href="#heritage" aria-label="Scroll to learn about Le'ii"><ArrowDown size={20} strokeWidth={1.7} /></a>
      </div>
    </section>
  );
}

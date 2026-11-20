import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react';
import logo from '../../assets/logo-white-bg.png';

const links = [
  ['01', 'Home', '#overview'],
  ['02', 'Our story', '#heritage'],
  ['03', 'Coffee origins', '#origins'],
  ['04', 'Export services', '#services'],
  ['05', 'Quality', '#quality'],
  ['06', 'Get in touch', '#inquiry'],
];

export default function Navbar({ onOpenProfile }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(() => window.scrollY < 90);
  const previousScrollY = useRef(window.scrollY);
  const touchStartY = useRef(null);

  useEffect(() => {
    function updateScroll() {
      const currentScrollY = window.scrollY;
      const change = currentScrollY - previousScrollY.current;
      previousScrollY.current = currentScrollY;

      if (currentScrollY < 90) {
        setHeaderVisible(true);
      } else if (change < -0.5) setHeaderVisible(true);
      else if (change > 0.5 && !menuOpen) setHeaderVisible(false);
    }

    function updateWheel(event) {
      if (window.scrollY < 90 || event.deltaY < 0) setHeaderVisible(true);
      else if (event.deltaY > 0 && !menuOpen) setHeaderVisible(false);
    }

    function updateTouchStart(event) {
      touchStartY.current = event.touches[0]?.clientY ?? null;
    }

    function updateTouchMove(event) {
      const currentTouchY = event.touches[0]?.clientY;
      if (touchStartY.current === null || currentTouchY === undefined) return;
      const change = touchStartY.current - currentTouchY;
      if (Math.abs(change) > 5) {
        if (change > 0 && window.scrollY >= 90 && !menuOpen) setHeaderVisible(false);
        else if (change < 0) setHeaderVisible(true);
        touchStartY.current = currentTouchY;
      }
    }

    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('wheel', updateWheel, { passive: true });
    window.addEventListener('touchstart', updateTouchStart, { passive: true });
    window.addEventListener('touchmove', updateTouchMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('wheel', updateWheel);
      window.removeEventListener('touchstart', updateTouchStart);
      window.removeEventListener('touchmove', updateTouchMove);
    };
  }, [menuOpen]);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') setMenuOpen(false);
    }
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('navigation-open', menuOpen);
    return () => document.body.classList.remove('navigation-open');
  }, [menuOpen]);

  function navigateTo(target) {
    setMenuOpen(false);
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <header className={`site-header ${headerVisible || menuOpen ? 'site-header-visible' : ''}`}>
        <a href="#overview" aria-label="Le'ii Coffee Exports home" className="site-brand">
          <img src={logo} alt="Le'ii Coffee Exports PLC" />
          <span>COFFEE EXPORTS PLC</span>
        </a>
        <div className="header-actions">
          <button type="button" onClick={() => navigateTo('#inquiry')} className="header-contact">
            <span>Request a quote</span><ArrowDownRight size={19} strokeWidth={1.8} />
          </button>
          <button
            type="button"
            className="header-menu-toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="full-screen-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={25} strokeWidth={1.8} /> : <Menu size={25} strokeWidth={1.8} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="full-screen-navigation"
            className="full-screen-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="full-nav-inner">
              <div className="full-nav-intro">
                <p>Le'ii Coffee Exports PLC</p>
                <h2>Rooted in Ethiopia.<br /><span>Ready for the world.</span></h2>
                <button type="button" className="full-nav-profile" onClick={() => { setMenuOpen(false); onOpenProfile(); }}>
                  Company profile <ArrowUpRight size={20} strokeWidth={1.8} />
                </button>
              </div>
              <nav className="full-nav-links" aria-label="Site sections">
                {links.map(([number, label, target]) => (
                  <a key={target} href={target} onClick={() => navigateTo(target)}>
                    <span>{number}</span>{label}<ArrowDownRight size={21} strokeWidth={1.6} />
                  </a>
                ))}
              </nav>
              <img src={logo} alt="" aria-hidden="true" className="full-nav-watermark" />
              <p className="full-nav-footer">ADDIS ABABA, ETHIOPIA <span>EST. 2025</span></p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

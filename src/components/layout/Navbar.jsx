import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import logo from '../../assets/logo-white-bg.png';

const links = [
  ['Origins', '#origins'],
  ['Our approach', '#heritage'],
  ['Quality', '#quality'],
  ['Contact', '#inquiry'],
];

export default function Navbar({ onOpenProfile }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 90);
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  function navigateTo(target) {
    setMenuOpen(false);
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <header className="mobile-header fixed inset-x-0 top-0 z-40 flex h-[72px] items-center justify-between px-5 md:hidden">
        <a href="#overview" aria-label="Le'ii Coffee Exports home">
          <img src={logo} alt="Le'ii Coffee Exports PLC" className="h-11 w-36 object-contain object-left" />
        </a>
        <button type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md">
          {menuOpen ? <X size={25} strokeWidth={1.7} /> : <Menu size={25} strokeWidth={1.7} />}
        </button>
      </header>

      <nav className={`desktop-float-nav ${scrolled ? 'is-visible' : ''}`} aria-label="Main navigation" aria-hidden={!scrolled}>
        <a href="#overview" aria-label="Le'ii Coffee Exports home" tabIndex={scrolled ? 0 : -1} className="nav-brand">
          <img src={logo} alt="Le'ii Coffee Exports PLC" />
        </a>
        <div className="nav-links">
          {links.map(([label, target]) => <a key={target} href={target} tabIndex={scrolled ? 0 : -1}>{label}</a>)}
          <button type="button" tabIndex={scrolled ? 0 : -1} onClick={onOpenProfile}>Profile</button>
        </div>
        <button type="button" tabIndex={scrolled ? 0 : -1} onClick={() => navigateTo('#inquiry')} className="nav-cta">Talk coffee <ArrowUpRight size={17} strokeWidth={1.8} /></button>
      </nav>

      {menuOpen && (
        <nav className="mobile-menu fixed inset-x-4 top-[82px] z-50 rounded-[28px] p-5 md:hidden" aria-label="Mobile navigation">
          {links.map(([label, target]) => (
            <a key={target} href={target} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={18} strokeWidth={1.7} /></a>
          ))}
          <button type="button" onClick={() => { setMenuOpen(false); onOpenProfile(); }}>Company profile<ArrowUpRight size={18} strokeWidth={1.7} /></button>
        </nav>
      )}
    </>
  );
}

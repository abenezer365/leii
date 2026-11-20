import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo-white-bg.png';

const links = [
  ['Philosophy', '#heritage'],
  ['Origins', '#origins'],
  ['Export Services', '#services'],
  ['Quality Control', '#quality'],
  ['Contact', '#inquiry'],
];

export default function Navbar({ onOpenProfile }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function navigateTo(target) {
    setMenuOpen(false);
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-4 md:h-20 md:px-8">
        <a href="#overview" aria-label="Le'ii Coffee Exports home" className="flex items-center">
          <img src={logo} alt="Le'ii Coffee Exports PLC" className="h-10 w-32 object-contain object-left md:h-12 md:w-40" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {links.map(([label, target]) => (
            <a key={target} href={target} className="text-[11px] font-medium tracking-wide text-charcoal transition-colors hover:text-forest">{label}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <button type="button" onClick={onOpenProfile} className="min-h-11 px-4 text-xs font-medium text-forest transition-colors hover:text-champagne">Company Profile</button>
          <button type="button" onClick={() => navigateTo('#inquiry')} className="min-h-11 bg-forest px-5 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-forest-hover">Request a Quote</button>
        </div>
        <button type="button" onClick={() => navigateTo('#inquiry')} className="ml-auto mr-3 min-h-11 rounded-full bg-forest px-4 text-[11px] font-semibold text-white lg:hidden">Request Quote</button>
        <button type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="grid h-11 w-11 place-items-center text-forest lg:hidden">
          {menuOpen ? <X size={21} strokeWidth={1.5} /> : <Menu size={21} strokeWidth={1.5} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="absolute inset-x-0 top-full border-b border-forest/10 bg-white px-5 py-3 shadow-sm lg:hidden" aria-label="Mobile navigation">
          {links.map(([label, target]) => (
            <button key={target} type="button" onClick={() => navigateTo(target)} className="flex min-h-12 w-full items-center border-b border-forest/10 text-left text-sm text-charcoal last:border-0">{label}</button>
          ))}
          <button type="button" onClick={() => { setMenuOpen(false); onOpenProfile(); }} className="flex min-h-12 w-full items-center text-left text-sm font-medium text-forest">Company Profile</button>
        </nav>
      )}
    </header>
  );
}

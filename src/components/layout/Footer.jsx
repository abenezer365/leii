import logo from '../../assets/logo-dark-bg.png';

export default function Footer({ onOpenProfile }) {
  const nav = [['Philosophy', '#heritage'], ['Origins Portfolio', '#origins'], ['Export Services', '#services'], ['Quality Control', '#quality'], ['Request a Quote', '#inquiry']];
  const regions = ['Guji', 'Sidama', 'Yirgacheffe', 'Limu', 'Jimma', 'Nekemte'];
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto grid max-w-page gap-10 px-5 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-12 lg:py-16">
        <div>
          <img src={logo} alt="Le'ii Coffee Exports PLC" className="mb-5 h-12 w-44 object-contain object-left" />
          <p className="max-w-sm text-sm leading-7 text-cream/75">Ethiopian coffee, connected to the world.</p>
          <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-champagne">Established 2025</p>
        </div>
        <div>
          <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne">Navigation</h3>
          <ul className="space-y-3">{nav.map(([label, href]) => <li key={label}><a className="text-xs text-cream/75 transition-colors hover:text-white" href={href}>{label}</a></li>)}</ul>
        </div>
        <div>
          <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne">Coffee Origins</h3>
          <ul className="space-y-3">{regions.map((region) => <li key={region}><a className="text-xs text-cream/75 transition-colors hover:text-white" href="#origins">{region}</a></li>)}</ul>
        </div>
        <div>
          <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne">Export Desk</h3>
          <p className="text-xs leading-6 text-cream/75">Tsion A., Export Manager<br />Addis Ababa, Ethiopia</p>
          <a className="mt-3 block text-xs text-cream/75 hover:text-white" href="tel:+251953332233">+251 953 332 233</a>
          <a className="mt-2 block text-xs text-cream/75 hover:text-white" href="mailto:info@leiicoffee.com">info@leiicoffee.com</a>
          <a className="mt-2 block text-xs text-cream/75 hover:text-white" href="https://wa.me/251953332233" target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="mt-2 block text-xs text-cream/75 hover:text-white" href="https://www.instagram.com/leiicoffee/" target="_blank" rel="noreferrer">Instagram @leiicoffee</a>
          <button type="button" onClick={onOpenProfile} className="mt-4 min-h-11 border-b border-champagne/60 text-left text-xs text-white">Download Company Profile</button>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-page px-5 py-5 text-[10px] leading-5 text-cream/60 md:px-8">© 2025 Le'ii Coffee Exports PLC. All Rights Reserved. Addis Ababa, Ethiopia.</p>
      </div>
    </footer>
  );
}

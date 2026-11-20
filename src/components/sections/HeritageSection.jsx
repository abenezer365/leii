import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader.jsx';
import interior from '../../assets/interior.jpeg';
import coffeePattern from '../../assets/coffee-pattern.jpeg';
import logo from '../../assets/logo-white-bg.png';

const pillars = [
  ['01', 'Close to origin', 'Working relationships across Ethiopia’s southern and western growing regions.'],
  ['02', 'Built around your spec', 'Lots selected for the cup, process, and volume you need.'],
  ['03', 'One direct contact', 'Samples, updates, and export details handled by our Addis Ababa team.'],
];

export default function HeritageSection() {
  return (
    <section id="heritage" className="scroll-mt-24 bg-white px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-page">
        <SectionHeader eyebrow="From the birthplace of Arabica" title="Coffee with deep roots. Trade with a clear point of view." />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5 text-sm leading-7 text-charcoal md:text-base md:leading-8">
            <p>Le'ii brings Ethiopia’s exceptional coffee regions closer to the people who roast them.</p>
            <p>We connect buyers with carefully selected green Arabica, clear lot details, and a responsive export team in Addis Ababa.</p>
          </div>
          <div className="group relative min-h-[280px] overflow-hidden">
            <img src={interior} alt="Le'ii Coffee Exports office in Addis Ababa" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
            <p className="heritage-photo-caption absolute bottom-6 left-6 max-w-sm font-serif text-3xl font-bold text-white md:text-5xl">A local team.<br />A global outlook.</p>
          </div>
        </div>
        <div className="coffee-origin-note">
          <img src={coffeePattern} alt="Coffee bean pattern" loading="lazy" />
          <img src={logo} alt="" aria-hidden="true" className="coffee-brand-watermark" />
          <div className="coffee-origin-copy">
            <div className="ethiopia-flag" role="img" aria-label="Ethiopian flag colors"><span /><span /><span /></div>
            <p>ETHIOPIAN ORIGIN</p>
            <h3>Grown here. Shared with the world.</h3>
          </div>
        </div>
        <div className="mt-12 grid border-l border-t border-forest/15 sm:grid-cols-3">
          {pillars.map(([number, title, description]) => <motion.article key={number} className="border-b border-r border-forest/15 p-5 md:p-7" initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <p className="mb-7 text-sm font-extrabold tracking-[0.2em] text-champagne">{number} /</p>
            <h3 className="font-serif text-2xl font-semibold text-forest">{title}</h3>
            <p className="mt-3 text-base leading-7 text-charcoal">{description}</p>
          </motion.article>)}
        </div>
      </div>
    </section>
  );
}

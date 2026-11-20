import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader.jsx';

const pillars = [
  ['01', 'Direct Origin Access', 'Established relationships with washing stations, smallholder cooperatives, and private estates across southern and western Ethiopia.'],
  ['02', 'Specification-Driven Sourcing', 'Every lot is matched to buyer requirements across screen size, defect tolerance, moisture stability, processing method, and sensory profile.'],
  ['03', 'Partnership Reliability', 'Transparent communication, timely sample dispatch, and structured contract execution managed directly by our export desk in Addis Ababa.'],
];

export default function HeritageSection() {
  return (
    <section id="heritage" className="scroll-mt-20 bg-white px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-page">
        <SectionHeader eyebrow="Our identity and philosophy" title="Ethiopian heritage meets disciplined international trade." />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5 text-sm leading-7 text-charcoal md:text-base md:leading-8">
            <p>Founded in 2025 in Addis Ababa, Le'ii Coffee Exports PLC was established with a singular purpose: to bridge the extraordinary genetic diversity of Ethiopian heirloom coffee with the exacting consistency demanded by international importers, specialty roasters, and green coffee distributors.</p>
            <p>Ethiopia is the botanical birthplace of Coffea arabica, where elevation, microclimate, and centuries of cultivation produce cup profiles unmatched anywhere else in the world. Through direct local sourcing relationships across six distinct producing zones, our team oversees every stage from cherry selection and processing supervision to pre-shipment cupping and export documentation.</p>
          </div>
          <div className="group relative min-h-[280px] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=1200&q=85" alt="Coffee harvest craft and careful cherry sorting" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/55 to-transparent" />
            <p className="absolute bottom-5 left-5 max-w-sm font-serif text-2xl text-white md:text-3xl">Origin knowledge, made practical for global buyers.</p>
          </div>
        </div>
        <div className="mt-12 grid border-l border-t border-forest/15 sm:grid-cols-3">
          {pillars.map(([number, title, description]) => <motion.article key={number} className="border-b border-r border-forest/15 p-5 md:p-7" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
            <p className="mb-7 text-[10px] font-semibold tracking-[0.2em] text-champagne">{number} /</p>
            <h3 className="font-serif text-2xl font-semibold text-forest">{title}</h3>
            <p className="mt-3 text-xs leading-6 text-charcoal md:text-sm">{description}</p>
          </motion.article>)}
        </div>
      </div>
    </section>
  );
}

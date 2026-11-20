import { useMemo, useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { originsData } from '../../data/originsData.js';
import SectionHeader from '../ui/SectionHeader.jsx';

const filters = ['All Origins (6)', 'Washed Process', 'Natural Process', 'Specialty Grade 1 & 2', 'Commercial Grades'];

export default function OriginsCatalogue({ onSelectOrigin }) {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const visibleOrigins = useMemo(() => originsData.filter((origin) => {
    if (activeFilter === 'Washed Process') return origin.processing.includes('Washed');
    if (activeFilter === 'Natural Process') return origin.processing.includes('Natural');
    if (activeFilter === 'Specialty Grade 1 & 2') return origin.grades.some((grade) => grade === 'Grade 1' || grade === 'Grade 2');
    if (activeFilter === 'Commercial Grades') return origin.grades.some((grade) => grade.includes('Grade 3') || grade.includes('Grade 4') || grade.includes('Grade 5'));
    return true;
  }), [activeFilter]);

  return (
    <section id="origins" className="scroll-mt-24 bg-cream px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-page">
        <SectionHeader eyebrow="One country. Six unmistakable profiles." title="Meet the origins." description="Choose a region. Find your next coffee." />
        <div className="-mx-5 mb-8 overflow-x-auto px-5 md:mx-0 md:px-0">
          <div className="flex min-w-max gap-2 border-b border-forest/15 md:flex-wrap">
            {filters.map((filter) => <button key={filter} type="button" onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter} className={`relative min-h-11 px-4 text-[11px] font-medium transition-colors ${activeFilter === filter ? 'text-forest' : 'text-charcoal hover:text-forest'}`}>
              {filter}
              {activeFilter === filter && <motion.span layoutId="origin-filter-underline" className="absolute inset-x-0 bottom-[-1px] h-0.5 bg-champagne" transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} />}
            </button>)}
          </div>
        </div>
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleOrigins.map((origin, index) => <motion.article layout key={origin.name} className="flex flex-col border border-forest/10 bg-white" initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.85, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}>
            <div className="group relative aspect-[16/10] overflow-hidden bg-forest/10">
              <img src={origin.image} alt={`${origin.name} coffee origin`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              <span className="absolute left-4 top-4 bg-white/95 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-forest">{origin.processing.join(' / ')}</span>
            </div>
            <div className="flex flex-1 flex-col p-5 md:p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-3xl font-semibold text-forest">{origin.name}</h3>
                <span className="mt-2 text-[10px] text-charcoal">{origin.grades.slice(0, 2).join(' / ')}</span>
              </div>
              <p className="mt-2 flex items-center gap-2 text-sm text-charcoal"><MapPin size={17} strokeWidth={1.7} />{origin.zone}</p>
              <p className="mt-4 text-base leading-7 text-charcoal">{origin.notes}</p>
              <div className="mt-5 grid grid-cols-2 gap-3 py-4 text-sm">
                <div><p className="uppercase tracking-wider text-charcoal/70">Elevation</p><p className="mt-1 font-bold text-forest">{origin.elevation}</p></div>
                <div><p className="uppercase tracking-wider text-charcoal/70">Harvest</p><p className="mt-1 font-bold text-forest">{origin.harvest}</p></div>
              </div>
              <button type="button" onClick={() => onSelectOrigin(origin)} className="mt-auto flex min-h-11 items-center justify-between border-t border-forest/10 pt-3 text-left text-xs font-semibold text-forest hover:text-champagne">
                Inspect Specifications <ArrowUpRight size={16} strokeWidth={1.5} />
              </button>
            </div>
          </motion.article>)}
        </motion.div>
      </div>
    </section>
  );
}

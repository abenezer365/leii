import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader.jsx';

const metrics = [
  ['6 Premier Regions', 'Guji, Sidama, Yirgacheffe, Limu, Jimma & Nekemte'],
  ['Grade 1 to Grade 5', 'Specialty & commercial export lots'],
  ['100% Traceable', 'Washed, Natural & custom processed'],
  ['Global Logistics', 'FOB Djibouti & worldwide port delivery'],
];

export default function HeroSection() {
  return (
    <section id="overview" className="scroll-mt-20 bg-cream">
      <div className="mx-auto grid max-w-page gap-12 px-5 py-12 md:px-8 md:py-20 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-24">
        <div className="lg:col-span-7">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne md:text-xs">Addis Ababa, Ethiopia <span className="mx-2 text-forest/40">|</span> Specialty Green Coffee Exports</p>
          <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[0.98] tracking-[-0.03em] text-forest sm:text-6xl lg:text-7xl">Connecting Ethiopia's premier coffee origins to global roasters.</h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-charcoal sm:text-base sm:leading-8">Le'ii Coffee Exports PLC sources, evaluates, and exports traceable specialty and commercial green Arabica beans from Ethiopia's most celebrated highland regions. Built on rigorous quality control, customized sourcing, and enduring international trade partnerships.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#inquiry" className="inline-flex min-h-12 items-center justify-center gap-3 bg-forest px-6 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-forest-hover">Request a Quote <ArrowUpRight size={16} strokeWidth={1.5} /></a>
            <a href="#origins" className="inline-flex min-h-12 items-center justify-center gap-3 border border-forest px-6 text-xs font-semibold tracking-wide text-forest transition-colors hover:bg-forest hover:text-white">Explore Our Coffee <ArrowDownRight size={16} strokeWidth={1.5} /></a>
          </div>
          <div className="mt-10 grid grid-cols-2 border-t border-forest/15 sm:grid-cols-4">
            {metrics.map(([title, detail]) => <div key={title} className="border-b border-r border-forest/15 py-4 pr-3 last:border-r-0 sm:border-b-0 sm:py-5 sm:first:pl-0 sm:last:pr-0">
              <p className="font-serif text-lg font-semibold text-forest sm:text-xl">{title}</p>
              <p className="mt-1 text-[10px] leading-5 text-charcoal sm:text-[11px]">{detail}</p>
            </div>)}
          </div>
        </div>
        <motion.figure className="relative mx-2 lg:col-span-5 lg:mx-0" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <div className="absolute -bottom-3 -right-3 h-full w-full border border-champagne" />
          <div className="group relative aspect-[4/5] overflow-hidden bg-forest/10">
            <img className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=1400&q=85" alt="Coffee cherries selected at harvest in a highland growing region" fetchpriority="high" />
          </div>
          <figcaption className="absolute -bottom-5 left-4 max-w-[85%] bg-white px-4 py-3 text-[10px] uppercase tracking-[0.12em] text-forest sm:left-7 sm:px-5 sm:text-[11px]">Single-origin Ethiopian Arabica | Hand-selected at peak harvest</figcaption>
        </motion.figure>
      </div>
    </section>
  );
}

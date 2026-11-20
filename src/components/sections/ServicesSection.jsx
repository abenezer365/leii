import { ArrowUpRight, Coffee, ClipboardCheck, Handshake, Map, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import { servicesData } from '../../data/servicesData.js';
import SectionHeader from '../ui/SectionHeader.jsx';
import coffeeBeans from '../../assets/best-image.jpeg';

const icons = { coffee: Coffee, map: Map, sliders: SlidersHorizontal, quality: ClipboardCheck, partnership: Handshake };

export default function ServicesSection({ onPartner }) {
  return (
    <section id="services" className="scroll-mt-24 bg-white px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-page">
        <SectionHeader eyebrow="A better way to buy at origin" title="Good coffee. Good people. Good business." description="Everything you need to source Ethiopian coffee, handled directly." />
        <div className="grid border-l border-t border-forest/15 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => {
            const Icon = icons[service.icon];
            return <motion.article key={service.number} className="border-b border-r border-forest/15 p-5 md:p-7" initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold tracking-[0.16em] text-champagne">{service.number}</span>
                <Icon size={21} strokeWidth={1.5} className="text-forest" />
              </div>
              <h3 className="mt-8 font-serif text-2xl font-semibold leading-tight text-forest">{service.title}</h3>
              <p className="mt-3 text-base leading-7 text-charcoal">{service.description}</p>
            </motion.article>;
          })}
        </div>
        <div className="partnership-banner mt-10 flex flex-col items-start justify-between gap-6 p-6 text-white md:flex-row md:items-center md:p-10">
          <img src={coffeeBeans} alt="Roasted coffee beans and ground coffee" loading="lazy" />
          <div className="partnership-banner-shade" />
          <div>
            <p className="mb-2 text-sm font-extrabold uppercase tracking-[0.2em] text-champagne">Let's build something good</p>
            <h3 className="max-w-2xl font-serif text-3xl font-semibold leading-tight md:text-4xl">Your Ethiopian coffee partner, from first sample to next harvest.</h3>
          </div>
          <button type="button" onClick={onPartner} className="inline-flex min-h-12 shrink-0 items-center gap-3 bg-champagne px-5 text-xs font-semibold text-forest transition-colors hover:bg-white">Become Our Partner <ArrowUpRight size={16} strokeWidth={1.5} /></button>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { exportStandards, qualitySteps } from '../../data/servicesData.js';
import SectionHeader from '../ui/SectionHeader.jsx';

export default function QualityWorkflowSection() {
  return (
    <section id="quality" className="scroll-mt-20 bg-cream px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-page">
        <SectionHeader eyebrow="Analytical quality and logistics" title="From highland harvest to international port." description="A clear four-stage workflow supports lot consistency, buyer review, and readiness for export." />
        <div className="grid border-l border-t border-forest/15 sm:grid-cols-2 lg:grid-cols-4">
          {qualitySteps.map((step, index) => <motion.article key={step.title} className="border-b border-r border-forest/15 p-5 md:p-6" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-champagne">Step {String(index + 1).padStart(2, '0')}</p>
            <h3 className="mt-6 font-serif text-2xl font-semibold leading-tight text-forest">{step.title}</h3>
            <p className="mt-3 text-xs leading-6 text-charcoal">{step.description}</p>
          </motion.article>)}
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne">Export specification</p>
            <h3 className="font-serif text-3xl font-semibold text-forest md:text-4xl">Technical standards, clearly stated.</h3>
            <p className="mt-4 text-sm leading-7 text-charcoal">Lot-specific availability and final specifications are confirmed with buyers during sampling and contracting.</p>
            <div className="group mt-7 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=1200&q=85" alt="Selected green coffee beans prepared for export" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="overflow-hidden border border-forest/15 bg-white">
              {exportStandards.map(([label, value], index) => <div key={label} className={`grid gap-2 p-4 sm:grid-cols-[220px_1fr] sm:gap-5 md:p-5 ${index ? 'border-t border-forest/10' : ''}`}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-forest">{label}</p>
                <p className="text-xs leading-6 text-charcoal">{value}</p>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

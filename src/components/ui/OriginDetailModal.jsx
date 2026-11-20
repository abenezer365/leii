import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function OriginDetailModal({ origin, onClose, onRequestSample }) {
  useEffect(() => {
    if (!origin) return undefined;
    function onKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [origin, onClose]);

  return (
    <AnimatePresence>
      {origin && <motion.div className="fixed inset-0 z-[70] flex items-end justify-center bg-forest/55 p-0 sm:items-center sm:p-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
        <motion.section role="dialog" aria-modal="true" aria-labelledby="origin-title" className="max-h-[92vh] w-full max-w-3xl overflow-y-auto bg-white" initial={{ y: 22, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 16, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
          <div className="flex items-start justify-between border-b border-forest/10 p-5 sm:p-7">
            <div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne">Origin specification</p><h2 id="origin-title" className="mt-2 font-serif text-4xl font-semibold text-forest">{origin.name}</h2><p className="mt-1 text-xs text-charcoal">{origin.zone}</p></div>
            <button type="button" aria-label="Close specifications" onClick={onClose} className="grid h-11 w-11 place-items-center text-forest hover:bg-cream"><X size={20} strokeWidth={1.5} /></button>
          </div>
          <div className="grid md:grid-cols-[0.9fr_1.1fr]">
            <img src={origin.image} alt={`${origin.name} origin`} className="h-48 w-full object-cover md:h-full md:min-h-[360px]" />
            <div className="p-5 sm:p-7">
              <p className="text-xs leading-6 text-charcoal">{origin.profile}</p>
              <dl className="mt-5 divide-y divide-forest/10 border-y border-forest/10">
                {[['Elevation', origin.elevation], ['Varietals', origin.varietals], ['Processing', origin.processing.join(', ')], ['Grades available', origin.grades.join(', ')], ['Harvest window', origin.harvest], ['Cupping notes', origin.notes]].map(([label, value]) => <div key={label} className="grid gap-1 py-3 sm:grid-cols-[110px_1fr] sm:gap-3"><dt className="text-[10px] font-semibold uppercase tracking-wider text-forest">{label}</dt><dd className="text-xs leading-5 text-charcoal">{value}</dd></div>)}
              </dl>
              <button type="button" onClick={() => onRequestSample(origin)} className="mt-5 min-h-12 w-full bg-forest px-5 text-xs font-semibold text-white transition-colors hover:bg-forest-hover">Request Sample for This Origin</button>
            </div>
          </div>
        </motion.section>
      </motion.div>}
    </AnimatePresence>
  );
}

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Mail, Phone, X } from 'lucide-react';
import logo from '../../assets/logo-dark-bg.png';
import { companyProfileData as profile } from '../../data/companyProfileData.js';
import { exportStandards } from '../../data/servicesData.js';

export default function CompanyProfileModal({ open, onClose, onRequestSamples }) {
  useEffect(() => {
    if (!open) return undefined;
    function onKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && <motion.div className="fixed inset-0 z-[70] flex items-end justify-center bg-forest/55 p-0 sm:items-center sm:p-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
        <motion.section role="dialog" aria-modal="true" aria-labelledby="profile-title" className="company-profile-print max-h-[94vh] w-full max-w-4xl overflow-y-auto bg-white" initial={{ y: 22, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 16, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
          <header className="relative bg-forest px-6 py-7 text-white md:px-10 md:py-9">
            <div className="flex flex-wrap items-center justify-between gap-5">
              <img src={logo} alt="Le'ii Coffee Exports PLC" className="h-14 w-48 object-contain object-left" />
              <div className="text-left sm:text-right"><p className="text-[10px] uppercase tracking-[0.2em] text-champagne">Official Company Profile</p><p className="mt-2 text-xs text-white/75">Established {profile.established} | {profile.location}</p></div>
            </div>
            <h1 id="profile-title" className="mt-7 font-serif text-4xl font-semibold md:text-5xl">{profile.name}</h1>
            <button type="button" aria-label="Close company profile" onClick={onClose} className="no-print absolute right-3 top-3 grid h-11 w-11 place-items-center text-white hover:bg-white/10"><X size={20} strokeWidth={1.5} /></button>
          </header>
          <div className="space-y-8 px-6 py-7 md:px-10 md:py-9">
            <section><h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne">Executive overview</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-charcoal">{profile.overview}</p></section>
            <section className="grid gap-5 border-y border-forest/15 py-5 sm:grid-cols-2">
              {[['Origin portfolio', profile.origins], ['Grades', profile.grades], ['Processing', profile.processing], ['Packaging', profile.packaging], ['Container guide', profile.capacity], ['Logistics', profile.logistics]].map(([label, value]) => <div key={label}><h3 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-forest">{label}</h3><p className="mt-1 text-xs leading-6 text-charcoal">{value}</p></div>)}
            </section>
            <section>
              <h2 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne">Export specifications</h2>
              <div className="border border-forest/15">{exportStandards.map(([label, value], index) => <div key={label} className={`grid gap-2 px-4 py-3 sm:grid-cols-[200px_1fr] ${index ? 'border-t border-forest/10' : ''}`}><span className="text-[10px] font-semibold text-forest">{label}</span><span className="text-xs leading-5 text-charcoal">{value}</span></div>)}</div>
            </section>
            <section className="grid gap-4 border-t border-forest/15 pt-5 sm:grid-cols-2">
              <div><h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne">Direct Export Desk</h2><p className="mt-3 text-xs font-medium text-forest">{profile.contact}</p><p className="mt-1 flex items-center gap-2 text-xs text-charcoal"><Phone size={14} strokeWidth={1.5} />{profile.phone}</p><p className="mt-1 flex items-center gap-2 text-xs text-charcoal"><Mail size={14} strokeWidth={1.5} />{profile.email}</p></div>
              <p className="text-xs leading-6 text-charcoal">Lot availability, final specifications, and shipment terms are confirmed during buyer review and contracting.</p>
            </section>
            <div className="no-print flex flex-col gap-3 border-t border-forest/15 pt-5 sm:flex-row">
              <button type="button" onClick={() => window.print()} className="inline-flex min-h-12 items-center justify-center gap-2 bg-forest px-5 text-xs font-semibold text-white hover:bg-forest-hover"><Download size={15} strokeWidth={1.5} />Print / Save as PDF</button>
              <button type="button" onClick={onRequestSamples} className="min-h-12 border border-forest px-5 text-xs font-semibold text-forest hover:bg-cream">Request Samples Now</button>
            </div>
          </div>
        </motion.section>
      </motion.div>}
    </AnimatePresence>
  );
}

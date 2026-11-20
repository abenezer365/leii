import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, description, centered = false }) {
  return (
    <motion.div
      className={centered ? 'mx-auto mb-12 max-w-3xl text-center md:mb-16' : 'mb-12 max-w-3xl md:mb-16'}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-champagne md:text-xs">{eyebrow}</p>
      <h2 className="font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-forest sm:text-5xl md:text-6xl">{title}</h2>
      {description && <p className={`mt-5 max-w-2xl text-sm leading-7 text-charcoal md:text-base md:leading-8 ${centered ? 'mx-auto' : ''}`}>{description}</p>}
    </motion.div>
  );
}

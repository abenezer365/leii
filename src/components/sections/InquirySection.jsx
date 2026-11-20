import { useEffect, useState } from 'react';
import { Check, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react';
import logo from '../../assets/logo-dark-bg.png';
import SectionHeader from '../ui/SectionHeader.jsx';

const originNames = ['Guji', 'Sidama', 'Yirgacheffe', 'Limu', 'Jimma', 'Nekemte'];
const initialForm = {
  inquiryType: 'Request a Quote',
  fullName: '',
  title: '',
  company: '',
  country: '',
  email: '',
  phone: '',
  processing: 'Washed',
  grade: 'Grade 1',
  volume: 'Sample Evaluation (300g - 1kg)',
  message: '',
};

function formatInquiry(form, selectedOrigins) {
  return [
    `Inquiry type: ${form.inquiryType}`,
    `Name and title: ${form.fullName}${form.title ? `, ${form.title}` : ''}`,
    `Company: ${form.company}`,
    `Country: ${form.country}`,
    `Business email: ${form.email}`,
    `Phone / WhatsApp: ${form.phone || 'Not provided'}`,
    `Preferred origins: ${selectedOrigins.length ? selectedOrigins.join(', ') : 'Open to recommendations'}`,
    `Processing: ${form.processing}`,
    `Grade: ${form.grade}`,
    `Estimated volume: ${form.volume}`,
    `Specifications / message: ${form.message || 'No additional notes'}`,
  ].join('\n');
}

export default function InquirySection({ inquirySeed, onOpenProfile }) {
  const [form, setForm] = useState(initialForm);
  const [selectedOrigins, setSelectedOrigins] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!inquirySeed) return;
    setForm((current) => ({ ...current, ...inquirySeed }));
    if (inquirySeed.origin) setSelectedOrigins((current) => current.includes(inquirySeed.origin) ? current : [...current, inquirySeed.origin]);
    setSubmitted(false);
  }, [inquirySeed]);

  function update(event) {
    setSubmitted(false);
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function toggleOrigin(origin) {
    setSubmitted(false);
    setSelectedOrigins((current) => current.includes(origin) ? current.filter((item) => item !== origin) : [...current, origin]);
  }

  function submit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  const message = formatInquiry(form, selectedOrigins);
  const emailHref = `mailto:info@leiicoffee.com?subject=${encodeURIComponent(`${form.inquiryType} | ${form.company}`)}&body=${encodeURIComponent(message)}`;
  const whatsappHref = `https://wa.me/251953332233?text=${encodeURIComponent(message)}`;

  return (
    <section id="inquiry" className="scroll-mt-20 bg-white px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-page">
        <SectionHeader eyebrow="Direct export desk" title="Start a sourcing conversation." description="Share your target origin, processing preference, and buying requirements. Our Addis Ababa export desk will follow up directly." />
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <aside className="bg-forest p-6 text-white md:p-8 lg:col-span-5">
            <img src={logo} alt="Le'ii Coffee Exports PLC" className="mb-8 h-12 w-44 object-contain object-left" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne">Direct Export Desk</p>
            <h3 className="mt-3 font-serif text-4xl font-semibold leading-tight">Start a sourcing conversation.</h3>
            <div className="mt-8 space-y-5 border-t border-white/20 pt-6">
              <p className="text-sm text-white">Tsion A. <span className="block pt-1 text-xs text-white/65">Export Manager</span></p>
              <a className="flex items-start gap-3 text-xs text-white/80 hover:text-white" href="tel:+251953332233"><Phone size={16} strokeWidth={1.5} />+251 953 332 233</a>
              <a className="flex items-start gap-3 text-xs text-white/80 hover:text-white" href="mailto:info@leiicoffee.com"><Mail size={16} strokeWidth={1.5} />info@leiicoffee.com</a>
              <a className="flex items-start gap-3 text-xs text-white/80 hover:text-white" href="https://www.instagram.com/leiicoffee/" target="_blank" rel="noreferrer"><Instagram size={16} strokeWidth={1.5} />@leiicoffee</a>
              <p className="flex items-start gap-3 text-xs text-white/80"><MapPin size={16} strokeWidth={1.5} />Addis Ababa, Ethiopia</p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 bg-champagne px-4 text-xs font-semibold text-forest transition-colors hover:bg-white"><Send size={15} strokeWidth={1.5} />Chat on WhatsApp</a>
              <button type="button" onClick={onOpenProfile} className="min-h-12 border border-white/40 px-4 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-forest">Download Company Profile</button>
            </div>
          </aside>
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-forest/15 bg-cream p-6 md:p-8" role="status" aria-live="polite">
                <div className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center bg-forest text-white"><Check size={18} strokeWidth={1.5} /></span>
                  <div><h3 className="font-serif text-3xl font-semibold text-forest">Your request is ready.</h3><p className="mt-2 text-xs leading-6 text-charcoal">Choose an option below to send these details to the Le'ii export desk.</p></div>
                </div>
                <dl className="mt-6 grid gap-3 border-t border-forest/15 pt-5 text-xs sm:grid-cols-2">
                  <div><dt className="text-charcoal/70">Inquiry</dt><dd className="mt-1 font-medium text-forest">{form.inquiryType}</dd></div>
                  <div><dt className="text-charcoal/70">Buyer</dt><dd className="mt-1 font-medium text-forest">{form.fullName}, {form.company}, {form.country}</dd></div>
                  <div><dt className="text-charcoal/70">Origins</dt><dd className="mt-1 font-medium text-forest">{selectedOrigins.length ? selectedOrigins.join(', ') : 'Open to recommendations'}</dd></div>
                  <div><dt className="text-charcoal/70">Coffee specification</dt><dd className="mt-1 font-medium text-forest">{form.processing}, {form.grade}, {form.volume}</dd></div>
                </dl>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href={emailHref} className="inline-flex min-h-12 items-center justify-center gap-2 bg-forest px-5 text-xs font-semibold text-white hover:bg-forest-hover"><Mail size={15} strokeWidth={1.5} />Send by Email</a>
                  <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 border border-forest px-5 text-xs font-semibold text-forest hover:bg-white"><Send size={15} strokeWidth={1.5} />Send by WhatsApp</a>
                  <button type="button" onClick={() => setSubmitted(false)} className="min-h-12 px-4 text-xs font-medium text-charcoal underline underline-offset-4">Edit request</button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <fieldset>
                  <legend className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-forest">Inquiry type</legend>
                  <div className="grid grid-cols-3 border border-forest/15">
                    {['Request a Quote', 'Request Green Samples', 'Become Our Partner'].map((type) => <button key={type} type="button" aria-pressed={form.inquiryType === type} onClick={() => setForm((current) => ({ ...current, inquiryType: type }))} className={`min-h-12 px-2 text-[10px] leading-4 transition-colors sm:text-xs ${form.inquiryType === type ? 'bg-forest text-white' : 'text-charcoal hover:bg-cream'}`}>{type}</button>)}
                  </div>
                </fieldset>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="field-label">Full name <span className="text-champagne">*</span><input name="fullName" value={form.fullName} onChange={update} required autoComplete="name" className="field-control" /></label>
                  <label className="field-label">Title / role<input name="title" value={form.title} onChange={update} placeholder="Green Coffee Buyer / Head Roaster" className="field-control" /></label>
                  <label className="field-label">Company name <span className="text-champagne">*</span><input name="company" value={form.company} onChange={update} required autoComplete="organization" className="field-control" /></label>
                  <label className="field-label">Country <span className="text-champagne">*</span><input name="country" value={form.country} onChange={update} required autoComplete="country-name" className="field-control" /></label>
                  <label className="field-label">Business email <span className="text-champagne">*</span><input type="email" name="email" value={form.email} onChange={update} required autoComplete="email" className="field-control" /></label>
                  <label className="field-label">Phone / WhatsApp<input type="tel" name="phone" value={form.phone} onChange={update} autoComplete="tel" className="field-control" /></label>
                </div>
                <fieldset>
                  <legend className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-forest">Preferred origins</legend>
                  <div className="flex flex-wrap gap-2">{originNames.map((origin) => <button key={origin} type="button" aria-pressed={selectedOrigins.includes(origin)} onClick={() => toggleOrigin(origin)} className={`min-h-11 border px-4 text-xs transition-colors ${selectedOrigins.includes(origin) ? 'border-forest bg-forest text-white' : 'border-forest/20 text-charcoal hover:border-forest'}`}>{origin}</button>)}</div>
                </fieldset>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="field-label">Preferred processing<select name="processing" value={form.processing} onChange={update} className="field-control"><option>Washed</option><option>Natural</option><option>Honey</option><option>Mixed</option></select></label>
                  <label className="field-label">Preferred grade<select name="grade" value={form.grade} onChange={update} className="field-control"><option>Grade 1</option><option>Grade 2</option><option>Grade 3-5 Commercial</option></select></label>
                </div>
                <label className="field-label">Estimated volume<select name="volume" value={form.volume} onChange={update} className="field-control"><option>Sample Evaluation (300g - 1kg)</option><option>1 - 5 Metric Tons (LCL)</option><option>1 x 20ft Container (19.2 MT)</option><option>Multi-Container Annual Contract</option></select></label>
                <label className="field-label">Target specifications / message<textarea name="message" value={form.message} onChange={update} rows="4" placeholder="Share cupping targets, destination port, timing, or other requirements." className="field-control resize-y" /></label>
                <button type="submit" className="inline-flex min-h-12 items-center gap-3 bg-forest px-6 text-xs font-semibold text-white transition-colors hover:bg-forest-hover">Review Inquiry <Send size={15} strokeWidth={1.5} /></button>
                <p className="text-[10px] leading-5 text-charcoal/70">Your inquiry is prepared in your email or WhatsApp app. This website does not transmit or store form submissions.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

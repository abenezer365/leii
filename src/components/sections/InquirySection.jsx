import { useEffect, useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

export default function InquirySection({ inquirySeed }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    if (!inquirySeed) return;
    setOrigin(inquirySeed.origin || '');
    if (inquirySeed.message) setForm((current) => ({ ...current, message: inquirySeed.message }));
  }, [inquirySeed]);

  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function submit(event) {
    event.preventDefault();
    const body = [
      `Hello Tsion,`,
      '',
      `I'm ${form.name}${form.company ? ` from ${form.company}` : ''}.`,
      `Reply to: ${form.email}`,
      origin ? `Coffee origin: ${origin}` : '',
      '',
      form.message,
    ].filter(Boolean).join('\n');
    const subject = inquirySeed?.inquiryType || 'Coffee sourcing inquiry';
    window.location.href = `mailto:info@leiicoffee.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="inquiry" className="contact-section scroll-mt-20 px-5 py-20 md:px-8 md:py-32">
      <div className="contact-layout mx-auto max-w-page">
        <div className="contact-copy">
          <p className="contact-kicker">Your next coffee starts here</p>
          <h2>Let's talk<br /><em>coffee.</em></h2>
          <p className="contact-intro">Tell us what you are looking for. We will take it from here.</p>
          <a className="contact-email" href="mailto:info@leiicoffee.com">info@leiicoffee.com <ArrowUpRight size={22} strokeWidth={1.7} /></a>
          <div className="contact-details">
            <a href="tel:+251953332233"><Phone size={19} strokeWidth={1.7} />+251 953 332 233</a>
            <p><MapPin size={19} strokeWidth={1.7} />Addis Ababa, Ethiopia</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <label>
            <span>Your name</span>
            <input name="name" value={form.name} onChange={update} required autoComplete="name" placeholder="Name" />
          </label>
          <label>
            <span>Company</span>
            <input name="company" value={form.company} onChange={update} autoComplete="organization" placeholder="Company name" />
          </label>
          <label>
            <span>Work email</span>
            <input type="email" name="email" value={form.email} onChange={update} required autoComplete="email" placeholder="you@company.com" />
          </label>
          <label>
            <span>What are you looking for?</span>
            <textarea name="message" value={form.message} onChange={update} rows="3" placeholder="Origin, process, quantity, or just say hello." />
          </label>
          <button type="submit">Email Tsion <ArrowUpRight size={20} strokeWidth={1.8} /></button>
          <p className="form-note"><Mail size={15} strokeWidth={1.7} /> Opens a ready-to-send email to our export desk.</p>
        </form>
      </div>
    </section>
  );
}

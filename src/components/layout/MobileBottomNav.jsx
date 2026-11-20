import { Compass, Coffee, FileText, MessageCircle, ShieldCheck } from 'lucide-react';

const items = [
  { label: 'Home', icon: Compass, target: '#overview' },
  { label: 'Origins', icon: Coffee, target: '#origins' },
  { label: 'Quality', icon: ShieldCheck, target: '#quality' },
  { label: 'Profile', icon: FileText, action: 'profile' },
  { label: 'Contact', icon: MessageCircle, target: '#inquiry' },
];

export default function MobileBottomNav({ onOpenProfile }) {
  return (
    <nav className="mobile-bottom-nav safe-bottom md:hidden" aria-label="Mobile quick navigation">
      {items.map(({ label, icon: Icon, target, action }) => action === 'profile' ? (
        <button key={label} type="button" onClick={onOpenProfile}>
          <Icon size={23} strokeWidth={1.8} /><span>{label}</span>
        </button>
      ) : (
        <a key={label} href={target}>
          <Icon size={23} strokeWidth={1.8} /><span>{label}</span>
        </a>
      ))}
    </nav>
  );
}

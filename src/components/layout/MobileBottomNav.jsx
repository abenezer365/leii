import { Compass, Coffee, FileText, Handshake, MessageSquareText } from 'lucide-react';

const items = [
  { label: 'Overview', icon: Compass, target: '#overview' },
  { label: 'Origins', icon: Coffee, target: '#origins' },
  { label: 'Services', icon: Handshake, target: '#services' },
  { label: 'Profile', icon: FileText, action: 'profile' },
  { label: 'Inquire', icon: MessageSquareText, target: '#inquiry' },
];

export default function MobileBottomNav({ onOpenProfile }) {
  return (
    <nav className="safe-bottom fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t border-forest/10 bg-white md:hidden" aria-label="Mobile quick navigation">
      {items.map(({ label, icon: Icon, target, action }) => action === 'profile' ? (
        <button key={label} type="button" onClick={onOpenProfile} className="flex min-h-14 flex-col items-center justify-center gap-1 text-[10px] font-medium text-charcoal">
          <Icon size={18} strokeWidth={1.5} />
          <span>{label}</span>
        </button>
      ) : (
        <a key={label} href={target} className="flex min-h-14 flex-col items-center justify-center gap-1 text-[10px] font-medium text-charcoal">
          <Icon size={18} strokeWidth={1.5} />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}

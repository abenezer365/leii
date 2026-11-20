import { MessageCircle } from 'lucide-react';

const message = encodeURIComponent('I want to talk about your business.');

export default function WhatsAppLauncher() {
  return (
    <a
      className="whatsapp-launcher"
      href={`https://wa.me/251953332233?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Talk to Tsion on WhatsApp"
    >
      <MessageCircle size={23} strokeWidth={1.9} />
      <span>Talk to Tsion</span>
    </a>
  );
}

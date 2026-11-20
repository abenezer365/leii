import { useCallback, useState } from 'react';
import Navbar from './components/layout/Navbar.jsx';
import MobileBottomNav from './components/layout/MobileBottomNav.jsx';
import Footer from './components/layout/Footer.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import HeritageSection from './components/sections/HeritageSection.jsx';
import OriginsCatalogue from './components/sections/OriginsCatalogue.jsx';
import ServicesSection from './components/sections/ServicesSection.jsx';
import QualityWorkflowSection from './components/sections/QualityWorkflowSection.jsx';
import InquirySection from './components/sections/InquirySection.jsx';
import OriginDetailModal from './components/ui/OriginDetailModal.jsx';
import CompanyProfileModal from './components/ui/CompanyProfileModal.jsx';

export default function App() {
  const [selectedOrigin, setSelectedOrigin] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [inquirySeed, setInquirySeed] = useState(null);

  const closeOrigin = useCallback(() => setSelectedOrigin(null), []);
  const closeProfile = useCallback(() => setProfileOpen(false), []);

  function requestSample(origin) {
    setSelectedOrigin(null);
    setInquirySeed({ inquiryType: 'Request Green Samples', origin: origin.name });
    document.querySelector('#inquiry')?.scrollIntoView({ behavior: 'smooth' });
  }

  function becomePartner() {
    setInquirySeed({ inquiryType: 'Become Our Partner', message: 'I am interested in discussing a long-term supply partnership.' });
    document.querySelector('#inquiry')?.scrollIntoView({ behavior: 'smooth' });
  }

  function requestSamplesFromProfile() {
    setProfileOpen(false);
    setInquirySeed({ inquiryType: 'Request Green Samples' });
    document.querySelector('#inquiry')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans">
      <Navbar onOpenProfile={() => setProfileOpen(true)} />
      <main>
        <HeroSection />
        <HeritageSection />
        <OriginsCatalogue onSelectOrigin={setSelectedOrigin} />
        <ServicesSection onPartner={becomePartner} />
        <QualityWorkflowSection />
        <InquirySection inquirySeed={inquirySeed} onOpenProfile={() => setProfileOpen(true)} />
      </main>
      <Footer onOpenProfile={() => setProfileOpen(true)} />
      <MobileBottomNav onOpenProfile={() => setProfileOpen(true)} />
      <OriginDetailModal origin={selectedOrigin} onClose={closeOrigin} onRequestSample={requestSample} />
      <CompanyProfileModal open={profileOpen} onClose={closeProfile} onRequestSamples={requestSamplesFromProfile} />
    </div>
  );
}

import React, { useState, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AppDownloadSection } from './components/AppDownloadSection';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { MobileBottomBar } from './components/MobileBottomBar';

// Code-splitting / Lazy loading para optimizar el bundle JS inicial y reducir TBT
const AboutUs = lazy(() => import('./components/AboutUs').then(m => ({ default: m.AboutUs })));
const Areas = lazy(() => import('./components/Areas').then(m => ({ default: m.Areas })));
const Plans = lazy(() => import('./components/Plans').then(m => ({ default: m.Plans })));
const Trainers = lazy(() => import('./components/Trainers').then(m => ({ default: m.Trainers })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const Schedule = lazy(() => import('./components/Schedule').then(m => ({ default: m.Schedule })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const GoogleMapSection = lazy(() => import('./components/GoogleMapSection').then(m => ({ default: m.GoogleMapSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const InscriptionModal = lazy(() => import('./components/InscriptionModal').then(m => ({ default: m.InscriptionModal })));
const SeoModal = lazy(() => import('./components/SeoModal').then(m => ({ default: m.SeoModal })));

export default function App() {
  const [inscriptionModalOpen, setInscriptionModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<string | undefined>(undefined);
  const [seoModalOpen, setSeoModalOpen] = useState(false);

  const handleOpenInscription = (planName?: string) => {
    setSelectedPlanForModal(planName);
    setInscriptionModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090909] text-white font-sans selection:bg-[#FFE500] selection:text-black antialiased overflow-x-hidden">
      
      {/* Top Floating Navbar */}
      <Navbar
        onOpenInscription={handleOpenInscription}
        onOpenSeo={() => setSeoModalOpen(true)}
      />

      {/* Main Sections */}
      <main id="main-content">
        {/* 1. Hero (Above the fold - Inmediato) */}
        <Hero onOpenInscription={handleOpenInscription} />

        {/* 2. Official App Download & Pre-inscriptions (Above the fold / Crítico) */}
        <AppDownloadSection onOpenInscription={handleOpenInscription} />

        {/* Componentes diferidos con Suspense */}
        <Suspense fallback={<div className="h-32 flex items-center justify-center text-zinc-600 font-mono text-xs" aria-hidden="true">Cargando secciones...</div>}>
          {/* 3. Sobre Nosotros (Sede 3 Plantas) */}
          <AboutUs />

          {/* 4. Áreas y Zonas de Entrenamiento */}
          <Areas onOpenInscription={handleOpenInscription} />

          {/* 6. Planes */}
          <Plans onOpenInscription={handleOpenInscription} />

          {/* 7. Entrenadores */}
          <Trainers onOpenInscription={handleOpenInscription} />

          {/* 8. Testimonios */}
          <Testimonials />

          {/* 9. Horarios */}
          <Schedule />

          {/* 11. Preguntas Frecuentes */}
          <FAQ />

          {/* 12. Contacto */}
          <Contact />

          {/* 13. Google Maps */}
          <GoogleMapSection />

          {/* 14. Footer */}
          <Footer
            onOpenInscription={handleOpenInscription}
            onOpenSeo={() => setSeoModalOpen(true)}
          />
        </Suspense>
      </main>

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloat />

      {/* Persistent Quick Action Bottom Bar for Mobile Devices */}
      <MobileBottomBar onOpenInscription={() => handleOpenInscription()} />

      {/* Interactive Modals cargados bajo demanda */}
      <Suspense fallback={null}>
        {inscriptionModalOpen && (
          <InscriptionModal
            isOpen={inscriptionModalOpen}
            onClose={() => setInscriptionModalOpen(false)}
            defaultPlanName={selectedPlanForModal}
          />
        )}

        {seoModalOpen && (
          <SeoModal
            isOpen={seoModalOpen}
            onClose={() => setSeoModalOpen(false)}
          />
        )}
      </Suspense>

    </div>
  );
}

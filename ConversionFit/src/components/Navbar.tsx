import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Instagram } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { ConversionFitLogo } from './ConversionFitLogo';

interface NavbarProps {
  onOpenInscription: (planName?: string) => void;
  onOpenSeo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInscription }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const navLinks = [
    { name: 'Inicio', href: '#hero', id: 'hero' },
    { name: '¿Qué somos?', href: '#nosotros', id: 'nosotros' },
    { name: 'Áreas', href: '#areas', id: 'areas' },
    { name: 'Planes', href: '#planes', id: 'planes' },
    { name: 'Horarios', href: '#horarios', id: 'horarios' },
    { name: 'Sedes', href: '#ubicacion', id: 'ubicacion' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // ScrollSpy: Calculate which section is currently centered/active
      const scrollPosition = window.scrollY + 160;
      const sectionElements = navLinks
        .map((link) => ({
          id: link.id,
          element: document.getElementById(link.id)
        }))
        .filter((item): item is { id: string; element: HTMLElement } => item.element !== null);

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        if (element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/95 backdrop-blur-md border-b border-zinc-800/80 py-2.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#09090b]/95 via-[#09090b]/70 to-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Logo Brand */}
          <a href="#hero" className="flex items-center gap-2 group focus-ring rounded-lg">
            <ConversionFitLogo size="sm" showSubtitle={false} />
          </a>

          {/* Desktop Nav Links with Active Section Highlight */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 bg-zinc-950/80 p-1.5 rounded-2xl border border-zinc-800/80 backdrop-blur-md shadow-inner" aria-label="Navegación principal">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-[11px] xl:text-xs font-semibold px-2.5 xl:px-3 py-1.5 rounded-xl uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 focus-ring ${
                    isActive
                      ? 'bg-[#FFE500] text-black font-black shadow-md shadow-[#FFE500]/20 scale-[1.03]'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/90'
                  }`}
                >
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 animate-pulse" aria-hidden="true" />}
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => onOpenInscription()}
              className="px-4 py-2 rounded-xl bg-[#FFE500] hover:bg-[#ebd200] text-black font-bebas tracking-wider text-lg shadow-lg shadow-[#FFE500]/20 transition-all duration-300 flex items-center gap-1.5 hover:scale-[1.02] font-black focus-ring"
            >
              <span>PREINSCRIBIRME</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenInscription()}
              className="px-3 py-1.5 rounded-lg bg-[#FFE500] text-black font-bebas text-base tracking-wider font-black focus-ring"
            >
              PREINSCRIBIRME
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white focus-ring"
              aria-label={mobileMenuOpen ? 'Cerrar Menú' : 'Abrir Menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with active state */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[58px] bg-[#09090b]/98 border-b border-zinc-800 backdrop-blur-xl p-5 shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2 text-left">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#FFE500] font-bold px-3 py-1 bg-zinc-900 rounded-lg border border-zinc-800 mb-1 flex items-center justify-between">
              <span>SECCIÓN ACTUAL:</span>
              <span className="text-white font-bold">{navLinks.find(n => n.id === activeSection)?.name || 'Inicio'}</span>
            </div>

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold uppercase tracking-wider py-2.5 px-3 rounded-xl border flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#FFE500] text-black border-[#FFE500] font-black'
                      : 'text-zinc-300 border-zinc-900 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {isActive && <span className="w-2 h-2 rounded-full bg-black animate-pulse" />}
                    <span>{link.name}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${isActive ? 'text-black' : 'text-zinc-600'}`} />
                </a>
              );
            })}

            <div className="pt-3 flex flex-col gap-2.5 border-t border-zinc-900">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInscription();
                }}
                className="w-full py-3 rounded-xl bg-[#FFE500] text-black font-bebas tracking-wider text-xl shadow-lg shadow-[#FFE500]/20 text-center font-black focus-ring"
              >
                PREINSCRIBIRME EN LA APP ($80.000 / MES)
              </button>
              
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={GYM_INFO.apps.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-black border border-zinc-700 text-white text-xs font-mono text-center flex items-center justify-center gap-1.5 focus-ring"
                >
                  <span>Google Play</span>
                </a>
                <a
                  href={GYM_INFO.apps.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-black border border-zinc-700 text-white text-xs font-mono text-center flex items-center justify-center gap-1.5 focus-ring"
                >
                  <span>App Store</span>
                </a>
              </div>

              <a
                href={GYM_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#FFE500] text-white font-semibold text-center text-xs flex items-center justify-center gap-2 focus-ring"
              >
                <Instagram className="w-4 h-4 text-[#FFE500]" />
                <span>Instagram @conversion_fit.co</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

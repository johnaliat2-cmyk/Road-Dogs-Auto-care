import React, { useState, useEffect } from 'react';
import { PageId, ProjectLog } from './types';
import { SHOP_INFO, PROJECTS } from './data/mockData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { BookPage } from './pages/BookPage';
import { ContactPage } from './pages/ContactPage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { CallEmergencyModal } from './components/CallEmergencyModal';
import { TelemetryModal } from './components/TelemetryModal';
import { Phone, Calendar } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectLog | null>(null);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForBooking = (serviceName: string) => {
    setPreselectedService(serviceName);
    navigateTo('book');
  };

  const handleSelectProjectById = (projectId: string) => {
    const proj = PROJECTS.find(p => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  const handleBookSimilarFromModal = (vehicleName: string) => {
    setPreselectedService(`Inspection & Maintenance: ${vehicleName}`);
    setSelectedProject(null);
    navigateTo('book');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 flex flex-col font-sans selection:bg-red-600 selection:text-white pb-16 md:pb-0">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenCallModal={() => setCallModalOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenCallModal={() => setCallModalOpen(true)}
            onSelectProject={handleSelectProjectById}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onSelectServiceForBooking={handleSelectServiceForBooking}
            onOpenCallModal={() => setCallModalOpen(true)}
          />
        )}

        {currentPage === 'book' && (
          <BookPage
            onNavigate={navigateTo}
            onOpenCallModal={() => setCallModalOpen(true)}
            preselectedService={preselectedService}
          />
        )}

        {currentPage === 'work' && (
          <WorkPage
            onNavigate={navigateTo}
            onOpenCallModal={() => setCallModalOpen(true)}
            onOpenTelemetryModal={(project) => setSelectedProject(project)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenCallModal={() => setCallModalOpen(true)}
          />
        )}

        {currentPage === 'testimonials' && (
          <TestimonialsPage
            onNavigate={navigateTo}
            onOpenCallModal={() => setCallModalOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
            onOpenCallModal={() => setCallModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenCallModal={() => setCallModalOpen(true)}
      />

      {/* Mobile Sticky Quick Action Bar (strictly under 15% viewport height cap) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-[#222222] p-2.5 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${SHOP_INFO.phone}`}
          className="flex-1 py-2.5 px-3 rounded-lg bg-[#141414] hover:bg-[#1E1E1E] text-neutral-200 border border-[#262626] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-red-500" />
          <span>Call Shop</span>
        </a>

        <button
          onClick={() => navigateTo('book')}
          className="flex-1 py-2.5 px-3 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-lg shadow-red-950/40"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Bay</span>
        </button>
      </div>

      {/* Modals */}
      <CallEmergencyModal
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
        onBookBay={() => navigateTo('book')}
      />

      <TelemetryModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onBookSimilar={handleBookSimilarFromModal}
      />
    </div>
  );
}

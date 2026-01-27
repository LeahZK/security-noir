import { useState } from 'react';
import DesignPageResponsive from './components/DesignPageResponsive';
import AboutPageResponsive from './components/AboutPageResponsive';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'designs' | 'about'>('designs');

  return (
    <div className="min-h-screen w-full">
      {currentPage === 'designs' ? (
        <DesignPageResponsive onNavigate={setCurrentPage} />
      ) : (
        <AboutPageResponsive onNavigate={setCurrentPage} />
      )}
    </div>
  );
}

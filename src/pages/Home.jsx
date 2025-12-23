import React, { useState, useCallback, useRef } from 'react';
import { Header, Footer } from '../components/layout';
import { HeroSection, SelectedTagsDisplay } from '../components/common';
import FilterTags from '../components/features/FilterTags';
import StatsSection from '../components/features/StatsSection';

const Home = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [activeNav, setActiveNav] = useState('ApplyUniNow');
  const [showError, setShowError] = useState(false);
  const errorRef = useRef(null);

  const handleNavChange = useCallback((navName) => {
    setActiveNav(navName);
  }, []);

  const handleTagToggle = useCallback((tag) => {
    setSelectedTags(prev => {
      const newTags = prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag];
      
      // Auto-hide error when user makes a selection
      if (newTags.length > 0) {
        setShowError(false);
      }
      return newTags;
    });
  }, []);

  const handleNext = useCallback(() => {
    if (selectedTags.length === 0) {
      setShowError(true);
      // Scroll error into view
      if (errorRef.current) {
        errorRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      setShowError(false);
      // Proceed to next step - implement your navigation/submission logic here
      // Example: navigate to next page or submit form
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Selected preferences:', selectedTags);
      }
    }
  }, [selectedTags]);

  return (
    <div className="min-h-screen font-sans page-background">
      <Header activeNav={activeNav} onNavChange={handleNavChange} />

      {/* Main Content */}
      <main className="services-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection />

        <FilterTags 
          selectedTags={selectedTags}
          onTagToggle={handleTagToggle}
          onNext={handleNext}
          showError={showError}
          errorRef={errorRef}
        />

        <SelectedTagsDisplay count={selectedTags.length} />

        <StatsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;


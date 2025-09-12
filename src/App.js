import React, { useState, useEffect } from 'react';
import LoadingAnimation from './components/LoadingAnimation';
import Navigation from './components/Navigation';
import BackgroundLayers from './components/BackgroundLayers';
import ParticleEffect from './components/ParticleEffect';
import ContentSection from './components/ContentSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          <BackgroundLayers />
          <ParticleEffect />
          <Navigation />
          <ContentSection />
          <AboutSection />
          <ServicesSection />
          <ContactSection />
          <Footer />
          <CustomCursor />
        </>
      )}
    </div>
  );
}

export default App;

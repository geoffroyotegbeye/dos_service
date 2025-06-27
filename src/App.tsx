import React from 'react';
import { 
  Header, 
  Hero, 
  Services, 
  Avantages, 
  Preuves, 
  // Contact, 
  Footer, 
  ContactDirect
} from './components';

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Services />
      <Avantages />
      <Preuves />
      {/* <Contact /> */}
      <ContactDirect />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
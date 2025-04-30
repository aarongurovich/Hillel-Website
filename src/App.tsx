import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Events } from './components/Events';
import { StudentLife } from './components/StudentLife';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DonateModal } from './components/DonateModal';

function App() {
  const [showDonateModal, setShowDonateModal] = React.useState(false);

  const handleDonateClick = () => {
    setShowDonateModal(true);
  };

  const handleCloseModal = () => {
    setShowDonateModal(false);
  };

  return (
    <div className="relative font-sans min-h-screen bg-white text-gray-800">
      <Navbar onDonateClick={handleDonateClick} />
      <Hero onDonateClick={handleDonateClick} />
      <About />
      <Events />
      <StudentLife />
      <Gallery />
      <Contact />
      <Footer onDonateClick={handleDonateClick} />
      <DonateModal show={showDonateModal} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
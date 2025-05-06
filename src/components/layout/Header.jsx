import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousSection, setPreviousSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) return;
      
      const sections = ['about', 'portfolio', 'architecture', 'contact'];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      let newSection = '';

      if (scrollPosition + windowHeight >= documentHeight - 100) {
        newSection = 'contact';
      } else if (scrollPosition < 100) {
        newSection = '';
      } else {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
              newSection = section;
              break;
            }
          }
        }
      }

      if (newSection !== activeSection) {
        setPreviousSection(activeSection);
        setIsTransitioning(true);
        setTimeout(() => {
          setActiveSection(newSection);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 200);
        }, 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen, activeSection]);

  const getSectionName = (section) => {
    switch(section) {
      case 'about': return 'About';
      case 'portfolio': return 'Tools';
      case 'architecture': return 'Architecture';
      case 'contact': return 'Contact';
      default: return '';
    }
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Navigation */}
      <nav className="bg-gray-900 fixed w-full z-50 md:hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex-1"></div>
            {!isMenuOpen ? (
              // Section name when menu is closed
              <div className="flex-1 flex justify-center overflow-hidden relative">
                {/* Previous section name (fading out) */}
                <span 
                  className={`absolute text-white text-3xl uppercase transition-all duration-300 transform ${
                    isTransitioning 
                      ? 'scale-75 opacity-0 text-primary' 
                      : 'scale-100 opacity-0'
                  }`}
                >
                  {getSectionName(previousSection)}
                </span>
                {/* Current section name (fading in) */}
                <span 
                  className={`text-white text-3xl uppercase transition-all duration-300 transform ${
                    isTransitioning 
                      ? 'scale-125 opacity-0' 
                      : 'scale-100 opacity-100'
                  }`}
                >
                  {getSectionName(activeSection)}
                </span>
              </div>
            ) : (
              // Menu items when menu is open
              <div className="flex-1 flex justify-center">
                <div className="flex space-x-6">
                  <HashLink 
                    smooth 
                    to="/#about" 
                    className="text-white hover:text-primary uppercase text-2xl transition-colors duration-300"
                    onClick={handleLinkClick}
                  >
                    About
                  </HashLink>
                  <HashLink 
                    smooth 
                    to="/#portfolio" 
                    className="text-white hover:text-primary uppercase text-2xl transition-colors duration-300"
                    onClick={handleLinkClick}
                  >
                    Tools
                  </HashLink>
                  <HashLink 
                    smooth 
                    to="/#architecture" 
                    className="text-white hover:text-primary uppercase text-2xl transition-colors duration-300"
                    onClick={handleLinkClick}
                  >
                    Arch
                  </HashLink>
                  <HashLink 
                    smooth 
                    to="/#contact" 
                    className="text-white hover:text-primary uppercase text-2xl transition-colors duration-300"
                    onClick={handleLinkClick}
                  >
                    Contact
                  </HashLink>
                </div>
              </div>
            )}
            <div className="flex-1 flex justify-end">
              <button 
                className="text-white p-2"
                onClick={handleMenuClick}
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl transition-transform duration-300`}></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="bg-gray-900 fixed w-full z-50 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a className="text-white text-xl font-bold" href="#page-top"></a>
            <div className="flex">
              <ul className="flex space-x-8">
                <li>
                  <HashLink smooth to="/#about" className="nav-link text-white hover:text-primary uppercase">
                    About
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/#portfolio" className="nav-link text-white hover:text-primary uppercase">
                    Tools
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/#documentation" className="nav-link text-white hover:text-primary uppercase">
                    Documentation
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/#contact" className="nav-link text-white hover:text-primary uppercase">
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header; 
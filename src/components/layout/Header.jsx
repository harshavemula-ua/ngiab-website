import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousSection, setPreviousSection] = useState('');
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  // primary navigation items (always visible)
  const primaryNav = [
    { id: 'about', label: 'About', to: '/#about' },
    { id: 'tool', label: 'Tools', to: '/#tool' },
    { id: 'contact', label: 'Contact', to: '/#contact' }
  ];

  // remaining navigation items (listed in More menu)
  const secondaryNav = [
    { id: 'documentation', label: 'Documentation', to: '/#documentation' },
    { id: 'impact', label: 'Impact', to: '/#impact' },
    { id: 'team', label: 'Team', to: '/#team' },
    { id: 'partners', label: 'Partners', to: '/#partner' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) return;
      
      const sections = [...primaryNav, ...secondaryNav].map(item => item.id);
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
    const allSections = [...primaryNav, ...secondaryNav];
    const found = allSections.find(item => item.id === section);
    return found ? found.label : '';
  };

  const isPrimaryNav = (sectionId) => {
    return primaryNav.some(item => item.id === sectionId);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsMoreMenuOpen(false);
  };

  const handleMoreClick = (e) => {
    e.preventDefault();
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  return (
    <>
      {/* Mobile Navigation */}
      <nav className="bg-gray-900 fixed w-full z-50 md:hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex-1"></div>
            {!isMenuOpen ? (
              <div className="flex-1 flex justify-center overflow-hidden relative px-20">
                <span 
                  className={`absolute text-white text-3xl uppercase transition-all duration-300 transform ${
                    isTransitioning 
                      ? 'scale-75 opacity-0 text-primary' 
                      : 'scale-100 opacity-0'
                  }`}
                >
                  {getSectionName(previousSection)}
                </span>
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
              <div className="flex-1 flex justify-center">
                <div className="flex flex-col space-y-4">
                  {primaryNav.map(item => (
                    <HashLink 
                      key={item.id}
                      smooth 
                      to={item.to}
                      className={`uppercase text-2xl transition-colors duration-300 ${
                        activeSection === item.id 
                          ? 'text-primary' 
                          : 'text-white hover:text-primary'
                      }`}
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </HashLink>
                  ))}
                  <div className="pt-2 border-t border-gray-700">
                    {secondaryNav.map(item => (
                      <HashLink 
                        key={item.id}
                        smooth 
                        to={item.to}
                        className={`uppercase text-xl transition-colors duration-300 block py-2 ${
                          activeSection === item.id 
                            ? 'text-primary' 
                            : 'text-white hover:text-primary'
                        }`}
                        onClick={handleLinkClick}
                      >
                        {item.label}
                      </HashLink>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div className="flex-1 flex justify-end items-center space-x-4">
              <a 
                href="https://github.com/ciroh-ua/ngiab-website" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors duration-300"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
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
            <div className="flex items-center space-x-8">
              <ul className="flex space-x-8">
                <li>
                  <HashLink 
                    smooth 
                    to="/#about" 
                    className={`nav-link uppercase transition-colors duration-300 ${
                      activeSection === 'about' 
                        ? 'text-primary' 
                        : 'text-white hover:text-primary'
                    }`}
                  >
                    About
                  </HashLink>
                </li>
                <li>
                  <HashLink 
                    smooth 
                    to="/#tool" 
                    className={`nav-link uppercase transition-colors duration-300 ${
                      activeSection === 'tool' 
                        ? 'text-primary' 
                        : 'text-white hover:text-primary'
                    }`}
                  >
                    Tools
                  </HashLink>
                </li>
                <li className="relative">
                  <button 
                    onClick={handleMoreClick}
                    className={`nav-link uppercase flex items-center space-x-1 transition-colors duration-300 ${
                      !isPrimaryNav(activeSection) && activeSection 
                        ? 'text-primary' 
                        : 'text-white hover:text-primary'
                    }`}
                  >
                    <span>{!isPrimaryNav(activeSection) && activeSection ? getSectionName(activeSection) : 'More'}</span>
                    <i className={`fas fa-chevron-down text-xs transition-transform duration-300 ${
                      isMoreMenuOpen ? 'rotate-180' : ''
                    }`}></i>
                  </button>
                  {isMoreMenuOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2">
                      {secondaryNav.map(item => (
                        <HashLink
                          key={item.id}
                          smooth
                          to={item.to}
                          className={`block px-4 py-2 transition-colors duration-300 ${
                            activeSection === item.id
                              ? 'text-primary bg-gray-100 dark:bg-gray-700'
                              : 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                          onClick={handleLinkClick}
                        >
                          {item.label}
                        </HashLink>
                      ))}
                    </div>
                  )}
                </li>
                <li>
                  <HashLink 
                    smooth 
                    to="/#contact" 
                    className={`nav-link uppercase transition-colors duration-300 ${
                      activeSection === 'contact' 
                        ? 'text-primary' 
                        : 'text-white hover:text-primary'
                    }`}
                  >
                    Contact
                  </HashLink>
                </li>
              </ul>
              <a 
                href="https://github.com/ciroh-ua/ngiab-website" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors duration-300"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header; 
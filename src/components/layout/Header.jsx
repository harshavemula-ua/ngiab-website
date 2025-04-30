import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <nav className="bg-gray-900 fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a className="text-white text-xl font-bold" href="#page-top"></a>
            <button className="text-2xl lg:hidden text-white" type="button" id="navbarToggle">
                Menu
                <i className="fas fa-bars ml-1"></i>
            </button>

            <div className="hidden lg:flex" id="navbarMenu">
            <ul className="flex space-x-8">
              <li><HashLink smooth to="/#about" className="nav-link text-white hover:text-primary uppercase">
                About
              </HashLink></li>
              <li><HashLink smooth to="/#portfolio" className="nav-link text-white hover:text-primary uppercase">
                Tools
              </HashLink></li>
              <li><HashLink smooth to="/#architecture" className="nav-link text-white hover:text-primary uppercase">
                Architecture
              </HashLink></li>
              <li><HashLink smooth to="/#contact" className="nav-link text-white hover:text-primary uppercase">
                Contact
              </HashLink></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header; 
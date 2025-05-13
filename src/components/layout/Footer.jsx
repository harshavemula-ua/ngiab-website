import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-center items-center space-x-12">
         <p class="text-gray-900">&copy; 2025 NextGen In A Box</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/ciroh-ua/NGIAB-CloudInfra/" className="text-gray-900 hover:text-primary text-2xl" target="_blank"
    rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/company/uaciroh/" className="text-gray-900 hover:text-primary text-2xl" target="_blank"
    rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.facebook.com/UACIROH/" className="text-gray-900 hover:text-primary text-2xl" target="_blank"
    rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/UA_CIROH" className="text-gray-900 hover:text-primary text-2xl" target="_blank"
    rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/ua_ciroh/" className="text-gray-900 hover:text-primary text-2xl" target="_blank"
    rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/@UA_CIROH" className="text-gray-900 hover:text-primary text-2xl" target="_blank"
    rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
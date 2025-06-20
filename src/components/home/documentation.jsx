import React, { useRef, useEffect } from 'react';
import docuhubVideo from "/assets/video/ngiab-docuhub.mp4";
import 'aos/dist/aos.css';

const Documentation = () => {
    const docVideoRef = useRef(null);
    useEffect(() => {
           // Create intersection observer for documentation video
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && docVideoRef.current) {
                // When documentation section is visible, set the time and play
                docVideoRef.current.play().catch(e => 
                  console.log("Documentation video play error:", e)
                );
                // Unobserve after it's played once
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.3 } // Trigger when 30% of the element is visible
        );
    
        // Get the documentation section and observe it
        const documentationSection = document.getElementById('documentation');
        if (documentationSection) {
          observer.observe(documentationSection);
        }
    
        // Cleanup observer on component unmount
        return () => {
          if (documentationSection) {
            observer.unobserve(documentationSection);
          }
        };
      }, []);
    return (
        <section className="bg-blue-50 py-20" id="documentation">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
            <h2 className="section-heading">Documentation & Resources</h2>
            <h3 className="section-subheading">Comprehensive guides and training materials for NextGen In A Box</h3>
          </div>

          {/* DocuHub Section */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row items-start gap-10 max-w-7xl mx-auto">
              {/* Left side: Text and links */}
              <div className="w-full md:w-1/4 order-2 md:order-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <div className="mb-12">
                  <h3 className="text-3xl font-bold text-primary mb-5">CIROH DocuHub</h3>
                  <a href="https://docs.ciroh.org/" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-primary/80 hover:text-primary border-b border-primary/20 hover:border-primary transition-colors duration-200">
                    docs.ciroh.org
                    <i className="fas fa-arrow-up-right-from-square text-xs ml-1"></i>
                  </a>
                </div>
                <div className="space-y-8">
                  <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <i className="fas fa-book text-white text-sm"></i>
                      </div>
                      <h4 className="font-semibold text-gray-800 ml-3">Documentation</h4>
                    </div>
                    <p className="text-gray-600 mb-2 pl-11">Step-by-step guides for running NGIAB.</p>
                    <a href="https://docs.ciroh.org/docs/products/ngiab/" className="text-primary font-medium hover:underline pl-11 inline-block" target="_blank" rel="noopener noreferrer">
                      View Documentation 
                    </a>
                  </div>
                  
                  <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <i className="fas fa-video text-white text-sm"></i>
                      </div>
                      <h4 className="font-semibold text-gray-800 ml-3">Tutorial Videos</h4>
                    </div>
                    <p className="text-gray-600 mb-2 pl-11">Visual tutorials for running NGIAB.</p>
                    <a href="https://youtu.be/7kjJXvionyw" className="text-primary font-medium hover:underline pl-11 inline-block" target="_blank" rel="noopener noreferrer">
                      Watch Tutorials 
                    </a>
                  </div>
                  
                  <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <i className="fas fa-server text-white text-sm"></i>
                      </div>
                      <h4 className="font-semibold text-gray-800 ml-3">Infrastructure Access</h4>
                    </div>
                    <p className="text-gray-600 mb-2 pl-11">Access CIROH computing resources.</p>
                    <a href="https://docs.ciroh.org/docs/services/access" className="text-primary font-medium hover:underline pl-11 inline-block" target="_blank" rel="noopener noreferrer">
                      Request Access 
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Right side: Video */}
              <div className="w-full md:w-3/4 order-1 md:order-2" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                <div className="bg-white p-2 rounded-lg shadow-lg">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded">
                    <video
                      ref={docVideoRef}
                      className="absolute top-0 left-0 w-full h-full object-contain rounded"
                      muted
                      loop
                      playsInline
                    >
                      <source src={docuhubVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="px-3 py-2 text-center">
                    <p className="text-sm text-gray-500 italic">
                      Explore the DocuHub interface and learn how to navigate its comprehensive resources
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NGIAB 101 Training Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="text-center mb-12 relative">
              <h3 className="text-3xl font-bold text-primary mb-5">NGIAB 101 Training Module</h3>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Master NextGen In A Box through our training module. From basic concepts to advanced applications, 
                we'll guide you through every step of the process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto relative">
              {/* Additional Resources */}
              <div className="space-y-6" data-aos="fade-up" data-aos-duration="1000">
                <a href="https://docs.ciroh.org/training-NGIAB-101/reference.html#glossary" 
                   className="group block bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
                   target="_blank" 
                   rel="noopener noreferrer">
                  <div className="flex items-start">
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-book text-white text-xl"></i>
                    </div>
                    <div className="ml-5">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors">Glossary</h4>
                      <p className="text-gray-600">Comprehensive definitions of technical terms</p>
                    </div>
                  </div>
                </a>

                <a href="https://docs.ciroh.org/training-NGIAB-101/troubleshooting.html" 
                   className="group block bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
                   target="_blank" 
                   rel="noopener noreferrer">
                  <div className="flex items-start">
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-wrench text-white text-xl"></i>
                    </div>
                    <div className="ml-5">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors">Troubleshooting</h4>
                      <p className="text-gray-600">Solutions for common issues and errors</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="flex flex-col justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <div className="bg-primary rounded-2xl p-8 text-white text-center">
                  <h4 className="text-2xl font-bold mb-4">Ready to Start Learning?</h4>
                  <p className="text-white/80 mb-6">
                    Access our training module and begin your journey with NextGen In A Box
                  </p>
                  <a href="https://docs.ciroh.org/training-NGIAB-101/" 
                     className="inline-flex items-center justify-center space-x-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                     target="_blank" 
                     rel="noopener noreferrer">
                    <span>Start Training Journey</span>
                    <i className="fas fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Documentation;

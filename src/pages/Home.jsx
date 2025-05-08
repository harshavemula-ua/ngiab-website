import React, { useRef, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import waterVideo from "/assets/video/water-video.mp4";
import docuhubVideo from "/assets/video/docuhub-demo.mp4";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const videoRef = useRef(null);
  const docVideoRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
      easing: 'ease-out',
    });

    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }

    // Create intersection observer for documentation video
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && docVideoRef.current) {
            // When documentation section is visible, set the time and play
            docVideoRef.current.currentTime = 1.3; // Skip first second
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
    <div>
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-white" data-aos="fade-down" data-aos-duration="1000">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={waterVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10" data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-col items-center justify-center space-y-12">
            <img 
              src="assets/img/logos/ciroh_dark.png" 
              alt="CIROH Logo" 
              className="w-48 md:w-56 mb-4 transform transition-all duration-700 hover:scale-110"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
            <h1 className="text-7xl font-bold uppercase mb-6" data-aos="fade-up" data-aos-delay="400">NextGen In A Box</h1>
            <p className="text-4xl mb-12" data-aos="fade-up" data-aos-delay="600">Transforming Water Modeling in Minutes</p>
            <div className="space-x-6" data-aos="fade-up" data-aos-delay="800">
              <HashLink smooth to="/#portfolio" className="btn-primary text-xl px-12 py-4">
                Our Tools
              </HashLink>
              <a className="btn-primary text-xl px-12 py-4" href="http://docs.ciroh.org/training-NGIAB-101/" target="_blank" rel="noopener noreferrer">
                Getting started
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}

      <section className="py-20" id="about">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center">
                    <h2 className="section-heading">OUR PURPOSE</h2>
                    <h3 className="section-subheading">Empowering researchers, communities, and decision-makers with accessible and innovative hydrological modeling solutions.</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div data-aos="fade-zoom-in" data-aos-delay="200" data-aos-duration="800" data-aos-easing="ease-in-out-cubic">
                        <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary text-white mb-8">
                            <i className="fas fa-bullseye text-4xl"></i>
                        </div>
                        <h4 className="tool-title">Goal</h4>
                        <p className="tool-description">To revolutionize hydrological modeling by making the NextGen Framework accessible, scalable, and user-friendly to researchers.</p>
                    </div>
                    <div data-aos="fade-zoom-in" data-aos-delay="400" data-aos-duration="800" data-aos-easing="ease-in-out-cubic">
                        <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary text-white mb-8">
                            <i className="fas fa-rocket text-4xl"></i>
                        </div>
                        <h4 className="tool-title">Mission</h4>
                        <p className="tool-description">To make NextGen accessible to all, from local communities to global researchers, by providing user-friendly tools and reproducible workflows.</p>
                    </div>
                    <div data-aos="fade-zoom-in" data-aos-delay="600" data-aos-duration="800" data-aos-easing="ease-in-out-cubic">
                        <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary text-white mb-8">
                            <i className="fas fa-eye text-4xl"></i>
                        </div>
                        <h4 className="tool-title">Vision</h4>
                        <p className="tool-description">To create a collaborative ecosystem where shared advancements in hydrological modeling drive innovation.</p>
                    </div>
                </div>
            </div>
      </section>

      {/* Tools/Portfolio Section */}
      <section className="bg-gray-100 py-20" id="portfolio">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center">
                    <h2 className="section-heading">NextGen In A Box Tools</h2>
                    <h3 className="section-subheading">From data preprocessing with NGIAB DataPreprocess to real-time visualization on the Tethys Platform, these tools work together to empower researchers to drive innovation in hydrology.</h3>
                </div>
                <div className="tool-grid">
                   {/* NGIAB-DataPreprocess */}
                    <div className="tool-card group">
                        <div className="tool-image-wrapper">
                            <img className="tool-image" src="assets/img/portfolio/ngiab_data_preprocess.jpg" alt="Data Preprocess Tool" />
                            <div className="tool-overlay"></div>
                            <div className="tool-badge">Data Preparation</div>
                        </div>
                        <div className="tool-content">
                            <h4 className="tool-title">NGIAB-DataPreprocess</h4>
                            <p className="tool-description">Simplify and accelerate data preparation for NextGen simulations with our intuitive preprocessing tool.</p>
                        </div>
                        <div className="tool-links">
                            <a href="https://github.com/CIROH-UA/NGIAB_data_preprocess" target="_blank" rel="noopener noreferrer" className="tool-link">
                                <i className="fab fa-github"></i>
                                <span>View Source Code</span>
                            </a>
                        </div>
                    </div>

                    {/* NGIAB-CloudInfra */}
                    <div className="tool-card group">
                        <div className="tool-image-wrapper">
                            <img className="tool-image" src="assets/img/portfolio/ngiab_cloudinfra.jpg" alt="Cloud Infrastructure" />
                            <div className="tool-overlay"></div>
                            <div className="tool-badge">Cloud Deployment</div>
                        </div>
                        <div className="tool-content">
                            <h4 className="tool-title">NGIAB-CloudInfra</h4>
                            <p className="tool-description">Deploy NextGen Framework seamlessly in cloud environments with our containerized solution.</p>
                        </div>
                        <div className="tool-links">
                            <a href="https://github.com/CIROH-UA/NGIAB-CloudInfra" target="_blank" rel="noopener noreferrer" className="tool-link">
                                <i className="fab fa-github"></i>
                                <span>View Source Code</span>
                            </a>
                        </div>
                    </div>

                    {/* NGIAB-HPCInfra */}
                    <div className="tool-card group">
                        <div className="tool-image-wrapper">
                            <img className="tool-image" src="assets/img/portfolio/ngiab_hpcinfra.jpeg" alt="HPC Infrastructure" />
                            <div className="tool-overlay"></div>
                            <div className="tool-badge">HPC Solutions</div>
                        </div>
                        <div className="tool-content">
                            <h4 className="tool-title">NGIAB-HPCInfra</h4>
                            <p className="tool-description">Scale your hydrological modeling with our high-performance computing infrastructure.</p>
                        </div>
                        <div className="tool-links">
                            <a href="https://github.com/CIROH-UA/NGIAB-HPCInfra" target="_blank" rel="noopener noreferrer" className="tool-link">
                                <i className="fab fa-github"></i>
                                <span>View Source Code</span>
                            </a>
                        </div>
                    </div>

                    {/* NGIAB-TEEHR */}
                    <div className="tool-card group">
                        <div className="tool-image-wrapper">
                            <img className="tool-image" src="assets/img/portfolio/ngiab_teehr.png" alt="TEEHR Tool" />
                            <div className="tool-overlay"></div>
                            <div className="tool-badge">Evaluation & Analysis</div>
                        </div>
                        <div className="tool-content">
                            <h4 className="tool-title">NGIAB-TEEHR</h4>
                            <p className="tool-description">Advanced tools for iterative and exploratory analysis of hydrologic model performance.</p>
                        </div>
                        <div className="tool-links">
                            <a href="https://github.com/CIROH-UA/ngiab-teehr" target="_blank" rel="noopener noreferrer" className="tool-link">
                                <i className="fab fa-github"></i>
                                <span>View Source Code</span>
                            </a>
                        </div>
                    </div>

                    {/* NGIAB-Visualizer */}
                    <div className="tool-card group">
                        <div className="tool-image-wrapper">
                            <img className="tool-image" src="assets/img/portfolio/ngiab_visualizer.jpeg" alt="Visualizer Tool" />
                            <div className="tool-overlay"></div>
                            <div className="tool-badge">Data Visualization</div>
                        </div>
                        <div className="tool-content">
                            <h4 className="tool-title">NGIAB-Visualizer</h4>
                            <p className="tool-description">Interactive visualization platform for exploring hydrological data and model outputs.</p>
                        </div>
                        <div className="tool-links">
                            <a href="https://github.com/CIROH-UA/ngiab-client" target="_blank" rel="noopener noreferrer" className="tool-link">
                                <i className="fab fa-github"></i>
                                <span>View Source Code</span>
                            </a>
                        </div>
                    </div>

                    {/* NGEN-DataStream */}
                    <div className="tool-card group">
                        <div className="tool-image-wrapper">
                            <img className="tool-image" src="assets/img/portfolio/ngen_datastream.jpeg" alt="DataStream Tool" />
                            <div className="tool-overlay"></div>
                            <div className="tool-badge">Workflow Orchestration</div>
                        </div>
                        <div className="tool-content">
                            <h4 className="tool-title">NGEN-DataStream</h4>
                            <p className="tool-description">Streamline your hydrologic simulations with our automated workflow orchestration tool.</p>
                        </div>
                        <div className="tool-links">
                            <a href="https://github.com/CIROH-UA/ngen-datastream" target="_blank" rel="noopener noreferrer" className="tool-link">
                                <i className="fab fa-github"></i>
                                <span>View Source Code</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
      </section>

      {/* Documentation & Resources Section */}
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
                    <a href="https://docs.ciroh.org/docs/products/Community%20Hydrologic%20Modeling%20Framework/nextgeninaboxDocker/workflow" className="text-primary font-medium hover:underline pl-11 inline-block" target="_blank" rel="noopener noreferrer">
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
                    <a href="https://youtu.be/s5jz6Hvn-6s" className="text-primary font-medium hover:underline pl-11 inline-block" target="_blank" rel="noopener noreferrer">
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
              <h3 className="text-3xl font-bold text-gray-800 mb-5">NGIAB 101 Training Module</h3>
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

      {/* Partners Logo Carousel */}
      <section className="bg-white py-12 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="section-heading">Our Partners & Collaborators</h2>
            <h3 className="section-subheading">Working together to advance hydrological modeling</h3>
          </div>

          <div className="relative overflow-hidden w-full">
            <div className="animate-carousel">
              <div className="flex items-center space-x-24 mx-8">
                 
                 <img 
                   src="assets/img/logos/aws.png" 
                   alt="AWS Logo" 
                   className="h-16 md:h-20 object-contain inline-block" 
                 />
                 <img 
                   src="assets/img/logos/noaa.png" 
                   alt="NOAA Logo" 
                   className="h-16 md:h-24 object-contain inline-block" 
                 />
                 <img 
                   src="assets/img/logos/awi.png" 
                   alt="AWI Logo" 
                   className="h-16 md:h-20 object-contain inline-block" 
                 />
                  <img 
                    src="assets/img/logos/lynker-light.jpeg" 
                    alt="Lynker Logo" 
                    className="h-16 md:h-22 object-contain inline-block" 
                  />
                  <img 
                    src="assets/img/logos/nwc.png" 
                    alt="National Water Center Logo" 
                    className="h-16 md:h-20 object-contain inline-block" 
                  />
                  <img 
                    src="assets/img/logos/byu.png" 
                    alt="BYU Logo" 
                    className="h-16 md:h-20 object-contain inline-block" 
                  />
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
              <div className="bg-gray-50 px-6 py-4 rounded-lg">
                <h4 className="font-bold text-lg text-primary mb-2">Partners</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  <a href="https://water.noaa.gov/about/nwc" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white rounded border border-gray-200 text-sm hover:bg-gray-100 transition-colors">National Water Center</a>
                  <a href="https://lynker.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white rounded border border-gray-200 text-sm hover:bg-gray-100 transition-colors">Lynker Technologies</a>
                  <a href="https://www.byu.edu" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white rounded border border-gray-200 text-sm hover:bg-gray-100 transition-colors">BYU</a>
                  <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white rounded border border-gray-200 text-sm hover:bg-gray-100 transition-colors">AWS</a>
                  <a href="https://www.noaa.gov" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white rounded border border-gray-200 text-sm hover:bg-gray-100 transition-colors">NOAA</a>
                  <a href="https://awi.ua.edu" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white rounded border border-gray-200 text-sm hover:bg-gray-100 transition-colors">AWI</a>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4 rounded-lg">
                <h4 className="font-bold text-lg text-primary mb-1">Collaborators</h4>
                <p className="text-gray-700 font-bold">CIROH Science and Technology Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact + Resources Section */}
      <section class="bg-gray-900 text-white py-20" id="contact">
            <div class="container mx-auto px-4 max-w-7xl">
                <div class="text-center">
                    <h2 class="section-heading text-white">Find out more</h2>
                    <h3 class="section-subheading text-gray-300">Join our community and start your journey with NextGen In A Box</h3>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
                    {/* Resource Section */}
                    <div class="bg-gray-800 rounded-lg p-8 shadow-lg transform transition duration-300 hover:scale-105">
                        <div class="flex items-center mb-6">
                            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white">
                                <i class="fas fa-book text-2xl"></i>
                            </div>
                            <h3 class="tool-title ml-4">Learning Resources</h3>
                        </div>
                        <ul class="space-y-4">
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-primary mr-3"></i>
                                <a href="https://docs.ciroh.org/docs/products/Community%20Hydrologic%20Modeling%20Framework/" class="text-gray-300 hover:text-primary transition duration-300 tool-link" target="_blank" rel="noopener noreferrer">
                                    Learn about the NGIAB platform on DocuHub
                                </a>
                            </li>
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-primary mr-3"></i>
                                <a href="https://docs.ciroh.org/docs/products/Community%20Hydrologic%20Modeling%20Framework/ngiabOfficeHours" class="text-gray-300 hover:text-primary transition duration-300 tool-link" target="_blank" rel="noopener noreferrer">
                                    Join the NextGen Community Office Hours
                                </a>
                            </li>
                            <li class="flex items-center">
                                <i class="fas fa-check-circle text-primary mr-3"></i>
                                <a href="https://github.com/CIROH-UA/NGIAB-CloudInfra" class="text-gray-300 hover:text-primary transition duration-300 tool-link" target="_blank" rel="noopener noreferrer">
                                    Explore our NGIAB-CloudInfra GitHub repository
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div class="bg-gray-800 rounded-lg p-8 shadow-lg transform transition duration-300 hover:scale-105">
                        <div class="flex items-center mb-6">
                            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white">
                                <i class="fas fa-envelope text-2xl"></i>
                            </div>
                            <h3 class="tool-title ml-4">Get in Touch</h3>
                        </div>
                        <ul class="space-y-4">
                            <li class="flex items-center">
                                <i class="fas fa-envelope text-primary mr-3"></i>
                                <a href="mailto:ciroh-it-support@ua.edu" class="text-gray-300 hover:text-primary transition duration-300 tool-link" target="_blank" rel="noopener noreferrer">
                                    Email: ciroh-it-admin@ua.edu
                                </a>
                            </li>
                            <li class="flex items-center">
                                <i class="fab fa-slack text-primary mr-3"></i>
                                <a href="https://cirohworkspace.slack.com/archives/C057BLQB867" class="text-gray-300 hover:text-primary transition duration-300 tool-link" target="_blank" rel="noopener noreferrer">
                                    Slack: #ciroh-ua-it-support
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div> 

                <div class="mt-16 text-center">
                    <div class="inline-block bg-gray-800 rounded-lg px-8 py-6 max-w-5xl">
                        <p class="text-md text-gray-400 italic">
                            This project was supported by the Cooperative Institute for Research to Operations in Hydrology (CIROH) with funding under award NA22NWS4320003 from the NOAA Cooperative Institute Program. The statements, findings, conclusions, and recommendations are those of the author(s) and do not necessarily reflect the opinions of NOAA.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Home; 
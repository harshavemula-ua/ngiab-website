import waterVideo from "/assets/video/water-video.mp4";
import AOS from 'aos';
import { HashLink } from 'react-router-hash-link';
import { useRef, useEffect } from 'react';
const Hero = () => {
    const videoRef = useRef(null);
    
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
    
      }, []);

  return (
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
                    <HashLink 
                      smooth 
                      to="/#portfolio" 
                      className="btn-primary text-xl px-12 py-4"
                    >
                      Our Tools
                    </HashLink>
                    <a 
                      className="btn-primary text-xl px-12 py-4" 
                      href="http://docs.ciroh.org/training-NGIAB-101/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Getting started
                    </a>
                  </div>
                </div>
              </div>
            </header>
  );
};

export default Hero;

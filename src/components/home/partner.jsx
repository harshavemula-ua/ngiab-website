const Partner = () => {
  return (
     <section className="bg-white py-12 overflow-hidden" id="partner">
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
                   src="assets/img/logos/gcp.png" 
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
                  <a href="https://cloud.google.com/?hl=en" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white rounded border border-gray-200 text-sm hover:bg-gray-100 transition-colors">GCP</a>
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
  );
};

export default Partner;

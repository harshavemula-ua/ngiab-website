const About = () => {
  return (
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
  );
};

export default About;

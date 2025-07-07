const Tools = () => {
  return (
         <section className="bg-gray-100 py-20" id="tool">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center">
                    <h2 className="section-heading">NextGen In A Box Tools</h2>
                    <h3 className="section-subheading">From data preprocessing to running hydrology models, doing evaluation, visualization, these tools work together to empower researchers to drive innovation in hydrology. Built with open-source technologies.</h3>
                </div>
                <div className="tool-grid">
                   {/* NGIAB-DataPreprocess */}
                    <div 
                      className="tool-card group"
                    >
                        <div className="tool-image-wrapper">
                            <img className="tool-image" src="assets/img/tool/ngiab_data_preprocess.jpg" alt="Data Preprocess Tool" />
                            <div className="tool-overlay"></div>
                            <div className="tool-badge">Data Preparation</div>
                        </div>
                        <div className="tool-content">
                            <h4 className="tool-title">NGIAB-DataPreprocess</h4>
                            <p className="tool-description">Simplify and accelerate data preparation for NextGen simulations with our intuitive preprocessing tool.</p>
                        </div>
                        <div className="tool-links">
                            <a 
                              href="https://github.com/CIROH-UA/NGIAB_data_preprocess" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="tool-link"
                            >
                                <i className="fab fa-github"></i>
                                <span>View Source Code</span>
                            </a>
                        </div>
                    </div>

                    {/* NGIAB-CloudInfra */}
                    <div 
                      className="tool-card group"
                    >
                        <div className="tool-image-wrapper">
                            <img className="tool-image" src="assets/img/tool/ngiab_cloudinfra.jpg" alt="Cloud Infrastructure" />
                            <div className="tool-overlay"></div>
                            <div className="tool-badge">Cloud Deployment</div>
                        </div>
                        <div className="tool-content">
                            <h4 className="tool-title">NGIAB-CloudInfra</h4>
                            <p className="tool-description">Deploy NextGen Framework seamlessly in cloud environments with our containerized solution.</p>
                        </div>
                        <div className="tool-links">
                            <a 
                              href="https://github.com/CIROH-UA/NGIAB-CloudInfra" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="tool-link"
                            >
                                <i className="fab fa-github"></i>
                                <span>View Source Code</span>
                            </a>
                        </div>
                    </div>

                    {/* NGIAB-HPCInfra */}
                    <div 
                      className="tool-card group"
                    >
                        <div className="tool-image-wrapper">
                            <img className="tool-image" src="assets/img/tool/ngiab_hpcinfra.jpeg" alt="HPC Infrastructure" />
                            <div className="tool-overlay"></div>
                            <div className="tool-badge">HPC Solutions</div>
                        </div>
                        <div className="tool-content">
                            <h4 className="tool-title">NGIAB-HPCInfra</h4>
                            <p className="tool-description">Scale your hydrological modeling with our high-performance computing infrastructure.</p>
                        </div>
                        <div className="tool-links">
                            <a 
                              href="https://github.com/CIROH-UA/NGIAB-HPCInfra" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="tool-link"
                            >
                                <i className="fab fa-github"></i>
                                <span>View Source Code</span>
                            </a>
                        </div>
                    </div>

                    {/* NGIAB-TEEHR */}
                    <div 
                      className="tool-card group"
                    >
                        <div className="tool-image-wrapper">
                            <img className="tool-image" src="assets/img/tool/ngiab_teehr.png" alt="TEEHR Tool" />
                            <div className="tool-overlay"></div>
                            <div className="tool-badge">Evaluation & Analysis</div>
                        </div>
                        <div className="tool-content">
                            <h4 className="tool-title">NGIAB-TEEHR</h4>
                            <p className="tool-description">Advanced tools for iterative and exploratory analysis of hydrologic model performance.</p>
                        </div>
                        <div className="tool-links">
                            <a 
                              href="https://github.com/CIROH-UA/ngiab-teehr" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="tool-link"
                            >
                                <i className="fab fa-github"></i>
                                <span>View Source Code</span>
                            </a>
                        </div>
                    </div>

                    {/* NGIAB-Visualizer */}
                    <div 
                      className="tool-card group"
                    >
                        <div className="tool-image-wrapper">
                            <img className="tool-image" src="assets/img/tool/ngiab_visualizer.jpeg" alt="Visualizer Tool" />
                            <div className="tool-overlay"></div>
                            <div className="tool-badge">Data Visualization</div>
                        </div>
                        <div className="tool-content">
                            <h4 className="tool-title">NGIAB-Visualizer</h4>
                            <p className="tool-description">Interactive visualization platform for exploring hydrological data and model outputs.</p>
                        </div>
                        <div className="tool-links">
                            <a 
                              href="https://github.com/CIROH-UA/ngiab-client" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="tool-link"
                            >
                                <i className="fab fa-github"></i>
                                <span>View Source Code</span>
                            </a>
                        </div>
                    </div>

                    {/* NGEN-DataStream */}
                    <div 
                      className="tool-card group"
                    >
                        <div className="tool-image-wrapper">
                            <img className="tool-image" src="assets/img/tool/ngen_datastream.jpeg" alt="DataStream Tool" />
                            <div className="tool-overlay"></div>
                            <div className="tool-badge">Workflow Orchestration</div>
                        </div>
                        <div className="tool-content">
                            <h4 className="tool-title">NGEN-DataStream</h4>
                            <p className="tool-description">Streamline your hydrologic simulations with our automated workflow orchestration tool.</p>
                        </div>
                        <div className="tool-links">
                            <a 
                              href="https://github.com/CIROH-UA/ngen-datastream" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="tool-link"
                            >
                                <i className="fab fa-github"></i>
                                <span>View Source Code</span>
                            </a>
                        </div>
                    </div>

                    {/* NGIAB-Calibration */}
                    <div 
                      className="tool-card group"
                    >
                        <div className="tool-image-wrapper">
                            <img className="tool-image" src="assets/img/tool/ngen_calibration.jpeg" alt="Calibration Tool" />
                            <div className="tool-overlay"></div>
                            <div className="tool-badge">Calibration</div>
                        </div>
                        <div className="tool-content">
                            <h4 className="tool-title">NGIAB-CAL</h4>
                            <p className="tool-description">Simplify and automate calibration process for NGIAB.</p>
                        </div>
                        <div className="tool-links">
                            <a 
                              href="https://github.com/CIROH-UA/ngiab-cal" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="tool-link"
                            >
                                <i className="fab fa-github"></i>
                                <span>View Source Code</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
      </section>
  );
};

export default Tools
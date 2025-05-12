const Contact = () => {
  return(
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
  );
};

export default Contact;

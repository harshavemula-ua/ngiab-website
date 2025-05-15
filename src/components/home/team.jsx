import React, { useState } from 'react';

const Team = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const membersPerPage = 8;

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'awi', label: 'Alabama Water Institute' },
    { id: 'cs', label: 'Computer Science' },
    { id: 'lynker', label: 'Lynker' },
    { id: 'byu', label: 'Brigham Young University' },
    { id: 'rti', label: 'RTI International' },
    { id: 'aquaveo', label: 'Aquaveo' },
    { id: 'uv', label: 'Univerity of Vermont' }
  ];

  const teamMembers = [
    {
      name: "Arpita Patel",
      role: "DevOps Manager and Enterprise Architect",
      image: "assets/img/team/Arpita-Patel.jpg",
      github: "https://github.com/arpita0911patel",
      linkedin: "https://www.linkedin.com/in/arpita0911patel",
      email: "apatel54@ua.edu",
      department: "awi"
    },
    {
      name: "James Halgren",
      role: "Assistant Director Science and Research Operations",
      image: "assets/img/team/James-Halgren.jpg",
      github: "https://github.com/jameshalgren",
      linkedin: "https://www.linkedin.com/in/smartwater/",
      email: "jshalgren@ua.edu",
      department: "awi"
    },
    {
      name: "Zach Wills",
      role: "Lynker D2 CTO",
      image: "assets/img/team/Zach-Wills.jpg",
      github: "https://github.com/ZacharyWills",
      linkedin: "",
      email: "zwills@lynker.com",
      department: "lynker"
    },
    {
      name: "Nels Frazier",
      role: "Lead Technical Architect",
      image: "assets/img/team/Nels-Frazier.jpg",
      github: "https://github.com/hellkite500",
      linkedin: "https://www.linkedin.com/in/nels-frazier-1278a5147/",
      email: "nfrazier@lynker.com",
      department: "lynker"
    },
    {
      name: "Dan Ames",
      role: "Professor at BYU",
      image: "assets/img/team/Dan-Ames.jpg",
      github: "https://github.com/danames",
      linkedin: "https://www.linkedin.com/in/danames/",
      email: "dan.ames@byu.edu",
      department: "byu"
    },
    {
      name: "Benjamin Lee",
      role: "Development Operations Engineer",
      image: "assets/img/team/Benjamin-Lee.jpg",
      github: "https://github.com/benlee0423",
      linkedin: "https://www.linkedin.com/in/seungchanlee",
      email: "blee60@ua.edu",
      department: "awi"
    },
    {
      name: "Joshua Cunningham",
      role: "Software Engineer III",
      image: "assets/img/team/Josh-Cunningham.png",
      github: "https://github.com/JoshCu",
      linkedin: "https://www.linkedin.com/in/josh-cunningham-6906a7108",
      email: "jcunningham8@ua.edu",
      department: "awi"
    },
    {
      name: "Jordan Laser",
      role: "Software Engineer",
      image: "assets/img/team/Jordan-Laser.jpg",
      github: "https://github.com/JordanLaserGit",
      linkedin: "https://www.linkedin.com/in/jordan-laser",
      email: "jlaser@lynker.com",
      department: "awi"
    },
    {
      name: "Trupesh Patel",
      role: "Software Engineer II",
      image: "assets/img/team/Trupesh-Patel.jpg",
      github: "https://github.com/TrupeshKumarPatel",
      linkedin: "https://www.linkedin.com/in/trupeshkumarpatel",
      email: "tpatel2@ua.edu",
      department: "awi"
    },
    {
      name: "Giovanni Romero",
      role: "HydroInfomatics Engineer",
      image: "assets/img/team/Giovanni-Romero.png",
      github: "https://github.com/romer8",
      linkedin: "https://www.linkedin.com/in/elkin-giovanni-romero-bustamante-b834b5a8",
      email: "gromero@aquaveo.com",
      department: "aquaveo"
    },
    {
      name: "Matthew Denno",
      role: "Senior Engineering Applications Developer",
      image: "assets/img/team/Matthew-Denno.jpg",
      github: "https://github.com/mgdenno",
      linkedin: "https://www.linkedin.com/in/matthew-denno-pe-9b9316a/",
      email: "mdenno@rti.org",
      department: "rti"
    },
    {
      name: "Sam Lamont",
      role: "Environmental Applications Developer",
      image: "assets/img/team/Sam-Lamont.png",
      github: "https://github.com/samlamont",
      linkedin: "https://www.linkedin.com/in/sam-lamont-3a972813/",
      email: "slamont@rti.org",
      department: "rti"
    },
    {
      name: "Mike Johnson",
      role: "Chief Data Scientist",
      image: "assets/img/team/Mike-Johnson.jpg",
      github: "https://github.com/mikejohnson51t",
      linkedin: "https://www.linkedin.com/in/mikejohnson-phd/",
      email: "mjohnson@lynker.com",
      department: "lynker"
    },
    {
      name: "Keith Jennings",
      role: "Director of Research",
      image: "assets/img/team/Keith-Jennings.jpg",
      github: "",
      linkedin: "https://www.linkedin.com/in/keith-jennings-phd/",
      email: "Keith.Jennings@uvm.edu",
      department: "uv"
    },
    {
      name: "Sifan A. Koriche",
      role: "Research Scientist",
      image: "assets/img/team/Sifan-A-Koriche.jpg",
      github: "https://github.com/skoriche",
      linkedin: "https://www.linkedin.com/in/dr-sifan-a-koriche/",
      email: "sakoriche@ua.edu",
      department: "awi"
    },
    {
      name: "Md Shahabul Alam",
      role: "Research Scientist",
      image: "assets/img/team/Md-Shahabul-Alam.jpg",
      github: "https://github.com/shahab122",
      linkedin: "https://www.linkedin.com/in/md-shahabul-alam/",
      email: "malam24@ua.edu",
      department: "awi"
    },
    {
      name: "Benjamin Perry",
      role: "Software Scientist",
      image: "assets/img/team/Chad-Perry.jpg",
      github: "https://github.com/chp2001",
      linkedin: "",
      email: "bcperry2@crimson.ua.edu",
      department: "awi"
    },
    {
      name: "Hari Teja Jajula",
      role: "Graduate Research Assistant",
      image: "assets/img/team/Hari-Teja-Jajula.jpg",
      github: "https://github.com/hariteja-jajula",
      linkedin: "https://www.linkedin.com/in/hariteja-jajula/",
      email: "hjajula@crimson.ua.edu",
      department: "cs"
    },
    {
      name: "Manjila Singh",
      role: "Graduate Research Assitant",
      image: "assets/img/team/Me.jpg",
      github: "https://github.com/manjilasingh",
      linkedin: "https://www.linkedin.com/in/manjilasingh/",
      email: "msingh9@crimson.ua.edu",
      department: "cs"
    },
    {
      name: "Quinn Lee",
      role: "Research Assistant",
      image: "assets/img/team/Quinn-Lee.jpg",
      github: "https://github.com/quinnylee",
      linkedin: "https://www.linkedin.com/in/quinn-y-lee/",
      email: "qylee@ua.edu",
      department: "awi"
    },
    {
      name: "Nia Minor",
      role: "Graduate Student Assistant",
      image: "assets/img/team/Nia-Minor.png",
      github: "https://github.com/Sheargrub",
      linkedin: "",
      email: "ikminor1@crimson.ua.edu",
      department: "cs"
    },
    {
      name: "Steven J. Burian",
      role: "Executive Director of CIROH",
      image: "assets/img/team/Steven-J-Burian.jpg",
      github: "",
      linkedin: "",
      email: "sburian@ua.edu",
      department: "awi"
    },
    {
      name: "Purushotham Bangalore",
      role: "James R. Cudworth Professor",
      image: "assets/img/team/Purushotham-Bangalore.jpg",
      github: "",
      linkedin: "https://www.linkedin.com/in/puribangalore/",
      email: "pvbangalore@ua.edu",
      department: "cs"
    },
    {
      name: "Jeffrey Carver",
      role: "James R. Cudworth Professor",
      image: "assets/img/team/Jeffrey-Carver.jpg",
      github: "https://github.com/JeffCarver",
      linkedin: "https://www.linkedin.com/in/jeff-carver/",
      email: "carver@cs.ua.edu",
      department: "cs"
    }
  ];

  const filteredMembers = teamMembers.filter(member => {
    return selectedFilter === 'all' || member.department === selectedFilter;
  });

  const totalPages = Math.ceil(filteredMembers.length / membersPerPage);
  const startIndex = (currentPage - 1) * membersPerPage;
  const displayedMembers = filteredMembers.slice(startIndex, startIndex + membersPerPage);

  const handlePageChange = (newPage) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsTransitioning(false);
    }, 300);
  };

  const handleFilterChange = (filterId) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedFilter(filterId);
      setCurrentPage(1);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="bg-white dark:bg-gray-900" id="team">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our team</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Meet our dedicated team of experts working together to transform hydrologic modeling</p>
        </div>

        {/* filter section to filter member by department */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out
                  ${selectedFilter === filter.id 
                    ? 'bg-[#317D8C] text-white transform scale-105' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* template grid with scale and fade transition */}
        <div className={`grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 transition-all duration-300 ease-in-out ${
          isTransitioning 
            ? 'opacity-0 scale-95' 
            : 'opacity-100 scale-100'
        }`}>
          {displayedMembers.map((member, index) => (
            <div 
              key={index} 
              className="text-center text-gray-500 dark:text-gray-400 transform transition-all duration-300 ease-in-out"
            >
              <div className="relative overflow-hidden rounded-full mb-4 mx-auto w-36 h-36">
                <img 
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" 
                  src={member.image} 
                  alt={`${member.name} Avatar`} 
                />
              </div>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="transition-colors duration-300">{member.role}</p>
              <ul className="flex justify-center mt-4 space-x-4">
                {member.github && (
                  <li>
                    <a href={member.github} className="text-gray-900 hover:text-[#317D8C] dark:hover:text-white dark:text-gray-300 transition-colors duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                    </a>
                  </li>
                )}
                {member.linkedin && (
                  <li>
                    <a href={member.linkedin} className="text-gray-900 hover:text-[#317D8C] dark:hover:text-white dark:text-gray-300 transition-colors duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  </li>
                )}
                {member.email && (
                  <li>
                    <a href={`mailto:${member.email}`} className="text-gray-900 hover:text-[#317D8C] dark:hover:text-white dark:text-gray-300 transition-colors duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Pagination - visible for any filter with more than 8 members */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center items-center gap-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1 || isTransitioning}
              className={`p-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${
                currentPage === 1 || isTransitioning
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-[#317D8C] hover:bg-[#317D8C] hover:text-white'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-gray-600 dark:text-gray-400">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages || isTransitioning}
              className={`p-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${
                currentPage === totalPages || isTransitioning
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-[#317D8C] hover:bg-[#317D8C] hover:text-white'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;

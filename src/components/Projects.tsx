import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Konas Dashboard',
      description: 'KONAS is a digital platform for participant registration, attendance scanning, and real-time monitoring, suitable for formal and non-formal events, ensuring efficient and organized management.',
      image: '/new-portofolio/konas.png',
      technologies: ['ReactJS', 'React Query', 'TailwindCSS', 'Express', 'Sequelize'],
      liveLink: 'https://konas-web.vercel.app/login',
      githubLink: 'https://github.com/rizkynugrahaamaia/konas-web',
    },
    {
      id: 2,
      title: 'Cahaya Timur Ototama',
      description: 'This official portfolio website introduces Cahaya Timur Ototama, showcasing its services, company profile, and contact details, offering a professional and informative overview.',
      image: '/new-portofolio/cto.png',
      technologies: ['NextJS', 'TypeScript', 'MaterialUI'],
      liveLink: 'https://cahaya-timur.vercel.app/',
      githubLink: 'https://github.com/rizkynugrahaamaia/cahaya-timur',
    },
    {
      id: 3,
      title: 'Product Showcase',
      description: 'This portfolio website showcases a products unique identity, highlighting its features, benefits, and visual appeal to attract and engage potential customers effectively.',
      image: '/new-portofolio/korea-porto.png',
      technologies: ['NextJS', 'TypeScript', 'TailwindCSS'],
      liveLink: 'https://korea-portofolio.vercel.app/',
      githubLink: 'https://github.com/rizkynugrahaamaia/korea-portofolio',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-800"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-800"
                  >
                    <Github size={18} className="mr-1" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/rizkynugrahaamaia?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors inline-block"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
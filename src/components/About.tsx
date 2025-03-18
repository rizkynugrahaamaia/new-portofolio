const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80" 
              alt="Working on code" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a passionate frontend developer with a strong focus on creating intuitive and performant web applications. 
              With a background in design and development, I bring a unique perspective to every project.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              My journey in web development started 5 years ago, and since then, I've worked on various projects ranging from small business websites to complex web applications.
              I'm constantly learning and exploring new technologies to improve my skills.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Name:</h4>
                <p className="text-gray-700">Rizky Nugraha Amaia</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email:</h4>
                <p className="text-gray-700">kikiamaia1994@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Location:</h4>
                <p className="text-gray-700">Makassar, Indonesia</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Availability:</h4>
                <p className="text-gray-700">Open to Flexible Work Arrangements (Freelance, Onsite, or Remote)</p>
              </div>
            </div>
            
            <a 
              href="/new-portofolio/professional-cv.pdf" 
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors inline-block"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
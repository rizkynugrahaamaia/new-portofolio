import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML5', percentage: 95 },
    { name: 'CSS3/SCSS', percentage: 90 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'TypeScript', percentage: 80 },
    { name: 'React', percentage: 90 },
    { name: 'Tailwind CSS', percentage: 85 },
    { name: 'Node.js', percentage: 75 },
    { name: 'Git', percentage: 80 },
  ];

  const softSkills = [
    'Problem Solving',
    'Communication',
    'Teamwork',
    'Time Management',
    'Adaptability',
    'Attention to Detail',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 mb-12 md:mb-0 md:pr-12">
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/3">
            <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill) => (
                <div 
                  key={skill} 
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                >
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
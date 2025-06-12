
const TechStack = () => {
  const technologies = [
    { name: 'Python', category: 'Programming', color: 'from-yellow-400 to-blue-500' },
    { name: 'TensorFlow', category: 'ML Framework', color: 'from-orange-400 to-orange-600' },
    { name: 'PyTorch', category: 'ML Framework', color: 'from-red-400 to-red-600' },
    { name: 'SQL', category: 'Database', color: 'from-blue-400 to-blue-600' },
    { name: 'GCP', category: 'Cloud', color: 'from-blue-500 to-green-500' },
    { name: 'Docker', category: 'DevOps', color: 'from-blue-400 to-cyan-400' },
    { name: 'Kubernetes', category: 'DevOps', color: 'from-blue-600 to-purple-600' },
    { name: 'Scikit-learn', category: 'ML Library', color: 'from-orange-500 to-yellow-500' },
    { name: 'Pandas', category: 'Data Processing', color: 'from-purple-400 to-blue-500' },
    { name: 'Apache Spark', category: 'Big Data', color: 'from-orange-500 to-red-500' },
    { name: 'MLflow', category: 'MLOps', color: 'from-blue-500 to-cyan-500' },
    { name: 'Streamlit', category: 'Visualization', color: 'from-red-400 to-pink-500' }
  ];

  return (
    <section id="tech-stack" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="fade-in-up text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to build intelligent data solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div 
              key={tech.name}
              className={`fade-in-up stagger-${(index % 4) + 1} card-glow rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group`}
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300`}>
                  {tech.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {tech.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tech.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

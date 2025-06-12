
const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-up text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up stagger-1">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center floating">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center text-6xl font-bold text-background">
                    AC
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />
              </div>
            </div>
            
            <div className="fade-in-up stagger-2 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate data scientist with 5+ years of experience in machine learning, 
                deep learning, and generative AI. I specialize in transforming complex datasets 
                into actionable insights and building intelligent systems that drive business value.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans across computer vision, natural language processing, 
                and large language models. I've successfully deployed ML models in production 
                environments and led cross-functional teams to deliver innovative AI solutions.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-6">
                {['Machine Learning', 'Deep Learning', 'Generative AI', 'Data Engineering', 'MLOps'].map((skill, index) => (
                  <span 
                    key={skill}
                    className={`px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary font-medium fade-in-up stagger-${index + 3}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

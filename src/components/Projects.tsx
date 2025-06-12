
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Customer Churn Prediction",
      description: "Built an end-to-end ML pipeline using ensemble methods to predict customer churn with 94% accuracy. Deployed on GCP with real-time inference capabilities.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      technologies: ["Python", "XGBoost", "GCP", "Docker", "Streamlit"],
      githubUrl: "#",
      featured: true
    },
    {
      title: "Generative AI Content Creation Platform",
      description: "Developed a multi-modal AI system combining GPT-4 and DALL-E for automated content generation, serving 10k+ users with 99.9% uptime.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
      technologies: ["OpenAI API", "FastAPI", "React", "PostgreSQL", "Redis"],
      githubUrl: "#",
      featured: true
    },
    {
      title: "Real-time Anomaly Detection System",
      description: "Implemented streaming ML pipeline for detecting anomalies in IoT sensor data using Apache Kafka and TensorFlow, reducing false positives by 60%.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80",
      technologies: ["TensorFlow", "Apache Kafka", "Python", "Kubernetes", "Grafana"],
      githubUrl: "#",
      featured: false
    },
    {
      title: "NLP Sentiment Analysis API",
      description: "Created a scalable sentiment analysis service using BERT transformers, processing 1M+ texts daily with sub-100ms latency.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      technologies: ["BERT", "PyTorch", "FastAPI", "Docker", "AWS"],
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="fade-in-up text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            A collection of AI and ML projects that showcase my expertise in data science
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`fade-in-up stagger-${(index % 2) + 1} card-glow rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-500 group ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline"
                    className="border-glow bg-transparent hover:bg-primary/10 flex items-center gap-2"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </Button>
                  <Button 
                    className="glow-effect bg-primary hover:bg-primary/80"
                  >
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

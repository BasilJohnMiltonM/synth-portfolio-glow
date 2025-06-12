
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-950 to-blue-950/20" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Alex Chen
          </h1>
        </div>
        
        <div className="fade-in-up stagger-1">
          <h2 className="text-2xl md:text-4xl font-light mb-8 text-muted-foreground">
            Generative AI + ML Data Scientist
          </h2>
        </div>
        
        <div className="fade-in-up stagger-2">
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Transforming data into intelligent solutions through cutting-edge machine learning, 
            deep learning, and generative AI technologies.
          </p>
        </div>
        
        <div className="fade-in-up stagger-3 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="glow-effect bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-glow bg-transparent hover:bg-primary/10 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </Button>
        </div>
        
        <div className="fade-in-up stagger-4 mt-16">
          <ArrowDown 
            className="w-8 h-8 mx-auto text-primary animate-bounce cursor-pointer" 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

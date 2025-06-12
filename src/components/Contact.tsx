
import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="fade-in-up text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to collaborate on your next AI project? Let's discuss how we can transform your data into intelligent solutions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="fade-in-up stagger-1">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 card-glow rounded-lg hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-cyan-400 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">alex.chen@datascience.ai</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 card-glow rounded-lg hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">LinkedIn</h4>
                  <p className="text-muted-foreground">/in/alexchen-ai</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 card-glow rounded-lg hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                  <Github className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">GitHub</h4>
                  <p className="text-muted-foreground">@alexchen-ds</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="fade-in-up stagger-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  placeholder="Your Name"
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <Input 
                  type="email"
                  placeholder="Your Email"
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <Input 
                  placeholder="Subject"
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Your Message"
                  rows={5}
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary transition-colors resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full glow-effect bg-primary hover:bg-primary/80 text-primary-foreground py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

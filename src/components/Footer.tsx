
const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container mx-auto px-6">
        <div className="fade-in-up text-center">
          <div className="flex justify-center items-center gap-8 mb-8">
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </a>
            <a 
              href="#tech-stack" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('tech-stack')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Tech Stack
            </a>
            <a 
              href="#projects" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </a>
          </div>
          
          <div className="gradient-text text-2xl font-bold mb-4">
            Alex Chen
          </div>
          
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Transforming data into intelligent solutions through cutting-edge AI and machine learning.
          </p>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />
          
          <p className="text-sm text-muted-foreground">
            © 2024 Alex Chen. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

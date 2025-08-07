const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-nav-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-8 py-4">
          <li><a href="#About" className="text-nav-foreground hover:text-nav-accent transition-colors">About</a></li>
          <li><a href="#skills" className="text-nav-foreground hover:text-nav-accent transition-colors">Skills</a></li>
          <li><a href="#milestones" className="text-nav-foreground hover:text-nav-accent transition-colors">Milestones</a></li>
          <li><a href="#portfolio" className="text-nav-foreground hover:text-nav-accent transition-colors">Portfolio</a></li>
          <li><a href="#contact" className="text-nav-foreground hover:text-nav-accent transition-colors">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
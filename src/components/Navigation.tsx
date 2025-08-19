const Navigation = () => {
  return (
    <nav className="fixed top-0 right-0 z-50 p-8">
      <ul className="flex space-x-8">
        <li><a href="#About" className="text-foreground hover:text-nav-accent transition-colors font-mono">About</a></li>
        <li><a href="#skills" className="text-foreground hover:text-nav-accent transition-colors font-mono">Skills</a></li>
        <li><a href="#milestones" className="text-foreground hover:text-nav-accent transition-colors font-mono">Milestones</a></li>
        <li><a href="#portfolio" className="text-foreground hover:text-nav-accent transition-colors font-mono">Portfolio</a></li>
        <li><a href="#contact" className="text-foreground hover:text-nav-accent transition-colors font-mono">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
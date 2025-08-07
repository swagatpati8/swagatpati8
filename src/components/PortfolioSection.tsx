const PortfolioSection = () => {
  const projects = [
    {
      title: "Job Board Application",
      description: "Spring boot, spring framework, MongoDB, React, Swagger API"
    },
    {
      title: "AI Customer Support", 
      description: "Ornare nulla proin odio consequat."
    },
    {
      title: "Personal Website",
      description: "html, css, google analytics, github"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Portfolio</h2>
          <p className="text-lg text-muted-foreground">
            Proin odio consequat sapien vestibulum consequat lorem dolore feugiat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-background border border-border rounded-lg overflow-hidden hover:bg-accent transition-colors">
              <div className="w-full h-48 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Project {index + 1}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
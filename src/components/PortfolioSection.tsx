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
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-mono">Portfolio</h2>
          <p className="text-lg text-foreground font-mono">
            Proin odio consequat sapien vestibulum consequat lorem dolore feugiat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <span className="text-white font-bold font-mono">Project {index + 1}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 font-mono">{project.title}</h3>
                <p className="text-foreground font-mono">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
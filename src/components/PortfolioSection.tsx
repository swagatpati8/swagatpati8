const PortfolioSection = () => {
  const projects = [
    {
      title: "Job Board Application",
      description: "Ornare nulla proin odio consequat.",
      technologies: "Spring boot, spring framework, MongoDB, React, Swagger API",
      image: "💼",
    },
    {
      title: "AI Customer Support",
      description: "Ornare nulla proin odio consequat.",
      technologies: "OpenAI API, Next.js, TypeScript",
      image: "🤖",
    },
    {
      title: "Personal Website",
      description: "More about me, my skills, work and interests",
      technologies: "html, css, google analytics, github",
      image: "🌐",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl font-bold text-foreground">Portfolio</h2>
          <p className="text-muted-foreground">
            Proin odio consequat sapien vestibulum consequat lorem dolore
            feugiat.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article key={index} className="bg-card border border-border rounded overflow-hidden hover:bg-accent transition-colors">
              <div className="aspect-video bg-muted flex items-center justify-center text-6xl">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  <a href="#" className="hover:text-primary transition-colors">
                    {project.title}
                  </a>
                </h3>
                <p className="text-muted-foreground mb-3">
                  {project.description}
                </p>
                <p className="text-sm text-primary">{project.technologies}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
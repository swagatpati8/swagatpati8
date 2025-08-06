import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Job Board Application",
      description:
        "A full-stack job board platform with user authentication, job posting, and application tracking features.",
      technologies: "Spring Boot, MongoDB, React, Swagger API",
      demoLink: "#",
      githubLink: "#",
      image: "💼",
    },
    {
      title: "AI Customer Support",
      description:
        "Intelligent customer support chatbot using OpenAI API with natural language processing and automated responses.",
      technologies: "OpenAI API, Next.js, TypeScript, Vercel",
      demoLink: "#",
      githubLink: "#",
      image: "🤖",
    },
    {
      title: "Personal Website",
      description:
        "Modern responsive personal portfolio website showcasing skills, projects, and professional experience.",
      technologies: "React, Tailwind CSS, TypeScript, Vite",
      demoLink: "#",
      githubLink: "#",
      image: "🌐",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that demonstrate my technical skills and
            problem-solving abilities across various technologies and domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="gradient-card border-border/50 hover:border-primary/50 transition-spring group hover:glow-primary overflow-hidden"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-spring">
                  {project.image}
                </div>
                <CardTitle className="text-xl text-card-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <p className="text-sm text-primary font-medium">
                  {project.technologies}
                </p>
                <div className="flex space-x-3 pt-4">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-primary/10 border-primary/20 text-primary hover:bg-primary/20"
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-accent/10 border-accent/20 text-accent hover:bg-accent/20"
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
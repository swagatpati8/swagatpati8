import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const skills = [
    {
      name: "React",
      icon: "⚛️",
      description: "Modern UI development with hooks and state management",
    },
    {
      name: "Java",
      icon: "☕",
      description: "Object-oriented programming and backend development",
    },
    {
      name: "Spring Boot",
      icon: "🍃",
      description: "Enterprise-level Java application frameworks",
    },
    {
      name: "MongoDB",
      icon: "🍃",
      description: "NoSQL database design and management",
    },
    {
      name: "Python",
      icon: "🐍",
      description: "Data science, automation, and machine learning",
    },
    {
      name: "Angular",
      icon: "🅰️",
      description: "Full-featured frontend framework development",
    },
    {
      name: "TypeScript",
      icon: "🔷",
      description: "Type-safe JavaScript development",
    },
    {
      name: "Node.js",
      icon: "🟢",
      description: "Server-side JavaScript and API development",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical skills developed through academic
            coursework, professional experiences, and personal projects. I am
            eager to apply these skills in a professional environment to
            contribute to impactful work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="gradient-card border-border/50 hover:border-primary/50 transition-spring group hover:glow-primary"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-4xl group-hover:scale-110 transition-spring">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-card-foreground">
                  {skill.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
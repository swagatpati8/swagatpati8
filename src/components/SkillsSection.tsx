const SkillsSection = () => {
  const skills = [
    { name: "MongoDB", icon: "🍃" },
    { name: "Java", icon: "☕" },
    { name: "ReactJS", icon: "⚛️" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "Angular", icon: "🅰️" },
    { name: "Python", icon: "🐍" },
    { name: "Swagger UI", icon: "📋" },
    { name: "Jenkins", icon: "🔧" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Node.js", icon: "🟢" },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl font-bold text-foreground">Skills</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical skills developed through academic
            coursework, professional experiences, and personal projects. I am
            eager to apply these skills in a professional environment to
            contribute to impactful work.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="flex space-x-6 pb-4" style={{ width: "max-content" }}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 h-64 bg-card border border-border rounded p-6 flex flex-col items-center justify-center text-center hover:bg-accent transition-colors group cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
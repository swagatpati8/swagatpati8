const SkillsSection = () => {
  const skills = [
    "MongoDB", "JAVA", "ReactJS", "Spring Boot", "Angular", 
    "Python", "Swagger UI", "Jenkins", "Docker", "AWS"
  ];

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Skills</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical skills developed through academic coursework, professional experiences, and personal projects. I am eager to apply these skills in a professional environment to contribute to impactful work.
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 w-max">
            {skills.map((skill, index) => (
              <div key={index} className="flex-shrink-0 w-64 h-48 bg-muted rounded-lg flex flex-col items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <div className="w-16 h-16 bg-nav-accent rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">{skill.substring(0, 3)}</span>
                </div>
                <h3 className="text-foreground font-semibold">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
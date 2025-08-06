const MilestonesSection = () => {
  const milestones = [
    {
      title: "Front End Developer",
      company: "Mobile App Startup",
      description:
        "Designed and implemented mobile applications using Flutter and Dart. Building intuitive, responsive, and visually appealing user interfaces for iOS and Android platforms. Participated in the development process from concept to deployment, contributing to user experience. Enhancing code quality through best practices in mobile development, including state management and UI optimization.",
      icon: "📱",
    },
    {
      title: "Full Stack Dev Intern",
      company: "Tech Startup",
      description:
        "Teamed with 3 QA managers to coordinate 24/7 testing coverage for backend systems built with Spring Boot. Applied core concepts of OOP to effectively use dependency injection and MongoDB for database management. Created a secure login system for 800+ employees using Spring Security, and UI development with Angular. Gained hands on experience with coding standards, best practices and GitHub in a fast paced startup environment.",
      icon: "💻",
    },
    {
      title: "Software Engineering Fellow",
      company: "Engineering Program",
      description:
        "Built 5+ AI apps and APIs using OpenAI, NextJS, Pinecone, StripeAPI with 98% accuracy as seen by 1000 users. Developed projects from design to deployment leading 4+ engineering fellows using MVC design patterns. Coached by Amazon, Bloomberg and Capital One engineers on Agile, CI/CD, Git and microservice patterns.",
      icon: "🚀",
    },
  ];

  return (
    <section id="milestones" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl font-bold text-foreground">Milestones</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A journey through my professional and academic achievements,
            highlighting key experiences and significant accomplishments.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded p-6 hover:bg-accent transition-colors"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{milestone.icon}</div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {milestone.title}
                </h3>
                <p className="text-primary font-medium">{milestone.company}</p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
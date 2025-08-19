const MilestonesSection = () => {
  const milestones = [
    {
      title: "Front End Developer",
      description: "Designed and implemented mobile applications using Flutter and Dart Building intuitive, responsive, and visually appealing user interfaces for iOS and Android platforms Participated in the development process from concept to deployment, contributing to user experience Enhancing code quality through best practices in mobile development, including state management and UI optimization"
    },
    {
      title: "Full Stack Dev Intern", 
      description: "Teamed with 3 QA managers to coordinate 24/7 testing coverage for backend systems built with Spring Boot Applied core concepts of OOP to effectively use dependency injection and MongoDB for database management Created a secure login system for 800+ employees using Spring Security, and UI development with Angular Gained hands on experience with coding standards, best practices and GitHub in a fast paced startup environment"
    },
    {
      title: "Software Engineering Fellow",
      description: "Built 5+ AI apps and APIs using OpenAl NextJS, Pinecone, StripeAP| with 98% accuracy as seen by 1000 users Developed projects from design to deployment leading 4+ engineering fellows using MVC design patterns Coached by Amazon, Bloomberg and Capital One engineers on Agile, Cl/CD, Git and microservice patterns"
    }
  ];

  return (
    <section id="milestones" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-mono">Milestones</h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto font-mono">
            A journey through my professional and academic achievements, highlighting key experiences and significant accomplishments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="p-6 hover:scale-105 transition-transform">
              <div className="w-full h-32 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white font-bold font-mono">{milestone.title.split(' ')[0]}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 font-mono">{milestone.title}</h3>
              <p className="text-foreground leading-relaxed font-mono">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
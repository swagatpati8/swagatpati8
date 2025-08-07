const SpotlightSection = () => {
  const spotlights = [
    {
      title: "Student",
      content: (
        <>
          Rutgers University--New Brunswick<br />
          Major: Computer Science<br />
          Minor: Data Science<br />
          Expected Graduation: May 2026<br />
          Clubs: USACS, RUCP, Rutgers Chess Club, RUBJJ
        </>
      ),
      imageAlign: "right"
    },
    {
      title: "Developer",
      content: "I possess a wide knowledge of various tech stacks and am currently expanding my expertise by learning machine learning and automation. I am incredibly versatile, quickly adapting to new technologies and effectively integrating them into my work.",
      imageAlign: "left"
    },
    {
      title: "Analytical thinker",
      content: "I constantly seek opportunities to challenge myself and sharpen my skills. My passion for chess, a game that demands both strategic thinking and adaptability, fuels my ability to solve problems creatively and innovatively.",
      imageAlign: "right"
    },
    {
      title: "Fitness enthusiast",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.",
      imageAlign: "left"
    }
  ];

  return (
    <div className="py-20">
      {spotlights.map((spotlight, index) => (
        <section key={index} className="py-16 border-b border-border last:border-b-0">
          <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${spotlight.imageAlign === 'left' ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={spotlight.imageAlign === 'left' ? 'lg:col-start-2' : ''}>
                <h2 className="text-3xl font-bold text-foreground mb-6">{spotlight.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{spotlight.content}</p>
              </div>
              <div className={spotlight.imageAlign === 'left' ? 'lg:col-start-1' : ''}>
                <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">{spotlight.title} Image</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default SpotlightSection;
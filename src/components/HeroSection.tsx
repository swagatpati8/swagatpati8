import { Github, Linkedin, Mail, Code } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/swagatpati8/",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/swagatpati8?tab=repositories",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "mailto:swagat.pati@rutgers.edu",
      label: "Email",
    },
    {
      icon: Code,
      href: "https://leetcode.com/u/bongcloud8/",
      label: "LeetCode",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-background"
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
            Swagat Pati
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Welcome to my personal website! I'm a Computer Science major at
            Rutgers University, aspiring to be a Software Engineer. I thrive
            on solving problems, developing innovative projects, and pushing
            the boundaries of technology.
          </p>

          <div className="flex justify-center lg:justify-start space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded bg-card hover:bg-accent border border-border transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={heroPortrait}
            alt="Swagat Pati"
            className="w-80 h-80 object-cover rounded border border-border"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
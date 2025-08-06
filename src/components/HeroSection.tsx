import { Button } from "@/components/ui/button";
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
      className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden"
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-white">
              Swagat Pati
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
              Welcome to my personal website! I'm a Computer Science major at
              Rutgers University, aspiring to be a Software Engineer. I thrive
              on solving problems, developing innovative projects, and pushing
              the boundaries of technology.
            </p>
          </div>

          <div className="flex justify-center lg:justify-start space-x-6">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="lg"
                asChild
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-spring glow-primary"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 gradient-hero rounded-full blur-3xl opacity-30 scale-110"></div>
            <img
              src={heroPortrait}
              alt="Swagat Pati"
              className="relative w-96 h-96 object-cover rounded-full border-4 border-white/20 shadow-2xl glow-accent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
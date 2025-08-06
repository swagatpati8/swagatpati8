import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/swagatpati8/",
      label: "LinkedIn",
      description: "Connect with me professionally",
    },
    {
      icon: Github,
      href: "https://github.com/swagatpati8?tab=repositories",
      label: "GitHub",
      description: "Check out my code repositories",
    },
    {
      icon: Mail,
      href: "mailto:swagat.pati@rutgers.edu",
      label: "Email",
      description: "Send me a direct message",
    },
    {
      icon: Code,
      href: "https://leetcode.com/u/SwagatPati/",
      label: "LeetCode",
      description: "View my coding solutions",
    },
  ];

  return (
    <footer id="contact" className="py-20 gradient-hero">
      <div className="container mx-auto px-6 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Let's Connect
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations.
            Feel free to reach out!
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="lg"
                asChild
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-spring glow-primary group"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3"
                >
                  <link.icon className="h-5 w-5 group-hover:scale-110 transition-spring" />
                  <span>{link.label}</span>
                </a>
              </Button>
            ))}
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="text-white/60">
              © 2024 Swagat Pati. Built with React and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
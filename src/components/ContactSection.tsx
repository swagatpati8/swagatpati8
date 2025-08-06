import { Github, Linkedin, Mail, Code } from "lucide-react";

const ContactSection = () => {
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
      href: "https://leetcode.com/u/SwagatPati/",
      label: "LeetCode",
    },
  ];

  return (
    <footer id="contact" className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-4 mb-8">
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
        <p className="text-muted-foreground text-sm">
          © 2024 Swagat Pati. Built with React.
        </p>
      </div>
    </footer>
  );
};

export default ContactSection;
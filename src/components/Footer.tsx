import React from "react";
import { Github, Linkedin, Mail, Heart, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/shivani",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/shivani",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:shivani@example.com",
      label: "Email",
    },
  ];

  return (
    <footer className="w-full py-12 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-cyan-400 hover:bg-cyan-900/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(56,182,255,0.3)]"
                onClick={() => window.open(link.href, "_blank")}
                aria-label={link.label}
              >
                {link.icon}
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400">
            <p className="flex items-center justify-center gap-2 text-sm">
              © 2025 Shivani | Built with
              <Heart className="h-4 w-4 text-red-400" fill="currentColor" />
              and
              <Coffee className="h-4 w-4 text-amber-400" />
            </p>
          </div>

          {/* Glowing effect */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

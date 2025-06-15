import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";

interface ContactSectionProps {
  isVisible?: boolean;
  onClose?: () => void;
}

const ContactSection = ({ isVisible = true, onClose }: ContactSectionProps) => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "shivani.karkera33@gmail.com",
      href: "mailto:shivani.karkera33@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 9845082XXX",
      href: "tel:+919845082XXX",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Bangalore, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/Shivani-karkera",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shivani-a459351b3 ",
    },
  ];

  if (!isVisible) return null;

  return (
    <section className="w-full py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-cyan-400">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm available for freelance
            projects, full-time opportunities, and exciting collaborations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="bg-gray-900 border-gray-700 hover:shadow-[0_0_20px_rgba(56,182,255,0.3)] transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 hover:bg-gray-750 transition-colors duration-200"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-cyan-400">{item.icon}</div>
                      <div>
                        <p className="text-sm text-gray-400">{item.label}</p>
                        <a
                          href={item.href}
                          className="text-lg text-white hover:text-cyan-400 transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links & Actions */}
            <Card className="bg-gray-900 border-gray-700 hover:shadow-[0_0_20px_rgba(56,182,255,0.3)] transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                  Connect With Me
                </h3>
                <div className="space-y-6">
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 hover:bg-gray-750 transition-colors duration-200 cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => window.open(link.href, "_blank")}
                    >
                      <div className="text-cyan-400">{link.icon}</div>
                      <div>
                        <p className="text-lg text-white hover:text-cyan-400 transition-colors duration-200">
                          {link.label}
                        </p>
                      </div>
                    </motion.div>
                  ))}

                  <Button
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-6 text-lg mt-6"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/src/resume/SHIVANI.pdf";
                      link.download = "SHIVANI_Resume.pdf";
                      link.click();
                    }}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <motion.div
              className="inline-block p-8 rounded-2xl bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 mb-6 max-w-md mx-auto">
                Let's discuss how I can help bring your vision to life with
                clean, scalable, and innovative solutions.
              </p>
              <Button
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg"
                onClick={() =>
                  window.open("mailto:shivani.karkera33@gmail.com", "_blank")
                }
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

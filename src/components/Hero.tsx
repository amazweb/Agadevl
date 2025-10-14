import { Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileAvatar from "@/assets/profile-avatar.jpg";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
                Hi 👋 My name is
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold gradient-text">
                Your Name
              </h1>
              <p className="text-2xl md:text-3xl text-foreground font-semibold">
                Full-Stack Developer
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-amber-400 hover:opacity-90 text-accent-foreground font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-accent-foreground"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-accent-foreground"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-amber-400 blur-xl opacity-50 animate-pulse"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-primary overflow-hidden glow-primary">
                <img
                  src={profileAvatar}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

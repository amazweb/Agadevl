import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application with payment integration",
    tags: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
  },
  {
    title: "Task Management App",
    description: "Real-time collaborative task management system",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics",
    tags: ["React", "Redux", "Chart.js"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card border-border hover:border-primary transition-all duration-300 card-hover overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-accent-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-amber-400 hover:opacity-90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

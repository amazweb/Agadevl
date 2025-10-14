import htmlIcon from "@/assets/icons/html.svg";
import cssIcon from "@/assets/icons/css.svg";
import jsIcon from "@/assets/icons/javascript.svg";
import reactIcon from "@/assets/icons/react.svg";
import nodeIcon from "@/assets/icons/nodejs.svg";
import tsIcon from "@/assets/icons/typescript.svg";
import { Globe, Bot, PuzzleIcon } from "lucide-react";

const skills = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "TailwindCSS", icon: cssIcon },
  { name: "Next.js", icon: reactIcon },
  { name: "Redux", icon: reactIcon },
  { name: "Express.js", icon: nodeIcon },
  { name: "MongoDB", icon: nodeIcon },
  { name: "MySQL", icon: nodeIcon },
];

const projectTypes = [
  { icon: Globe, label: "Websites", color: "text-blue-400" },
  { icon: Bot, label: "Bots", color: "text-purple-400" },
  { icon: PuzzleIcon, label: "Extensions", color: "text-green-400" },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          SKILLS
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />
              <span className="text-foreground font-medium">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Project Types */}
        <div className="flex flex-wrap justify-center gap-6">
          {projectTypes.map((type) => (
            <div
              key={type.label}
              className="flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-primary bg-card hover:bg-secondary transition-all duration-300 card-hover"
            >
              <type.icon className={`w-6 h-6 ${type.color}`} />
              <span className="text-lg font-semibold text-foreground">{type.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

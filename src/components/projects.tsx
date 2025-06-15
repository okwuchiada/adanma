import { Github, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import placeholderImg from "../Images/placeholder.svg";
import { data } from "../lib/data";

// const placeholderImg = "";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with cart functionality, payment integration, and admin dashboard.",
    image: placeholderImg,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    image: placeholderImg,
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard with location-based forecasts and interactive charts.",
    image: placeholderImg,
    tech: ["Vue.js", "Chart.js", "OpenWeather API", "Sass"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website with dark mode, animations, and responsive design.",
    image: placeholderImg,
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "MDX"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

export function Projects() {
  const featuredProjects = data.projects.filter((project) => project.featured);
  const otherProjects = data.projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in frontend development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden py-0 hover:shadow-xl dark:hover:shadow-white-glow"
            >
              <div
                className={`grid lg:grid-cols-2 gap-0 ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`relative h-64 lg:h-auto ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <img
                    src={project.image || placeholderImg}
                    alt={project.title}
                    className="object-cover w-full h-full max-h-[300px]"
                  />
                </div>
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <Card
                key={project.title}
                className="overflow-hidden pt-0 hover:shadow-xl dark:hover:shadow-white-glow"
              >
                <div className="relative h-48">
                  <img
                    src={project.image || placeholderImg}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
      </div>
    </section>
  );
}

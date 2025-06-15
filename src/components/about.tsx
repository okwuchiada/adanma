import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Reveal, RevealFromLeft, RevealFromRight } from "./reveal-animation";
import { AnimatedCard } from "./animated-card";
import { RevealMotion } from "./reveal-animation-extended";

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript"],
  Styling: ["Tailwind CSS", "Sass", "CSS Modules", "Styled Components"],
  Tools: ["Git", "Figma", "VS Code"],
  Backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
};

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground">
            Get to know more about my background and expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I am a skilled frontend developer specializing in creating
                  responsive, user-centric applications with modern technologies
                  like React, Next.js, and Angular.
                </p>
                <p>
                  With a passion for enhancing user experiences and optimizing
                  performance, I thrive on writing efficient code to deliver
                  high-quality, scalable software.
                </p>
                <p>
                  My experience includes spearheading the development of new
                  portals, upgrading internet banking systems, and leading the
                  creation of secure web platforms. I am adept at collaborating
                  with design and backend teams and possess a strong foundation
                  in Node.js to ensure seamless API integrations.
                </p>
                <p>
                  I am always eager to learn and adapt to new technologies to
                  build better, more efficient web solutions.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Skills & Technologies
            </h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <Card
                  key={category}
                  className="hover:shadow-xl dark:hover:shadow-white-glow"
                >
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3 text-primary">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

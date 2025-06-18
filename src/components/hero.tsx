import { data } from "../lib/data";
import { FloatingPaths } from "./ui/background-paths";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { SparklesCore } from "./ui/sparkles";
import { useEffect, useState } from "react";

export function Hero() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      {/* <FloatingPaths position={1} />
      <FloatingPaths position={0.5} direction="right" /> */}
      <FloatingPaths position={1.3} />
      <FloatingPaths position={1} />
      {/* {isDark && (
        <div className="w-full absolute inset-0 min-h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#FFFFFF"
            speed={1}
          />
        </div>
      )} */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-dmSerif">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                Ada Okwuchi
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">
              Frontend Developer
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              {data.about}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href={`mailto:${data.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              asChild
            >
              <a href={data.resume} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <Button variant="ghost" size="sm" asChild>
              <a
                href={data.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href={data.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href={`mailto:${data.email}`} aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

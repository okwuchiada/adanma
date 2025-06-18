import { useEffect, useState } from "react";
import "./App.css";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import CustomCursor from "./components/custom-cursor";
import { Hero } from "./components/hero";
import { Navigation } from "./components/navigation";
import { Projects } from "./components/projects";
import { SparklesCore } from "./components/ui/sparkles";
import { SplashCursor } from "./components/ui/splash-cursor";

function App() {
  // fetch color-theme from localstorage and save it
  const [particleColor, setParticleColor] = useState("#FFFFFF");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <div className="w-full absolute inset-0 min-h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor={particleColor}
          speed={1}
        />
      </div> */}
      <SplashCursor />
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;

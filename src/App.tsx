import "./App.css";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import CustomCursor from "./components/custom-cursor";
import { Hero } from "./components/hero";
import { Navigation } from "./components/navigation";
import { Projects } from "./components/projects";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
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

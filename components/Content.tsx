import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

export default function Content() {
  return (
    <div className="space-y-32">
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

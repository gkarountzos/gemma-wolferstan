import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";
import Projects from "./Projects";
import { TracingBeam } from "./ui/tracing-beam";

export default function Content() {
  return (
    <TracingBeam className="flex gap-4">
      <div className="space-y-28">
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </TracingBeam>
  );
}

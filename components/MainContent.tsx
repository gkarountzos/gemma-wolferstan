import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";
import Projects from "./Projects";
import { TracingBeam } from "./ui/tracing-beam";

const MainContent = () => {
  return (
    <TracingBeam className="flex gap-4">
      <div className="space-y-28 py-24">
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </TracingBeam>
  );
};

export default MainContent;

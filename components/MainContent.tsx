import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";
import Projects from "./Projects";
import { TracingBeam } from "./ui/tracing-beam";

const MainContent = () => {
  const slimLine = "mx-auto h-px w-4/6 bg-[#FEF8EE]";

  return (
    <TracingBeam className="flex gap-4">
      <div className="space-y-28">
        <About />
        <div className={slimLine} />
        <Experience />
        <div className={slimLine} />
        <Projects />
        <Footer />
      </div>
    </TracingBeam>
  );
};

export default MainContent;

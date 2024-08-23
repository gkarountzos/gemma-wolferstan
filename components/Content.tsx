import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";
import Projects from "./Projects";

export default function Content() {
  return (
    <div className="space-y-24">
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

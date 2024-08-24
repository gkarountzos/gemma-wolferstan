import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
import { DotBackground } from "./ui/DotBackground";

const Content = () => {
  const background = `fixed inset-0 -z-10`;
  return (
    <>
      <div className={background}>
        <DotBackground />
      </div>
      <div className="flex justify-center gap-4 ">
        <div className="w-1/2">
          <Sidebar />
        </div>
        <div className="w-1/2 py-24">
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default Content;

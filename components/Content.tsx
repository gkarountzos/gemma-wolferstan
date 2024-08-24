import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const Content = () => {
  return (
    <>
      <div className="flex justify-center gap-4 ">
        <div className="w-1/2">
          <Sidebar />
        </div>
        <div className="w-1/2">
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default Content;

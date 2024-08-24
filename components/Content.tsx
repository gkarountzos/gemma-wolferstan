import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const Content = () => {
  return (
    <>
      <div className="flex justify-center gap-4 ">
        <div className="w-1/2 py-24 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
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

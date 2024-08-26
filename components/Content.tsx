import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const Content = () => {
  return (
    <>
      <div>
        <div className="md:pb-24 pt-8 lg:py-24">
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default Content;

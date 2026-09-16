import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import RightPanel from "@/components/RightPanel";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <div className="flex-1 flex overflow-hidden">
          <MainContent />
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

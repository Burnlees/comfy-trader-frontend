import { desktopSize } from "@/constants";
import Sidebar from "@/features/dashboard/components/Sidebar";
import { DashboardProps } from "@/features/dashboard/dashTypes";
import useMediaQuery from "@/hooks/useMediaQuery";

const Dashboard: React.FC<DashboardProps> = ({ content }) => {
  const isDesktop = useMediaQuery(`(min-width: ${desktopSize})`);

  return (
    <div className="max-h-screen h-screen lg:grid lg:grid-cols-[200px_minmax(900px,_1fr)] lg:grid-rows-1 overflow-auto">
      <nav className="border-r-2">
        {isDesktop ? <Sidebar /> : null}
      </nav>
      <section className="p-4 max-h-screen overflow-auto drop-shadow-md">{content}</section>
    </div>
  );
};

export default Dashboard;

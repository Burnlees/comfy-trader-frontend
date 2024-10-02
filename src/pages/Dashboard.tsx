import { desktopSize } from "@/constants";
import Sidebar from "@/features/dashboard/components/Sidebar";
import { DashboardProps } from "@/features/dashboard/dashTypes";
import useMediaQuery from "@/hooks/useMediaQuery";

const Dashboard: React.FC<DashboardProps> = ({ content }) => {
  const isDesktop = useMediaQuery(`(min-width: ${desktopSize})`);

  return (
    <div className="lg:grid lg:grid-cols-[200px_minmax(900px,_1fr)] lg:h-full">
      <nav className="border-r-2 border-primary shadow-2xl">
        {isDesktop ? <Sidebar /> : null}
      </nav>
      <section className="p-2">{content}</section>
    </div>
  );
};

export default Dashboard;

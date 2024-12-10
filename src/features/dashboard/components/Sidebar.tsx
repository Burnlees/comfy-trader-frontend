import { SIDEBAR_NAV } from "@/constants";
import { Link } from "react-router-dom";
import UserBar from "./UserBar";

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <ul className="flex flex-col">
        {Object.keys(SIDEBAR_NAV).map((key) => {
          const navKey = key as keyof typeof SIDEBAR_NAV;
          return (
            <Link
              key={SIDEBAR_NAV[navKey].key}
              to={SIDEBAR_NAV[navKey].link}
              className="border-b-2 p-4 hover:bg-primary hover:text-primary-foreground hover:shadow-inner"
            >
              {SIDEBAR_NAV[navKey].name}
            </Link>
          );
        })}
      </ul>
      <div className="">
        <UserBar />
      </div>
    </div>
  );
};

export default Sidebar;

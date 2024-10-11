import APIManagement from "@/features/settings/components/APIManagement";
import StrategyManagement from "@/features/settings/components/StrategyManagement";

const Settings = () => {
  return (
    <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-2">
      <APIManagement />
      <StrategyManagement />
    </div>
  );
};

export default Settings;

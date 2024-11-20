import APIManagement from "@/features/settings/components/APIManagement";
import ChangePassword from "@/features/settings/components/ChangePassword";
import StrategyManagement from "@/features/settings/components/StrategyManagement";

const Settings = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <div className="lg:row-span-2">
        <ChangePassword />
      </div>
      <APIManagement />
      <StrategyManagement />
    </div>
  );
};

export default Settings;

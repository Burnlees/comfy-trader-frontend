import { useUserContext } from "@/contexts/UserContext";
import UserMenu from "./UserMenu";

const UserBar = () => {
  const { user } = useUserContext();
  return (
    <div className="flex items-center gap-2 justify-between bg-secondary py-4 px-2 drop-shadow-lg">
      <p className="text-xs font-bold">{user?.email}</p>
      <UserMenu />
    </div>
  );
};

export default UserBar;

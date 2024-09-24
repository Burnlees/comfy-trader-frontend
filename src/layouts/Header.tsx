import NavDesktop from "./NavDesktop";
import ThemeToggle from "@/features/settings/components/ThemeToggle";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-primary p-4 drop-shadow-lg">
      <NavDesktop />
      <h1 className="text-primary-foreground font-bold">Comfy Trader</h1>
      <ThemeToggle />
    </div>
  );
};

export default Header;

import useMediaQuery from "@/hooks/useMediaQuery";
import NavDesktop from "./NavDesktop";
import ThemeToggle from "@/features/settings/components/ThemeToggle";
import { desktopSize } from "@/constants";

const Header = () => {
  const isDesktop = useMediaQuery(`(min-width: ${desktopSize})`);
  return (
    <div className="flex items-center justify-between bg-primary p-4 drop-shadow-lg">
      {!isDesktop ? <NavDesktop /> : null}
      <h1 className="text-primary-foreground font-bold">Comfy Trader</h1>
      <ThemeToggle />
    </div>
  );
};

export default Header;

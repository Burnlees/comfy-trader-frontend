import useMediaQuery from "@/hooks/useMediaQuery";
import NavDesktop from "./NavDesktop";
import ThemeToggle from "@/features/settings/components/ThemeToggle";
import { desktopSize } from "@/constants";

const Header = () => {
  const isDesktop = useMediaQuery(`(min-width: ${desktopSize})`);
  return (
    <div className="flex items-center justify-between p-4 bg-gradient-to-br from-primary to-purple-900 border-b-white">
      {!isDesktop ? <NavDesktop /> : null}
      <h1 className="text-primary-foreground text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        Comfy Trader
      </h1>
      <ThemeToggle />
    </div>
  );
};

export default Header;

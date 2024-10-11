import useMediaQuery from "@/hooks/useMediaQuery";
import NavDesktop from "./NavDesktop";
import ThemeToggle from "@/features/settings/components/ThemeToggle";
import { desktopSize } from "@/constants";

const Header = () => {
  const isDesktop = useMediaQuery(`(min-width: ${desktopSize})`);
  return (
    <div className="flex items-center justify-between p-4 bg-secondary border-b-accent border-2">
      {!isDesktop ? <NavDesktop /> : null}
      <h1 className="font-bold">Comfy Trader</h1>
      <ThemeToggle />
    </div>
  );
};

export default Header;

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAVIGATION, SIDEBAR_NAV } from "@/constants";
import UserBar from "@/features/dashboard/components/UserBar";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

const NavDesktop = () => {
  return (
    <Sheet>
      <SheetTrigger className="h-9 w-9 flex justify-center items-center">
        <HamburgerMenuIcon
          scale={100}
          className="text-primary-foreground font-bold h-[1.2rem] w-[1.2rem]"
        />
      </SheetTrigger>
      <SheetContent side={"left"} aria-describedby={undefined}>
        <SheetHeader className="">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <section className="flex flex-col justify-between h h-full pb-4">
          <ul className="flex flex-col mt-4">
            {Object.keys(SIDEBAR_NAV).map((key) => {
              const navKey = key as keyof typeof SIDEBAR_NAV;
              return (
                <Link
                  key={SIDEBAR_NAV[navKey].key}
                  to={SIDEBAR_NAV[navKey].link}
                  className="border-b-2 p-4 hover:bg-muted"
                >
                  {SIDEBAR_NAV[navKey].name}
                </Link>
              );
            })}
          </ul>
          <UserBar />
        </section>
      </SheetContent>
    </Sheet>
  );
};

export default NavDesktop;

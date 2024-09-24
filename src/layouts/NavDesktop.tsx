import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAVIGATION } from "@/constants";
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
        <ul className="flex flex-col mt-4">
          {Object.keys(NAVIGATION).map((key) => {
            const navKey = key as keyof typeof NAVIGATION;
            return (
              <Link
                key={NAVIGATION[navKey].key}
                to={NAVIGATION[navKey].link}
                className="border-b-2 p-4 hover:bg-muted"
              >
                {NAVIGATION[navKey].name}
              </Link>
            );
          })}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default NavDesktop;

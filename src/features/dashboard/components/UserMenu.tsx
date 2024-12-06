import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOutUser } from "@/features/auth/authService";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const navigate = useNavigate();

  const handleSignOutClick = async () => {
    try {
      await signOutUser();
      localStorage.removeItem("x-token");
      navigate("/access");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePasswordClick = () => {
    navigate("/dashboard/settings");
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"outline"}
            size={"icon"}
            className="text-secondary-foreground rounded-xl h-5"
          >
            <ChevronUpIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={handleChangePasswordClick}>
            Change Password
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleSignOutClick}>
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserMenu;

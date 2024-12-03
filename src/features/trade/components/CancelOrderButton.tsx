import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { cancelOpenOrders } from "../tradeService";
import { useToast } from "@/hooks/use-toast";

const CancelOrderButton = () => {
  const { toast } = useToast();

  const handleCancelOrders = async () => {
    try {
      cancelOpenOrders();
      toast({ title: "Success", description: "All open orders cancelled." });
    } catch (error: any) {
      toast({ title: "Error", description: error.data.message });
    }
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Button variant={"destructive"} size={"sm"}>
            Cancel All
          </Button>
        </PopoverTrigger>
        <PopoverContent className="grid gap-4">
          <p className="mx-auto">Are You Sure?</p>
          <div className="grid grid-cols-2 gap-4">
            <PopoverClose asChild>
              <Button size={"sm"} onClick={handleCancelOrders}>
                Yes
              </Button>
            </PopoverClose>
            <PopoverClose asChild>
              <Button size={"sm"}>No</Button>
            </PopoverClose>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CancelOrderButton;

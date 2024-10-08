import { useUserContext } from "@/contexts/UserContext";
import { useEffect, useState } from "react";
import { deleteUserApi, getUserAPI } from "../settingsService";
import { Button } from "@/components/ui/button";

const CurrentApi = () => {
  const { user } = useUserContext();
  const [currentAPI, setCurrentAPI] = useState<string>("");

  useEffect(() => {
    const fetchData = async (username: string) => {
      try {
        const response = await getUserAPI(username);
        setCurrentAPI(response.data.apiKeysData.apiKey);
      } catch (error) {}
    };
    if (user?.userId) {
      fetchData(user?.userId);
    }
  }, []);

  const handleRemove = async () => {
    try {
      if(user) {
          await deleteUserApi(user?.userId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between items-center">
      Current API: {currentAPI.slice(0, 12) + "..."}{" "}
      <Button onClick={handleRemove} size={'sm'} variant={"destructive"}>
        Remove
      </Button>
    </div>
  );
};

export default CurrentApi;

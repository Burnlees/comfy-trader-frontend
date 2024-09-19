import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { useNavigate } from "react-router-dom";

const ReturnToAccess = () => {
  const navigate = useNavigate();
  const handleReturnToSignIn = () => {
    navigate("/access");
  };

  return (
    <div>
      <Card>
        <CardHeader>Password successfully reset</CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button onClick={handleReturnToSignIn}>Return to sign in</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReturnToAccess;

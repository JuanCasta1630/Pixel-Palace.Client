import { Alert, Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function PaginationOfConfirm() {
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (successMessage) {
      const timeoutId = setTimeout(() => {
        setSuccessMessage("");
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [successMessage, router]);

  const handleReturnHome = () => {
    router.push("/");
  };
  return (
    <div>
      <h1> Confirmation Payment</h1>
      <p>
        Your purchase was successful. The game {"gameName"} is now yours. Redeem
        it on the {"platformName"} platform using the following code:{" "}
        {"redemptionCode"}. Enjoy your product!
      </p>
      {successMessage && (
        <div className="fixed bottom-0 right-0 p-4">
          <Alert
            message="Success"
            description={successMessage}
            type="success"
            showIcon
          />
        </div>
      )}
      <div className="mt-20">
        <Button type="primary" onClick={handleReturnHome}>
        Back to Home
        </Button>
      </div>
    </div>
  );
}

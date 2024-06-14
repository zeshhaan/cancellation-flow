"use client";

import { useRouter } from "next/navigation";

const FreeAccess = () => {
  const router = useRouter();

  const handleSubscription = (subscribe: boolean) => {
    if (subscribe) {
      router.push("/quiz/free-access/keep-access");
    } else {
      router.push("/quiz/cancellation");
    }
  };

  return (
    <div>
      <h1>Keep access?</h1>
      <button onClick={() => handleSubscription(true)}>Yes</button>
      <button onClick={() => handleSubscription(false)}>No</button>
    </div>
  );
};

export default FreeAccess;

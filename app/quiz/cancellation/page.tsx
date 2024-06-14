"use client";

import { useRouter } from "next/navigation";

const Cancellation = () => {
  const router = useRouter();

  const handleSubscription = (cancellation: boolean) => {
    if (cancellation) {
      router.push("/quiz/cancellation/offer");
    } else {
      router.back();
    }
  };

  return (
    <div>
      <h1>Cancellation</h1>
      <button onClick={() => handleSubscription(true)}>Yes</button>
      <button onClick={() => handleSubscription(false)}>No</button>
    </div>
  );
};

export default Cancellation;

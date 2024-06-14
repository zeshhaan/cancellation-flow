"use client";

import { useRouter } from "next/navigation";

const Improve = () => {
  const router = useRouter();

  const handleSubscription = (rate: boolean) => {
    if (rate) {
      router.push("/quiz/cancellation/offer/rating/improve/sorry");
    } else {
      router.back();
    }
  };

  return (
    <div>
      <h1>Improve?</h1>
      <button onClick={() => handleSubscription(true)}>Yes</button>
      <button onClick={() => handleSubscription(false)}>No</button>
    </div>
  );
};

export default Improve;

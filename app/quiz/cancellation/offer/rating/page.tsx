"use client";

import { useRouter } from "next/navigation";

const Rating = () => {
  const router = useRouter();

  const handleSubscription = (rate: boolean) => {
    if (rate) {
      router.push("/quiz/cancellation/offer/rating/improve");
    } else {
      router.back();
    }
  };

  return (
    <div>
      <h1>Rate?</h1>
      <button onClick={() => handleSubscription(true)}>Yes</button>
      <button onClick={() => handleSubscription(false)}>No</button>
    </div>
  );
};

export default Rating;

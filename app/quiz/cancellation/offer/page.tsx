"use client";

import { useRouter } from "next/navigation";

const Offer = () => {
  const router = useRouter();

  const handleSubscription = (off: boolean) => {
    if (off) {
      router.push("/quiz/cancellation/offer/rating");
    } else {
      router.back();
    }
  };

  return (
    <div>
      <h1>50% off?</h1>
      <button onClick={() => handleSubscription(true)}>Yes</button>
      <button onClick={() => handleSubscription(false)}>No</button>
    </div>
  );
};

export default Offer;

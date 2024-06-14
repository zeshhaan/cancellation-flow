"use client";

import { useRouter } from "next/navigation";

const Landing = () => {
  const router = useRouter();

  const handleSubscription = (subscribe: boolean) => {
    if (subscribe) {
      router.push("/quiz/landing/keep-access");
    } else {
      router.push("/quiz/cancellation");
    }
  };

  return (
    <div>
      <h1>Subscribe to Study Plan?</h1>
      <button onClick={() => handleSubscription(true)}>Yes</button>
      <button onClick={() => handleSubscription(false)}>No</button>
    </div>
  );
};

export default Landing;

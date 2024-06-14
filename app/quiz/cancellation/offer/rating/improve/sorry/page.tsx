"use client";
import { useRouter } from "next/navigation";

const Sorry = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Sorry</h1>
      <button onClick={() => router.replace("/")}>Start over</button>
    </div>
  );
};

export default Sorry;

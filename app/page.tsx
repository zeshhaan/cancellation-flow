"use client";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const handleQuizStart = (isFinalYear: boolean) => {
    if (isFinalYear) {
      router.push("/quiz/final-year");
    } else {
      router.push("/quiz/free-access");
    }
  };

  return (
    <div>
      <h1>Are you a final year student?</h1>
      <button onClick={() => handleQuizStart(true)}>Yes</button>
      <button onClick={() => handleQuizStart(false)}>No</button>
    </div>
  );
};

export default Home;

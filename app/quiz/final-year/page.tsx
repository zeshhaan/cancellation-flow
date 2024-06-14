"use client";

import { useRouter } from "next/navigation";

const FinalYear = () => {
  const router = useRouter();

  const handleNextQuestion = (isUni: boolean) => {
    if (isUni) {
      router.push("/quiz/final-year/uni");
    } else {
      router.push("/quiz/landing");
    }
  };

  return (
    <div>
      <h1>Are you a university student?</h1>
      <button onClick={() => handleNextQuestion(true)}>Yes</button>
      <button onClick={() => handleNextQuestion(false)}>No</button>
    </div>
  );
};

export default FinalYear;

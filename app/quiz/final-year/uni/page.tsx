"use client";

import { useRouter } from "next/navigation";

const Uni = () => {
  const router = useRouter();

  const handleCourseSelect = (course: string) => {
    router.push(`/quiz/landing`);
  };

  return (
    <div>
      <h1>Select your course</h1>
      <button onClick={() => handleCourseSelect("course1")}>Course 1</button>
      <button onClick={() => handleCourseSelect("course2")}>Course 2</button>
    </div>
  );
};

export default Uni;

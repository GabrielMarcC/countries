"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export const CustomButton = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.back();
  };

  return (
    <Button
      variant="default"
      className="bg-white text-black flex justify-center items-center gap-2 rounded-md border"
      onClick={() => handleNavigate()}
    >
      <FaArrowLeft />
      Back
    </Button>
  );
};

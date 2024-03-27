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
    <div className="w-[100%]  flex justify-start items-center">
      <Button
        variant="default"
        className="w-[120px] dark:bg-dark_blue dark:text-white bg-white text-black flex justify-center items-center gap-2 rounded-sm border"
        onClick={() => handleNavigate()}
      >
        <FaArrowLeft />
        Back
      </Button>
    </div>
  );
};

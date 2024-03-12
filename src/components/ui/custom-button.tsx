import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const CustomButton = () => {
  return (
    <Button
      variant="default"
      className="bg-white text-black flex justify-center items-center gap-2 rounded-md border"
    >
      <FaArrowLeft />
      <Link href="/">Back</Link>
    </Button>
  );
};

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;

  className?: string;
}
export const MaxWidthWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "w-full h-full max-w-5xl mx-auto px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * Reusable Container component for consistent layout spacing
 */

import { cn } from "@/lib/utils";
import type { BaseComponentProps } from "@/types";

interface ContainerProps extends BaseComponentProps {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const containerSizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[1400px]",
  full: "max-w-full",
};

export function Container({ children, className, size = "lg" }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", containerSizes[size], className)}>
      {children}
    </div>
  );
}

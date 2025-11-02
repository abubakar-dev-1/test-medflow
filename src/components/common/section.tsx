/**
 * Reusable Section component for page sections
 */

import { cn } from "@/lib/utils";
import { Container } from "./container";
import type { BaseComponentProps } from "@/types";

interface SectionProps extends BaseComponentProps {
  id?: string;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  variant?: "default" | "gradient" | "dark";
}

const sectionVariants = {
  default: "bg-background",
  gradient: "bg-gradient-to-b from-background to-muted/20",
  dark: "bg-muted/50",
};

export function Section({
  children,
  className,
  id,
  containerSize = "lg",
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 md:py-24 lg:py-32",
        sectionVariants[variant],
        className
      )}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

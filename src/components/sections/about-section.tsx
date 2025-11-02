/**
 * About MedFlo section with animated statistics
 */

"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/common";
import { Button } from "@/components/ui/button";
import { useCounter } from "@/lib/hooks";

export function AboutSection() {
  const specialistsCounter = useCounter({ end: 30, duration: 2 });
  const clinicsCounter = useCounter({ end: 5, duration: 2 });
  const experienceCounter = useCounter({ end: 5, duration: 2 });

  const stats = [
    {
      value: specialistsCounter.count,
      suffix: "+",
      label: "Specialists",
      ref: specialistsCounter.ref,
    },
    {
      value: clinicsCounter.count,
      suffix: "5",
      label: "Clinics",
      ref: clinicsCounter.ref,
    },
    {
      value: experienceCounter.count,
      suffix: "+",
      label: "Years of Experience",
      ref: experienceCounter.ref,
    },
  ];

  return (
    <section className="bg-background py-16">
      <Container size="xl">
        <div className="flex gap-12">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Title */}
            <h2 className="text-primary text-[45px] font-normal">About MedFlo</h2>

            {/* Description */}
            <p className="text-foreground text-[20px] leading-relaxed">
              MedFlo is dedicated to providing top-quality healthcare through a team of highly
              skilled specialists and cutting-edge clinics. With decades of experience, we ensure
              personalized care and advanced treatments to meet your needs.
            </p>

            {/* Statistics */}
            <div className="flex gap-42">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-primary mb-2 text-4xl font-bold">
                    <span ref={stat.ref}>{stat.value}</span>
                    {stat.suffix}
                  </div>
                  <div className="text-foreground text-base">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 rounded-lg px-18 py-6 text-base font-semibold text-white"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="group border-primary text-primary hover:bg-primary rounded-lg border-2 bg-transparent px-32 py-6 text-base font-semibold hover:text-white"
              >
                <Link href="/book" className="flex items-center gap-18">
                  Book Appointment
                  <ChevronRight className="h-8 w-8 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Logo Card */}
          <div className="flex items-center justify-center">
            <div className="flex h-full w-full items-center justify-center rounded-3xl bg-[#DEE3EB] p-16">
              <div className="text-center">
                <h1 className="text-primary text-7xl font-bold">MedFlo</h1>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

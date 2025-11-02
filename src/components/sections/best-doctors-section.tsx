/**
 * Best Doctors section with carousel
 */

"use client";

import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import type { CarouselApi } from "@/components/ui/carousel";
import { Container } from "@/components/common";
import { DoctorCard } from "@/components/common/doctor-card";
import { DOCTORS } from "@/constants/doctors";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export function BestDoctorsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="bg-background py-16">
      <Container size="xl">
        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-[45px] font-400 text-primary">Best Doctors:</h2>
          <Link
            href="/doctors"
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-[18px] font-bold text-white transition-all hover:bg-primary/90"
          >
            View All
            <ChevronRight className="h-6 w-6" />
          </Link>
        </div>

        {/* Doctors Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {DOCTORS.map((doctor) => (
              <CarouselItem key={doctor.id} className="pl-4 md:basis-1/5 basis-1/6">
                <DoctorCard doctor={doctor} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            {/* Previous Button */}
            <button
              onClick={() => api?.scrollPrev()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-all hover:bg-primary/90"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {Array.from({ length: Math.min(count, 5) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === current % 5 ? "bg-primary" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => api?.scrollNext()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-all hover:bg-primary/90"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </Carousel>
      </Container>
    </section>
  );
}

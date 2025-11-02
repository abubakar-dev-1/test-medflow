/**
 * Promo Packages section with carousel
 */

"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import type { CarouselApi } from "@/components/ui/carousel";
import { Container } from "@/components/common";
import { PROMO_PACKAGES } from "@/constants/promo-packages";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export function PromoPackagesSection() {
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
    <section className="bg-background py-8 md:py-16">
      <Container size="xl">
        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between md:mb-8">
          <h2 className="text-2xl font-normal text-primary md:text-[45px]">Promo Packages:</h2>
          <Link
            href="#"
            className="flex items-center gap-1 rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-white transition-all hover:bg-primary/90 md:gap-2 md:px-6 md:py-2 md:text-[18px]"
          >
            <span className="hidden sm:inline">View All</span>
            <span className="sm:hidden">All</span>
            <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
          </Link>
        </div>

        {/* Packages Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {PROMO_PACKAGES.map((pkg) => (
              <CarouselItem key={pkg.id} className="basis-1/2 pl-2 sm:basis-1/3 md:basis-1/4 md:pl-4 lg:basis-1/5">
                <Link
                  href="#"
                  className="group block overflow-hidden rounded-3xl shadow-lg transition-all hover:shadow-xl"
                >
                  <div className="relative aspect-3/3">
                    {/* Background Image */}
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>


                 

                    {/* Bottom Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="md:text-[16px] text-[12px] font-semibold leading-tight text-white">
                        {pkg.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Controls */}
          <div className="mt-6 flex items-center justify-center gap-3 md:mt-8 md:gap-4">
            {/* Previous Button */}
            <button
              onClick={() => api?.scrollPrev()}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white transition-all hover:bg-primary/90 md:h-10 md:w-10"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-1.5 md:gap-2">
              {Array.from({ length: Math.min(count, 5) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-1.5 w-1.5 rounded-full transition-all md:h-2 md:w-2 ${
                    index === current % 5 ? "bg-primary" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => api?.scrollNext()}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white transition-all hover:bg-primary/90 md:h-10 md:w-10"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>
        </Carousel>
      </Container>
    </section>
  );
}

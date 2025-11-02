/**
 * Clinics section showing medical specialties
 */

import Link from "next/link";
import { Image as ImageIcon, ChevronRight } from "lucide-react";
import { Container } from "@/components/common";
import { Button } from "@/components/ui/button";

export function ClinicsSection() {
  const clinics = [
    { id: 1, name: "Clinic Name", icon: ImageIcon },
    { id: 2, name: "Clinic Name", icon: ImageIcon },
    { id: 3, name: "Clinic Name", icon: ImageIcon },
  ];

  return (
    <section className="bg-background py-10 md:py-20">
      <Container size="lg">
        <div className="text-center">
          {/* Title */}
          <h2 className="mb-4 text-2xl font-bold text-primary md:mb-6 md:text-[44px]">Clinics</h2>

          {/* Subtitle */}
          <h3 className="mx-auto mb-3 w-[90%] text-xl font-normal leading-tight text-foreground md:mb-4 md:w-[80%] md:text-[45px]">
            Discover MedFlo's Comprehensive Medical Specialties.
          </h3>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-[58rem] text-left text-base leading-relaxed text-foreground md:mb-12 md:text-[24px]">
            MedFlo is your gateway to top-tier healthcare services, offering a diverse range of
            medical specialties to meet your needs. With cutting-edge facilities and highly
            skilled professionals, MedFlo is dedicated to ensuring your comfort, health, and
            recovery.
          </p>

          {/* Clinic Cards */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap md:gap-6">
            {clinics.map((clinic) => (
              <Link
                key={clinic.id}
                href="#"
                className="group flex w-full min-w-[180px] items-center gap-2 rounded-2xl border-2 border-primary/20 bg-white px-3 py-2 transition-all hover:border-primary hover:shadow-md sm:w-auto sm:min-w-[200px] sm:gap-3 md:min-w-[230px] md:px-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors group-hover:bg-primary group-hover:text-white md:h-12 md:w-12">
                  <clinic.icon className="h-10 w-10 md:h-12 md:w-12" />
                </div>
                <span className="text-sm font-medium text-primary md:text-base">{clinic.name}</span>
              </Link>
            ))}

            {/* View All Button */}
            <Button
              asChild
              variant="outline"
              className="group w-full min-w-[180px] rounded-2xl border-2 border-primary bg-transparent px-6 py-4 text-sm font-medium text-primary hover:bg-primary hover:text-white sm:w-auto md:py-6 md:text-base"
            >
              <Link href="#" className="flex items-center gap-2">
                View All
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1 md:h-5 md:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

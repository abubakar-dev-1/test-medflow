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
    <section className="bg-background py-20">
      <Container size="lg">
        <div className="text-center">
          {/* Title */}
          <h2 className="mb-6 text-[44px] font-bold text-primary">Clinics</h2>

          {/* Subtitle */}
          <h3 className="mb-4 text-[45px] w-[80%] mx-auto font-normal leading-tight text-foreground">
            Discover MedFlo's Comprehensive Medical Specialties.
          </h3>

          {/* Description */}
          <p className="mx-auto mb-12 max-w-[58rem] text-left text-[24px] leading-relaxed text-foreground">
            MedFlo is your gateway to top-tier healthcare services, offering a diverse range of
            medical specialties to meet your needs. With cutting-edge facilities and highly
            skilled professionals, MedFlo is dedicated to ensuring your comfort, health, and
            recovery.
          </p>

          {/* Clinic Cards */}
          <div className="flex items-center justify-center gap-6">
            {clinics.map((clinic) => (
              <Link
                key={clinic.id}
                href={`/clinics/${clinic.id}`}
                className="group flex min-w-[230px] items-center gap-3 rounded-2xl border-2 border-primary/20 bg-white px-4  py-2 transition-all hover:border-primary hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <clinic.icon className="h-12 w-12" />
                </div>
                <span className="text-base font-medium text-primary">{clinic.name}</span>
              </Link>
            ))}

            {/* View All Button */}
            <Button
              asChild
              variant="outline"
              className="group min-w-[180px] rounded-2xl border-2 border-primary bg-transparent px-6 py-6 text-base font-medium text-primary hover:bg-primary hover:text-white"
            >
              <Link href="/clinics" className="flex items-center gap-2">
                View All
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

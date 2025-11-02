/**
 * Client wrapper for hero section with random doctor navigation
 */

"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, CalendarCheck, FileText, Users } from "lucide-react";
import { Container } from "@/components/common";
import { DOCTORS } from "@/constants/doctors";

export function HeroSectionClient() {
  const router = useRouter();

  const handleBookAppointment = () => {
    // Get a random doctor
    const randomDoctor = DOCTORS[Math.floor(Math.random() * DOCTORS.length)];
    // Navigate to that doctor's page
    router.push(`/doctors/${randomDoctor.id}`);
  };

  const quickActions = [
    {
      icon: Calendar,
      label: "Book Appointment",
      onClick: handleBookAppointment,
    },
    {
      icon: CalendarCheck,
      label: "My Appointments",
      href: "#",
    },
    {
      icon: FileText,
      label: "Health Records",
      href: "#",
    },
    {
      icon: Users,
      label: "My Family",
      href: "#",
    },
  ];

  return (
    <section className="bg-background py-6 md:py-12">
      <Container size="xl">
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          {/* Left Side - Promotional Banner with Image and Text */}
          <div className="flex gap-6">
            {/* Banner Image */}
            <Image src="/hero.png" alt="Hero Image" width={800} height={500} className=" h-auto" />
          </div>

          {/* Right Side - Quick Actions */}
          <div className="flex-1 md:max-w-md">
            <h3 className="mb-6 text-xl font-bold text-foreground">Quick Actions:</h3>
            <div className="space-y-4">
              {quickActions.map((action) =>
                action.onClick ? (
                  <button
                    key={action.label}
                    onClick={action.onClick}
                    className="flex w-full items-center gap-6 rounded-xl bg-[#F5FAFB] p-4 transition-all hover:bg-[#ECF2F3] hover:shadow-md"
                  >
                    <div className="flex items-center justify-center">
                      <action.icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="text-lg font-medium text-foreground">{action.label}</span>
                  </button>
                ) : (
                  <Link
                    key={action.label}
                    href={action.href || "#"}
                    className="flex items-center gap-6 rounded-xl bg-[#F5FAFB] p-4 transition-all hover:bg-[#ECF2F3] hover:shadow-md"
                  >
                    <div className="flex items-center justify-center">
                      <action.icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="text-lg font-medium text-foreground">{action.label}</span>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

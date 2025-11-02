/**
 * Hero section with promotional banner and quick actions
 */

import Link from "next/link";
import Image from "next/image";
import { Calendar, CalendarCheck, FileText, Users } from "lucide-react";
import { Container } from "@/components/common";

export function HeroSection() {
  const quickActions = [
    {
      icon: Calendar,
      label: "Book Appointment",
      href: "/book",
    },
    {
      icon: CalendarCheck,
      label: "My Appointments",
      href: "/appointments",
    },
    {
      icon: FileText,
      label: "Health Records",
      href: "/records",
    },
    {
      icon: Users,
      label: "My Family",
      href: "/family",
    },
  ];

  return (
    <section className="bg-background py-12">
      <Container size="xl">
        <div className="flex gap-8">
          {/* Left Side - Promotional Banner with Image and Text */}
          <div className="flex  gap-6">
            {/* Banner Image */}
          <Image src="/hero.png" alt="Hero Image" width={800} height={500} />

          
          </div>

          {/* Right Side - Quick Actions */}
          <div className="flex-1">
    
              <h3 className="mb-6 text-xl font-bold text-foreground">Quick Actions:</h3>
              <div className="space-y-4">
                {quickActions.map((action) => (
                  <Link
                    key={action.href}
                    href={action.href}
                    className="flex items-center gap-6 rounded-xl bg-[#F5FAFB] p-4 transition-all hover:bg-[#ECF2F3] hover:shadow-md"
                  >
                    <div className="flex  items-center justify-center ">
                      <action.icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="text-lg font-medium text-foreground">{action.label}</span>
                  </Link>
                ))}
              </div>
         
          </div>
        </div>
      </Container>
    </section>
  );
}

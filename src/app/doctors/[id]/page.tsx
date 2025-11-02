/**
 * Dynamic doctor detail page
 */

import Image from "next/image";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import { Container } from "@/components/common";
import { DoctorAppointmentButton } from "@/components/doctors";
import { DOCTORS } from "@/constants/doctors";
import { WEEKDAYS } from "@/types/doctor";
import type { Metadata } from "next";

interface DoctorPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: DoctorPageProps): Promise<Metadata> {
  const { id } = await params;
  const doctor = DOCTORS.find((d) => d.id === id);

  if (!doctor) {
    return {
      title: "Doctor Not Found",
    };
  }

  return {
    title: `${doctor.name} ${doctor.surname} - ${doctor.specialization}`,
    description: doctor.bio,
  };
}

export async function generateStaticParams() {
  return DOCTORS.map((doctor) => ({
    id: doctor.id,
  }));
}

export default async function DoctorPage({ params }: DoctorPageProps) {
  const { id } = await params;
  const doctor = DOCTORS.find((d) => d.id === id);

  if (!doctor) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background py-6 md:py-12">
      <Container size="xl">
        <div className="flex flex-col gap-6 md:flex-row md:gap-12">
          {/* Left Side - Doctor Image and Info */}
          <div className="w-full space-y-4 md:w-[350px] md:space-y-6">
            {/* Doctor Image */}
            <div className="overflow-hidden rounded-2xl bg-white p-3 md:rounded-3xl md:p-4">
              <div className="relative aspect-3/4 overflow-hidden rounded-xl bg-gray-100 md:rounded-2xl">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name} ${doctor.surname}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Experience and Availability Card */}
            <div className="space-y-2 rounded-2xl border-2 border-primary bg-white px-3 py-2 md:rounded-3xl md:px-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground md:text-sm">Years of Experience:</span>
                <span className="text-base font-bold text-foreground md:text-lg">
                  {doctor.yearsOfExperience} Years
                </span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="mb-2 block text-xs font-semibold text-foreground md:mb-3 md:text-sm">
                  Availability:
                </span>
                <div className="space-y-1.5 md:space-y-2">
                  {/* Dots */}
                  <div className="flex justify-between gap-0.5 md:gap-1">
                    {WEEKDAYS.map((day, index) => {
                      const isAvailable = doctor.availability.includes(day);
                      return (
                        <div
                          key={index}
                          className={`h-2.5 w-2.5 rounded-full md:h-3 md:w-3 ${
                            isAvailable ? "bg-primary" : "bg-[#B8C5CC]"
                          }`}
                        />
                      );
                    })}
                  </div>
                  {/* Day Labels */}
                  <div className="flex justify-between gap-0.5 md:gap-2">
                    <span className="text-[10px] font-medium text-primary md:text-xs">S</span>
                    <span className="text-[10px] font-medium text-primary md:text-xs">M</span>
                    <span className="text-[10px] font-medium text-primary md:text-xs">T</span>
                    <span className="text-[10px] font-medium text-primary md:text-xs">W</span>
                    <span className="text-[10px] font-medium text-primary md:text-xs">T</span>
                    <span className="text-[10px] font-medium text-primary md:text-xs">F</span>
                    <span className="text-[10px] font-medium text-primary md:text-xs">S</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Doctor Details */}
          <div className="flex-1 space-y-4 md:space-y-6">
            {/* Header */}
            <div>
              <h1 className="mb-1.5 text-2xl font-bold text-foreground md:mb-2 md:text-3xl">
                {doctor.name} {doctor.surname}
              </h1>
              <div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-foreground md:mb-3 md:gap-3 md:text-base">
                <span>{doctor.specialization}</span>
                {doctor.clinic && (
                  <>
                    <span>|</span>
                    <span>{doctor.clinic}</span>
                  </>
                )}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 rounded-lg bg-primary px-2.5 py-1 text-white md:px-3 md:py-1.5">
                  <Star className="h-3.5 w-3.5 font-bold text-white md:h-4 md:w-4" />
                  <span className="text-xs font-bold md:text-sm">{doctor.rating}</span>
                </div>
              </div>
            </div>

            {/* Qualifications */}
            <div>
              <h2 className="mb-2 text-lg font-bold text-foreground md:mb-3 md:text-xl">Qualifications:</h2>
              <ul className="ml-4 list-disc space-y-1.5 text-sm text-foreground md:ml-6 md:space-y-2 md:text-base">
                <li>
                  {doctor.qualifications.degree}, {doctor.qualifications.fieldOfStudy}
                  <ul className="ml-4 list-disc space-y-1 text-xs text-foreground md:ml-6 md:text-sm">
                    <li>University: {doctor.qualifications.university}</li>
                    {doctor.qualifications.achievement && (
                      <li>Achievement: {doctor.qualifications.achievement}</li>
                    )}
                  </ul>
                </li>
                {doctor.qualifications.postgraduate && (
                  <li>
                    {doctor.qualifications.postgraduate.degree},{" "}
                    {doctor.qualifications.postgraduate.fieldOfStudy}
                    <ul className="ml-4 list-disc space-y-1 text-xs text-foreground md:ml-6 md:text-sm">
                      <li>University: {doctor.qualifications.postgraduate.university}</li>
                    </ul>
                  </li>
                )}
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="mb-2 text-lg font-bold text-foreground md:mb-3 md:text-xl">Certifications:</h2>
              <ul className="ml-4 list-disc space-y-1.5 text-sm text-foreground md:ml-6 md:space-y-2 md:text-base">
                {doctor.certifications.map((cert, index) => (
                  <li key={index}>
                    {cert.name}
                    {(cert.location || cert.year) && (
                      <ul className="ml-4 list-disc space-y-1 text-xs text-foreground md:ml-6 md:text-sm">
                        {cert.location && <li>Location: {cert.location}</li>}
                        {cert.year && <li>Year: {cert.year}</li>}
                      </ul>
                    )}
                    {cert.fellowship && (
                      <ul className="ml-4 list-disc text-xs text-foreground md:ml-6 md:text-sm">
                        <li>{cert.fellowship}</li>
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bio */}
            <div>
              <p className="text-sm leading-relaxed text-foreground md:text-base">{doctor.bio}</p>
            </div>

            {/* CTA Button */}
            <div>
              <DoctorAppointmentButton
                doctorName={`${doctor.name} ${doctor.surname}`}
              />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

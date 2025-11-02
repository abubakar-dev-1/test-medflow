/**
 * Dynamic doctor detail page
 */

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import { Container } from "@/components/common";
import { Button } from "@/components/ui/button";
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
    <main className="min-h-screen bg-background py-12">
      <Container size="xl">
        <div className="flex gap-12">
          {/* Left Side - Doctor Image and Info */}
          <div className="w-[400px] space-y-6">
            {/* Doctor Image */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gray-100">
              <Image
                src={doctor.image}
                alt={`${doctor.name} ${doctor.surname}`}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Experience and Availability Card */}
            <div className="space-y-4 rounded-3xl border-2 border-primary p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  Years of Experience:
                </span>
                <span className="text-lg font-bold text-primary">
                  {doctor.yearsOfExperience} Years
                </span>
              </div>

              <div className="border-t pt-4">
                <span className="mb-3 block text-sm font-medium text-foreground">
                  Availability:
                </span>
                <div className="flex gap-2">
                  {WEEKDAYS.map((day, index) => {
                    const isAvailable = doctor.availability.includes(day);
                    return (
                      <div
                        key={index}
                        className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold ${
                          isAvailable
                            ? "bg-primary text-white"
                            : "bg-gray-200 text-gray-400"
                        }`}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Doctor Details */}
          <div className="flex-1 space-y-8">
            {/* Header */}
            <div>
              <h1 className="mb-2 text-4xl font-bold text-foreground">
                {doctor.name} {doctor.surname}
              </h1>
              <div className="mb-4 flex items-center gap-4 text-lg text-muted-foreground">
                <span>{doctor.specialization}</span>
                {doctor.clinic && (
                  <>
                    <span>|</span>
                    <span>{doctor.clinic}</span>
                  </>
                )}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 text-white">
                  <Star className="h-4 w-4 fill-white" />
                  <span className="font-semibold">{doctor.rating}</span>
                </div>
              </div>
            </div>

            {/* Qualifications */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">Qualifications:</h2>
              <ul className="ml-6 list-disc space-y-2 text-foreground">
                <li>
                  {doctor.qualifications.degree}, {doctor.qualifications.fieldOfStudy}
                  <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
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
                    <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                      <li>University: {doctor.qualifications.postgraduate.university}</li>
                    </ul>
                  </li>
                )}
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">Certifications:</h2>
              <ul className="ml-6 list-disc space-y-2 text-foreground">
                {doctor.certifications.map((cert, index) => (
                  <li key={index}>
                    {cert.name}
                    {(cert.location || cert.year) && (
                      <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                        {cert.location && <li>Location: {cert.location}</li>}
                        {cert.year && <li>Year: {cert.year}</li>}
                      </ul>
                    )}
                    {cert.fellowship && (
                      <ul className="ml-6 list-disc text-muted-foreground">
                        <li>{cert.fellowship}</li>
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bio */}
            <div>
              <p className="leading-relaxed text-foreground">{doctor.bio}</p>
            </div>

            {/* CTA Button */}
            <div>
              <Button size="lg" className="px-8 py-6 text-lg" asChild>
                <Link href="/book">Make an appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

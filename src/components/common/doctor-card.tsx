/**
 * Doctor Card component matching exact design
 */

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import type { Doctor } from "@/types/doctor";
import { WEEKDAYS } from "@/types/doctor";

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Link
      href={`/doctors/${doctor.id}`}
      className="group block w-full overflow-hidden rounded-md bg-[#ECF2F3] p-3"
    >
      {/* Doctor Image */}
      <div className="relative mb-5 aspect-square overflow-hidden rounded-md bg-white">
        <Image
          src={doctor.image}
          alt={`${doctor.name} ${doctor.surname}`}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>

      {/* Doctor Info */}
      <div className="space-y-2">
        {/* Name and Rating */}
        <div className="flex items-start justify-between gap-3">
          <div className="">
            <h3 className="text-foreground text-[18px] leading-tight font-semibold">
              {doctor.name} {doctor.surname}
            </h3>
            <p className="text-foreground mt-0.5 text-[14px] font-normal">
              {doctor.specialization}
            </p>
          </div>
          <div className="bg-primary flex shrink-0 items-center gap-1 rounded-md px-1 py-1 text-white">
            <Star className="h-4 w-4 font-bold" />
            <span className="text-[14px] font-semibold">{doctor.rating}</span>
          </div>
        </div>

        {/* Availability Days - Dots and Labels */}
        <div className="flex items-center justify-between gap-2 pt-2">
          {/* Department/Specialty - Second Line */}
          <div className="flex items-center justify-between pt-1">
            <p className="text-foreground text-[12px] font-normal">{doctor.specialization}</p>
          </div>

          {/* Dots */}
          <div>
            <div className="flex justify-between gap-1">
              {WEEKDAYS.map((day, index) => {
                const isAvailable = doctor.availability.includes(day);
                return (
                  <div
                    key={index}
                    className={`h-3 w-3 rounded-full ${
                      isAvailable ? "bg-primary" : "bg-[#B8C5CC]"
                    }`}
                  />
                );
              })}
            </div>

            {/* Day Labels */}
            <div className="mt-2 flex justify-between">
              <span className="text-primary text-xs font-medium">S</span>
              <span className="text-primary text-xs font-medium">M</span>
              <span className="text-primary text-xs font-medium">T</span>
              <span className="text-primary text-xs font-medium">W</span>
              <span className="text-primary text-xs font-medium">T</span>
              <span className="text-primary text-xs font-medium">F</span>
              <span className="text-primary text-xs font-medium">S</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

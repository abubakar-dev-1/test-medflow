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
      className="group block w-full overflow-hidden rounded-md bg-[#ECF2F3] p-2 md:p-3"
    >
      {/* Doctor Image */}
      <div className="relative mb-3 aspect-square overflow-hidden rounded-md bg-white md:mb-5">
        <Image
          src={doctor.image}
          alt={`${doctor.name} ${doctor.surname}`}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>

      {/* Doctor Info */}
      <div className="space-y-1.5 md:space-y-2">
        {/* Name and Rating */}
        <div className="md:flex items-start justify-between gap-2 md:gap-3">
          <div className="">
            <h3 className="text-sm font-semibold leading-tight text-foreground md:text-[18px]">
              {doctor.name} {doctor.surname}
            </h3>
            <p className="mt-0.5 text-xs font-normal text-foreground md:text-[14px]">
              {doctor.specialization}
            </p>
          </div>
          <div className="flex w-fit shrink-0 items-center gap-0.5 rounded-md bg-primary px-1 py-0.5 text-white md:gap-1 md:py-1">
            <Star className="h-3 w-3 font-bold md:h-4 md:w-4" />
            <span className="text-xs font-semibold md:text-[14px]">{doctor.rating}</span>
          </div>
        </div>

        {/* Availability Days - Dots and Labels */}
        <div className="flex items-center justify-between gap-1.5 pt-1 md:gap-2 md:pt-2">
          {/* Department/Specialty - Second Line */}
          <div className="flex items-center justify-between pt-0.5 md:pt-1">
            <p className="text-[10px] font-normal text-foreground md:text-[12px]">{doctor.specialization}</p>
          </div>

          {/* Dots */}
          <div>
            <div className="flex justify-between gap-0.5 md:gap-1">
              {WEEKDAYS.map((day, index) => {
                const isAvailable = doctor.availability.includes(day);
                return (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full md:h-3 md:w-3 ${
                      isAvailable ? "bg-primary" : "bg-[#B8C5CC]"
                    }`}
                  />
                );
              })}
            </div>

            {/* Day Labels */}
            <div className="mt-1 flex justify-between md:mt-2">
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
    </Link>
  );
}

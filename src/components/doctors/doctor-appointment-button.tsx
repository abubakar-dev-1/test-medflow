/**
 * Client component for doctor appointment booking button
 */

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "@/components/booking";

interface DoctorAppointmentButtonProps {
  doctorName: string;
}

export function DoctorAppointmentButton({ doctorName }: DoctorAppointmentButtonProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button
        size="lg"
        onClick={() => setDialogOpen(true)}
        className="rounded-lg bg-primary px-12 py-6 text-base font-semibold text-white hover:bg-primary/90"
      >
        Make an appointment
      </Button>

      <AppointmentDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        doctorName={doctorName}
      />
    </>
  );
}

/**
 * Appointment booking dialog with date and time selection
 */

"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AppointmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  doctorName?: string;
}

// Available time slots
const TIME_SLOTS = [
  "09:00 AM",
  "09:15 AM",
  "09:30 AM",
  "09:45 AM",
  "10:00 AM",
  "10:15 AM",
  "10:30 AM",
  "10:45 AM",
  "11:00 AM",
  "11:15 AM",
  "11:30 AM",
  "11:45 AM",
];

// Disabled time slots for demo (can be dynamic based on bookings)
const DISABLED_SLOTS = ["10:30 AM"];

export function AppointmentDialog({
  open,
  onOpenChange,
  doctorName,
}: AppointmentDialogProps) {
  const [step, setStep] = useState<"date" | "time">("date");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | undefined>();

  const handleDateNext = () => {
    if (selectedDate) {
      setStep("time");
    }
  };

  const handleTimeNext = () => {
    if (selectedTime && selectedDate) {
      // Handle appointment booking here
      console.log("Booking appointment:", {
        date: selectedDate,
        time: selectedTime,
        doctor: doctorName,
      });

      // Reset and close
      handleClose();
    }
  };

  const handleClose = () => {
    setStep("date");
    setSelectedDate(undefined);
    setSelectedTime(undefined);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[280px] rounded-2xl bg-[#F5FAFB] p-4 md:max-w-[340px] md:p-6">
        {step === "date" ? (
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl font-semibold text-foreground md:text-2xl">Pick a Date</h3>

            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => date < new Date()}
                className="w-full p-0"
                classNames={{
                  // months: "flex flex-col",
                  // month: "space-y-3 w-full",
                  month_caption: "flex justify-center items-center h-auto w-full px-0 mb-3 relative",
                  caption_label: "text-base font-medium text-foreground",
                  nav: "flex items-center justify-between w-full absolute inset-x-0",
                  button_previous: "h-7 w-7 bg-[#DEE3EB] p-0 flex items-center justify-center hover:bg-[#DEE3EB]/80 rounded-full mx-4 transition-all",
                  button_next: "h-7 w-7 bg-[#DEE3EB] p-0 flex items-center justify-center hover:bg-[#DEE3EB]/80 rounded-full mx-4 transition-all",
                  table: "w-full border-collapse",
                  weekdays: "flex w-full",
                  weekday: "text-foreground w-full text-center font-medium text-xs uppercase flex-1",
                  week: "flex w-full mt-0.5",
                  day: "relative p-0.5 text-center text-sm flex-1",
                  today: "bg-transparent text-foreground font-semibold",
                  outside: "text-gray-300",
                  disabled: "text-gray-300 opacity-40",
                  hidden: "invisible",
                }}
                components={{
                  DayButton: ({ className, day, modifiers, ...props }) => {
                    const isPastMonth = modifiers.outside;
                    const isToday = modifiers.today;
                    const isSelected = modifiers.selected;

                    return (
                      <button
                        className={cn(
                          "h-9 w-full p-0 rounded-full font-normal text-sm text-foreground hover:bg-[#26262614] transition-all flex items-center justify-center",
                          isPastMonth && "bg-[#26262614] rounded-full",
                          isToday && "bg-[#26262614] rounded-full font-semibold",
                          isSelected && "!bg-[#9CF1F0] text-foreground rounded-full font-medium",
                          className
                        )}
                        {...props}
                      />
                    );
                  },
                }}
              />
            </div>

            <div className="flex flex-col gap-1.5 md:gap-2">
              <Button
                onClick={handleDateNext}
                disabled={!selectedDate}
                className="h-10 w-full rounded-lg bg-primary text-sm font-medium text-white hover:bg-primary/90 disabled:opacity-50 md:h-11 md:text-base"
              >
                Next
              </Button>
              <Button
                onClick={handleClose}
                variant="ghost"
                className="h-10 w-full rounded-lg text-sm font-normal text-foreground hover:bg-transparent md:h-11 md:text-base"
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl font-semibold text-foreground md:text-2xl">Pick a Time</h3>

            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {TIME_SLOTS.map((slot) => {
                const isDisabled = DISABLED_SLOTS.includes(slot);
                const isSelected = selectedTime === slot;

                return (
                  <button
                    key={slot}
                    onClick={() => !isDisabled && setSelectedTime(slot)}
                    disabled={isDisabled}
                    className={`h-9 rounded-lg border text-sm font-normal transition-all md:h-11 md:text-base ${
                      isSelected
                        ? "border-primary bg-primary/10 text-primary"
                        : isDisabled
                          ? "border-gray-200 bg-primary/20 text-primary/50 cursor-not-allowed"
                          : "border-primary text-primary hover:bg-primary/5"
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col gap-1.5 md:gap-2">
              <Button
                onClick={handleTimeNext}
                disabled={!selectedTime}
                className="h-10 w-full rounded-lg bg-primary text-sm font-medium text-white hover:bg-primary/90 disabled:opacity-50 md:h-11 md:text-base"
              >
                Next
              </Button>
              <Button
                onClick={handleClose}
                variant="ghost"
                className="h-10 w-full rounded-lg text-sm font-normal text-foreground hover:bg-transparent md:h-11 md:text-base"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

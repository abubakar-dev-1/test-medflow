/**
 * Doctor type definitions
 */

export interface Doctor {
  id: string;
  name: string;
  surname: string;
  specialization: string;
  clinic?: string;
  rating: number;
  image: string;
  yearsOfExperience: number;
  availability: string[];
  qualifications: {
    degree: string;
    fieldOfStudy: string;
    university: string;
    achievement?: string;
    postgraduate?: {
      degree: string;
      fieldOfStudy: string;
      university: string;
    };
  };
  certifications: {
    name: string;
    location?: string;
    year?: string;
    fellowship?: string;
  }[];
  bio: string;
}

export const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"] as const;

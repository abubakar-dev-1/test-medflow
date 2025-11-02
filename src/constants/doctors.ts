/**
 * Sample doctors data
 */

import type { Doctor } from "@/types/doctor";

export const DOCTORS: Doctor[] = [
  {
    id: "1",
    name: "Dr. Name",
    surname: "Surname",
    specialization: "Neurology",
    rating: 4.8,
    image: "/doc1.png",
    yearsOfExperience: 15,
    availability: ["M", "T", "W", "T", "F"],
    qualifications: {
      degree: "Degree Title",
      fieldOfStudy: "Field of Study",
      university: "University Name",
      achievement: "Grade/Award",
      postgraduate: {
        degree: "Postgraduate Degree",
        fieldOfStudy: "Field of Study",
        university: "University Name",
      },
    },
    certifications: [
      {
        name: "Certification Name",
        location: "City/Country",
        year: "Year",
      },
      {
        name: "Fellowship/Board Certification",
      },
    ],
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
  },
  {
    id: "2",
    name: "Dr. Jane",
    surname: "Doe",
    specialization: "Cardiology",
    rating: 4.9,
    image: "/doc2.png",
    yearsOfExperience: 12,
    availability: ["M", "W", "F"],
    qualifications: {
      degree: "MD",
      fieldOfStudy: "Cardiology",
      university: "Harvard Medical School",
      achievement: "Summa Cum Laude",
      postgraduate: {
        degree: "Fellowship",
        fieldOfStudy: "Interventional Cardiology",
        university: "Mayo Clinic",
      },
    },
    certifications: [
      {
        name: "Board Certified Cardiologist",
        location: "USA",
        year: "2015",
      },
    ],
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
  },
  {
    id: "3",
    name: "Dr. John",
    surname: "Smith",
    specialization: "Pediatrics",
    rating: 4.7,
    image: "/doc3.png",
    yearsOfExperience: 10,
    availability: ["T", "W", "T", "F"],
    qualifications: {
      degree: "MD",
      fieldOfStudy: "Pediatrics",
      university: "Johns Hopkins University",
      achievement: "Honors",
      postgraduate: {
        degree: "Residency",
        fieldOfStudy: "Pediatric Medicine",
        university: "Children's Hospital Boston",
      },
    },
    certifications: [
      {
        name: "Board Certified Pediatrician",
        location: "USA",
        year: "2018",
      },
    ],
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
  },
  {
    id: "4",
    name: "Dr. Emily",
    surname: "Johnson",
    specialization: "Orthopedics",
    rating: 4.6,
    image: "/doc4.png",
    yearsOfExperience: 18,
    availability: ["M", "T", "W", "T", "F", "S"],
    qualifications: {
      degree: "MD",
      fieldOfStudy: "Orthopedic Surgery",
      university: "Stanford University",
      achievement: "Distinction",
      postgraduate: {
        degree: "Fellowship",
        fieldOfStudy: "Sports Medicine",
        university: "Hospital for Special Surgery",
      },
    },
    certifications: [
      {
        name: "Board Certified Orthopedic Surgeon",
        location: "USA",
        year: "2012",
      },
    ],
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
  },
  {
    id: "5",
    name: "Dr. Michael",
    surname: "Brown",
    specialization: "Dermatology",
    rating: 4.8,
    image: "/doc1.png",
    yearsOfExperience: 8,
    availability: ["M", "W", "F", "S"],
    qualifications: {
      degree: "MD",
      fieldOfStudy: "Dermatology",
      university: "Yale School of Medicine",
      achievement: "High Honors",
      postgraduate: {
        degree: "Fellowship",
        fieldOfStudy: "Cosmetic Dermatology",
        university: "NYU Langone Health",
      },
    },
    certifications: [
      {
        name: "Board Certified Dermatologist",
        location: "USA",
        year: "2020",
      },
    ],
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
  },
  {
    id: "6",
    name: "Dr. Name",
    surname: "Surname",
    specialization: "Neurology",
    rating: 4.8,
    image: "/doc2.png",
    yearsOfExperience: 15,
    availability: ["M", "T", "W", "T", "F"],
    qualifications: {
      degree: "Degree Title",
      fieldOfStudy: "Field of Study",
      university: "University Name",
      achievement: "Grade/Award",
      postgraduate: {
        degree: "Postgraduate Degree",
        fieldOfStudy: "Field of Study",
        university: "University Name",
      },
    },
    certifications: [
      {
        name: "Certification Name",
        location: "City/Country",
        year: "Year",
      },
      {
        name: "Fellowship/Board Certification",
      },
    ],
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
  },
  {
    id: "7",
    name: "Dr. Name",
    surname: "Surname",
    specialization: "Neurology",
    rating: 4.8,
    image: "/doc4.png",
    yearsOfExperience: 15,
    availability: ["M", "T", "W", "T", "F"],
    qualifications: {
      degree: "Degree Title",
      fieldOfStudy: "Field of Study",
      university: "University Name",
      achievement: "Grade/Award",
      postgraduate: {
        degree: "Postgraduate Degree",
        fieldOfStudy: "Field of Study",
        university: "University Name",
      },
    },
    certifications: [
      {
        name: "Certification Name",
        location: "City/Country",
        year: "Year",
      },
      {
        name: "Fellowship/Board Certification",
      },
    ],
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
  },
];

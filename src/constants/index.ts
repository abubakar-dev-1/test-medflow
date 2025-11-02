/**
 * Application-wide constants
 */

export const SITE_CONFIG = {
  name: "Company Name",
  title: "Landing Page",
  description: "Professional landing page built with Next.js 15, TypeScript, and Tailwind CSS",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/company",
    github: "https://github.com/company",
    linkedin: "https://linkedin.com/company/company",
  },
} as const;

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
} as const;

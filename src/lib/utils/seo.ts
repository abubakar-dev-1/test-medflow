/**
 * SEO utility functions and metadata generation
 */

import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description = SITE_CONFIG.description,
  keywords = [],
  ogImage = SITE_CONFIG.ogImage,
  canonical,
  noIndex = false,
}: GenerateMetadataProps = {}): Metadata {
  const pageTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name;
  const url = canonical ? `${SITE_CONFIG.url}${canonical}` : SITE_CONFIG.url;

  return {
    title: pageTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: pageTitle,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [ogImage],
      creator: "@company",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateStructuredData(type: "Organization" | "WebSite") {
  const baseData = {
    "@context": "https://schema.org",
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
  };

  if (type === "Organization") {
    return {
      ...baseData,
      "@type": "Organization",
      logo: `${SITE_CONFIG.url}/logo.png`,
      sameAs: Object.values(SITE_CONFIG.links),
    };
  }

  return {
    ...baseData,
    "@type": "WebSite",
    description: SITE_CONFIG.description,
  };
}

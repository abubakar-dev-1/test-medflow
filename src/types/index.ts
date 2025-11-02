/**
 * Common type definitions for the application
 */

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

export interface LinkItem {
  href: string;
  label: string;
  external?: boolean;
}

export interface NavItem extends LinkItem {
  icon?: React.ComponentType<{ className?: string }>;
}

/**
 * Header component matching MedFlo design
 */

"use client";

import Link from "next/link";
import { Moon, Bell, User } from "lucide-react";
import { Container } from "@/components/common";

export function Header() {
  return (
    <header className="w-full bg-[#DEE3EB]">
      <Container size="full">
        <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 md:h-20 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary md:text-[32px]">MedFlo</span>
          </Link>

          {/* Right Icons */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Dark Mode Toggle */}
            <button
              className="text-primary transition-colors hover:text-primary"
              aria-label="Toggle dark mode"
            >
              <Moon className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            {/* Notifications */}
            <button
              className="text-primary transition-colors hover:text-primary"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            {/* User Profile */}
            <button
              className="text-primary transition-colors hover:text-primary"
              aria-label="User profile"
            >
              <User className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

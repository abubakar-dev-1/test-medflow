/**
 * Header component matching MedFlo design
 */

"use client";

import Link from "next/link";
import { Moon, Bell, User } from "lucide-react";
import { Container } from "@/components/common";

export function Header() {
  return (
    <header className=" w-full  bg-[#DEE3EB]">
      <Container size="full">
        <nav className="flex h-20 items-center justify-between px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-[32px] font-bold text-primary">MedFlo</span>
          </Link>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            {/* Dark Mode Toggle */}
            <button
              className="text-primary transition-colors hover:text-primary"
              aria-label="Toggle dark mode"
            >
              <Moon size={24} />
            </button>

            {/* Notifications */}
            <button
              className="text-primary transition-colors hover:text-primary"
              aria-label="Notifications"
            >
              <Bell size={24} />
            </button>

            {/* User Profile */}
            <button
              className="text-primary transition-colors hover:text-primary"
              aria-label="User profile"
            >
              <User size={24} />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

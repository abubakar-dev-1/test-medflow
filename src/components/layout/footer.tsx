/**
 * Footer component matching MedFlo design
 */

import Link from "next/link";
import { Linkedin, Twitter, Youtube, Mail } from "lucide-react";
import { Container } from "@/components/common";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#E8EDEF] py-8 md:py-12">
      <Container size="full">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 md:flex-row md:justify-between md:px-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-3 md:space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-primary md:text-2xl">MedFlo</span>
            </Link>
            <div className="space-y-1 text-sm font-semibold text-foreground md:space-y-2 md:text-[17px]">
              <p>Lorem Ipsum, 235 Simply,</p>
              <p>printing, Psn 309 309</p>
            </div>
            <div className="space-y-1 text-sm font-semibold text-foreground md:text-[17px]">
              <p>info@medflo.com</p>
              <p>+966 00000000</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-2 lg:gap-8">
          {/* Quick Access */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-primary md:mb-4 md:text-[22px]">Quick Access</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="#" className="text-sm text-foreground hover:text-primary md:text-[17px]">
                  Book Appointments
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground hover:text-primary md:text-[17px]">
                  My Appointments
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground hover:text-primary md:text-[17px]">
                  Family Members
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground hover:text-primary md:text-[17px]">
                  Notifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-primary md:mb-4 md:text-[22px]">Account</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="#" className="text-sm text-foreground hover:text-primary md:text-[17px]">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground hover:text-primary md:text-[17px]">
                  Manage Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Clinic Services */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-primary md:mb-4 md:text-[22px]">Clinic Services</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="#" className="text-sm text-foreground hover:text-primary md:text-[17px]">
                  Promotions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground hover:text-primary md:text-[17px]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground hover:text-primary md:text-[17px]">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Policies */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-primary md:mb-4 md:text-[22px]">Support & Policies</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="#" className="text-sm text-foreground hover:text-primary md:text-[17px]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground hover:text-primary md:text-[17px]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground hover:text-primary md:text-[17px]">
                  Support
                </Link>
              </li>
              <li>
                  <Link href="#" className="text-sm text-foreground hover:text-primary md:text-[17px]">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        </div>

        {/* Bottom Section */}
        <div className="mx-auto mt-8 flex max-w-[1440px] flex-col items-center justify-between gap-4 border-t border-gray-300 px-4 pt-6 md:mt-12 md:flex-row md:px-8 md:pt-8">
          <p className="text-xs text-foreground md:text-sm">© MedFlo {currentYear}</p>

          <div className="flex items-center gap-3 text-xs text-foreground md:gap-4 md:text-sm">
            <Link href="#" className="hover:text-primary">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary">
              Terms & Conditions
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 md:gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-primary"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a
              href="mailto:info@medflo.com"
              className="text-foreground transition-colors hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-primary"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

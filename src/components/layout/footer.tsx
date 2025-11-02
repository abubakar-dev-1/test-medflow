/**
 * Footer component matching MedFlo design
 */

import Link from "next/link";
import { Linkedin, Twitter, Youtube, Mail } from "lucide-react";
import { Container } from "@/components/common";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#E8EDEF] py-12">
      <Container size="full">
        <div className=" flex justify-between px-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-primary">MedFlo</span>
            </Link>
            <div className="space-y-2 text-[17px] font-semibold text-foreground">
              <p>Lorem Ipsum, 235 Simply,</p>
              <p>printing, Psn 309 309</p>
            </div>
            <div className="space-y-1 text-[17px] font-semibold text-foreground">
              <p>info@medflo.com</p>
              <p>+966 00000000</p>
            </div>
          </div>
          <div  className="grid grid-cols-4 gap-2">
          {/* Quick Access */}
          <div>
            <h3 className="mb-4 text-[22px] font-bold  text-primary">Quick Access</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/book" className="text-[17px] text-foreground hover:text-primary">
                  Book Appointments
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="text-[17px] text-foreground hover:text-primary">
                  My Appointments
                </Link>
              </li>
              <li>
                <Link href="/family" className="text-[17px] text-foreground hover:text-primary">
                  Family Members
                </Link>
              </li>
              <li>
                <Link href="/notifications" className="text-[17px] text-foreground hover:text-primary">
                  Notifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="mb-4 text-[22px] font-bold text-primary">Account</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/account" className="text-[17px] text-foreground hover:text-primary">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-[17px] text-foreground hover:text-primary">
                  Manage Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Clinic Services */}
          <div>
            <h3 className="mb-4 text-[22px] font-bold  text-primary">Clinic Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/promotions" className="text-[17px] text-foreground hover:text-primary">
                  Promotions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[17px] text-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[17px] text-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Policies */}
          <div>
            <h3 className="mb-4 text-[22px] font-bold text-primary">Support & Policies</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-[17px] text-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[17px] text-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-[17px] text-foreground hover:text-primary">
                  Support
                </Link>
              </li>
              <li>
                  <Link href="/faq" className="text-[17px] text-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 px-18 flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
          <p className="text-sm text-foreground">© MedFlo {currentYear}</p>

          <div className="flex items-center gap-4 text-sm text-foreground">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-primary">
              Terms & Conditions
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-primary"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:info@medflo.com"
              className="text-foreground transition-colors hover:text-primary"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-primary"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

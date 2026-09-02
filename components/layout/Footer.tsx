import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { categories } from "@/data/products";

export default function Footer() {
  return (
    <footer className="text-white mt-12" style={{ backgroundColor: "var(--navy)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Filters / Category links */}
          <div>
            <h3 className="font-semibold text-base mb-3">Filters</h3>
            <div className="flex flex-wrap gap-2 text-sm text-gray-300">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={cat === "All" ? "/" : `/?category=${cat}`}
                  className="hover:text-white transition-colors"
                  id={`footer-cat-${cat.toLowerCase()}`}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-semibold text-base mb-3">About Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white transition-colors" id="footer-about-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors" id="footer-contact-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-base mb-3">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                id="footer-facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                id="footer-twitter"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                id="footer-instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-sm text-gray-400">
          © 2024 American. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

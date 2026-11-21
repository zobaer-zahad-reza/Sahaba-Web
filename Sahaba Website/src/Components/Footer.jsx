import React from "react";
import { Link } from "react-router";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Collections", path: "/collections" },
    { name: "About Us", path: "/about" },
  ];

  const services = [
    "Online Booking",
    "In-Store Shopping",
    "Nationwide Delivery",
    "Cash on Delivery",
  ];

  return (
    <footer className="bg-[#f6ede8] text-[#4a3931] border-t border-[#e3d2c8]">
      {/* Main Footer Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-20 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand Logo & Socials */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/logo.png"
                alt="Sahaba"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-xs leading-relaxed text-[#5c483e] max-w-xs">
              Timeless elegance and curated modest fashion crafted for the
              modern woman. Experience effortless style with nationwide delivery
              across Bangladesh.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/sahaba.bd.shop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sahaba Facebook"
                className="p-2.5 rounded-full bg-[#e8d8ce]/60 text-[#2c221e] hover:bg-[#8c5234] hover:text-[#f6ede8] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@sahaba.bd?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sahaba TikTok"
                className="p-2.5 rounded-full bg-[#e8d8ce]/60 text-[#2c221e] hover:bg-[#8c5234] hover:text-[#f6ede8] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/8801601890404"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sahaba WhatsApp"
                className="p-2.5 rounded-full bg-[#e8d8ce]/60 text-[#2c221e] hover:bg-[#8c5234] hover:text-[#f6ede8] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.344 5l-1.406 5.156 5.281-1.391c1.469.797 3.109 1.219 4.75 1.219 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.813 14.125c-.25.703-1.438 1.344-2 1.422-.516.078-1.188.109-1.922-.125-.453-.141-1.031-.344-1.766-.656-3.109-1.344-5.141-4.484-5.297-4.688-.156-.203-1.266-1.688-1.266-3.219 0-1.531.797-2.281 1.078-2.594.281-.313.625-.391.828-.391.203 0 .422.016.609.016.188 0 .453-.078.703.531.25.609.859 2.094.938 2.25.078.156.125.344.031.547-.094.203-.156.344-.313.516-.156.172-.328.391-.469.531-.156.156-.313.328-.141.641.172.313.781 1.297 1.688 2.094 1.156 1.031 2.141 1.359 2.453 1.516.313.156.5.125.688-.078.188-.203.781-.906.984-1.219.203-.313.406-.266.688-.156.281.109 1.797.844 2.109 1 .313.156.516.234.594.359.078.125.078.734-.172 1.438z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2c221e] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-xs tracking-wider uppercase text-[#5c483e]">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1 hover:text-[#8c5234] transition-colors duration-300"
                  >
                    <span className="relative py-0.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-full after:bg-[#8c5234] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                      {link.name}
                    </span>
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services & Delivery */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2c221e] mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-xs text-[#5c483e]">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8c5234]" />
                  {service}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[11px] leading-relaxed text-[#7a6357]">
              Delivering to Dhaka, Gazipur, Chittagong, Cox&apos;s Bazar,
              Chandpur, Jessore &amp; all over Bangladesh.
            </p>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2c221e] mb-5">
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-xs text-[#5c483e]">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-[#8c5234] shrink-0 mt-0.5"
                  strokeWidth={1.8}
                />
                <span>
                  1127/16 Nobinbag, Purba Jurain, Dhaka-1204, Bangladesh
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone
                  size={16}
                  className="text-[#8c5234] shrink-0"
                  strokeWidth={1.8}
                />
                <a
                  href="tel:+8801601890404"
                  className="hover:text-[#8c5234] transition-colors duration-200"
                >
                  +880 1601-890404
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail
                  size={16}
                  className="text-[#8c5234] shrink-0"
                  strokeWidth={1.8}
                />
                <a
                  href="mailto:sahababdshop@gmail.com"
                  className="hover:text-[#8c5234] transition-colors duration-200 break-all"
                >
                  sahababdshop@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Clock
                  size={16}
                  className="text-[#8c5234] shrink-0"
                  strokeWidth={1.8}
                />
                <span>Always Open (Online &amp; Support)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#2c221e] text-[#f6ede8]/90">
        <div className="mx-auto px-4 sm:px-6 lg:px-20 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] tracking-wider">
          <p>© {new Date().getFullYear()} SAHABA. All rights reserved.</p>
          <div className="flex items-center gap-5 text-[#f6ede8]/75">
            <Link
              to="/privacy-policy"
              className="hover:text-[#f6ede8] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-[#f6ede8] transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

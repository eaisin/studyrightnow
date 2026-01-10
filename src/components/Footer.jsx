import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Youtube,
  Send, // Used for Telegram
  Music, // Used for TikTok
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Grid: 1 col on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-start">
          {/* --- COLUMN 1 (Desktop: Left | Mobile: 2nd) --- */}
          {/* Quick Links */}
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* --- COLUMN 2 (Desktop: Middle | Mobile: Top) --- */}
          {/* Brand + Social */}
          <div className="order-1 md:order-2 flex flex-col items-center text-center space-y-6">
            {/* Logo/Brand */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white tracking-wide">
                <span className="text-red-600">Study</span>RightNow
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                Software Engineer ကောင်း တစ်ယောက်ဖြစ်ဖို့ StudyRightNow မှာ
                စတင်လိုက်ပါ။
              </p>
            </div>

            {/* Social Icons (Lucide React Only) */}
            <div className="flex gap-4 justify-center mt-4">
              {/* Facebook */}
              <SocialIcon
                href="https://facebook.com"
                icon={<Facebook size={18} />}
              />

              {/* Telegram (Using 'Send' icon as alternative) */}
              <SocialIcon href="https://t.me" icon={<Send size={18} />} />

              {/* YouTube */}
              <SocialIcon
                href="https://youtube.com"
                icon={<Youtube size={18} />}
              />

              {/* TikTok (Using 'Music' icon as alternative) */}
              <SocialIcon
                href="https://tiktok.com"
                icon={<Music size={18} />}
              />
            </div>
          </div>

          {/* --- COLUMN 3 (Desktop: Right | Mobile: 3rd) --- */}
          {/* Contact */}
          <div className="order-3 md:order-3 flex flex-col items-center md:items-end text-center md:text-right">
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm justify-center md:justify-end">
                <Mail size={16} className="text-red-500" />
                hello@srn.com
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm justify-center md:justify-end">
                <Phone size={16} className="text-red-500" />
                +95 9 123 456 789
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm justify-center md:justify-end">
                <MapPin size={16} className="text-red-500" />
                Mandalay, Myanmar
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} StudyRightNow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Sub-Components ---

const SocialIcon = ({ icon, href = "#" }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300 border border-white/10 hover:border-red-500"
  >
    {icon}
  </a>
);

export default Footer;

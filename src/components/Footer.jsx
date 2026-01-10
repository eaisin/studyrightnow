import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaYoutube,
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-start">
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm cursor-default">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/books"
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                >
                  BOOKS
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                >
                  COURSES
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                >
                  ABOUT
                </Link>
              </li>
            </ul>
          </div>

          <div className="order-1 md:order-2 flex flex-col items-center text-center space-y-6">
            <div className="space-y-4 cursor-default">
              <h2 className="text-3xl font-bold text-white tracking-wide">
                <span className="text-red-600">Study</span>RightNow
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                Software Engineer ကောင်း တစ်ယောက်ဖြစ်ဖို့ StudyRightNow မှာ
                စတင်လိုက်ပါ။
              </p>
            </div>

            <div className="flex gap-4 justify-center mt-4">
              <SocialIcon
                href="https://www.facebook.com/SRNMDY"
                icon={<FaFacebookF size={18} />}
              />

              <SocialIcon
                href="https://t.me/+Xwmd5Nm3yjVjYzg1"
                icon={<FaTelegramPlane size={18} />}
              />

              <SocialIcon
                href="https://www.youtube.com/@myatmonayeSRN"
                icon={<FaYoutube size={18} />}
              />

              <SocialIcon
                href="https://www.tiktok.com/@studyrightnowmm?is_from_webapp=1&sender_device=pc"
                icon={<FaTiktok size={18} />}
              />
            </div>
          </div>

          <div className="order-3 md:order-3 flex flex-col items-center md:items-end text-center md:text-right">
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm cursor-default">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm justify-center md:justify-end group">
                <Mail size={16} className="text-red-500" />
                <a
                  href="mailto:info@studyrightnow-mdy.com"
                  className="hover:text-white transition-colors"
                >
                  info@studyrightnow-mdy.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm justify-center md:justify-end">
                <Phone size={16} className="text-red-500" />
                <div className="flex gap-2">
                  <a
                    href="tel:09779554282"
                    className="hover:text-white transition-colors"
                  >
                    09 77955 4282
                  </a>
                  <span>,</span>
                  <a
                    href="tel:09966809800"
                    className="hover:text-white transition-colors"
                  >
                    09 96680 9800
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm justify-center md:justify-end cursor-default">
                <MapPin size={16} className="text-red-500" />
                <span>Corner of 68*108, Mandalay, Myanmar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} StudyRightNow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

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

import React from "react";
import Image from "next/image";
import { plusJakartaSansGFont } from "@/utils/font";
import { cn } from "@/utils";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div>
              <Image
                src="/logo.svg"
                alt="Logo"
                width={150}
                height={60}
                className="object-contain mb-4"
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                Empowering creativity with cutting-edge AI technology. Transform
                your imagination into stunning visuals with our advanced image
                generation platform.
              </p>
            </div>

            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3
              className={cn(
                "text-xl font-bold text-white mb-6",
                plusJakartaSansGFont.className
              )}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Our Services",
                "Portfolio",
                "Pricing",
                "Blog",
                "Contact",
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className={cn(
                "text-xl font-bold text-white mb-6",
                plusJakartaSansGFont.className
              )}
            >
              AI Features
            </h3>
            <ul className="space-y-3">
              {[
                "Text to Image",
                "Image Enhancement",
                "Style Transfer",
                "Background Removal",
                "Art Generation",
                "Custom Models",
              ].map((feature, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {feature}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3
              className={cn(
                "text-xl font-bold text-white mb-6",
                plusJakartaSansGFont.className
              )}
            >
              Get In Touch
            </h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 AI Street, Tech City, TC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  hello@optpdoce.ai
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-white">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-orange-500 text-white placeholder-gray-400"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-r-lg hover:from-orange-600 hover:to-red-600 transition-colors duration-300">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100K+", label: "Happy Customers" },
              { number: "5M+", label: "Images Generated" },
              { number: "50+", label: "AI Models" },
              { number: "99.9%", label: "Uptime" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div
                  className={cn(
                    "text-3xl font-bold text-gradient",
                    plusJakartaSansGFont.className
                  )}
                >
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 bg-black/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Optpdoce AI. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

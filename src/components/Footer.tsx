import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Bio */}
          <div className="lg:col-span-1">
            <h3 className="font-playfair text-2xl font-bold mb-4">Dr. S. G. Biju</h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Internationally respected Homoeopathic physician, educator, author, and humanitarian committed to healing, teaching, and inspiring communities worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors text-white">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors text-white">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors text-white">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-bold text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-300 hover:text-secondary transition-colors text-sm">About Dr. Biju</Link></li>
              <li><Link to="/achievements" className="text-gray-300 hover:text-secondary transition-colors text-sm">Achievements</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-secondary transition-colors text-sm">Media Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-sans font-bold text-lg mb-6 tracking-wide">Resources</h4>
            <ul className="space-y-4">
              <li><Link to="/books" className="text-gray-300 hover:text-secondary transition-colors text-sm">Books & Publications</Link></li>
              <li><Link to="/seminars" className="text-gray-300 hover:text-secondary transition-colors text-sm">Seminars & Training</Link></li>
              <li><Link to="/media" className="text-gray-300 hover:text-secondary transition-colors text-sm">Press & Media</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors text-sm">Speaking Requests</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-bold text-lg mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-secondary shrink-0 mt-0.5" />
                <span>The Homeopathic Multi Specialty Hospital Pvt. Ltd.,<br />Changanacherry, Kerala</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-secondary shrink-0" />
                <a href="tel:+914812412233" className="hover:text-white transition-colors">(+91) 481-2412233</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-secondary shrink-0" />
                <a href="mailto:drbijugnair@gmail.com" className="hover:text-white transition-colors">drbijugnair@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dr. S. G. Biju. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link to="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useCallback } from 'react';
import { Phone, Mail } from 'lucide-react';
import { FOOTER_LINKS, CONTACT_INFO } from '../../constants/data';

const Footer = () => {
  const handleLinkClick = useCallback((link) => {
    // Navigation logic - can be replaced with router navigation
    // eslint-disable-next-line no-console
    if (process.env.NODE_ENV === 'development') {
      console.log(`Navigating to: ${link}`);
    }
  }, []);

  return (
    <footer className="bg-white border-t border-gray-100 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Footer Links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6" aria-label="Footer navigation">
          {FOOTER_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleLinkClick(link)}
              className="text-sm text-gray-600 hover:text-rose-600 transition-colors"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-6 text-sm text-gray-600">
          <span className="font-medium">Talking to us is easy:</span>
          <a 
            href={`tel:${CONTACT_INFO.ukPhone.replace(/\s/g, '')}`}
            className="flex items-center space-x-2 hover:text-rose-600 transition-colors"
          >
            <Phone size={14} aria-hidden="true" />
            <span>{CONTACT_INFO.ukPhone} UK</span>
          </a>
          <a 
            href={`tel:${CONTACT_INFO.inPhone.replace(/\s/g, '')}`}
            className="flex items-center space-x-2 hover:text-rose-600 transition-colors"
          >
            <Phone size={14} aria-hidden="true" />
            <span>{CONTACT_INFO.inPhone} IN</span>
          </a>
          <a 
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center space-x-2 hover:text-rose-600 transition-colors"
          >
            <Mail size={14} aria-hidden="true" />
            <span>{CONTACT_INFO.email}</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-rose-500">
            Crafted by AUN Tech Consulting Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);


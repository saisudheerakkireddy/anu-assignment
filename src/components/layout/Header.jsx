import React, { useState, useCallback, useMemo } from 'react';
import { Users, Menu, X } from 'lucide-react';
import PropTypes from 'prop-types';
import { NAV_ITEMS } from '../../constants/data';

/**
 * Parses a navigation item name into prefix and suffix parts
 * @param {string} name - The full nav item name (e.g., "ApplyUniNow")
 * @param {string} existingDataKey - Optional existing dataKey from constants
 * @returns {{ prefix: string, suffix: string, dataKey: string }}
 */
const parseNavItemName = (name, existingDataKey) => {
  const prefix = 'Apply';
  const suffix = name.replace('Apply', '');
  const dataKey = existingDataKey || suffix.toLowerCase();
  return { prefix, suffix, dataKey };
};

const Header = ({ activeNav, onNavChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogoClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavClick = useCallback((name) => {
    onNavChange(name);
    setMobileMenuOpen(false);
  }, [onNavChange]);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  // Memoize parsed nav items to avoid recalculating on each render
  const parsedNavItems = useMemo(() => 
    NAV_ITEMS.map(item => ({
      ...item,
      ...parseNavItemName(item.name, item.dataKey)
    })),
    []
  );

  const renderNavButton = useCallback((item, isMobile = false) => {
    const { name, prefix, suffix, dataKey } = item;
    const isActive = activeNav === name;
    
    // Accessible label for screen readers
    const ariaLabel = `${prefix} ${suffix}${isActive ? ' (current page)' : ''}`;

    if (isMobile) {
      return (
        <button
          key={name}
          onClick={() => handleNavClick(name)}
          data-key={dataKey}
          data-gradient-applied="true"
          aria-label={ariaLabel}
          aria-current={isActive ? 'page' : undefined}
          className={`menu-item w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            isActive ? 'bg-rose-50' : 'hover:bg-gray-50'
          }`}
        >
          <span className={`menu-prefix ${isActive ? 'active text-rose-600' : 'text-gray-600'}`}>
            {prefix}
          </span>
          <span className="menu-suffix gradient-text">{suffix}</span>
        </button>
      );
    }

    return (
      <button
        key={name}
        onClick={() => handleNavClick(name)}
        data-key={dataKey}
        data-gradient-applied="true"
        aria-label={ariaLabel}
        aria-current={isActive ? 'page' : undefined}
        className={`nav-item menu-item text-sm font-medium transition-colors duration-200 ${
          isActive ? 'active' : 'hover:opacity-80'
        }`}
      >
        <span className={`menu-prefix ${isActive ? 'active text-rose-600' : 'text-gray-600'}`}>
          {prefix}
        </span>
        <span className="menu-suffix gradient-text">{suffix}</span>
      </button>
    );
  }, [activeNav, handleNavClick]);

  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={handleLogoClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleLogoClick()}
            aria-label="Go to top of page"
          >
            <img 
              src="/Header_ANU.png" 
              alt="ApplyUniNow Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav 
            className="main-nav hidden md:flex items-center space-x-8" 
            aria-label="Main navigation"
          >
            {parsedNavItems.map((item) => renderNavButton(item))}
          </nav>

          {/* Profile Icon & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button 
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="User profile"
            >
              <Users size={18} className="text-gray-600" aria-hidden="true" />
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav 
          id="mobile-menu"
          className="md:hidden bg-white border-t border-gray-100 py-4"
          aria-label="Mobile navigation"
        >
          <div className="px-4 space-y-2">
            {parsedNavItems.map((item) => renderNavButton(item, true))}
          </div>
        </nav>
      )}
    </header>
  );
};

Header.propTypes = {
  activeNav: PropTypes.string.isRequired,
  onNavChange: PropTypes.func.isRequired
};

export default React.memo(Header);

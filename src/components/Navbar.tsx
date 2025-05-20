
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'WITAMY', path: '/' },
    { name: 'O NAS', path: '/about' },
    { name: 'USŁUGI', path: '/services' },
    { name: 'PROJEKTY', path: '/projects' },
    { name: 'BLOG', path: '/blog' },
    { name: 'KONTAKT', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-darkBg/95 backdrop-blur-md py-3' : 'py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-orange'
                  : 'text-white hover:text-orange/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link to="/contact" className="hidden md:block">
          <Button className="bg-orange hover:bg-orange-dark text-white rounded-md font-bold">
            SKONTAKTUJ SIĘ!
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-darkBg/95 backdrop-blur-md transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0 overflow-hidden'
        }`}
      >
        <div className="container flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium ${
                location.pathname === link.path
                  ? 'text-orange'
                  : 'text-white hover:text-orange/80'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            SKONTAKTUJ SIĘ!
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

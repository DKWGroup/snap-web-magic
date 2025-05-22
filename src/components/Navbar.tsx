import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'WITAMY', path: '/' },
    { name: 'O NAS', path: '/about' },
    { name: 'USŁUGI', path: '/services' },
    { name: 'PROJEKTY', path: '/projects' },
    { name: 'CASE STUDIES', path: '/case-studies' },
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
        isScrolled ? 'bg-darkBg/50 backdrop-blur-md py-3 shadow-lg' : 'py-5'
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <Logo />

        {/* Desktop Navigation - Modern styled with NavigationMenu */}
        <div className="hidden md:flex items-center space-x-4">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <Link to={link.path}>
                    <NavigationMenuLink 
                      className={cn(
                        "px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-orange hover:underline decoration-orange decoration-2 underline-offset-8",
                        location.pathname === link.path 
                          ? "text-orange underline decoration-orange decoration-2 underline-offset-8" 
                          : "text-white"
                      )}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <Link to="/contact">
            <Button className="bg-orange hover:bg-orange-dark text-white rounded-md font-bold transition-all duration-300 shadow-lg hover:shadow-orange/20">
              SKONTAKTUJ SIĘ!
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white rounded-full p-2 hover:bg-darkCard transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - with modern slide-in animation */}
      <div
        className={`md:hidden fixed top-[60px] right-0 h-screen w-3/4 bg-darkBg/98 backdrop-blur-md shadow-xl transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-4 p-6 pt-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-3 text-sm font-medium border-l-2 transition-all ${
                location.pathname === link.path
                  ? 'text-orange border-orange'
                  : 'text-white border-transparent hover:border-orange/50 hover:text-orange/80'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6">
            <Link
              to="/contact"
              className="w-full btn-primary text-center block py-3 rounded-md bg-orange text-white font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SKONTAKTUJ SIĘ!
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

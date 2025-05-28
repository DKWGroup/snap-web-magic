
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
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/o-nas' },
    { name: t('nav.services'), path: '/uslugi' },
    { name: t('nav.projects'), path: '/projekty' },
    { name: t('nav.caseStudies'), path: '/case-studies' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.contact'), path: '/kontakt' },
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

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-darkBg/95 py-3' : 'py-5'
      } ${
        isMobileMenuOpen ? 'bg-darkBg' : 'backdrop-blur-md'
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center space-x-4">
          <NavigationMenu className="hidden xl:flex">
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
          <Link to="/kontakt">
            <Button className="bg-orange hover:bg-orange-dark text-white rounded-md font-bold transition-all duration-300 shadow-lg hover:shadow-orange/20">
              {t('nav.cta')}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-white rounded-full p-2 hover:bg-darkCard transition-colors z-60"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Improved animations */}
      <div
        className={`xl:hidden fixed inset-0 bg-darkBg/98 backdrop-blur-lg transition-all duration-500 ease-in-out z-40 ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } ${
          isScrolled ? 'top-[88px]' : 'top-[104px]'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Items Container with unified animation */}
          <div className={`flex-1 overflow-y-auto transition-all duration-700 delay-200 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex flex-col space-y-2 p-6 pt-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-6 py-4 text-lg font-medium border-l-4 transition-all duration-300 rounded-r-lg transform ${
                    isMobileMenuOpen 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-4 opacity-0'
                  } ${
                    location.pathname === link.path
                      ? 'text-orange border-orange bg-orange/10'
                      : 'text-white border-transparent hover:border-orange/50 hover:text-orange/80 hover:bg-orange/5'
                  }`}
                  style={{ 
                    transitionDelay: isMobileMenuOpen ? `${300 + (index * 50)}ms` : '0ms' 
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* CTA Button with unified animation */}
          <div className={`p-6 border-t border-gray-800 transition-all duration-700 delay-200 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Link
              to="/kontakt"
              className="w-full btn-primary text-center block py-4 rounded-lg bg-orange text-white font-bold text-lg hover:bg-orange-dark transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.cta')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

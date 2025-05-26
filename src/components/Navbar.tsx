
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
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
  const { language, t } = useLanguage();

  const getNavLinks = () => {
    const basePrefix = language === 'en' ? '/en' : '';
    
    if (language === 'en') {
      return [
        { name: t('nav.home'), path: '/en' },
        { name: t('nav.about'), path: '/en/about' },
        { name: t('nav.services'), path: '/en/services' },
        { name: t('nav.projects'), path: '/en/projects' },
        { name: t('nav.caseStudies'), path: '/en/case-studies' },
        { name: t('nav.blog'), path: '/en/blog' },
        { name: t('nav.contact'), path: '/en/contact' },
      ];
    } else {
      return [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.about'), path: '/o-nas' },
        { name: t('nav.services'), path: '/uslugi' },
        { name: t('nav.projects'), path: '/projekty' },
        { name: t('nav.caseStudies'), path: '/case-studies' },
        { name: t('nav.blog'), path: '/blog' },
        { name: t('nav.contact'), path: '/kontakt' },
      ];
    }
  };

  const navLinks = getNavLinks();

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

  const getContactPath = () => {
    return language === 'en' ? '/en/contact' : '/kontakt';
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-darkBg/50 py-3' : 'py-5'
      } ${
        isMobileMenuOpen ? 'bg-darkBg' : 'backdrop-blur-md'
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <Logo />

        {/* Desktop Navigation - Modern styled with NavigationMenu */}
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

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* CTA Button */}
          <Link to={getContactPath()}>
            <Button className="bg-orange hover:bg-orange-dark text-white rounded-md font-bold transition-all duration-300 shadow-lg hover:shadow-orange/20">
              {t('nav.cta')}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-white rounded-full p-2 hover:bg-darkCard transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Full screen on all devices with backdrop blur */}
      <div
  className={`xl:hidden fixed right-0 h-screen w-full shadow-xl backdrop-blur-md transition-all duration-300 ease-in-out transform ${
    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
  } ${
    isScrolled ? 'top-[88px]' : 'top-[104px]'
  } `}
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
          
          {/* Language Switcher in Mobile Menu */}
          <div className="px-4 py-3">
            <LanguageSwitcher />
          </div>
          
          <div className="pt-6">
            <Link
              to={getContactPath()}
              className="w-full btn-primary text-center block py-3 rounded-md bg-orange text-white font-bold"
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

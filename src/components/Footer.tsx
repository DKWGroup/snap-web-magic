
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const menuItems = [
    { name: 'Główna', path: '/' },
    { name: 'O nas', path: '/about' },
    { name: 'Usługi', path: '/services' },
    { name: 'Projekty', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Kontakt', path: '/contact' },
  ];

  return (
    <footer className="bg-darkBg text-white pt-12 pb-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
          <div>
            <Logo />
            <div className="mt-6 flex items-center">
              <Mail size={18} className="text-orange mr-2" />
              <a href="mailto:contact.dkwgroup@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                contact.dkwgroup@gmail.com
              </a>
            </div>
            <div className="mt-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <span className="text-gray-400 w-16">Dawid:</span>
                  <Phone size={14} className="text-orange mr-2" />
                  <a href="tel:+48517957875" className="text-gray-300 hover:text-white transition-colors">
                    +48 517 957 875
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-400 w-16">Kamil:</span>
                  <Phone size={14} className="text-orange mr-2" />
                  <a href="tel:+48881046689" className="text-gray-300 hover:text-white transition-colors">
                    +48 881 046 689
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-400 w-16">Wiktoria:</span>
                  <Phone size={14} className="text-orange mr-2" />
                  <a href="tel:+48537168645" className="text-gray-300 hover:text-white transition-colors">
                    +48 537 168 645
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4">Menu</h3>
            <nav className="grid grid-cols-1 gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4">O nas</h3>
            <p className="text-gray-300 mb-4">
              DKW Group to zespół profesjonalistów specjalizujących się w produkcji wideo, marketingu internetowym i tworzeniu angażujących treści, które pomagają markom wyróżnić się na rynku.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} DKW Group. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Polityka prywatności
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Regulamin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

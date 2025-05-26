
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export type Language = 'pl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine language from URL
  const isEnglish = location.pathname.startsWith('/en');
  const [language, setLanguageState] = useState<Language>(isEnglish ? 'en' : 'pl');

  const setLanguage = (lang: Language) => {
    const currentPath = location.pathname;
    let newPath: string;

    if (lang === 'en') {
      // Switch to English
      if (currentPath.startsWith('/en')) {
        newPath = currentPath;
      } else {
        newPath = `/en${currentPath}`;
      }
    } else {
      // Switch to Polish
      if (currentPath.startsWith('/en')) {
        newPath = currentPath.substring(3) || '/';
      } else {
        newPath = currentPath;
      }
    }

    setLanguageState(lang);
    navigate(newPath);
  };

  // Update language when URL changes
  useEffect(() => {
    const isEnglish = location.pathname.startsWith('/en');
    setLanguageState(isEnglish ? 'en' : 'pl');
  }, [location.pathname]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translations object
const translations = {
  pl: {
    // Navigation
    'nav.home': 'WITAMY',
    'nav.about': 'O NAS',
    'nav.services': 'USŁUGI',
    'nav.projects': 'PROJEKTY',
    'nav.caseStudies': 'CASE STUDIES',
    'nav.blog': 'BLOG',
    'nav.contact': 'KONTAKT',
    'nav.cta': 'SKONTAKTUJ SIĘ!',
    
    // Footer
    'footer.menu': 'Menu',
    'footer.about': 'O nas',
    'footer.description': 'DKW Group to zespół profesjonalistów specjalizujących się w produkcji wideo, marketingu internetowym i tworzeniu angażujących treści, które pomagają markom wyróżnić się na rynku.',
    'footer.rights': 'Wszystkie prawa zastrzeżone.',
    
    // Common
    'common.learnMore': 'POZNAJ NAS LEPIEJ',
    'common.startWorking': 'Zacznijmy działać!',
    'common.contact': 'Kontakt',
  },
  en: {
    // Navigation
    'nav.home': 'HOME',
    'nav.about': 'ABOUT',
    'nav.services': 'SERVICES',
    'nav.projects': 'PROJECTS',
    'nav.caseStudies': 'CASE STUDIES',
    'nav.blog': 'BLOG',
    'nav.contact': 'CONTACT',
    'nav.cta': 'GET IN TOUCH!',
    
    // Footer
    'footer.menu': 'Menu',
    'footer.about': 'About us',
    'footer.description': 'DKW Group is a team of professionals specializing in video production, digital marketing and creating engaging content that helps brands stand out in the market.',
    'footer.rights': 'All rights reserved.',
    
    // Common
    'common.learnMore': 'LEARN MORE ABOUT US',
    'common.startWorking': "Let's start working!",
    'common.contact': 'Contact',
  }
};

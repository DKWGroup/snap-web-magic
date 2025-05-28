
import React, { createContext, useContext, ReactNode } from 'react';

export type Language = 'pl';

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
  const language: Language = 'pl';

  const setLanguage = (lang: Language) => {
    // Funkcja nieaktywna - język zawsze ustawiony na polski
    console.log('Language switching disabled - always Polish');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translations object - tylko polski
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
  }
};

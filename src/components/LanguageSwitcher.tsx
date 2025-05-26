
import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-white hover:text-orange hover:bg-darkCard">
          <Languages className="h-4 w-4 mr-2" />
          {language === 'pl' ? 'PL' : 'EN'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-darkCard border-gray-800">
        <DropdownMenuItem 
          onClick={() => setLanguage('pl')}
          className="text-white hover:bg-gray-800 hover:text-orange cursor-pointer"
        >
          🇵🇱 Polski
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('en')}
          className="text-white hover:bg-gray-800 hover:text-orange cursor-pointer"
        >
          🇬🇧 English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;

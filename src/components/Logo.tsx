
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/lovable-uploads/e5f0f18d-b334-47f7-8742-2a1ba474d41e.png" 
        alt="DKW Group Logo" 
        className="h-10 w-auto" 
      />
    </Link>
  );
};

export default Logo;


import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/lovable-uploads/9ea5359e-59c7-416d-8515-9efe3f002674.png" 
        alt="DKW Group Logo" 
        className="h-10 w-auto"
      />
      <div className="text-white font-bold text-xl tracking-wider ml-2">
        <span>DKW</span>
        <span className="text-sm ml-1">GROUP</span>
      </div>
    </Link>
  );
};

export default Logo;


import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="flex items-center">
        <svg 
          width="42" 
          height="42" 
          viewBox="0 0 42 42" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path 
            d="M21 0C9.402 0 0 9.402 0 21C0 32.598 9.402 42 21 42C32.598 42 42 32.598 42 21C42 9.402 32.598 0 21 0ZM21 38C11.611 38 4 30.389 4 21C4 11.611 11.611 4 21 4C30.389 4 38 11.611 38 21C38 30.389 30.389 38 21 38Z" 
            fill="#FF7A00"
          />
          <path 
            d="M28 14C28 18.418 24.418 22 20 22C15.582 22 12 18.418 12 14C12 9.582 15.582 6 20 6C24.418 6 28 9.582 28 14Z" 
            fill="#FF7A00"
          />
          <path 
            d="M34 29C34 32.866 27.732 36 20 36C12.268 36 6 32.866 6 29C6 25.134 12.268 22 20 22C27.732 22 34 25.134 34 29Z" 
            fill="#FF7A00"
          />
        </svg>
        <div className="text-white font-bold text-xl tracking-wider">
          <span>DKW</span>
          <span className="text-sm ml-1">GROUP</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;

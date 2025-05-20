
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-darkBg text-white py-32">
      <div className="container text-center">
        <div className="text-orange text-9xl font-bold mb-4">404</div>
        <h1 className="text-4xl font-bold mb-6">Strona nie została znaleziona</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
          Przepraszamy, ale strona, której szukasz, nie istnieje lub została przeniesiona.
        </p>
        <Link to="/">
          <Button size="lg" className="bg-orange hover:bg-orange-dark text-white px-6">
            WRÓĆ DO STRONY GŁÓWNEJ
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

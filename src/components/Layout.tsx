
import { ReactNode, Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import BackgroundEffect from './BackgroundEffect';

// Lazy load footer for non-critical rendering
const Footer = lazy(() => import('./Footer'));

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-darkBg text-white">
      <BackgroundEffect />
      {!isAdminPage && <Navbar />}
      <main className={!isAdminPage ? "pt-20" : ""}>
        {children}
      </main>
      {!isAdminPage && (
        <Suspense fallback={<div className="h-64 bg-darkBg" />}>
          <Footer />
        </Suspense>
      )}
    </div>
  );
};

export default Layout;

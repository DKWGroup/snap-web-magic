
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundEffect from './BackgroundEffect';

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
      {!isAdminPage && <Footer />}
    </div>
  );
};

export default Layout;


import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const PageLayout = ({ children, title, subtitle }: PageLayoutProps) => {
  const { totalItems } = useCart();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="p-4 md:p-6 flex justify-between items-center border-b-2 border-black bg-white">
        <div className="flex items-center gap-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="w-8 h-8 md:w-12 md:h-12 bg-black text-white flex items-center justify-center rounded-lg">
            <span className="font-bold text-sm md:text-xl">R</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-normal tracking-wider text-black">
            SIN
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 rounded-md">
            <ShoppingBag size={16} className="md:w-5 md:h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 md:w-5 md:h-5 bg-black text-white text-xs font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Page Content */}
      <main className="py-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider text-black">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="w-32 h-1 bg-black mx-auto mt-8"></div>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
};

export default PageLayout;

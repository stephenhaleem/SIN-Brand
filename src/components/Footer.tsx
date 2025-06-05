
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-black text-white border-t border-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold tracking-wider mb-4" style={{ fontFamily: 'serif' }}>
              Rock County
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Discover a curated selection of timeless designs and modern trends crafted to elevate your wardrobe.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-white hover:bg-white hover:text-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 border border-white hover:bg-white hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 border border-white hover:bg-white hover:text-black transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 border border-white hover:bg-white hover:text-black transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#shop" className="hover:text-white transition-colors">Shop</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold text-lg mb-4 tracking-wider">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Rock County. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

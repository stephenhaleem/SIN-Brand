import { Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-black text-white border-t border-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-shadows text-3xl font-bold tracking-wider mb-4">
              SIN REVENGE
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Premium streetwear for those who dare to stand out. Crafted with
              precision, designed for revenge.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white hover:bg-white hover:text-black transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white hover:bg-white hover:text-black transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SIN REVENGE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

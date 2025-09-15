import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // Add this import

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const navigationItems = [
    {
      title: "EXPLORE",
      items: [
        { title: "Brand Story", href: "/brand" },
        { title: "Collections", href: "/collections" },
        { title: "Lookbook", href: "/lookbook" },
        { title: "Behind the Scenes", href: "/behind" },
      ],
    },
    {
      title: "STREETWEAR",
      items: [
        { title: "T-Shirts", href: "/tshirts" },
        { title: "Hoodies", href: "/hoodies" },
        { title: "Jackets", href: "/jackets" },
        { title: "Accessories", href: "/accessories" },
      ],
    },
    {
      title: "COLLECTIONS",
      items: [
        { title: "Latest Drop", href: "/latest" },
        { title: "Limited Edition", href: "/limited" },
        { title: "Classic Series", href: "/classic" },
        { title: "Collaborations", href: "/collabs" },
      ],
    },
    {
      title: "COMMUNITY",
      items: [
        { title: "Events", href: "/events" },
        { title: "Artists", href: "/artists" },
        { title: "Gallery", href: "/gallery" },
        { title: "Street Style", href: "/street-style" },
      ],
    },
    {
      title: "HOW TO STYLE",
      items: [
        { title: "Style Guide", href: "/style-guide" },
        { title: "Mix & Match", href: "/mix-match" },
        { title: "Seasonal Looks", href: "/seasonal" },
        { title: "Care Instructions", href: "/care" },
      ],
    },
  ];

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 rounded-md"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t-2 border-black shadow-lg z-50">
          <div className="max-h-96 overflow-y-auto">
            {navigationItems.map((section) => (
              <div key={section.title} className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full px-4 py-3 text-left font-medium text-black hover:bg-gray-50 flex items-center justify-between"
                >
                  {section.title}
                  {openSection === section.title ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>
                {openSection === section.title && (
                  <div className="bg-gray-50">
                    {section.items.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="block px-6 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;

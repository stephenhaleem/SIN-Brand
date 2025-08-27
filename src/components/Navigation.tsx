import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom"; // 1. Import Link

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

  const handleMouseEnter = (title: string) => {
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="hidden lg:flex relative">
      <div className="flex space-x-1">
        {navigationItems.map((section) => (
          <div
            key={section.title}
            className="relative"
            onMouseEnter={() => handleMouseEnter(section.title)}
            onMouseLeave={handleMouseLeave}
          >
            <button className="bg-transparent hover:bg-gray-100 text-black font-medium tracking-wider text-sm px-4 py-2 rounded-md transition-colors flex items-center gap-1">
              {section.title}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  activeDropdown === section.title ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeDropdown === section.title && (
              <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-md p-0 min-w-[300px] z-50">
                <div className="grid gap-1 p-2">
                  {section.items.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black rounded-md transition-colors"
                      onClick={handleMouseLeave}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;

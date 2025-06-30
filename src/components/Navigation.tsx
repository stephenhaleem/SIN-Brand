
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      title: "EXPLORE",
      items: [
        { title: "Brand Story", href: "#brand" },
        { title: "Collections", href: "#collections" },
        { title: "Lookbook", href: "#lookbook" },
        { title: "Behind the Scenes", href: "#behind" }
      ]
    },
    {
      title: "STREETWEAR",
      items: [
        { title: "T-Shirts", href: "#tshirts" },
        { title: "Hoodies", href: "#hoodies" },
        { title: "Jackets", href: "#jackets" },
        { title: "Accessories", href: "#accessories" }
      ]
    },
    {
      title: "COLLECTIONS",
      items: [
        { title: "Latest Drop", href: "#latest" },
        { title: "Limited Edition", href: "#limited" },
        { title: "Classic Series", href: "#classic" },
        { title: "Collaborations", href: "#collabs" }
      ]
    },
    {
      title: "COMMUNITY",
      items: [
        { title: "Events", href: "#events" },
        { title: "Artists", href: "#artists" },
        { title: "Gallery", href: "#gallery" },
        { title: "Street Style", href: "#street-style" }
      ]
    },
    {
      title: "HOW TO STYLE",
      items: [
        { title: "Style Guide", href: "#style-guide" },
        { title: "Mix & Match", href: "#mix-match" },
        { title: "Seasonal Looks", href: "#seasonal" },
        { title: "Care Instructions", href: "#care" }
      ]
    }
  ];

  return (
    <nav className="hidden lg:flex">
      <NavigationMenu>
        <NavigationMenuList className="space-x-1">
          {navigationItems.map((section) => (
            <NavigationMenuItem key={section.title}>
              <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 data-[state=open]:bg-gray-100 text-black font-medium tracking-wider text-sm px-4 py-2 rounded-md transition-colors">
                {section.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md p-0 min-w-[300px]">
                <div className="grid gap-1 p-2">
                  {section.items.map((item) => (
                    <NavigationMenuLink
                      key={item.title}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black rounded-md transition-colors"
                    >
                      {item.title}
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navigation;

// src/data/products.ts
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Revenge TankTop",
    price: 29999.99,
    images: ["/images/DSCF3643.jpg"], // Default/fallback
    colorVariants: [
      {
        color: "Pink",
        images: ["/images/DSCF3448.jpg", "/images/DSCF3465.jpg"],
      },

      {
        color: "Gray",
        images: ["/images/DSCF3553.jpg", "/images/DSCF3653-2.jpg"],
      },
      {
        color: "DarkBlue",
        images: [
          "/images/DSCF3617-2.jpg",
          "/images/DSCF3606-2.jpg",
          "/images/DSCF3599-2.jpg",
        ],
      },
    ],
    colors: ["Pink", "Gray", "DarkBlue"],
    sizes: ["S", "M", "L", "XL"],
    description: "Premium tanktop with revenge graphic",
  },
  {
    id: "2",
    name: "Revenge Hoodie",
    price: 49999.99,
    images: ["/images/DSCF3557-Recovered.jpg"],
    colorVariants: [
      {
        color: "Pink",
        images: ["/images/DSCF3557-Recovered.jpg"],
      },
      {
        color: "Gray",
        images: ["/images/DSCF3486.jpg", "/images/DSCF3517.jpg"],
      },
    ],
    colors: ["Pink", "Gray"],
    sizes: ["One Size"],
    description: "Classic skull cap with embroidered logo",
  },
  {
    id: "3",
    name: "Revenge Joggers",
    price: 49999.99,
    images: ["/images/tee3.jpg"],
    colorVariants: [
      {
        color: "Black",
        images: ["/images/tee3.jpg"],
      },
      {
        color: "White",
        images: ["/images/tee3-white.jpg"],
      },
    ],
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Bold skull graphic tee with grunge aesthetics",
  },
  {
    id: "4",
    name: "Revenge Skullcap",
    price: 19999.99,
    images: ["/images/tee4.jpg"],
    colorVariants: [
      {
        color: "Black",
        images: ["/images/tee4.jpg"],
      },
      {
        color: "White",
        images: ["/images/tee4-white.jpg"],
      },
    ],
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    description: "Statement rock tee with edgy design",
  },
  {
    id: "5",
    name: "County Hoodie",
    price: 45000,
    images: ["/images/full1.jpg"],
    colorVariants: [
      {
        color: "Black",
        images: ["/images/full1.jpg"],
      },
      {
        color: "Gray",
        images: ["/images/full1-gray.jpg"],
      },
    ],
    colors: ["Black", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Premium hoodie with county branding",
  },
  {
    id: "6",
    name: "Grunge Jacket",
    price: 65000,
    images: ["/images/ff.jpg"],
    colorVariants: [
      {
        color: "Black",
        images: ["/images/ff.jpg"],
      },
      {
        color: "Charcoal",
        images: ["/images/ff-charcoal.jpg"],
      },
    ],
    colors: ["Black", "Charcoal"],
    sizes: ["S", "M", "L", "XL"],
    description: "Distressed jacket with authentic grunge appeal",
  },
  {
    id: "7",
    name: "Grunge Jacket",
    price: 65000,
    images: ["/images/ff.jpg"],
    colorVariants: [
      {
        color: "Black",
        images: ["/images/ff.jpg"],
      },
      {
        color: "Charcoal",
        images: ["/images/ff-charcoal.jpg"],
      },
    ],
    colors: ["Black", "Charcoal"],
    sizes: ["S", "M", "L", "XL"],
    description: "Distressed jacket with authentic grunge appeal",
  },
];

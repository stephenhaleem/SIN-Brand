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
    description: "Cozy hoodie with embroidered logo",
  },
  {
    id: "3",
    name: "Revenge Joggers",
    price: 49999.99,
    images: ["/images/tee3.jpg"],
    colorVariants: [
      {
        color: "Black",
        images: ["/images/black jog.jpg", "/images/black jog2.jpg"],
      },
      {
        color: "Gray",
        images: ["/images/grey jogs.jpg"],
      },
    ],
    colors: ["Black", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Comfort-fit joggers with embroidered logo",
  },
  {
    id: "4",
    name: "Revenge Skullcap",
    price: 19999.99,
    images: ["/images/tee4.jpg"],
    colorVariants: [
      {
        color: "Gray",
        images: ["/images/skull.jpg", "images/skull1.jpg"],
      },
      {
        color: "White",
        images: ["/images/tee4-white.jpg"],
      },
    ],
    colors: ["Gray", "White"],
    sizes: ["One Size"],
    description: "Classic skullcap with embroidered logo",
  },
  {
    id: "5",
    name: "2 piece Hoodie and Jogger Set",
    price: 45000,
    images: ["/images/full1.jpg"],
    colorVariants: [
      {
        color: "Gray",
        images: ["/images/2 grey.jpg"],
      },
      {
        color: "Pinkk",
        images: ["/images/full1.jpg"],
      },
    ],
    colors: ["Gray", "Pink"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Matching hoodie and jogger set with embroidered logo",
  },
];

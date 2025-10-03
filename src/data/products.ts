// src/data/products.ts
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Revenge TankTop",
    price: 37000,
    images: ["/images/DSCF3643.jpg"], // Default/fallback
    colorVariants: [
      {
        color: "Gray",
        images: ["images/DSCF3617-2.jpg", "/images/DSCF3599-2.jpg"],
      },
      {
        color: "White",
        images: ["/images/tee1-white.jpg", "/images/tee1-white-2.jpg"],
      },
      {
        color: "Pink",
        images: ["/images/tee1-white.jpg", "/images/tee1-white-2.jpg"],
      },
    ],
    colors: ["Gray", "White"],
    sizes: ["S", "M", "L", "XL"],
    description: "Premium streetwear shorts with skull graphic",
  },
  {
    id: "2",
    name: "Skull Cap",
    price: 12000,
    images: ["/images/tee2.jpg"],
    colorVariants: [
      {
        color: "Black",
        images: ["/images/tee2.jpg"],
      },
      {
        color: "White",
        images: ["/images/tee2-white.jpg"],
      },
    ],
    colors: ["Black", "White"],
    sizes: ["One Size"],
    description: "Classic skull cap with embroidered logo",
  },
  {
    id: "3",
    name: "Skull Tee (Black)",
    price: 29000,
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
    name: "Rock Tee (Black)",
    price: 25000,
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

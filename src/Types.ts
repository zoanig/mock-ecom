export type Themes = "bg-bgdark" | "bg-bglight";
export interface IThemeContext {
  theme: Themes;
  toggleTheme: () => void;
}
export interface NavProps{
  navigation: { name: string; href: string }[]
}
export interface AnimatedButtonProps{
  transparent: Boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value: String;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export type  ProductInfoParams = {
  productId: string
}

export type ProductParams = {
  product: Product
}
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProductGrid } from "./components/ProductGrid";

export function App() {
  return `
  
    ${Navbar()}
    ${Hero()}
    ${ProductGrid()}
  
  `;
}
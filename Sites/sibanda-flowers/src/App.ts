import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProductGrid } from "./components/ProductGrid";
import { CustomArrangement } from "./components/CustomArrangement";

export function App() {
  return `
  
    ${Navbar()}
    ${Hero()}
    ${ProductGrid()}
    ${CustomArrangement()}
  
  `;
}


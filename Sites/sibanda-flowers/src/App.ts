import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProductGrid } from "./components/ProductGrid";
import { CustomArrangement } from "./components/CustomArrangement";
import { Footer } from "./components/Footer";
import { Services } from "./components/Services";

export function App() {
  return `git
  
    ${Navbar()}
    ${Hero()}
    ${ProductGrid()}
    ${CustomArrangement()}
    ${Services()}
    ${Footer()}
  
  `;
}
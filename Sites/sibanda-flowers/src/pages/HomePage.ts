import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { ProductGrid } from "../components/ProductGrid";
import { CustomArrangement } from "../components/CustomArrangement";
import { Services } from "../components/Services";
import { Footer } from "../components/Footer";

export function HomePage() {
  return `
  
    ${Navbar("home")}

    ${Hero()}
    ${ProductGrid()}
    ${CustomArrangement()}
    ${Services()}

    ${Footer()}

  `;
}
import { ServicesHero } from "../components/ServicesHero";
import { Footer } from "../components/Footer";

export function ServicesPage() {
  return `
  
    ${ServicesHero()}
    ${Footer()}

  `;
}
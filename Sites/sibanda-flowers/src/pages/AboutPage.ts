import { PageHero } from "../components/PageHero";
import { Footer } from "../components/Footer";

export function AboutPage() {
  return `
  
    ${PageHero("About")}

    ${Footer()}

  `;
}